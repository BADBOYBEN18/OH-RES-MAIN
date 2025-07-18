// 'use client';
import { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@oh-res.com?
    )}&body=${encodeURIComponent(
      `Contact Details:\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
  };

  return (
    <section className=" py-8 lg:py-10 xl:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left Column - Contact Form */}
        <div className="flex flex-col">
          <div className="">
            <h1 className="text-[2rem]  md:text-[3rem] font-bold text-[#4dbf88] tracking-wider mb-4 ">
              OH-RES
            </h1>
            <div className="space-y-4 lg:space-y-6">
              <p>Send us an Email, call or fill the form to reach out to us!</p>
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#4dbf88] mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">Victoria Island, Lagos</p>
                </div>
              </div>
              <div className="flex items-start ">
                <MdOutlineEmail className="mr-3 h-6 w-6 text-green-500" />

                <div>
                  <h4 className="font-medium text-gray-900">Our Email</h4>
                  <p className="text-gray-600">info@oh-res.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#4dbf88] mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Our phone lines</h4>
                  <p className="text-gray-600">+234 812 345 6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#4dbf88] mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM WAT
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row  justify-center  mt-7 md:mt-8 lg:mt-10 gap-5 lg:gap-2 ">
              <div>
                <h1
                  className="
                font-bold  mb-2 leading-5
                "
                >
                  Customer support
                </h1>
                <p className="text-gray-600 font-light text-sm">
                  our support team is available around the clock to address any
                  issues you may have
                </p>
              </div>

              <div>
                <h1
                  className="
                font-bold  mb-2"
                >
                  Feedback and Suggestions
                </h1>
                <p className="text-gray-600 font-light text-sm">
                  We value your feedback and are continuosly working to improve
                  our services. Your input is crucial to shaping the future of
                  our company
                </p>
              </div>

              <div>
                <h1
                  className="
                font-bold  mb-2"
                >
                  Fast Response Times
                </h1>
                <p className="text-gray-600 text-sm font-light">
                  We guarantee responses to all inquiries within 2 hours during
                  business hours, and 12 hours maximum on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Info */}
        <motion.div
          initial={{ opacity: 0, translateY: 100, y: 20 }}
          animate={{ opacity: 1, translateY: 0, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg p-8 border-t-5 border-[#4dbf88]"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Us at OH-RES
          </h2>
          <p className=" mb-6">
            Complete this form and our team will respond within 24 business
            hours of.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md "
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md "
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md "
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md "
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md "
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="bg-[#4dbf88] hover:bg-[#3aa371] text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Submit Inquiry
              </button>
              <button
                type="button"
                onClick={() => setShowEmail(!showEmail)}
                className="ml-4 text-[#4dbf88] hover:text-[#3aa371] text-sm font-medium "
              >
                {showEmail ? 'Hide Direct Email' : 'Contact Directly'}
              </button>
            </div>

            {showEmail && (
              <div className="bg-[#f0f9f5] p-4 rounded-md border border-blue-200 ">
                <p className="text-sm mb-2">Email our team directly at:</p>
                <a
                  href="mailto:info@oh-res.com"
                  className="font-medium break-all hover:underline"
                >
                  info@oh-res.com
                </a>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
