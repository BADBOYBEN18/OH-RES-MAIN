import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

export const Nav = () => {
  const location = useLocation();
  const path = location.pathname;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="shadow-sm bg-primary lg:backdrop-blur-lg fixed w-full top-0 z-50 py-1 md:py-2 lg:py-4"
      >
        {/* Mobile Nav with Animation */}
        <MobileNav handleOpen={handleOpen} isOpen={open} />

        <div className="px-4 max-w-7xl m-auto md:px-7 xl:px-8">
          <div className="py-2 flex items-center justify-between">
            <Link to="/">
              <div className="prevent-select">
                <p className="font-bold text-[16px] md:text-2xl text-maingreen">
                  OH-RES
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen hover:-translate-y-2 transition-all duration-300"
              >
                <p className={`${path === '/' ? 'text-maingreen' : ''}`}>Home</p>
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen hover:-translate-y-2 transition-all duration-300"
              >
                <p className={`${path === '/about' ? 'text-maingreen' : ''}`}>About</p>
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen hover:-translate-y-2 transition-all duration-300"
              >
                <p className={`${path === '/services' ? 'text-maingreen' : ''}`}>Solutions</p>
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen hover:-translate-y-2 transition-all duration-300"
              >
                <p className={`${path === '/contact' ? 'text-maingreen' : ''}`}>Partners</p>
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen hover:-translate-y-2 transition-all duration-300"
              >
                <p className={`${path === '/contact' ? 'text-maingreen' : ''}`}>Careers</p>
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 text-white text-[16px] hover:text-maingreen hover:-translate-y-2 transition-all duration-300"
              >
                <p className={`${path === '/contact' ? 'text-maingreen' : ''}`}>Contact</p>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <div className="lg:hidden cursor-pointer" onClick={handleOpen}>
              {open ? (
                <IoIosClose className="w-8 h-8" />
              ) : (
                <RxHamburgerMenu className="border-2 border-maingreen text-white rounded-full w-8 h-8 p-2" />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
