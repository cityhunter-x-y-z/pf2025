import { motion } from 'framer-motion';
import { useState } from 'react';
import contextImage from '../../assets/images/projects/hours-of-service/context-image.png';

// Cover photo images from Figma
const imgCoverDashboard1 = "https://www.figma.com/api/mcp/asset/f9e25ce7-e572-4d73-a956-98e2f57d9d0a";
const imgCoverDashboard2 = "https://www.figma.com/api/mcp/asset/538ffbda-5742-427c-be3f-d2ce39cfe1fa";
const imgCoverDashboard3 = "https://www.figma.com/api/mcp/asset/052ef636-88a0-4368-ac60-be0077e2055e";
import businessCaseIcon from '../../assets/images/projects/hours-of-service/business-case-icon.png';
import thirdPartyApp1 from '../../assets/images/projects/hours-of-service/third-party-app-1.png';
import thirdPartyApp2 from '../../assets/images/projects/hours-of-service/third-party-app-2.png';
import legacyIcon from '../../assets/images/projects/hours-of-service/legacy-icon.png';
import homescreen1 from '../../assets/images/projects/hours-of-service/homescreen-1.png';
import dashboard7101 from '../../assets/images/projects/hours-of-service/dashboard-7101.png';
import thirdGen1 from '../../assets/images/projects/hours-of-service/3rd-gen-1.png';
import driverBehaviorIcon from '../../assets/images/projects/hours-of-service/driver-behavior-icon.png';
import driverBehaviorWorkflow from '../../assets/images/projects/hours-of-service/driver-behavior-workflow.png';
import vehicleSelectionPhone from '../../assets/images/projects/hours-of-service/vehicle-selection-phone.png';
import vehicleSelectionItems from '../../assets/images/projects/hours-of-service/vehicle-selection-items.png';
import vehicleInspectionPhone from '../../assets/images/projects/hours-of-service/vehicle-inspection-phone.png';
import vehicleInspectionItems from '../../assets/images/projects/hours-of-service/vehicle-inspection-items.png';
import problemStatementIcon from '../../assets/images/projects/hours-of-service/problem-statement-icon.png';
import problemStatementMain from '../../assets/images/projects/hours-of-service/problem-statement-main.png';
import geotab1 from '../../assets/images/projects/hours-of-service/geotab-1.png';
import geotab2 from '../../assets/images/projects/hours-of-service/geotab-2.png';
import samsara1 from '../../assets/images/projects/hours-of-service/samsara-1.png';
import samsara2 from '../../assets/images/projects/hours-of-service/samsara-2.png';
import samsara3 from '../../assets/images/projects/hours-of-service/samsara-3.png';
import lytx1 from '../../assets/images/projects/hours-of-service/lytx-1.png';
import discoveryIcon from '../../assets/images/projects/hours-of-service/discovery-icon.png';
import devicesIcon from '../../assets/images/projects/hours-of-service/devices-icon.png';
import inCabMonitor from '../../assets/images/projects/hours-of-service/in-cab-monitor.png';
import tablet from '../../assets/images/projects/hours-of-service/tablet.png';
import mobilePhone from '../../assets/images/projects/hours-of-service/mobile-phone.png';
import cabinEstablishmentIcon from '../../assets/images/projects/hours-of-service/cabin-establishment-icon.png';
import cabinEstablishment1 from '../../assets/images/projects/hours-of-service/cabin-establishment-1.png';
import cabinEstablishment2 from '../../assets/images/projects/hours-of-service/cabin-establishment-2.png';
import driverPersonasIcon from '../../assets/images/projects/hours-of-service/driver-personas-icon.png';
import personaGajeel from '../../assets/images/projects/hours-of-service/persona-gajeel.png';
import personaLaxus from '../../assets/images/projects/hours-of-service/persona-laxus.png';
import workflowsIcon from '../../assets/images/projects/hours-of-service/workflows-icon.png';
import ProjectNav from '../../components/ProjectNav';

// Arc images from Figma (temporary URLs - valid for 7 days)
const imgF11 = "https://www.figma.com/api/mcp/asset/43a29faa-f0e8-4829-8b84-10bd82f16a5c";
const imgF2 = "https://www.figma.com/api/mcp/asset/f8f5ff8b-51c2-43e1-940b-498f7a281e65";
const imgF32 = "https://www.figma.com/api/mcp/asset/715f4c4e-f324-45d9-ae50-3fb544e5f695";
const imgF6 = "https://www.figma.com/api/mcp/asset/c04ac3cd-3626-4eb9-810f-68b91e43fd68";
const imgF10 = "https://www.figma.com/api/mcp/asset/7c00a948-099a-421e-b875-26b8de0faca1";
const imgDasboard7103 = "https://www.figma.com/api/mcp/asset/92a77f9d-8505-464c-bf38-6675a6c0322b";
const imgScreenRecording20250929At21516Am1 = "https://www.figma.com/api/mcp/asset/307ee3d2-560c-4b6e-8b7b-50f215a5287b";
const imgF52 = "https://www.figma.com/api/mcp/asset/f74e14a7-9b11-46c6-948c-e90efb1bc34e";
const imgImage44 = "https://www.figma.com/api/mcp/asset/826fef48-d14d-4595-b8bb-b479c1189952";
const imgF7 = "https://www.figma.com/api/mcp/asset/8511987a-92a7-4c4c-96c2-84b21e8ad8ed";
const imgDasboard7104 = "https://www.figma.com/api/mcp/asset/37a08385-e42a-4731-bd4c-e0abb614b9f1";
const imgScreenRecording20250929At21858Am1 = "https://www.figma.com/api/mcp/asset/11bcbea6-1890-4dcd-adbf-a5eac7ced881";
const imgF9 = "https://www.figma.com/api/mcp/asset/11370c2b-5991-4c35-9037-dd161362552a";
const imgF12 = "https://www.figma.com/api/mcp/asset/c1aaa69c-ac3c-4035-93d0-5f28269a4203";
const imgF15 = "https://www.figma.com/api/mcp/asset/705d8869-4b7c-43a8-976c-b476dffdd902";
const imgDasboard7105 = "https://www.figma.com/api/mcp/asset/ad090632-4a9e-4a22-ac46-2e07bc9dc6f5";
const imgScreenRecording20250929At23954Am1 = "https://www.figma.com/api/mcp/asset/47471735-c229-4f7f-a6cb-3a2b22df11b0";
const imgEdits1 = "https://www.figma.com/api/mcp/asset/29634a8c-7c8d-40b7-96df-35d06ddd2f16";
const imgScreenRecording20250929At30629Am1 = "https://www.figma.com/api/mcp/asset/b1323abe-a0d3-4689-a4df-e4bc8c2abbf8";
const imgF13 = "https://www.figma.com/api/mcp/asset/d6f8c8f5-6a3d-479a-b1cf-8c29b492f19a";
const imgF14 = "https://www.figma.com/api/mcp/asset/1141a1f8-0f1d-4816-87c2-5442ed369cd9";
const imgF16 = "https://www.figma.com/api/mcp/asset/3c3d0271-9725-41a0-8843-b8720180263e";
const imgScreenRecording20250929At31513Am1 = "https://www.figma.com/api/mcp/asset/cd367239-c180-46af-a217-a3db1b1c6871";
const imgDataTransfer1 = "https://www.figma.com/api/mcp/asset/2537b157-5714-4bdc-94ac-c7fdb2260c6c";
const imgEld11 = "https://www.figma.com/api/mcp/asset/c3d43579-5725-40f3-8bc5-85f00dc9a840";

const HoursOfService = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [isLegacyAccordionOpen, setIsLegacyAccordionOpen] = useState(true);
  const [isDriverBehaviorAccordionOpen, setIsDriverBehaviorAccordionOpen] = useState(true);
  const [isProblemStatementAccordionOpen, setIsProblemStatementAccordionOpen] = useState(true);
  const [isDiscoveryAccordionOpen, setIsDiscoveryAccordionOpen] = useState(true);

  return (
    <>
      <ProjectNav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 pb-16 px-8"
      >
      <div className="max-w-[1135px] mx-auto">
        {/* Main Block */}
        <div className="max-w-[760px] mx-auto flex flex-col gap-[72px]">
          {/* Main Title */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <h1 className="font-roboto text-5xl leading-[1.32em] text-ui-gray text-center w-full" style={{ letterSpacing: '-5%' }}>
              ELD Hours-of-Service  flows for drivers + manager web portal , improve compliance and visibility.
            </h1>
          </motion.section>

          {/* Cover Photo */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <div className="relative w-full">
              {/* Shadow */}
              <div className="absolute left-[38px] top-[247px] w-[660px] h-[151px] bg-white opacity-30 shadow-[0px_0px_250px_22px_rgba(0,0,0,0.25)]" />

              {/* Main Container */}
              <div className="relative border-8 border-[rgba(0,0,0,0.04)] rounded-xl h-[447px] w-full overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(161, 155, 127, 0.25) 0%, rgba(161, 155, 127, 0.25) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
                {/* Dashboard Container */}
                <div className="absolute left-[105px] top-0 w-[532px] h-[296px]">
                  {/* Dashboard Left */}
                  <div className="absolute left-[calc(50%-147.17px)] top-[-95px] transform -translate-x-1/2 w-[236.662px] h-[482.934px]">
                    <img src={imgCoverDashboard1} alt="Hours of service dashboard" className="w-full h-full object-cover" />
                  </div>

                  {/* Dashboard Right */}
                  <div className="absolute left-[calc(50%+147.83px)] top-[-95px] transform -translate-x-1/2 w-[236.662px] h-[482.934px]">
                    <img src={imgCoverDashboard2} alt="Hours of service dashboard" className="w-full h-full object-cover" />
                  </div>

                  {/* Dashboard Center */}
                  <div className="absolute left-[calc(50%+29.33px)] top-[62px] transform -translate-x-1/2 w-[236.662px] h-[482.934px]">
                    <img src={imgCoverDashboard3} alt="Hours of service dashboard" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Bottom Footer - Reading Time Carousel */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#F9F6DA] py-1 overflow-hidden">
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

          {/* Context Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Context Header */}
            <div className="flex flex-col gap-3">
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                Context
              </h2>
              <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                I designed and launched an in-house Hours-of-Service (HOS) feature in the Driveri app, replacing a $6/device third-party solution. The project balanced FMCSA compliance, driver usability, and cost savings, while also giving fleet managers better visibility and control through a dedicated web portal.
              </p>
            </div>

            {/* Summary Card 1 */}
            <div className="bg-[#EBF0F5] rounded-lg p-6 w-full">
              <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                In-house ELD Hours-of-Service & Duty Status flows for drivers + manager web portal to meet FMCSA rules, reduce 3rd-party spend, and improve compliance and visibility.
              </p>
            </div>

            {/* Context Image */}
            <div className="w-full h-[507px] rounded-lg overflow-hidden">
              <img
                src={contextImage}
                alt="Hours of Service Context"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Summary Card 2 */}
            <div className="bg-[#EBF0F5] rounded-lg p-6 w-full">
              <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                "Replace external ELD vendor to save $6/year, reduce log edit friction for drivers, and reduce HOS violations by ~20–35% per year (conservative, fleet-average estimate) through clearer flows, enforcement and manager visibility."
              </p>
            </div>
          </motion.section>

          {/* Quantify Business Case Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-12 w-full"
          >
            {/* Accordion Header */}
            <div
              className="flex items-center gap-8 w-full cursor-pointer"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img src={businessCaseIcon} alt="Business Case" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray flex-1" style={{ letterSpacing: '-1%' }}>
                Quantify Business Case
              </h2>
              <div className="w-16 h-16 flex-shrink-0">
                {/* Caret Circle Down Icon */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <circle cx="32" cy="32" r="24" fill="#E2E9F6" stroke="#C3CEE2" strokeWidth="2"/>
                  <path d="M22 26L32 36L42 26" stroke="#232832" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Accordion Content */}
            <motion.div
              initial={false}
              animate={{
                height: isAccordionOpen ? 'auto' : 0,
                opacity: isAccordionOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-12">
                {/* Formula Text */}
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-text-quaternary w-full" style={{ letterSpacing: '-1%' }}>
                  collect # devices, monthly cost ($6/device), contract exit terms → compute monthly & annual savings.
                </p>

                {/* Calculation Example */}
                <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                  Monthly saved = number_of_devices X $6<br />
                  Annual saved = number_of_devices X $6 X 12<br />
                  Example: 1,000 devices → monthly $6,000 → annual $72,000
                </p>

                {/* Condition Header */}
                <h3 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray w-full" style={{ letterSpacing: '-1%' }}>
                  Condition of the Product and Feature when I started.
                </h3>

                {/* Condition Description */}
                <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                  Driving data was being shared with the external vendor.<br />
                  Vehicle and driver assignment in the native app was rudimentary.<br />
                  The system served a large scale: ~270,000 drivers.
                </p>

                {/* Third Party App Screenshots */}
                <div className="flex gap-3">
                  <div className="w-[255px] h-[229px] rounded-lg overflow-hidden">
                    <img src={thirdPartyApp1} alt="Third Party App 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-[284px] h-[213px] rounded-lg overflow-hidden">
                    <img src={thirdPartyApp2} alt="Third Party App 2" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Final Description */}
                <p className="font-trispace text-base leading-[1.34em] text-ui-gray w-full" style={{ letterSpacing: '-2%' }}>
                  The fleet was relying on a third-party ELD integration for compliance. This came at a cost of $6 per driver per device, and despite having a native driver app, drivers spent most of their time on the Geotab mobile app to manage their Hours of Service (HoS).
                  <br /><br />
                  The above shown is from the mentioned third party app, our app was not used by the Driver for this requirement.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Legacy Interface Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Accordion Header */}
            <div
              className="flex items-center gap-8 w-full cursor-pointer"
              onClick={() => setIsLegacyAccordionOpen(!isLegacyAccordionOpen)}
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                <img src={legacyIcon} alt="Legacy Interface" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray flex-1" style={{ letterSpacing: '-1%' }}>
                Legacy Interface
              </h2>
              <div className="w-16 h-16 flex-shrink-0">
                {/* Caret Circle Down Icon */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isLegacyAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <circle cx="32" cy="32" r="24" fill="#E2E9F6" stroke="#C3CEE2" strokeWidth="2"/>
                  <path d="M22 26L32 36L42 26" stroke="#232832" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Accordion Content */}
            <motion.div
              initial={false}
              animate={{
                height: isLegacyAccordionOpen ? 'auto' : 0,
                opacity: isLegacyAccordionOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-8">
                {/* Description */}
                <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                  The Driver Dashboard UI had largely remained unchanged since launch. New features had been added piecemeal over the years, but the overall experience felt outdated.
                </p>

                {/* Screenshots Row */}
                <div className="flex gap-6 w-full">
                  {/* Column 1 - HomeScreen 1 */}
                  <div className="flex flex-col justify-center gap-6 w-[163px]">
                    <div className="w-[163px] h-[332px] rounded-lg overflow-hidden">
                      <img src={homescreen1} alt="HomeScreen 1" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                      The main legacy Layout used for major years.
                    </p>
                  </div>

                  {/* Column 2 - Dashboard 7101 */}
                  <div className="flex flex-col justify-center gap-6 w-[163px]">
                    <div className="w-[163px] h-[332px] rounded-lg overflow-hidden">
                      <img src={dashboard7101} alt="Dashboard 7101" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                      Recent Update but not pushed to all tenants
                    </p>
                  </div>

                  {/* Column 3 - 3rd Gen */}
                  <div className="flex flex-col justify-center gap-6 flex-1">
                    <div className="w-[156.88px] h-[327px] rounded-xl overflow-hidden shadow-[0px_0px_0px_4px_rgba(159,159,159,0.25)]">
                      <img src={thirdGen1} alt="3rd Generation" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-trispace text-base leading-[1.34em] text-ui-gray w-[233px]" style={{ letterSpacing: '-2%' }}>
                      Proposed future update considering the DS refreshment and new feature integration
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Understanding Driver Behavior Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-8 w-full"
          >
            {/* Accordion Header */}
            <div
              className="flex items-center gap-8 w-full cursor-pointer"
              onClick={() => setIsDriverBehaviorAccordionOpen(!isDriverBehaviorAccordionOpen)}
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                <img src={driverBehaviorIcon} alt="Understanding Driver Behavior" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray flex-1" style={{ letterSpacing: '-1%' }}>
                Understanding Driver Behavior
              </h2>
              <div className="w-16 h-16 flex-shrink-0">
                {/* Caret Circle Down Icon */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isDriverBehaviorAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <circle cx="32" cy="32" r="24" fill="#E2E9F6" stroke="#C3CEE2" strokeWidth="2"/>
                  <path d="M22 26L32 36L42 26" stroke="#232832" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Accordion Content */}
            <motion.div
              initial={false}
              animate={{
                height: isDriverBehaviorAccordionOpen ? 'auto' : 0,
                opacity: isDriverBehaviorAccordionOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-16">
                {/* Description */}
                <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                  Drivers typically pick up a vehicle or trailer from the company yard, complete their service runs, and often take the truck home overnight. The next day, depending on the shipment, they may continue with the same vehicle or switch to a different one.
                </p>

                {/* Workflow Visual */}
                <div className="w-full flex justify-center">
                  <div className="w-[426px] h-[497px] rounded-lg overflow-hidden">
                    <img src={driverBehaviorWorkflow} alt="Driver Behavior Workflow" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Subsection 1: Drivers about to get in the vehicle */}
                <div className="flex flex-col gap-12 w-full">
                  {/* Header */}
                  <div className="flex flex-col gap-3">
                    <p className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Current User Journey (Before ELD integration)
                    </p>
                  </div>

                  {/* Subtitle */}
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                    Drivers about to get in the vehicle, they need to select the same in the app
                  </p>

                  {/* Phone and Items Images */}
                  <div className="flex justify-between items-center gap-[26px] w-full">
                    <div className="w-[290px] h-[609px] rounded-3xl overflow-hidden shadow-[0px_0px_0px_12px_rgba(159,159,159,0.25)]">
                      <img src={vehicleSelectionPhone} alt="Vehicle Selection Phone" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <img src={vehicleSelectionItems} alt="Vehicle Selection Items" className="w-full h-auto object-contain" />
                    </div>
                  </div>

                  {/* Corner Cases */}
                  <div className="flex flex-col gap-8">
                    <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                      Corner Cases
                    </h3>

                    {/* Case Cards - 2x2 Grid */}
                    <div className="flex flex-col gap-8">
                      {/* Row 1 */}
                      <div className="flex gap-6 w-full">
                        {/* Note 1: Remove Selection */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            Remove Selection
                          </h4>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            Allow the driver to clear current selections, enhancing user experience.
                          </p>
                        </div>

                        {/* Note 2: Vehicle Already Selected */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            Vehicle Already Selected
                          </h4>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            Prevents double selection by informing the driver.
                          </p>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="flex gap-6 w-full">
                        {/* Note 4: Shipping Document Limit */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            Shipping Document Limit
                          </h4>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            Enforce character limits for shipping documents
                          </p>
                        </div>

                        {/* Note 3: No Internet Connection */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            No Internet Connection
                          </h4>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            Implements a retry mechanism to ensure data sync.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subsection 2: Vehicle inspection by the Driver */}
                <div className="flex flex-col gap-8 w-full">
                  {/* Title */}
                  <h3 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    Vehicle inspection by the Driver
                  </h3>

                  {/* Description */}
                  <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                    If mandated by the manager profile, the Driver needs to do a vehicle inspection. Otherwise on clicking the "Create DVIR" button the Driver will be shown the screen to →The driver needs to accept that the vehicle is safe to drive if the defects are repaired.
                  </p>

                  {/* Cases Types */}
                  <div className="flex flex-col gap-8">
                    <h4 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                      Cases Types
                    </h4>

                    {/* Case Cards - 2x2 Grid */}
                    <div className="flex flex-col gap-8">
                      {/* Row 1 */}
                      <div className="flex gap-8 w-full">
                        {/* Note 1: No Defects */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h5 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            No Defects
                          </h5>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            We do not show anything if there are no defects.
                          </p>
                        </div>

                        {/* Note 2: Defects Not Repaired */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h5 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            Defects Not Repaired
                          </h5>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            If defects are present and the status is not repaired, the user shall not drive / call the support team.
                          </p>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="flex gap-8 w-full">
                        {/* Note 3: Defects Repaired */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h5 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            Defects Repaired
                          </h5>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            If defects are present but the status is safe to drive, the driver needs to approve and sign to start driving.
                          </p>
                        </div>

                        {/* Note 4: No Defects but Unsafe */}
                        <div className="flex-1 bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                          <h5 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                            No Defects but Unsafe
                          </h5>
                          <p className="font-trispace text-base leading-[1.34em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                            If defects are not there and the status is repaired and safe, the driver needs to approve and sign,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone and Items Images */}
                  <div className="flex justify-between items-center gap-[26px] w-full pt-8">
                    <div className="w-[290px] h-[602px] rounded-3xl overflow-hidden shadow-[0px_0px_0px_12px_rgba(159,159,159,0.25)]">
                      <img src={vehicleInspectionPhone} alt="Vehicle Inspection Phone" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <img src={vehicleInspectionItems} alt="Vehicle Inspection Items" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Defining the Problem Statement and Expectations Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-24 w-full pt-8"
          >
            {/* Accordion Header */}
            <div
              className="flex items-center gap-8 w-full cursor-pointer"
              onClick={() => setIsProblemStatementAccordionOpen(!isProblemStatementAccordionOpen)}
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                <img src={problemStatementIcon} alt="Problem Statement" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray flex-1" style={{ letterSpacing: '-1%' }}>
                Defining the Problem Statement and Expectations
              </h2>
              <div className="w-16 h-16 flex-shrink-0">
                {/* Caret Circle Down Icon */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isProblemStatementAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <circle cx="32" cy="32" r="24" fill="#E2E9F6" stroke="#C3CEE2" strokeWidth="2"/>
                  <path d="M22 26L32 36L42 26" stroke="#232832" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Accordion Content */}
            <motion.div
              initial={false}
              animate={{
                height: isProblemStatementAccordionOpen ? 'auto' : 0,
                opacity: isProblemStatementAccordionOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-16">
                {/* Main Description and Image */}
                <div className="flex flex-col gap-16">
                  <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                    Build a native ELD feature within the driver app, fully managed by the web dashboard for fleet managers, replacing the costly third-party system.
                    <br /><br />
                    The goals:
                    <br /><br />
                    Give drivers a dedicated ELD dashboard for HoS and logs.
                    <br /><br />
                    Preserve familiar patterns from the third-party app but improve usability.
                    <br /><br />
                    Ensure FMCSA compliance for duty cycles, inspections, and roadside checks.
                  </p>

                  {/* Main Image */}
                  <div className="w-full h-[473.5px] rounded-lg overflow-hidden">
                    <img src={problemStatementMain} alt="Problem Statement" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* North Star & Outcomes */}
                <div className="flex flex-col gap-16 py-8">
                  <h3 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    North Star & Outcomes
                  </h3>

                  <p className="font-trispace text-base leading-[1.34em] text-text-quaternary w-full" style={{ letterSpacing: '-2%' }}>
                    Seamless duty status management – easy to change, automated where possible.
                    <br /><br />
                    Prominent notifications – violations, log edits, and duty transitions surfaced clearly.
                    <br /><br />
                    Driver trust – transparent logs, editable mistakes, and smoother roadside inspections.
                  </p>

                  {/* Outcome Cards */}
                  <div className="flex flex-wrap gap-8 w-full">
                    <div className="flex-1 min-w-[200px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                        Duty Status
                      </h4>
                      <p className="font-['Roboto_Mono'] font-medium text-sm leading-[1.29em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                        Easily change duty status automatically.
                      </p>
                    </div>

                    <div className="flex-1 min-w-[200px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                        Notifications
                      </h4>
                      <p className="font-['Roboto_Mono'] font-medium text-sm leading-[1.29em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                        Violations and duty changes are clearly displayed
                      </p>
                    </div>

                    <div className="flex-1 min-w-[200px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                        Driver Trust
                      </h4>
                      <p className="font-['Roboto_Mono'] font-medium text-sm leading-[1.29em] text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                        Transparent logs and and easy mistake edits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Pain Points */}
                <div className="flex flex-col gap-16">
                  <h3 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    Key Pain Points
                  </h3>

                  {/* Pain Point Cards */}
                  <div className="flex flex-wrap gap-8 w-full">
                    <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                        Missed or incorrect duty status changes → led to unassigned logs.
                      </p>
                    </div>

                    <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                        Log certification was confusing and often skipped.
                      </p>
                    </div>

                    <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                        Drivers had to juggle two apps (native + third-party).
                      </p>
                    </div>

                    <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                        Managers lacked visibility into unassigned logs and edits.
                      </p>
                    </div>

                    <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                      <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                        Data transfer to govt. body was not smooth and stress rises when cops pull over on road.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Competitive Research and Benchmarking */}
                <div className="flex flex-col gap-16 py-8">
                  <h3 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    Competitive Research and Benchmarking
                  </h3>

                  <p className="font-['Roboto_Slab'] text-base leading-[1.32em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                    Jacob's Law : users expect familiar interaction patterns.
                  </p>

                  {/* Jacob's Law Note */}
                  <div className="bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <h4 className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Here is a catch about Jacob's law here
                    </h4>
                    <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                      We tried to improve the experience which might alter the general user expected behaviour, if we do not train and correct it, then in future some other product might do we might lose customers.
                    </p>
                  </div>

                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-2%' }}>
                    Reviewed other fleet management apps → noted limited competition, meaning switching costs for tenants are high.
                  </p>

                  {/* Geotab */}
                  <div className="flex flex-col gap-8">
                    <h4 className="font-trispace font-bold text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-0.5%' }}>
                      Geotab
                    </h4>
                    <div className="flex gap-6">
                      <div className="w-[195px] h-[153px] rounded-lg overflow-hidden">
                        <img src={geotab1} alt="Geotab 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-[272px] h-[153px] rounded-lg overflow-hidden">
                        <img src={geotab2} alt="Geotab 2" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Samsara */}
                  <div className="flex flex-col gap-8">
                    <h4 className="font-trispace font-bold text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-0.5%' }}>
                      Samsara
                    </h4>
                    <div className="flex gap-6">
                      <div className="w-[157px] h-[232px] rounded-lg overflow-hidden">
                        <img src={samsara1} alt="Samsara 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-[158px] h-[260px] rounded-lg overflow-hidden">
                        <img src={samsara2} alt="Samsara 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-[157px] h-[261px] rounded-lg overflow-hidden">
                        <img src={samsara3} alt="Samsara 3" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Lytx */}
                  <div className="flex flex-col gap-8">
                    <h4 className="font-trispace font-bold text-base leading-[1.34em] text-ui-gray" style={{ letterSpacing: '-0.5%' }}>
                      Lytx
                    </h4>
                    <div className="w-[217px] h-[154px] rounded-lg overflow-hidden">
                      <img src={lytx1} alt="Lytx 1" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Discovery Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col gap-8 w-full pt-8"
          >
            {/* Accordion Header */}
            <div
              className="flex items-center gap-8 w-full cursor-pointer"
              onClick={() => setIsDiscoveryAccordionOpen(!isDiscoveryAccordionOpen)}
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                <img src={discoveryIcon} alt="Discovery" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray flex-1" style={{ letterSpacing: '-1%' }}>
                Discovery
              </h2>
              <div className="w-16 h-16 flex-shrink-0">
                {/* Caret Circle Down Icon */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isDiscoveryAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <circle cx="32" cy="32" r="24" fill="#E2E9F6" stroke="#C3CEE2" strokeWidth="2"/>
                  <path d="M22 26L32 36L42 26" stroke="#232832" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Accordion Content */}
            <motion.div
              initial={false}
              animate={{
                height: isDiscoveryAccordionOpen ? 'auto' : 0,
                opacity: isDiscoveryAccordionOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-8">
                {/* Core Requirements */}
                <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                  Core Requirements
                </h3>

                {/* Core Requirements Cards */}
                <div className="w-[602px] flex flex-wrap gap-8">
                  <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Register working hours as logs, indexed by time.
                    </p>
                  </div>

                  <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Manage and certify logs.
                    </p>
                  </div>

                  <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Handle unassigned logs.
                    </p>
                  </div>

                  <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Record diagnostics and violations.
                    </p>
                  </div>

                  <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Enable roadside inspection view and log transfer.
                    </p>
                  </div>
                </div>

                {/* Affinity Mapping of features */}
                <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                  Affinity Mapping of features
                </h3>

                {/* Affinity Mapping Cards */}
                <div className="w-[602px] flex flex-wrap gap-8">
                  <div className="w-[250px] h-[180px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Logs:
                      <br />
                      duty status, timestamps, duration, location, comments.
                    </p>
                  </div>

                  <div className="w-[250px] h-[180px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Edits: prevent overlaps, allow recertification.
                    </p>
                  </div>

                  <div className="w-[533px] h-[300px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      30-minute break required after 8 hours driving.
                      <br />
                      Max 11 hours Driving per shift, 14 hours On Duty.
                      <br />
                      10 consecutive hours Off Duty required after a shift.
                      <br />
                      Weekly cycle: 70 hrs/6 days or 80 hrs/7 days.
                      <br />
                      Violations flagged automatically.
                    </p>
                  </div>

                  <div className="w-[250px] h-[150px] bg-[#EBF0F5] border border-ui-gray rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Manager log transfers → driver approval/rejection.
                    </p>
                  </div>

                  {/* Special card with gradient background and 50+ text overlay */}
                  <div className="w-[250px] h-[150px] relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#05100E] to-transparent rounded-2xl p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" style={{ backdropFilter: 'blur(4.3px)' }}>
                      <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                        Alerts for violations (hours, daily/weekly cycles).
                      </p>
                    </div>
                    <p className="absolute left-[30.5px] top-[12.5px] font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-white" style={{ letterSpacing: '-1%' }}>
                      50+
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Devices Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-16 w-full"
          >
            {/* Header */}
            <div className="flex items-center gap-8 w-full">
              <div className="w-[78px] h-16 flex-shrink-0">
                <img src={devicesIcon} alt="Devices" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                Devices
              </h2>
            </div>

            {/* Subtitle */}
            <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
              Primary users: Drivers (main driver + up to 2 co-drivers).
            </h3>

            {/* Devices Container */}
            <div className="flex flex-col items-center gap-[70px] w-full">
              {/* Device 1: In-Cab Monitor */}
              <div className="flex items-center justify-center gap-16 w-full">
                <div className="w-[169px] h-[139px]">
                  <img src={inCabMonitor} alt="In-Cab Monitor" className="w-full h-full object-stretch" />
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                    In-Cab Monitor (786px–1056px)
                  </p>
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    Exist in modern trucks.
                  </p>
                </div>
              </div>

              {/* Device 2: Tablets */}
              <div className="flex items-center justify-center gap-16 w-full">
                <div className="w-[168px] flex justify-center gap-[10px]">
                  <div className="w-[130px] h-[145px]">
                    <img src={tablet} alt="Tablet" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                    Tablets (786px–1056px)
                  </p>
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    Given to the Driver by the fleet.
                  </p>
                </div>
              </div>

              {/* Device 3: Mobile Phones */}
              <div className="flex items-center justify-center gap-16 w-full">
                <div className="w-[168px] flex justify-center items-center gap-[10px]">
                  <div className="w-[79px] h-[115px]">
                    <img src={mobilePhone} alt="Mobile Phone" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[3px]">
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                    Mobile phones (360px–786px)
                  </p>
                  <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                    Drivers log in to there own device to maintain their records.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Cabin Establishment Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col gap-[58px] w-full"
          >
            {/* Header */}
            <div className="flex items-center gap-8 w-full">
              <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,1)]">
                <img src={cabinEstablishmentIcon} alt="Cabin Establishment" className="w-full h-full object-stretch" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                Cabin Establishment
              </h2>
            </div>

            {/* Image 1 */}
            <div className="w-full h-[475px]">
              <img src={cabinEstablishment1} alt="Cabin Establishment 1" className="w-full h-full object-cover rounded-[32px] border-2 border-ui-gray" />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[475px]">
              <img src={cabinEstablishment2} alt="Cabin Establishment 2" className="w-full h-full object-cover rounded-[32px] border-2 border-ui-gray" />
            </div>
          </motion.section>

          {/* Driver Personas Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col items-end gap-16 w-full"
          >
            {/* Header */}
            <div className="flex items-center gap-3 w-full">
              <div className="w-16 h-16 flex-shrink-0">
                <img src={driverPersonasIcon} alt="Driver Personas" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                Driver Personas
              </h2>
            </div>

            {/* Personas Container */}
            <div className="flex flex-col w-full gap-[53px]">
              {/* Persona 1: Gajeel - Active Driver */}
              <div className="flex items-center gap-[78px] w-full">
                <div className="w-[242px] h-[242px] flex-shrink-0 rounded-full overflow-hidden">
                  <img src={personaGajeel} alt="Gajeel" className="w-full h-full object-cover" />
                </div>
                <div className="w-[450px] flex flex-col gap-3">
                  <div className="flex items-center gap-4 w-full">
                    <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Gajeel
                    </h3>
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                      Active Driver
                    </p>
                  </div>
                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray w-full" style={{ letterSpacing: '-2%' }}>
                    The Maintenance Manager ensures fleet safety, reliability, and optimal performance through preventive maintenance programs, technician supervision and training, budget management, regulatory compliance, and data-driven decision-making to minimize downtime.
                  </p>
                </div>
              </div>

              {/* Persona 2: Laxus - Co-Driver */}
              <div className="flex items-center gap-[78px] w-full">
                <div className="w-[242px] h-[242px] flex-shrink-0 rounded-full overflow-hidden">
                  <img src={personaLaxus} alt="Laxus" className="w-full h-full object-cover" />
                </div>
                <div className="w-[450px] flex flex-col gap-3">
                  <div className="flex items-center gap-4 w-full">
                    <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                      Laxus
                    </h3>
                    <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                      Co-Driver
                    </p>
                  </div>
                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray w-full" style={{ letterSpacing: '-2%' }}>
                    The Maintenance Technician inspects, diagnoses, and repairs fleet vehicles, performing preventive maintenance to ensure safety, reliability, and compliance while minimizing downtime.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Workflows Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col gap-16 w-full pt-8"
          >
            {/* Header */}
            <div className="flex items-center gap-8 w-full">
              <div className="w-16 h-16 flex-shrink-0">
                <img src={workflowsIcon} alt="Workflows" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                Workflows
              </h2>
            </div>

            {/* Container */}
            <div className="flex flex-col gap-8 w-full">
              {/* First Time Use - One time in Day */}
              <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                First Time Use - One time in Day
              </h3>

              {/* Flow Cards */}
              <div className="w-[602px] flex items-center gap-8">
                {/* Note 1: Authentication */}
                <div className="w-[231px] bg-white border border-text-quaternary rounded-[99px] px-8 py-4 flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                  <p className="font-trispace text-lg leading-[1.34em] text-ui-gray text-center" style={{ letterSpacing: '-0.5%' }}>
                    Authentication + permissions.
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-[49px] h-[49px]">
                  <p className="font-['Inter'] font-bold text-4xl leading-[1.32em] text-[#9A9CAD]" style={{ letterSpacing: '-2%' }}>
                    --&gt;
                  </p>
                </div>

                {/* Note 2: Tooltips */}
                <div className="w-[235px] bg-white border border-text-quaternary rounded-[99px] px-8 py-4 flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                  <p className="font-trispace text-lg leading-[1.34em] text-ui-gray text-center" style={{ letterSpacing: '-0.5%' }}>
                    Tooltips where necessary.
                  </p>
                </div>
              </div>

              {/* Regular Use */}
              <h3 className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                Regular Use
              </h3>

              {/* Regular Use Row 1 */}
              <div className="flex gap-6 w-full">
                {/* Selecting Vehicle */}
                <div className="w-[231px] bg-white border border-text-quaternary rounded-[99px] px-8 py-4 flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray text-center" style={{ letterSpacing: '-2%' }}>
                    Selecting Vehicle
                  </p>
                </div>

                {/* Selecting Trailer */}
                <div className="w-[231px] bg-white border border-text-quaternary rounded-[99px] px-8 py-4 flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray text-center" style={{ letterSpacing: '-2%' }}>
                    Selecting Trailer
                  </p>
                </div>
              </div>

              {/* Regular Use Row 2 */}
              <div className="flex gap-6 w-full">
                {/* Shipping Document */}
                <div className="w-[239px] bg-white border border-text-quaternary rounded-[99px] px-8 py-4 flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray text-center" style={{ letterSpacing: '-2%' }}>
                    Shipping Document
                  </p>
                </div>

                {/* Prompt to perform Vehicle Inspection */}
                <div className="bg-white border border-text-quaternary rounded-[99px] px-8 py-4 flex items-center justify-center shadow-[0px_4px_12px_0px_rgba(249,249,249,0.25)]">
                  <p className="font-trispace text-base leading-[1.34em] text-ui-gray text-center" style={{ letterSpacing: '-2%' }}>
                    Prompt to perform Vehicle Inspection
                  </p>
                </div>
              </div>

              {/* Experience remains the same note */}
              <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-text-quaternary" style={{ letterSpacing: '-1%' }}>
                [Experience remains the same]
              </p>
            </div>
          </motion.section>

          {/* Arc 1: Drivers assemble for Duty */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col gap-8 w-full pt-16"
          >
            {/* Arc 1 Title */}
            <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray w-full" style={{ letterSpacing: '-1%' }}>
              Arc 1: Drivers assemble for Duty
            </h2>

            {/* Scene 1 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 1.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Shift start at Dusk
                </p>
              </div>

              {/* Image placeholders for Scene 1 */}
              <div className="w-full h-[563px] rounded-lg border-[5px] border-ui-gray relative overflow-hidden">
                <img src={imgF11} alt="Shift start at Dusk" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 right-5 bg-white border-2 border-ui-gray px-3 py-3 rounded">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    .. 06:30 pm
                  </p>
                </div>
              </div>

              <div className="w-full h-[488px] rounded-lg relative overflow-hidden">
                <img src={imgF2} alt="Gajeel waiting" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-1/4 bg-white border-2 border-ui-gray px-3 py-3 rounded">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    Gajeel waiting for Laxus to arrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Scene 2 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 2.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Gajeel logging himself in and sets himself as the Active Driver, as well as marking hims as onDuty
                </p>
              </div>

              <div className="w-full h-[544px] rounded-lg relative overflow-hidden">
                <img src={imgF32} alt="Gajeel logging in" className="w-full h-full object-cover" />
                <div className="absolute top-5 left-5 bg-white border-2 border-ui-gray px-3 py-3 rounded max-w-[358px]">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    Both need to address pending tasks, certifying previous days logs, Inspecting the Vehicle.
                  </p>
                </div>
              </div>

              <div className="w-full h-[507px] rounded-lg relative overflow-hidden">
                <img src={imgF6} alt="Laxus arriving" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-32 bg-white border-2 border-ui-gray px-3 py-3 rounded">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    Laxus to arrives...
                  </p>
                </div>
              </div>

              <div className="w-full h-[760px] rounded-lg relative overflow-hidden">
                <img src={imgF10} alt="Laxus logs in" className="w-full h-full object-cover transform rotate-180 scale-y-[-1]" />
                <div className="absolute bottom-5 left-1/3 bg-white border-2 border-ui-gray px-3 py-3 rounded">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    Laxus logs into the ELD and changes his log status to onDuty.
                  </p>
                </div>
              </div>
            </div>

            {/* Flow Details for Arc 1 */}
            <div className="flex flex-col gap-8 py-6 border-y-2 border-[#EBF0F5]">
              <div className="flex gap-2 items-center">
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver•i App</p>
                <div className="w-1 h-1 rounded-full bg-ui-gray"></div>
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver Persona</p>
              </div>

              <ol className="list-decimal list-inside">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Prompted vehicle inspection → automatically sets duty status to On Duty.
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Flow Details
                </p>
                <ul className="font-trispace text-base text-ui-gray list-disc list-inside" style={{ letterSpacing: '-2%' }}>
                  <li>Changing of Duty states</li>
                  <li>Personal Conveyance & Yard move annotations</li>
                </ul>
              </div>

              {/* Device mockups */}
              <div className="flex gap-8 items-center pt-6">
                <div className="w-[290px] h-[592px] rounded-lg overflow-hidden">
                  <img src={imgDasboard7103} alt="Dashboard 7103" className="w-full h-full object-cover" />
                </div>
                <div className="w-[274px] h-[577px] rounded-xl overflow-hidden shadow-[0px_0px_0px_8px_rgba(159,159,159,0.25)] bg-white">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => {
                      console.error('Video error:', e);
                      e.target.style.display = 'none';
                      const img = document.createElement('img');
                      img.src = imgScreenRecording20250929At21516Am1;
                      img.className = 'w-full h-full object-cover';
                      e.target.parentNode.appendChild(img);
                    }}
                  >
                    <source src={imgScreenRecording20250929At21516Am1} type="video/mp4" />
                    <source src={imgScreenRecording20250929At21516Am1} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Arc 2: Driving status Automations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col gap-8 w-full pt-16"
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray w-full" style={{ letterSpacing: '-1%' }}>
              Arc 2: Driving status Automations
            </h2>

            {/* Scene 1 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 1.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Gajeel just made a stop to check the route.
                </p>
              </div>

              <div className="w-full h-[507px] rounded-lg overflow-hidden">
                <img src={imgF52} alt="Stop to check route" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Scene 2 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 2.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  They can see the system is asking them to change to On Duty since it detected the vehicle is not in motion.
                </p>
              </div>

              <div className="w-full h-[555px] rounded-lg relative overflow-hidden">
                <img src={imgImage44} alt="System duty status prompt" className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-44 bg-white border-2 border-ui-gray px-3 py-3 rounded max-w-md">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    60 seconds for them to make the choice or the system will make it for them..
                  </p>
                </div>
              </div>

              <div className="w-full h-[760px] rounded-lg relative overflow-hidden">
                <img src={imgF7} alt="Laxus response" className="w-full h-full object-cover transform rotate-180 scale-y-[-1]" />
                <div className="absolute bottom-5 left-5 bg-white border-2 border-ui-gray px-3 py-3 rounded max-w-md">
                  <p className="font-['Comic_Sans_MS'] font-bold text-sm text-ui-gray">
                    Laxus knows what next to do, first time was a little surprise but not anymore..
                  </p>
                </div>
              </div>
            </div>

            {/* Flow Details for Arc 2 */}
            <div className="flex flex-col gap-8 py-6 border-y-2 border-[#EBF0F5]">
              <div className="flex gap-2 items-center">
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver•i App</p>
                <div className="w-1 h-1 rounded-full bg-ui-gray"></div>
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver Persona</p>
              </div>

              <ol className="list-decimal list-inside" start="2">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Log Records
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Flow Details
                </p>
                <p className="font-trispace text-base text-ui-gray" style={{ letterSpacing: '-2%' }}>
                  User can view and maintain their logs from the HoS tab in the APP.
                </p>
              </div>

              <div className="flex gap-8 items-center pt-6">
                <div className="w-[290px] h-[592px] rounded-lg overflow-hidden">
                  <img src={imgDasboard7104} alt="Dashboard 7104" className="w-full h-full object-cover" />
                </div>
                <div className="w-[275px] h-[579px] rounded-xl overflow-hidden shadow-[0px_0px_0px_8px_rgba(159,159,159,0.25)] bg-white">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={imgScreenRecording20250929At21858Am1} type="video/mp4" />
                    <source src={imgScreenRecording20250929At21858Am1} type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Arc 3: Break Cycles and switching places */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col gap-8 w-full pt-16"
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray w-full" style={{ letterSpacing: '-1%' }}>
              Arc 3: Break Cycles and switching places
            </h2>

            {/* Scene 1 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 1.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Its been almost 8 hours, gajeel would like to rest, so Laxus now need to take the wheels
                </p>
              </div>

              <div className="w-full h-[760px] rounded-lg overflow-hidden">
                <img src={imgF9} alt="Driver rest period" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Scene 2 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 2.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Gajeels went on to the sleeper berth, after changing his Duty Status and Laxus marks himself as the active driver. Also, vice-versa
                </p>
              </div>

              <div className="w-full h-[540px] rounded-lg overflow-hidden">
                <img src={imgF12} alt="Duty status change" className="w-full h-full object-cover" />
              </div>

              <div className="w-full h-[760px] rounded-lg overflow-hidden">
                <img src={imgF15} alt="Active driver switch" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Flow Details for Arc 3 */}
            <div className="flex flex-col gap-8 py-6 border-y-2 border-[#EBF0F5]">
              <div className="flex gap-2 items-center">
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver•i App</p>
                <div className="w-1 h-1 rounded-full bg-ui-gray"></div>
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver Persona</p>
              </div>

              <ol className="list-decimal list-inside" start="3">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Certification of Logs
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Flow Details
                </p>
                <p className="font-trispace text-base text-ui-gray" style={{ letterSpacing: '-2%' }}>
                  In the end of every 14 day cycle the driver needs to certify 14 days log as a mandatory action also they are able to certify each day's logs.
                </p>
              </div>

              <div className="flex gap-8 items-center pt-6">
                <div className="w-[290px] h-[592px] rounded-lg overflow-hidden">
                  <img src={imgDasboard7105} alt="Dashboard 7105" className="w-full h-full object-cover" />
                </div>
                <div className="w-[275px] h-[579px] rounded-xl overflow-hidden shadow-[0px_0px_0px_8px_rgba(159,159,159,0.25)] bg-white">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={imgScreenRecording20250929At23954Am1} type="video/mp4" />
                    <source src={imgScreenRecording20250929At23954Am1} type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Arc 4: Random inspection for safety */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col gap-8 w-full pt-16"
          >
            <h2 className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray w-full" style={{ letterSpacing: '-1%' }}>
              Arc 4: Random inspection for safety
            </h2>

            {/* Scene 1 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 1.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  They are following their regular routine. Police car approachs and halts their trip.
                </p>
              </div>

              <div className="w-full h-[760px] rounded-lg overflow-hidden">
                <img src={imgF13} alt="Police inspection" className="w-full h-full object-cover" />
              </div>

              <div className="w-full h-[760px] rounded-lg overflow-hidden">
                <img src={imgF14} alt="Traffic stop" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Scene 2 */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Scene 2.
                </p>
                <p className="font-['Space_Mono'] font-bold text-2xl leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  officers requests to see their logs.
                </p>
              </div>

              <div className="w-full h-[507px] rounded-lg overflow-hidden">
                <img src={imgF16} alt="Log request" className="w-full h-full object-cover" />
              </div>

              <div className="w-full h-[544px] rounded-lg overflow-hidden">
                <img src={imgF32} alt="Showing logs" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Flow Details for Arc 4 - Inspector Mode */}
            <div className="flex flex-col gap-8 py-6 border-y-2 border-[#EBF0F5]">
              <div className="flex gap-2 items-center">
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver•i App</p>
                <div className="w-1 h-1 rounded-full bg-ui-gray"></div>
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver Persona</p>
              </div>

              <ol className="list-decimal list-inside" start="4">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Inspector Mode
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Flow Details
                </p>
                <p className="font-trispace text-base text-ui-gray" style={{ letterSpacing: '-2%' }}>
                  When the Cops pull over the driver, they need to show their log records in a secure manner.
                </p>
              </div>

              <div className="flex gap-8 items-center pt-6">
                <div className="w-[275px] h-[579px] rounded-xl overflow-hidden bg-white">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={imgScreenRecording20250929At31513Am1} type="video/mp4" />
                    <source src={imgScreenRecording20250929At31513Am1} type="video/webm" />
                  </video>
                </div>
                <div className="w-[290px] h-[592px] rounded-lg overflow-hidden">
                  <img src={imgDataTransfer1} alt="Data Transfer" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Additional Flow: Editing Logs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.55 }}
            className="flex flex-col gap-8 w-full pt-16"
          >
            <div className="flex flex-col gap-8 py-6 border-y-2 border-[#EBF0F5]">
              <div className="flex gap-2 items-center">
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver•i App</p>
                <div className="w-1 h-1 rounded-full bg-ui-gray"></div>
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver Persona</p>
              </div>

              <ol className="list-decimal list-inside" start="4">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Editing / Managing the Logs
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Flow Details
                </p>
                <p className="font-trispace text-base text-ui-gray" style={{ letterSpacing: '-2%' }}>
                  Drivers can edit their logs, add annotations, and manage discrepancies.
                </p>
              </div>

              <div className="flex gap-8 items-center pt-6">
                <div className="w-[290px] h-[592px] rounded-lg overflow-hidden">
                  <img src={imgEdits1} alt="Edits" className="w-full h-full object-cover" />
                </div>
                <div className="w-[275px] h-[579px] rounded-xl overflow-hidden shadow-[0px_0px_0px_8px_rgba(159,159,159,0.25)] bg-white">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={imgScreenRecording20250929At30629Am1} type="video/mp4" />
                    <source src={imgScreenRecording20250929At30629Am1} type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </motion.section>

          {/* In-Cab Monitor Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col gap-8 w-full pt-16"
          >
            <div className="flex flex-col gap-8 py-6 border-y-2 border-[#EBF0F5]">
              <div className="flex gap-2 items-center">
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver•i App</p>
                <div className="w-1 h-1 rounded-full bg-ui-gray"></div>
                <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>Driver Persona</p>
              </div>

              <ol className="list-decimal list-inside" start="5">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  In-Cab Monitor
                </li>
              </ol>

              <div className="flex flex-col gap-3">
                <p className="font-['Space_Mono'] font-bold text-lg leading-[1.36em] text-[#9A9CAD]" style={{ letterSpacing: '-1%' }}>
                  Flow Details
                </p>
                <p className="font-trispace text-base text-ui-gray" style={{ letterSpacing: '-2%' }}>
                  ~50% of the Drivers use In Cab monitors as their Device, mostly a tab, which is portable. The Layout slightly changes from that of the Mobile layot.
                </p>
              </div>

              <div className="w-full h-[535px] rounded-lg overflow-hidden">
                <img src={imgEld11} alt="In-Cab Monitor ELD" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.section>

          {/* Final Notes Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="flex flex-col gap-0 w-full pt-8"
          >
            {/* Note 6: Unassigned Driving Log */}
            <div className="bg-white border-2 border-[#EBF0F5] rounded-lg p-6 mb-0 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]">
              <ol className="list-decimal list-inside mb-8" start="6">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Unassigned Driving Log
                </li>
              </ol>
              <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                In an ideal world, good chances drivers make mistakes or misses to change the Duty status to start their shift, when the vehicle is in motion a log is recorded from data that is derived from the device, the log is technically not assigned to any driver.
              </p>
            </div>

            {/* Note 7: Log Updates from Web portals */}
            <div className="bg-white border-2 border-[#EBF0F5] rounded-lg p-6 mb-0 shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.15)]">
              <ol className="list-decimal list-inside mb-8" start="7">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Log Updates from Web portals
                </li>
              </ol>
              <p className="font-trispace text-base text-text-quaternary" style={{ letterSpacing: '-2%' }}>
                From the Web Portal, when the fleet managers edit the logs, the Drivers can choose to accept/reject the logs. If they accept, their log records will be updated.
              </p>
            </div>

            {/* Note 8: Auto duty transitions */}
            <div className="bg-white border-2 border-[#EBF0F5] rounded-lg p-6 mb-0 shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.15)]">
              <ol className="list-decimal list-inside mb-8" start="8">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Auto duty transitions:
                </li>
              </ol>
              <ul className="font-trispace text-base text-text-quaternary list-disc list-inside" style={{ letterSpacing: '-2%' }}>
                <li>On Duty → Driving when vehicle motion detected (with 60-second override).</li>
                <li>Driving → On Duty when idle.</li>
              </ul>
            </div>

            {/* Note 9: Log Certification */}
            <div className="bg-white border-2 border-[#EBF0F5] rounded-lg p-6 mb-0 shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.15)]">
              <ol className="list-decimal list-inside mb-8" start="9">
                <li className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray" style={{ letterSpacing: '-1%' }}>
                  Log Certification
                </li>
              </ol>
              <ul className="font-trispace text-base text-text-quaternary list-disc list-inside" style={{ letterSpacing: '-2%' }}>
                <li>Drivers must certify previous day's logs daily.</li>
                <li>Recertification required after edits.</li>
                <li>14-day certification backlog compliance.</li>
              </ul>
            </div>

            {/* Final Note: More flows */}
            <div className="bg-white border-2 border-[#EBF0F5] rounded-lg p-6 mb-0 shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.15)]">
              <p className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray text-center mb-2" style={{ letterSpacing: '-1%' }}>
                •••
              </p>
              <p className="font-['Trispace'] font-bold text-base text-text-quaternary text-center mb-2" style={{ letterSpacing: '-0.5%' }}>
                15+ more flows in the project including various device types
              </p>
              <p className="font-['Space_Mono'] font-bold text-[32px] leading-[1.36em] text-ui-gray text-center" style={{ letterSpacing: '-1%' }}>
                •••
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.main>
    </>
  );
};

export default HoursOfService;
