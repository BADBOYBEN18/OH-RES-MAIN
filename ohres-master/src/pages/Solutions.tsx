import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/components/variants';
import React from 'react';
import {
  FaGasPump,
  FaNetworkWired,
  FaPhone,
  FaPhoneAlt,
  FaRegPaperPlane,
  FaWallet,
} from 'react-icons/fa';
import AnimatedButton from '@/components/Button';
import { FaPhoneFlip } from 'react-icons/fa6';
import { SeoHead } from '@/components/SeoPage';
import { SolutionsSection } from '@/components/SolutionsSection';

export const Solutions = () => {
  const solutions = [
    {
      id: 'edi',
      icon: <FaNetworkWired />,
      title: 'EDI Solutions',
      tagline: 'Seamless B2B Integration at Scale',
      bullets: [
        'Connect ERPs, CRMs & supply chains effortlessly',
        'Support ANSI X12, EDIFACT, XML',
        'Automated mapping, error handling & onboarding',
      ],
    },
    {
      id: 'oh-pay',
      icon: <FaWallet />,
      title: 'OH‑Pay Payment Solutions',
      tagline: 'Fast, Secure, Embedded Payments',
      bullets: [
        'Accept credit, ACH & mobile wallets',
        'PCI‑DSS, bank‑grade encryption',
        'Smart reconciliation & invoicing integration',
      ],
    },
  ];

  return (
    <Layout>
      <SeoHead title="Solutions" description="Solutions page for OH-Res ltd" />
      <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-black text-white py-20 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center md:gap-[1rem] py-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pretty font-bold text-maingreen mb-6"
          >
            Transformative Solutions, Unmatched Impact
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base font-light sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-5 max-w-3xl"
          >
            Explore our enterprise-ready EDI integration and OH‑Pay platform
            built for scale, security, and simplicity.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button
              className="bg-maingreen text-secondary px-6 py-3 flex items-center gap-2 rounded-lg cursor-pointer 
        font-medium hover:scale-105 transition-all text-sm sm:text-base md:text-lg"
            >
              Talk to us <FaPhoneAlt />
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-10 md:py-20 px-4 md:px-8 bg-secondary text-white">
        <motion.div
          className="max-w-7xl mx-auto scale-98"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-maingreen mb-6 text-center"
            variants={fadeInUp}
          >
            OH‑RES Solutions
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Our complementary suite of solutions modernizes B2B operations and
            payments.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2 mb-6 lg:mb-8">
            {solutions.map((sol, idx) => (
              <motion.div
                key={sol.id}
                className="bg-white text-black rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-500"
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="p-10">
                  <motion.div
                    className="text-5xl text-maingreen mb-6 flex justify-center"
                    variants={scaleIn}
                  >
                    {sol.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-secondary mb-2 text-center">
                    {sol.title}
                  </h3>
                  <p className="text-lg text-gray-600 italic mb-6 text-center">
                    {sol.tagline}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {sol.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="text-maingreen mt-1">✔️</span>
                        <span className="text-gray-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <SolutionsSection />
        </motion.div>

        <section className="bg-secondary text-white md:my-10 py-5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
            <div className="flex flex-col gap-4 md:gap-6 items-center justify-between text-center">
              <h1 className="text-lg lg:text-3xl  font-bold">
                Ready to Transform Your Business?
              </h1>

              <p className="text-[#d6d7d7] text-[16px] lg:text-lg max-w-3xl mx-auto">
                Let's streamline your operations with secure, scalable EDI
                solutions that move at your speed.
              </p>

              <div>
                <AnimatedButton
                  text={'Talk to Us'}
                  icon={FaRegPaperPlane}
                  iconPosition="left"
                  className="px-7"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};
