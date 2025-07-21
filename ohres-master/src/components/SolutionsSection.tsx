import { FaCloud, FaCogs } from 'react-icons/fa';
import { GrIntegration } from 'react-icons/gr';
import { CgGym } from 'react-icons/cg';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
const CheckmarkIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export const SolutionsSection = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Service Card 1: Gas Trading */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaCloud className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">
              CLOUD BASED EDI SOLUTIONS
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Automate secure data exchange with cutting-edge EDI capabilities
          </p>
        </div>
      </div>

      {/* Service Card 2: Gas Equipment */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaCogs className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">
              IT AUTOMATION
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Automate repetitive workflows to save time, reduce errors, and
            increase efficiency
          </p>
        </div>
      </div>

      {/* Service Card 3: Auto Gas Conversion */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <GrIntegration className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">
              CUSTOM INTEGRATION SOLUTIONS
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Seamlessly connect your existing systems with our solutions for a
            unified operation.
          </p>
        </div>
      </div>

      {/* Service Card 4: Gas-to-Power */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <TbArrowsExchange2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">
              INTEGRATED 3PL LOGISTICS SOLUTION
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Streamline transportation, warehousing, and distribution for
            seamless supply chain operations.. Enhance efficiency and
            transparency in procurement with integrated, cost-effective
            solutions.
          </p>
        </div>
      </div>

      {/* Service Card 5: Renewable Energy */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <BiSupport className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">
              MANAGED IT SUPPORT
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Get 24/7 support for system monitoring, troubleshooting, and
            technical assistance.
          </p>
        </div>
      </div>

      {/* Service Card 6: Bulk CNG Sales */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CgGym className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">
              TRAINING AND ONBOARDING
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Equip your team with the skills and knowledge to maximize the value
            of our platform.
          </p>
        </div>
      </div>
    </div>
  );
};
