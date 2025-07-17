import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import {
  slideInFromRight,
  staggerContainer,
  scaleIn,
  fadeInUp,
  slideInFromLeft,
} from '@/variants/index';
import AnimatedButton from '@/components/Button';
import { FaArrowRight } from 'react-icons/fa';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <Layout>
      <div>
        <main className="bg-secondary overflow-hidden flex justify-center  px-4 md:px-8  pt-20 xl:pt-[8rem] ">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-5 max-w-7xl mx-auto">
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
                CONTACT US
              </motion.p>
              <motion.h1
                variants={slideInFromLeft}
                className="text-maingreen text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wide"
              >
                Contact OH-RES
              </motion.h1>
              <motion.p
                variants={slideInFromLeft}
                className="text-white text-[16px] lg:text-lg font-extralight text-pretty"
              >
                How can we help? Our sales, services, and partner teams are
                ready to assist you
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromRight}
              className="mt-8 md:mt-0 md:w-1/2 lg:w-[45%]"
            >
              <img
                className=" w-full h-auto max-h-[400px] object-cover overflow-clip"
                src="https://ik.imagekit.io/h6pmd5ivo/OH-RES/opentext-image-lp-contact-us-a-en.webp?updatedAt=1752307655011"
                alt="Digital solutions illustration"
              />
            </motion.div>
          </div>
        </main>
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
