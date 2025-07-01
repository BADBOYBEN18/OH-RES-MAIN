import { motion } from 'framer-motion';
import React from 'react';
import {
  FaSlidersH,
  FaShieldAlt,
  FaRobot,
  FaExchangeAlt,
} from 'react-icons/fa';
import { scaleIn } from './variants';
const WhoAreWe = () => {
  return (
    <>
      <motion.div
        variants={scaleIn}
        className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden  md:my-2 cursor-pointer flex flex-col text-center items-center justify-center sm:h-full py-10 px-4  
  hover:-translate-y-[2rem]
  hover:shadow-[0_0_15px_rgba(109,253,131,0.5)]
  transition-all duration-300"
      >
        <div className=" flex items-center justify-center w-14 h-14  mb-3">
          <FaSlidersH className="text-[#3f9b70]  text-2xl lg:text-4xl" />
        </div>
        <div>
          <h1 className="font-bold  text-lg lg:text-xl mb-3">
            Custom EDI Workflows
          </h1>
          <p className=" text-lg lg:text-xl">
            Tailored integrations built around your operations — for seamless,
            automated business communications.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={scaleIn}
        className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden  md:my-2 cursor-pointer flex flex-col text-center items-center justify-center sm:h-full py-10 px-4   hover:-translate-y-[2rem]
  hover:shadow-[0_0_15px_rgba(109,253,131,0.5)]
  transition-all duration-300"
      >
        <div>
          <h1 className="font-bold text-[#3f9b70]  text-lg lg:text-xl mb-3">
            What Sets OH-RES Apart
          </h1>
          <p className=" text-lg lg:text-xl">
            We merge automation and{' '}
            <span className="text-maingreen">precision</span> to deliver
            powerful, scalable EDI infrastructures that simplify growth.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={scaleIn}
        className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden  md:my-2 cursor-pointer flex flex-col text-center items-center justify-center sm:h-full py-10 px-4   hover:-translate-y-[2rem]
  hover:shadow-[0_0_15px_rgba(109,253,131,0.5)]
  transition-all duration-300"
      >
        <div className=" flex items-center justify-center w-14 h-14  mb-3">
          <FaExchangeAlt className="text-[#3f9b70] text-2xl lg:text-4xl" />
        </div>
        <div>
          <h1 className="font-bold  text-lg lg:text-xl mb-3">
            Automated Data Flow
          </h1>
          <p className=" text-lg lg:text-xl">
            Minimize manual work, reduce delays, and eliminate errors with
            real-time data exchange.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default WhoAreWe;