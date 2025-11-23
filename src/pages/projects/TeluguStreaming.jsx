import { motion } from 'framer-motion';
import ProjectNav from '../../components/ProjectNav';
import BlurImage from '../../components/BlurImage';

// Hero images
const imgHomeScreen = "https://www.figma.com/api/mcp/asset/2a7c5a69-ee73-411f-b644-1a16c32e72ca";
const imgMobileView = "https://www.figma.com/api/mcp/asset/2d1b7438-33b3-4baf-b46c-07dbacd79fbe";

// Style Guide and Features images
const imgStyleGuide = "https://www.figma.com/api/mcp/asset/6b21599d-6bc5-445c-85de-766f5e62b0f4";
const imgSubscriptionFlow1 = "https://www.figma.com/api/mcp/asset/6f8aa55c-cca9-4c7b-88d1-53cd5e0738b0";
const imgSubscriptionFlow2 = "https://www.figma.com/api/mcp/asset/261fcda9-8d5e-4701-b053-44950b66bba9";
const imgMobileHome = "https://www.figma.com/api/mcp/asset/2da465fa-5780-47f3-8ca7-4fe00f6ee4fa";
const imgSubscriptionWorkflow = "https://www.figma.com/api/mcp/asset/8992cc7b-38cb-4564-b8c6-f06b421c217b";
const imgLanguageOnboarding = "https://www.figma.com/api/mcp/asset/ff1c777d-c4e4-42f8-9137-781af1b08615";
const imgContentRepresentation = "https://www.figma.com/api/mcp/asset/ba37f3e9-22d6-4a2b-bc56-b68d97f2d35c";
const imgSkipSong = "https://www.figma.com/api/mcp/asset/2cddf05e-2492-43cd-9609-351f6acdef3d";
const imgQuality = "https://www.figma.com/api/mcp/asset/e4e461ff-7e83-4c3c-bdef-fc3c52937124";

// NDA Badge
const imgLockKey = "https://www.figma.com/api/mcp/asset/93405f41-22be-486d-985f-d009271a2553";

const TeluguStreaming = () => {
  return (
    <>
      <ProjectNav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-8 relative"
      >
        <div className="max-w-[1135px] mx-auto">
          {/* Content Container - max-width 760px centered */}
          <div className="max-w-[760px] mx-auto flex flex-col gap-8 sm:gap-[72px]">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12 sm:gap-16 w-full items-center"
            >
              {/* Title */}
              <h1 className="font-['Roboto_Slab'] text-2xl sm:text-5xl leading-normal text-black text-center w-full" style={{ letterSpacing: '-1.2px' }}>
                Designing seamless subscription flows and multilingual experiences for India's leading Telugu streaming platform
              </h1>

              {/* Component Showcase Container */}
              <div className="relative w-full">
                {/* Shadow - hidden on mobile */}
                <div className="hidden sm:block absolute left-[19px] top-[247px] w-[660px] h-[151px] bg-white opacity-30 shadow-[0px_0px_250px_22px_rgba(0,0,0,0.25)]" />

                {/* Main Container */}
                <div className="relative border-4 sm:border-8 border-[rgba(0,0,0,0.04)] rounded-xl h-[194px] sm:h-[447px] w-full overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(255, 202, 138, 0.25) 0%, rgba(255, 202, 138, 0.25) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
                  {/* Home Screen */}
                  <BlurImage
                    src={imgHomeScreen}
                    alt="Aha Telugu streaming platform home screen"
                    className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[119px] top-[-20px] sm:top-[-48px] w-[306px] sm:w-[706px] h-[203px] sm:h-[469px]"
                    priority
                  />

                  {/* Mobile View */}
                  <BlurImage
                    src={imgMobileView}
                    alt="Mobile view of streaming platform"
                    className="absolute left-[16px] sm:left-[66px] top-[49px] sm:top-[113px] w-[95px] sm:w-[220px] h-[153px] sm:h-[354px] rounded-[8px] shadow-[0px_0px_8px_0px_rgba(255,255,255,0.75)]"
                    priority
                  />

                  {/* Bottom Footer - Reading Time Carousel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#FFECD3] py-1 overflow-hidden">
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

            {/* Style Guide Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 sm:gap-6 w-full"
            >
              <h2 className="font-['Space_Mono'] font-bold text-lg sm:text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-0.18px' }}>
                Style Guide
              </h2>
              <BlurImage
                src={imgStyleGuide}
                alt="Aha Telugu streaming platform style guide showing colors, typography, and components"
                className="w-full aspect-[2949/1951]"
              />
            </motion.section>

            {/* Subscription Plan Selection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-8 sm:gap-8 w-full"
            >
              {/* Header */}
              <div className="flex flex-col gap-3 sm:gap-3 w-full">
                <h2 className="font-['Space_Mono'] font-bold text-lg sm:text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-0.18px' }}>
                  Subscription Plan Selection
                </h2>
                <p className="font-trispace text-sm sm:text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-0.28px' }}>
                  "Multi-tiered Pricing Strategy Interface" Designed a comprehensive plan selection flow featuring annual, quarterly, and combo subscription options with clear value propositions, pricing transparency, and mobile number verification integration to reduce subscription friction.
                </p>
              </div>

              {/* Subscription Flows */}
              <div className="flex flex-col gap-8 sm:gap-8 w-full">
                <BlurImage
                  src={imgSubscriptionFlow1}
                  alt="Subscription plan selection interface showing pricing tiers"
                  className="w-full aspect-[2955/1229]"
                />
                <BlurImage
                  src={imgSubscriptionFlow2}
                  alt="Subscription verification and payment flow"
                  className="w-full aspect-[2955/1229]"
                />
              </div>
            </motion.section>

            {/* Mobile Responsive Subscription Workflow */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-[43px] sm:gap-[43px] w-full"
            >
              {/* Header */}
              <div className="flex flex-col gap-3 sm:gap-3 w-full">
                <h2 className="font-['Space_Mono'] font-bold text-lg sm:text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-0.18px' }}>
                  Mobile Responsive subscription workflow
                </h2>
                <p className="font-trispace text-sm sm:text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-0.28px' }}>
                  The subscription flow emphasizes transparency and choice, with clear pricing structures and limited-time offer highlighting. The verification system reduces drop-off through streamlined OTP processes and multiple contact options. Payment integration supports both traditional and modern payment methods, including UPI, digital wallets, and QR codes.
                </p>
              </div>

              {/* Mobile Workflow Images */}
              <div className="flex flex-col gap-[41px] sm:flex-row sm:gap-10 items-center w-full">
                <BlurImage
                  src={imgMobileHome}
                  alt="Mobile home screen"
                  className="w-full sm:w-[295px] aspect-[684/1098] sm:aspect-auto sm:h-[474px] shrink-0"
                />
                <BlurImage
                  src={imgSubscriptionWorkflow}
                  alt="Mobile subscription workflow screens"
                  className="w-full sm:flex-1 aspect-[1722/1920]"
                />
              </div>
            </motion.section>

            {/* Language Preference Setup */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-8 sm:gap-[35px] w-full"
            >
              {/* Header */}
              <div className="flex flex-col gap-6 sm:gap-6 w-full">
                <h2 className="font-['Space_Mono'] font-bold text-lg sm:text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-0.18px' }}>
                  Language Preference Setup
                </h2>
                <p className="font-trispace text-sm sm:text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-0.28px' }}>
                  "Regional Content Accessibility" Created an intuitive language selection flow supporting Telugu, Tamil, Malayalam, and English with dual-language content display options, ensuring regional content discoverability while maintaining cross-linguistic accessibility.
                </p>
              </div>

              {/* Language Features */}
              <div className="flex flex-col gap-8 sm:gap-[76px] items-end w-full">
                <BlurImage
                  src={imgLanguageOnboarding}
                  alt="Language preference onboarding screen"
                  className="w-full aspect-[962/542]"
                />
                <BlurImage
                  src={imgContentRepresentation}
                  alt="Content representation with 4K and Dolby quality indicators"
                  className="w-full aspect-[960/540]"
                />
                <BlurImage
                  src={imgSkipSong}
                  alt="Video player with skip song functionality"
                  className="w-full aspect-[2886/1624]"
                />
                <BlurImage
                  src={imgQuality}
                  alt="Video player quality settings"
                  className="w-full aspect-[962/542]"
                />
              </div>
            </motion.section>
          </div>
        </div>

        {/* Bottom Gradient Overlay with NDA Badge */}
        <div className="absolute bottom-0 left-0 right-0 h-[75px] sm:h-[253px] bg-gradient-to-t from-[#29160c] to-transparent overflow-hidden pointer-events-none">
          {/* NDA Agreement Badge */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="bg-[#321807] border border-[#959595] rounded-[99px] px-3 py-2 sm:px-6 sm:py-[21px] flex items-center">
              <BlurImage
                src={imgLockKey}
                alt="Lock icon"
                className="w-[28px] h-[22px] sm:w-[48px] sm:h-[48px] shrink-0"
              />
              <p className="font-['Roboto_Slab'] font-medium text-xs sm:text-2xl text-white shrink-0" style={{ letterSpacing: '-0.24px' }}>
                NDA agreement
              </p>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default TeluguStreaming;
