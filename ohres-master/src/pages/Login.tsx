import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaArrowRight, FaUserCircle } from 'react-icons/fa';

import { Nav } from '@/components/Nav';
import AnimatedButton from '@/components/Button';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { useAuthForm } from '@/hooks/useAuthForm';
import { SeoHead } from '@/components/SeoPage';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Login() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    handleSubmit,
  } = useAuthForm({
    route: '/api/token/',
    method: 'login',
  });

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-secondary ">
        <SeoHead title="Login" description="Login page for OH-Res ltd" />
        <main className="flex-grow flex items-center justify-center px-4 pt-24">
          <motion.div
            className="bg-white rounded-lg ring-1 ring-white/20 shadow-lg shadow-white/20 w-full max-w-md p-8 space-y-6   border-t-8 border-[#4dbf88]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl lg:text-3xl font-bold  text-[#28a53b]"
            >
              Sign In to Your Account
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={fadeInUp} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <FaUser /> User ID
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your user ID"
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-maingreen"
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
                  placeholder="Enter your password"
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-maingreen"
                  required
                />
              </motion.div>

              <motion.div className="space-y-2" variants={fadeInUp}>
                <AnimatedButton
                  text={loading ? 'Signing In...' : 'Sign In'}
                  icon={FaArrowRight}
                />
                <Link
                  className="hover:underline text-[#00203b]/80"
                  to="/register"
                >
                  Don't have an account? Register a new account
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </main>
      </div>
    </Layout>
  );
}
