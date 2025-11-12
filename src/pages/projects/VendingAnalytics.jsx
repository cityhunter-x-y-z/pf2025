import { motion } from 'framer-motion';
import ProjectNav from '../../components/ProjectNav';

// Hero images
const imgDesktopView = "https://www.figma.com/api/mcp/asset/d809e480-02a4-445e-8da1-4711059eee6c";
const imgMobileScreen1 = "https://www.figma.com/api/mcp/asset/b30b84b1-3638-4d26-bf71-939d1497dcc1";
const imgMobileScreen2 = "https://www.figma.com/api/mcp/asset/39191860-c08c-43a9-b2bd-2de96e248f37";

// NDA and Logo images
const imgKelloggIcon = "https://www.figma.com/api/mcp/asset/21138bfe-65c2-4842-9f07-ef6ca90a28ea";
const imgLockKey = "https://www.figma.com/api/mcp/asset/948647f0-ca59-4e05-903f-5b16264737cb";

const VendingAnalytics = () => {
  return (
    <>
      <ProjectNav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 pb-16 px-8 relative"
      >
        <div className="max-w-[1135px] mx-auto">
          {/* Content Container - max-width 760px centered */}
          <div className="max-w-[760px] mx-auto flex flex-col gap-[72px]">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-16 w-full items-center"
            >
              {/* Title */}
              <h1 className="font-['Roboto_Slab'] text-5xl leading-normal text-black text-center w-[688px]" style={{ letterSpacing: '-2.4px' }}>
                Kellogg's Retail Analytics Dashboard: Mobile Optimization
              </h1>

              {/* Component Showcase Container */}
              <div className="relative w-full">
                {/* Shadow */}
                <div className="absolute left-[38px] top-[247px] w-[691px] h-[151px] bg-white opacity-30 shadow-[0px_0px_250px_22px_rgba(0,0,0,0.25)]" />

                {/* Main Container */}
                <div className="relative border-8 border-[rgba(0,0,0,0.04)] rounded-xl h-[447px] w-full overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(255, 138, 183, 0.05) 0%, rgba(255, 138, 183, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
                  {/* Desktop View */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[679px] h-[350px]">
                    <img src={imgDesktopView} alt="Kellogg's analytics dashboard desktop view" className="w-full h-full object-cover" />
                  </div>

                  {/* Bottom Footer - Reading Time Carousel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#FFF6FB] py-1 overflow-hidden">
                    <div className="flex gap-3 items-center whitespace-nowrap animate-marquee">
                      {/* First set */}
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">4 mins read</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">1 min Skimming</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">4 mins read</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">1 min Skimming</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">4 mins read</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">1 min Skimming</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      {/* Duplicate set for seamless loop */}
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">4 mins read</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">1 min Skimming</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">4 mins read</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">1 min Skimming</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">4 mins read</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                      <span className="font-['Roboto_Mono'] text-sm text-black tracking-[-0.7px]">1 min Skimming</span>
                      <span className="font-['Roboto_Slab'] text-sm text-black">•</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Description and Mobile Screens */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-16 w-full"
            >
              {/* Header Description */}
              <div className="flex flex-col gap-6 w-full">
                <h2 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Converting dense desktop analytics into mobile screens while maintaining data integrity and usability for sales representatives who need quick access to critical performance metrics in the field.
                </h2>
                <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                  Impact: Enabled Kellogg's sales teams to monitor retail partner performance, identify replenishment opportunities, and make data-driven decisions directly from mobile devices during store visits and client meetings.
                </p>
              </div>

              {/* Mobile Screens */}
              <div className="flex items-start justify-between w-full">
                <div className="w-[360px] h-[1281px]">
                  <img src={imgMobileScreen1} alt="Mobile analytics screen showing projected inventory and dispersion" className="w-full h-full object-cover" />
                </div>
                <div className="w-[360px] h-[1307px]">
                  <img src={imgMobileScreen2} alt="Mobile retail execution screen showing sales targets and achievements" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Bottom Gradient Overlay with NDA Badge */}
        <div className="absolute bottom-0 left-0 right-0 h-[253px] bg-gradient-to-t from-[#290c1d] to-transparent overflow-hidden pointer-events-none">
          {/* NDA Agreement Badge */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="bg-[#320732] border border-[#959595] rounded-[99px] px-6 py-[23px] flex gap-6 items-center">
              <div className="w-[48px] h-[44.5px]">
                <img src={imgLockKey} alt="Lock icon" className="w-full h-full object-cover" />
              </div>
              <p className="font-['Roboto_Slab'] font-medium text-2xl text-white" style={{ letterSpacing: '-0.48px' }}>
                NDA agreement
              </p>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default VendingAnalytics;
