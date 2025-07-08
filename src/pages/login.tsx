import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUser, FaArrowRight } from 'react-icons/fa';

import AnimatedButton from '@/components/Button';
import { fadeInUp, staggerContainer } from '@/components/variants';

export default function SignInPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign In Attempt:', { userId, password });
    // Add sign-in logic here (e.g., Axios request)
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <main className="flex-grow flex items-center justify-center px-4 pt-24">
        <motion.div
          className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold text-center text-maingreen"
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
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
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

            <motion.div variants={fadeInUp}>
              <AnimatedButton text="Sign In" icon={FaArrowRight} />
            </motion.div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
