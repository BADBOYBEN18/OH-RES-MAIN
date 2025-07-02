import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { IoIosClose } from 'react-icons/io';

interface MobileNavProps {
  handleOpen: () => void;
  isOpen: boolean;
}

const MobileNav = ({ handleOpen, isOpen }: MobileNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const goTo = (path: string) => {
    navigate(path);
    handleOpen();
  };

  return (
    <div
      className={`bg-white lg:hidden shadow-md text-black h-full fixed inset-0 z-[99] py-5 px-4 md:px-[3rem] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button and Logo */}
      <div className="flex justify-between mb-[2rem]">
        <Link to="/">
          <div className="text-xl lg:text-2xl font-bold text-[#198754]">
            OH-RES
          </div>
        </Link>
        <button onClick={handleOpen}>
          <IoIosClose className="w-8 h-8" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="mb-10 text-[14px] font-light cursor-pointer">
        <a
          onClick={() => goTo('/')}
          className={`${currentPath === '/' ? 'text-[#35a76c]' : ''}`}
        >
          <p>Home</p>
        </a>
        <br />
        <br />
        <a
          onClick={() => goTo('/about')}
          className={`${currentPath === '/about' ? 'text-[#35a76c]' : ''}`}
        >
          <p>About us</p>
        </a>
        <br />
        <br />
        <a
          onClick={() => goTo('/services')}
          className={`${currentPath === '/services' ? 'text-[#35a76c]' : ''}`}
        >
          <p>Services</p>
        </a>
        <br />
        <br />
        <a
          onClick={() => goTo('/contact')}
          className={`${currentPath === '/contact' ? 'text-[#35a76c]' : ''}`}
        >
          <p>Contact Us</p>
        </a>
      </div>

      {/* Stay in Touch Button */}
      <Link to="/contact">
        <button className="bg-[#35a76c] text-white text-[14px] py-[8px] px-[20px] rounded-lg">
          Get in Touch
        </button>
      </Link>
    </div>
  );
};

export default MobileNav;
