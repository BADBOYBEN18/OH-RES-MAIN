import React from 'react';
import { FaNetworkWired, FaShieldAlt, FaRobot } from 'react-icons/fa';
const Strengths = () => {
  return (
    <>
      <div
        className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden  md:my-2 cursor-pointer flex flex-col text-center items-center justify-center sm:h-full py-10 px-4  
  hover:-translate-y-[2rem]
  hover:shadow-[0_0_15px_rgba(109,253,131,0.5)]
  transition-all duration-300"
      >
        <div className=" bg-maingreen w-14 h-14 rounded-full flex items-center justify-center mb-3">
          <FaNetworkWired className="text-secondary text-2xl" />
        </div>
        <div>
          <h1 className="font-bold  text-lg lg:text-xl mb-3">
            Seamless Integration
          </h1>
          <p className=" text-lg lg:text-xl">
            Connect effortlessly with suppliers, clients, and third-party
            platforms without disruption
          </p>
        </div>
      </div>
      <div
        className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden  md:my-2 cursor-pointer flex flex-col text-center items-center justify-center sm:h-full py-10 px-4   hover:-translate-y-[2rem]
  hover:shadow-[0_0_15px_rgba(109,253,131,0.5)]
  transition-all duration-300"
      >
        <div className=" bg-maingreen w-14 h-14 rounded-full flex items-center justify-center mb-3">
          <FaShieldAlt className="text-secondary text-2xl" />
        </div>
        <div>
          <h1 className="font-bold  text-lg lg:text-xl mb-3">Data Security</h1>
          <p className=" text-lg lg:text-xl">
            End-to-end encryption, compliance-ready systems, and real-time
            transaction tracking.
          </p>
        </div>
      </div>
      <div
        className="max-w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden  md:my-2 cursor-pointer flex flex-col text-center items-center justify-center sm:h-full py-10 px-4   hover:-translate-y-[2rem]
  hover:shadow-[0_0_15px_rgba(109,253,131,0.5)]
  transition-all duration-300"
      >
        <div className=" bg-maingreen w-14 h-14 rounded-full flex items-center justify-center mb-3">
          <FaRobot className="text-secondary text-2xl" />
        </div>
        <div>
          <h1 className="font-bold  text-lg lg:text-xl mb-3">
            Process Automation
          </h1>
          <p className=" text-lg lg:text-xl">
            Automate purchase orders, invoices, acknowledgments, and more with
            zero manual stress.
          </p>
        </div>
      </div>
    </>
  );
};

export default Strengths;