import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/components/variants';
import AnimatedButton from '@/components/Button';
import { FaNetworkWired, FaWallet } from 'react-icons/fa';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const testimonials = [
  {
    name: 'Emma Thompson',
    role: 'Marketing Manager, Acme Inc.',
    image: '/testimonials/emma.jpg',
    quote: 'OH‑Pay cut our payment time in half—and EDI integration? Seamless.',
  },
  {
    name: 'Michael Chen',
    role: 'COO, TechFlow Ltd.',
    image: '/testimonials/michael.jpg',
    quote: 'Their EDI tooling is enterprise‑grade and the support? 5 stars.',
  },
  {
    name: 'Sophia Rodriguez',
    role: 'CFO, HealthWave',
    image: '/testimonials/sophia.jpg',
    quote: 'PCI‑compliant OH‑Pay saved us audit headaches and integration pain.',
  },
];

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

const OurSolutionsPage: React.FC = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-gradient-to-br from-secondary via-gray-800 to-black text-white py-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold text-maingreen mb-6"
        >
          Transformative Solutions, Unmatched Impact
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10">
          Explore our enterprise-ready EDI integration and OH‑Pay platform—built
          for scale, security, and simplicity.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <AnimatedButton text="Talk to Us" icon={FaNetworkWired} />
        </motion.div>
      </motion.div>
    </section>

    {/* Testimonial Carousel */}
    <section className="py-16 bg-secondary text-white">
      <motion.div
        className="max-w-5xl mx-auto scale-98"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <AliceCarousel
          autoPlay
          autoPlayInterval={6000}
          infinite
          disableDotsControls={false}
          disableButtonsControls
          items={testimonials.map((t) => (
            <div key={t.name} className="p-8 bg-white rounded-xl shadow-2xl text-black mx-4">
              <p className="italic text-lg mb-4">“{t.quote}”</p>
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        />
      </motion.div>
    </section>

    {/* Solutions Grid */}
    <section className="py-20 px-4 md:px-8 bg-secondary text-white">
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
          Our complementary suite of solutions modernizes B2B operations and payments.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2">
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
                <div className="text-center">
                  <AnimatedButton
                    text="Learn More"
                    icon={FaNetworkWired}
                    className="inline-flex items-center"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default OurSolutionsPage;

