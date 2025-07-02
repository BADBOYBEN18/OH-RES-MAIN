import React from 'react';
import { motion } from 'framer-motion';

import SplitText from '@/components/ui/BlurText/GlareHover/SplitText/SplitText';
import { Nav } from '@/components/Nav';
// import { fadeIn } from '@/variants';
import AnimatedButton from '@/components/Button';
import Strengths from '@/components/Strengths';
import WhoAreWe from '@/components/WhoAreWe';
import Industries from '@/components/Industries';
import { Footer } from '@/components/Footer';

import {
  FaArrowRight,
  FaCheckCircle,
  FaFileAlt,
  FaLock,
  FaNetworkWired,
  FaRegPaperPlane,
  FaSyncAlt,
} from 'react-icons/fa';

import {
  fadeInUp,
  staggerContainer,
  slideInFromRight,
  scaleIn,
} from '@/variants/index';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <main className="bg-secondary  flex justify-center  px-4 md:px-8 lg:mb-10 pt-20 xl:pt-15 ">
        <div className="flex flex-col md:flex-row items-center scale-98 max-w-7xl m-auto py-10 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-7"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-maingreen text-3xl lg:text-4xl xl:text-5xl font-bold text-balance"
            >
              {' '}
              Empowering SMEs With Smart EDI Automation{' '}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white text-[16px] lg:text-lg font-extralight "
            >
              We simplify Electronic Data Interchange (EDI) for modern
              businesses, enabling fast, secure, and seamless integration across
              supply chains.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <AnimatedButton text={'Get started'} icon={FaArrowRight} />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/OH-RES/edd.png?updatedAt=1750539156294"
              alt=""
            />
          </motion.div>
        </div>
      </main>

      <section className="md:py-5  px-4 md:px-8 mb-5 lg:mb-10">
        <div className="scale-98 max-w-7xl m-auto py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mb-10 md:mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-[#198754] text-lg md:text-xl mb-2
            "
            >
              OUR CORE STRENGTHS
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              className="text-maingreen text-2xl md:text-3xl font-bold"
            >
              Designed for Scalability,{' '}
              <span className="text-secondary">Security</span>, and Simplicity
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Strengths />
          </motion.div>
        </div>
      </section>

      <section className=" px-4 md:px-8 py-10 mb-5 md:mb-10">
        <div className="scale-98 max-w-7xl m-auto ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-4 text-center mb-7 lg:mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="border-2 border-maingreen max-w-20 mb-4 rounded-2xl m-auto"
            ></motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[#198754] text-xl md:text-2xl font-medium"
            >
              WHO WE ARE
            </motion.h2>
            <motion.h1
              variants={fadeInUp}
              className="text-maingreen font-bold text-xl md:text-2xl lg:text-3xl lg:mb-7"
            >
              Modernizing <span className="text-secondary">EDI</span> for
              Growing Businesses
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-light text-lg max-w-4xl m-auto md:text-xl "
            >
              At OH-RES, we deliver{' '}
              <span className="text-maingreen font-semibold">
                impact-driven EDI solutions
              </span>{' '}
              that simplify communication between systems. With a focus on{' '}
              <span className="text-maingreen font-semibold">automation</span>,
              <span className="text-maingreen font-semibold">security</span>,
              and{' '}
              <span className="text-maingreen font-semibold">scalability</span>,
              we help companies thrive in today’s fast-paced digital space.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <WhoAreWe />
          </motion.div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col  md:gap-7 lg:gap-10 md:flex-row space-y-10 max-w-7xl m-auto scale-98
        "
        >
          <div
            className="md:w-1/2
          "
          >
            <img
              src="https://img.freepik.com/premium-photo/business-people-meeting-shaking-hands_53876-137476.jpg?semt=ais_hybrid&w=740"
              className="h-auto md:h-[20rem] lg:h-auto"
              alt=""
            />
          </div>

          <div
            className="md:w-1/2
          "
          >
            <h1 className="text-[#198754] text-xl lg:text-2xl font-semibold tracking-wide mb-2">
              ABOUT US
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold mb-4">
              Redefining Resource Solutions
            </h2>
            <p className="text-[16px] lg:text-xl mb-6">
              OH-RES is more than just a solutions provider — we’re a
              future-driven team reshaping how Africa accesses and manages its
              natural resources. From green infrastructure to energy
              optimization, we help governments, communities, and businesses
              lead with impact
            </p>
            <AnimatedButton
              text={'Talk to Us'}
              icon={FaRegPaperPlane}
              iconPosition="left"
              className="flex-row-reverse"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-secondary md:my-10 py-5 ">
        <div className=" max-w-7xl m-auto px-4 md:px-8 py-10  flex flex-col lg:flex-row items-center justify-between text-center">
          <SplitText
            className="text-white text-2xl font-bold mb-5 lg:mb-0"
            delay={80}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            // onLetterAnimationComplete={handleAnimationComplete}
          >
            Ready to simplify your business with smart EDI solutions?
          </SplitText>
          {/* <p
            className="text-white text-2xl font-bold mb-5 lg:mb-0
          "
          >
            Ready to simplify your business with smart EDI solutions?
          </p> */}
          <div>
            <AnimatedButton
              text={'Talk to Us'}
              icon={FaRegPaperPlane}
              iconPosition="left"
              className="px-7 "
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-10 ">
        <div className="max-w-7xl m-auto scale-98">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center space-y-2 mb-10 lg:mb-20"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-[#2a9061] uppercase text-xl font-semibold md:text-2xl"
            >
              Industries We Serve
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              className="text-maingreen text-xl font-bold md:text-3xl"
            >
              Smart EDI for Every Industry
            </motion.h2>
            <motion.p variants={fadeInUp} className="sm:text-lg">
              From supply chains to hospitals, our platform powers seamless
              communication between systems.
            </motion.p>
          </motion.div>

          <div className="">
            <Industries />
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="px-4 md:px-8 py-10 md:py-16 lg:py-20 bg-[#f0f8f5]">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 max-w-7xl m-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInFromRight}
            className="md:w-1/2"
          >
            <h1 className="text-[#198754] font-semibold text-lg md:text-xl mb-2">
              HOW IT WORKS
            </h1>
            <h2 className="font-bold  text-xl md:text-3xl lg:text-3xl mb-4 md:mb-10">
              A Simple, Streamlined EDI Process
            </h2>

            <div className="space-y-4 md:space-y-10">
              <div className="flex gap-5">
                <div className=" bg-[#198754] rounded-full w-10 h-10 lg:w-14 lg:h-14 lg:p-5 flex p-4 items-center justify-center mb-3 ">
                  <FaFileAlt className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    1. Document Preparation
                  </h3>
                  <p className="text-base md:text-lg">
                    Business documents are converted to EDI-ready format for
                    seamless processing.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className=" bg-[#198754] rounded-full w-10 h-10 lg:w-14 lg:h-14 lg:p-5 flex p-4 items-center justify-center mb-3 ">
                  <FaLock className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    2. Secure Transmission
                  </h3>
                  <p className="text-base md:text-lg">
                    Files are encrypted and securely sent through trusted
                    communication channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className=" bg-[#198754] rounded-full w-10 h-10 lg:w-14 lg:h-14 lg:p-5 flex p-4 items-center justify-center mb-3 ">
                  <FaSyncAlt className="text-white text-lg md:text-xl " />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    3. Integration
                  </h3>
                  <p className="text-base md:text-lg">
                    The data is automatically routed into your internal systems
                    (ERP, CRM, etc).
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className=" bg-[#198754] rounded-full w-10 h-10 lg:w-14 lg:h-14 lg:p-5 flex p-4 items-center justify-center mb-3 ">
                  <FaCheckCircle className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    4. Confirmation
                  </h3>
                  <p className="text-base md:text-lg">
                    Acknowledgments or response files are sent back
                    automatically.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:w-1/2">
            <img src="...." alt="img" />
          </div>
        </div>
      </section>

      <Footer year={2025} />
    </div>
  );
}
