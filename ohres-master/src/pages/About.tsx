import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import React from 'react';
import {
  slideInFromRight,
  staggerContainer,
  scaleIn,
  fadeInUp,
  slideInFromLeft,
} from '@/variants/index';
import AnimatedButton from '@/components/Button';
import { FaArrowRight, FaRegPaperPlane } from 'react-icons/fa';
// import { fadeInUp } from '@/components/variants';
import WhoAreWe from '@/components/WhoAreWe';
import Carousel from '@/components/Carousel';
import WhyChooseUs from '@/components/WhyChooseUs';

const About = () => {
  return (
    <Layout>
      <div>
        <main className="bg-secondary overflow-hidden flex justify-center  px-4 md:px-8 lg:mb-10 pt-20 xl:pt-15 ">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-5 max-w-7xl mx-auto py-10 lg:my-[3rem]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-4 lg:space-y-6 md:w-1/2 lg:w-2/5"
            >
              <motion.p
                variants={slideInFromLeft}
                className="text-base text-maingreen font-semibold tracking-wide"
              >
                ABOUT US
              </motion.p>
              <motion.h1
                variants={slideInFromLeft}
                className="text-maingreen text-3xl lg:text-4xl xl:text-5xl font-bold "
              >
                We deliver innovation through sleek digital solutions
              </motion.h1>
              <motion.p
                variants={slideInFromLeft}
                className="text-white text-[16px] lg:text-lg font-extralight text-pretty"
              >
                OHRES blends creativity with strategy to empower businesses
                through smart websites, seamless integration, and digital
                excellence — tailored to meet your unique needs.
              </motion.p>
              <motion.div variants={slideInFromLeft}>
                <AnimatedButton text={`Let′s Connect`} icon={FaArrowRight} />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromRight}
              className="mt-8 md:mt-0 md:w-1/2 lg:w-[45%] shadow-lg shadow-maingreen rounded-2xl"
            >
              <img
                className="rounded-2xl w-full h-auto max-h-[400px] object-cover overflow-clip"
                src="https://ik.imagekit.io/h6pmd5ivo/OH-RES/assest.png?updatedAt=1752018464927"
                alt="Digital solutions illustration"
              />
            </motion.div>
          </div>
        </main>

        <section className=" px-4 md:px-8 py-20 mb-5 md:mb-10 bg-[#f8f9fa]">
          <div className="scale-98 max-w-7xl m-auto ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-4 text-center mb-7 lg:mb-10"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-[#198754] text-lg md:text-xl font-medium uppercase "
              >
                What Sets Us Apart
              </motion.h1>
              <motion.h1
                variants={fadeInUp}
                className="text-secondary font-bold text-xl md:text-2xl lg:text-3xl "
              >
                Built for Simplicity, Speed & Scale
              </motion.h1>
            </motion.div>

            <div className="">
              <Carousel />
            </div>
          </div>
        </section>

        <section className=" px-4 md:px-8 mb-5 md:mb-10">
          <WhyChooseUs />
        </section>

        <section className="bg-secondary text-white md:my-10 py-5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="flex flex-col gap-4 md:gap-6 items-center justify-between text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-lg lg:text-3xl  font-bold"
              >
                Ready to Transform Your Business?
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-[#d6d7d7] text-[16px] lg:text-lg max-w-3xl mx-auto"
              >
                Let's streamline your operations with secure, scalable EDI
                solutions that move at your speed.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <AnimatedButton
                  text={'Talk to Us'}
                  icon={FaRegPaperPlane}
                  iconPosition="left"
                  className="px-7"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
