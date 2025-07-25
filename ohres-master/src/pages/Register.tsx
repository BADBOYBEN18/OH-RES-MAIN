import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

import { Nav } from '@/components/Nav';
import AnimatedButton from '@/components/Button';
import { Footer } from '@/components/Footer';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { useAuthForm } from '@/hooks/useAuthForm';
import Layout from '@/components/Layout';
import { SeoHead } from '@/components/SeoPage';

export default function RegisterPage() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit,
  } = useAuthForm({
    route: '/api/user/register/',
    method: 'register',
  });

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-secondary">
        <SeoHead title="Register" description="Register page for OH-Res ltd" />
        <main className="flex-grow flex items-center justify-center px-4 py-20 pt-24 lg:pt-36 ">
          <motion.div
            className="bg-white rounded-2xl ring-1 ring-white/20 shadow-lg shadow-white/20 w-full max-w-xl p-10 space-y-8  border-t-[1rem] border-[#4dbf88] "
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl lg:text-3xl font-bold text-center text-[#28a53b]"
            >
              Create an Account
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUp} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <FaUser /> Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose a username"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-maingreen"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <FaEnvelope /> Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-maingreen"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <FaLock /> Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-maingreen"
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <AnimatedButton
                  text={loading ? 'Registering...' : 'Register'}
                  icon={FaArrowRight}
                />
              </motion.div>
            </form>
          </motion.div>
        </main>
      </div>
    </Layout>
  );
}
