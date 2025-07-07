import React from 'react';
import { motion } from 'framer-motion';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaLock, FaTools } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';

const WhyChooseUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  };

  const iconHover = {
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[26px] md:text-4xl font-bold text-maingreen mb-4">
            Why Choose OH-RES
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-secondary max-w-3xl mx-auto"
          >
            Smarter EDI. Better Business.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Blazing Fast Setup */}
          <motion.div
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <motion.div
              whileHover={iconHover}
              className="flex justify-center mb-4"
            >
              <div className="bg-maingreen p-4 rounded-full">
                <BsFillLightningChargeFill className="w-5 h-5 md:w-8 md:h-8" />
              </div>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Blazing Fast Setup
            </h3>
            <p className="text-gray-600">
              Get integrated quickly without months of development or
              disruption.
            </p>
          </motion.div>

          {/* Enterprise-Grade Security */}
          <motion.div
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <motion.div
              whileHover={iconHover}
              className="flex justify-center mb-4"
            >
              <div className="bg-maingreen p-4 rounded-full">
                <FaLock className="w-5 h-5 md:w-8 md:h-8" />
              </div>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Enterprise-Grade Security
            </h3>
            <p className="text-gray-600">
              Your data is protected with industry-standard encryption and
              compliance.
            </p>
          </motion.div>

          {/* Flexible Integration */}
          <motion.div
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-maingreen p-4 rounded-full">
                <FaArrowsRotate className="w-5 h-5 md:w-8 md:h-8" />
              </div>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Flexible Integration
            </h3>
            <p className="text-gray-600">
              Works with your ERP, CRM, or custom stacks with no stress.
            </p>
          </motion.div>

          {/* Real Human Support */}
          <motion.div
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-maingreen p-4 rounded-full">
                <FaTools className="w-5 h-5 md:w-8 md:h-8" />
              </div>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Real Human Support
            </h3>
            <p className="text-gray-600">
              Need help? Our expert team responds fast, no ticket robots here.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
