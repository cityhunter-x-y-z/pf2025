
import { useEffect } from 'react';

/**
 * BackgroundLoader
 * 
 * Automatically discovers and sequentially prefetches project images in the background
 * during idle time. This ensures that when a user navigates to a project page, 
 * the assets are likely already in the browser cache (disk/memory), resulting in 
 * instant rendering.
 * 
 * Features:
 * - Auto-discovery: Uses Vite's import.meta.glob to find all project images.
 * - Sequential Loading: Loads one by one to avoid network congestion.
 * - Smart Scheduling: Uses requestIdleCallback to run only when main thread is free.
 * - Data Saver: Respects 'save-data' mode and slow connections (2g).
 */
const BackgroundLoader = () => {
  useEffect(() => {
    // 1. Network Check - Skip on restricted connections
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection && (connection.saveData || connection.effectiveType === '2g')) {
      // console.log('BackgroundLoader: Skipping due to data saver or slow connection');
      return;
    }

    // 2. Asset Discovery using Vite
    // eager: true returns the resolved URL string directly
    const modules = import.meta.glob('../assets/images/projects/**/*.{webp,png,jpg,jpeg}', { 
      eager: true, 
      query: '?url',
      import: 'default'
    });
    
    // Convert to array of URLs
    const allImages = Object.values(modules);

    // Simple prioritization (Heroes first roughly based on naming conventions if needed, 
    // but sequential is already a big win. We can refine if needed.)
    // For now, we just load them all in the order file system returns them.

    // 3. Queue Processor
    const loadQueue = async () => {
      // Initial delay to allow main page LCP and interactivity to settle
      await new Promise(r => setTimeout(r, 3000));

      // console.log(`BackgroundLoader: Starting prefetch queue for ${allImages.length} images`);

      for (const src of allImages) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Resolve even on error to keep queue moving
          });
        } catch (e) {
          // Ignore errors
        }
        
        // Tiny breathing room between requests to keep UI responsive
        await new Promise(r => setTimeout(r, 50));
      }
      // console.log('BackgroundLoader: Queue complete');
    };

    // 4. Schedule execution
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => loadQueue(), { timeout: 5000 });
    } else {
      // Fallback for Safari/older browsers
      setTimeout(loadQueue, 3000);
    }

  }, []); // Run once on mount

  return null;
};

export default BackgroundLoader;
