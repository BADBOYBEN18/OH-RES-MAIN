import { motion } from 'framer-motion';
import React from 'react';
import {
  FaCogs,
  FaGlobe,
  FaShoppingCart,
  FaTruck,
  FaUniversity,
} from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';
import { scaleIn, staggerContainer } from './variants';

type IndustriesCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  img?: string; // Optional icon
};

// Sample data - could come from API or config file
const IndustriesCard: IndustriesCardProps[] = [
  {
    title: 'Retail',
    description:
      'Automate orders, invoices, and inventory data across supply chains.',
    icon: <FaShoppingCart />,
    img: 'https://ik.imagekit.io/h6pmd5ivo/OH-RES/retail.jpg?updatedAt=1750539162743',
  },
  // Add more services as needed
  {
    title: 'Healthcare',
    description:
      'Transmit claims, prescriptions, and lab data securely and fast.',
    icon: <FaHeartPulse />,
    img: 'https://ik.imagekit.io/h6pmd5ivo/OH-RES/health.jpg?updatedAt=1750539154468',
  },
  {
    title: 'Logistics',
    description: 'Track shipments and manage transport updates in real time..',
    icon: <FaTruck />,
    img: 'https://ik.imagekit.io/h6pmd5ivo/OH-RES/cargo.jpg?updatedAt=1750539154506',
  },
  {
    title: 'Finance',
    description:
      'Streamline financial reports, remittances, and reconciliations.',
    icon: <FaUniversity />,
    img: 'https://ik.imagekit.io/h6pmd5ivo/OH-RES/finance.jpg?updatedAt=1750539153756',
  },
  {
    title: 'Manufacturing',
    description:
      'Connect factories with vendors for just-in-time data exchange.',
    icon: <FaCogs />,
    img: 'https://ik.imagekit.io/h6pmd5ivo/OH-RES/machine.jpg?updatedAt=1750539154628',
  },
  {
    title: 'E-Commerce',
    description:
      'Exchange product feeds, order data, and delivery statuses globally.',
    icon: <FaGlobe />,
    img: 'https://ik.imagekit.io/h6pmd5ivo/OH-RES/shop.jpg?updatedAt=1750539153942',
  },
];

const Industries = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {IndustriesCard.map(({ icon, description, title, img }, index) => (
        <motion.div
          key={index}
          variants={scaleIn}
          whileHover={{ scale: 1.05, y: -5 }}
          className=" bg-secondary p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center space-y-6 cursor-pointer"
        >
          <div className="text-white">
            <div className="mb-3 text-[2rem] flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
          <div>
            <img className="rounded-lg scale-98" src={img} alt="" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// const ServicesSection: React.FC = () => {
//   return (
//     <section className="py-12 px-4 md:px-8 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {serviceCards.map((card, index) => (
//             <ServiceCard
//               key={index}
//               title={card.title}
//               description={card.description}
//               icon={card.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export default Industries;