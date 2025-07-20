import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaArrowRight, FaUserCircle } from 'react-icons/fa';

import { Nav } from '@/components/Nav';
import AnimatedButton from '@/components/Button';
import { fadeInUp, staggerContainer } from '@/components/variants';
import { useAuthForm } from '@/hooks/useAuthForm';

export default function SignInPage() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    handleSubmit,
  } = useAuthForm({
    route: "/api/token/",
    method: "login",
  });

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Nav />

      <main className="flex-grow flex items-center justify-center px-4 pt-24">
        <motion.div
          className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-10 space-y-8 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <FaUserCircle className="text-maingreen bg-white rounded-full shadow-lg" size={100} />
          </div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-maingreen mt-16"
          >
            Sign In to Your Account
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={fadeInUp} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <FaUser /> User ID
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your user ID"
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
                placeholder="Enter your password"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-maingreen"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <AnimatedButton text={loading ? "Signing In..." : "Sign In"} icon={FaArrowRight} />
            </motion.div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}

