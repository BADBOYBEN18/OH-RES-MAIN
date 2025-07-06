// Footer.tsx

import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export const Footer = ({ year }: { year: number }) => {
  return (
    <div className="bg-[#172026]/95 text-white">
      <footer className="max-w-7xl mx-auto px-4 py-12 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#198754]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#198754] transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#198754] transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="hover:text-[#198754] transition-all"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#198754] transition-all"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#198754]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex md:items-center lg:items-start gap-2">
                <MdLocationOn className="text-[#198754] lg:text-[1.5rem]" />
                <span>Victoria Island, Lagos</span>
              </li>
              <li className="flex md:items-center lg:items-start gap-2">
                <MdPhone className="text-[#198754] lg:text-[1.5rem]" />
                <span> +234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-[#198754]" />
                <span>support@ohres.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 lg:ml-[3rem]">
            <h3 className="text-lg font-semibold text-[#198754]">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-white hover:text-[#198754] transition-all"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#198754] transition-all"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#198754] transition-all"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="/"
                className="text-white hover:text-[#198754] transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Branding & CTA */}
          <div className="space-y-4">
            <div className="mb-4">
              <Link to="/">
                <div className="prevent-select text-xl lg:text-2xl font-bold text-[#198754] mb-2 flex items-center gap-2">
                  OH-RES
                </div>
              </Link>
              <p className="text-sm font-medium">
                Delivering secure, automated, and scalable EDI solutions to
                simplify how businesses communicate and grow.
              </p>
            </div>

            <p className="text-sm font-medium mb-4">
              <span className="text-[#198754]">©</span> {year} OH-RES.
              <br /> All Rights Reserved.
            </p>

            <Link to="/contact" className="block mt-4">
              <button className="bg-[#198754] text-white text-sm md:text-base py-2 px-6 rounded-lg hover:bg-[#3aa371] transition-all duration-300">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
