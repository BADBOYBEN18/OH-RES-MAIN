import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#002c50] text-white font-sans">
      <Helmet>
        <title>OHRES - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top bg-[#002c50]/90 backdrop-blur-md">
        <div className="container">
          <a
            className="navbar-brand font-bold text-2xl text-[#6dfd83]"
            href="#"
          >
            OHRES
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-white hover:text-[#6dfd83] ml-4"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white hover:text-[#6dfd83] ml-4"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white hover:text-[#6dfd83] ml-4"
                  href="#"
                >
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white hover:text-[#6dfd83] ml-4"
                  href="#"
                >
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white hover:text-[#6dfd83] ml-4"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white hover:text-[#6dfd83] ml-4"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#001f38] via-[#002c50] to-[#003f66] animate-gradient-xy flex items-center py-16 px-5">
        <div className="container">
          <div className="row items-center">
            {/* LEFT: Text */}
            <div className="col-md-6 text-white" data-aos="fade-right">
              <h1 className="font-bold mb-3 text-4xl md:text-[42px]">
                Empowering SMEs With
                <br />
                <span className="text-[#6dfd83]">Smart EDI Automation</span>
              </h1>
              <p className="text-[#d8f8eb] text-lg mb-4">
                We simplify Electronic Data Interchange (EDI) for modern
                businesses — enabling fast, secure, and seamless integration
                across supply chains.
              </p>
              <a
                href="#about"
                className="btn bg-[#6dfd83] text-[#002c50] font-bold border-none mt-5 inline-flex items-center hover:bg-[#4cea68] hover:text-[#001f38]"
              >
                <i className="fas fa-arrow-right me-2"></i> Get Started
              </a>
            </div>

            {/* RIGHT: Image */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <div className="relative inline-block">
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-radial-gradient(circle, rgba(109,253,131,0.3), transparent) transform -translate-x-1/2 -translate-y-1/2 z-10 blur-xl"></div>
                <img
                  src="edd.png"
                  alt="OHRES Hero Visual"
                  className="img-fluid relative z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Key Highlights */}
      <section className="py-12 bg-white">
        <div className="container">
          {/* Left-Aligned Heading */}
          <div className="mb-12" data-aos="fade-right">
            <h5 className="text-[#6dfd83] uppercase tracking-wider">
              Our Core Strengths
            </h5>
            <h2 className="font-bold text-3xl">
              Designed for <span className="text-[#6dfd83]">Scalability</span>,{' '}
              <span className="text-[#002c50]">Security</span>, and{' '}
              <span className="text-[#6dfd83]">Simplicity</span>
            </h2>
          </div>

          {/* Highlights Row */}
          <div className="row text-center">
            {/* Box 1 */}
            <div className="col-md-4 mb-8" data-aos="fade-up">
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full min-h-[360px]">
                <div className="bg-[#6dfd83] text-[#002c50] w-14 h-14 text-xl rounded-full flex items-center justify-center mb-3 shadow-lg shadow-[#6dfd83]/50 mx-auto">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h5 className="font-bold text-[#002c50]">
                  Seamless Integration
                </h5>
                <p className="text-gray-600">
                  Connect effortlessly with suppliers, clients, and third-party
                  platforms without disruption.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2820/2820486.png"
                  className="absolute bottom-2 right-2 w-12 opacity-5 pointer-events-none"
                  alt=""
                />
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="col-md-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full min-h-[360px]">
                <div className="bg-[#6dfd83] text-[#002c50] w-14 h-14 text-xl rounded-full flex items-center justify-center mb-3 shadow-lg shadow-[#6dfd83]/50 mx-auto">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5 className="font-bold text-[#002c50]">Data Security</h5>
                <p className="text-gray-600">
                  End-to-end encryption, compliance-ready systems, and real-time
                  transaction tracking.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                  className="absolute bottom-2 right-2 w-12 opacity-5 pointer-events-none"
                  alt=""
                />
              </div>
            </div>

            {/* Box 3 */}
            <div
              className="col-md-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full min-h-[360px]">
                <div className="bg-[#6dfd83] text-[#002c50] w-14 h-14 text-xl rounded-full flex items-center justify-center mb-3 shadow-lg shadow-[#6dfd83]/50 mx-auto">
                  <i className="fas fa-robot"></i>
                </div>
                <h5 className="font-bold text-[#002c50]">Process Automation</h5>
                <p className="text-gray-600">
                  Automate purchase orders, invoices, acknowledgments, and more
                  with zero manual stress.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1803/1803610.png"
                  className="absolute bottom-2 right-2 w-12 opacity-5 pointer-events-none"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Intro Text */}
      <section className="py-12 bg-white">
        <div className="container text-center">
          <div
            className="w-14 h-1 bg-[#6dfd83] rounded-full mb-5 mx-auto"
            data-aos="zoom-in"
          ></div>
          <h4
            className="text-[#6dfd83] uppercase tracking-wider mb-2"
            data-aos="fade-up"
          >
            Who We Are
          </h4>
          <h2
            className="font-bold text-3xl mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Modernizing <span className="text-[#002c50]">EDI</span> for Growing
            Businesses
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto text-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At OHRES, we deliver{' '}
            <span className="text-[#6dfd83] font-medium">impact-driven</span>{' '}
            <span className="text-[#6dfd83] font-medium">EDI solutions</span>{' '}
            that simplify communication between systems. With a focus on{' '}
            <span className="text-[#6dfd83] font-medium">automation</span>,{' '}
            <span className="text-[#6dfd83] font-medium">security</span>, and{' '}
            <span className="text-[#6dfd83] font-medium">scalability</span>, we
            help companies thrive in today's fast-paced digital space.
          </p>
        </div>
      </section>

      {/* Section: Dual EDI Strengths */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="row items-stretch text-center">
            {/* LEFT BOX */}
            <div className="col-md-4 mb-8" data-aos="fade-right">
              <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full p-6">
                <i className="fas fa-sliders-h text-2xl text-[#6dfd83] mb-3"></i>
                <h5 className="font-bold text-[#002c50]">
                  Custom EDI Workflows
                </h5>
                <p className="text-gray-600">
                  Tailored integrations built around your operations — for
                  seamless, automated business communications.
                </p>
              </div>
            </div>

            {/* CENTER TEXT BOX */}
            <div className="col-md-4 mb-8" data-aos="zoom-in">
              <div className="bg-[#f4fdf7] border-2 border-dashed border-[#6dfd83] rounded-lg p-8 h-full shadow">
                <h5 className="font-bold text-[#6dfd83] mb-2">
                  What Sets OHRES Apart
                </h5>
                <p className="text-gray-600">
                  We merge <span className="text-[#002c50]">automation</span>{' '}
                  and <span className="text-[#6dfd83]">precision</span> to
                  deliver powerful, scalable EDI infrastructures that simplify
                  growth.
                </p>
              </div>
            </div>

            {/* RIGHT BOX */}
            <div className="col-md-4 mb-8" data-aos="fade-left">
              <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full p-6">
                <i className="fas fa-exchange-alt text-2xl text-[#6dfd83] mb-3"></i>
                <h5 className="font-bold text-[#002c50]">
                  Automated Data Flow
                </h5>
                <p className="text-gray-600">
                  Minimize manual work, reduce delays, and eliminate errors with
                  real-time data exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: About Us (Flipped Layout) */}
      <section className="py-12 bg-[#f5f8f9]">
        <div className="container">
          <div className="row items-center">
            {/* Image Left */}
            <div className="col-md-6 mb-8 md:mb-0" data-aos="fade-right">
              <img
                src="https://via.placeholder.com/500x350"
                alt="About Image"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Text Right */}
            <div className="col-md-6" data-aos="fade-left">
              <h4 className="text-[#6dfd83] uppercase tracking-wider mb-2">
                About Us
              </h4>
              <h2 className="font-bold text-3xl text-[#002c50] mb-3">
                Redefining Resource Solutions
              </h2>
              <p className="text-[#002c50]">
                OHRES is more than just a solutions provider — we're a
                future-driven team reshaping how Africa accesses and manages its
                natural resources. From green infrastructure to energy
                optimization, we help governments, communities, and businesses
                lead with impact.
              </p>
              <a
                href="#contact"
                className="btn bg-[#6dfd83] text-[#002c50] font-bold mt-3 hover:bg-[#4cea68]"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-8 bg-[#002c50]">
        <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-start">
          {/* Left Text */}
          <h4 className="mb-4 md:mb-0 text-white font-bold text-xl md:text-2xl">
            Ready to simplify your business with smart EDI solutions?
          </h4>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn bg-[#318eac] text-white font-bold px-8 py-3 rounded-full hover:bg-[#2a7d98] transition-colors"
          >
            <i className="fas fa-paper-plane me-2"></i> Let's Talk
          </a>
        </div>
      </section>

      {/* SECTION: Industries We Serve */}
      <section className="py-12 bg-white">
        <div className="container">
          {/* Centered Heading */}
          <div className="mb-12 text-center" data-aos="fade-up">
            <h5 className="text-[#6dfd83] uppercase tracking-wider">
              Industries We Serve
            </h5>
            <h2 className="font-bold text-3xl">Smart EDI for Every Industry</h2>
            <p className="text-gray-600">
              From supply chains to hospitals, our platform powers seamless
              communication between systems.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="row">
            {/* Card 1: Retail */}
            <div className="col-md-4 mb-8" data-aos="fade-up">
              <div className="bg-[#002c50] text-white text-center p-6 rounded-xl shadow-md hover:bg-[#00406f] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <i className="fas fa-shopping-cart text-2xl mb-3 text-white"></i>
                <h5 className="font-bold mb-2">Retail</h5>
                <p className="text-sm">
                  Automate orders, invoices, and inventory data across supply
                  chains.
                </p>
                <img
                  src="images/retail.jpg"
                  alt="Retail"
                  className="img-fluid rounded mt-3"
                />
              </div>
            </div>

            {/* Card 2: Healthcare */}
            <div
              className="col-md-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-[#002c50] text-white text-center p-6 rounded-xl shadow-md hover:bg-[#00406f] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <i className="fas fa-heartbeat text-2xl mb-3 text-white"></i>
                <h5 className="font-bold mb-2">Healthcare</h5>
                <p className="text-sm">
                  Transmit claims, prescriptions, and lab data securely and
                  fast.
                </p>
                <img
                  src="images/health.jpg"
                  alt="Healthcare"
                  className="img-fluid rounded mt-3"
                />
              </div>
            </div>

            {/* Card 3: Logistics */}
            <div
              className="col-md-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#002c50] text-white text-center p-6 rounded-xl shadow-md hover:bg-[#00406f] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <i className="fas fa-truck text-2xl mb-3 text-white"></i>
                <h5 className="font-bold mb-2">Logistics</h5>
                <p className="text-sm">
                  Track shipments and manage transport updates in real time.
                </p>
                <img
                  src="images/cargo.jpg"
                  alt="Logistics"
                  className="img-fluid rounded mt-3"
                />
              </div>
            </div>

            {/* Card 4: Finance */}
            <div className="col-md-4 mb-8" data-aos="fade-up">
              <div className="bg-[#002c50] text-white text-center p-6 rounded-xl shadow-md hover:bg-[#00406f] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <i className="fas fa-university text-2xl mb-3 text-white"></i>
                <h5 className="font-bold mb-2">Finance</h5>
                <p className="text-sm">
                  Streamline financial reports, remittances, and
                  reconciliations.
                </p>
                <img
                  src="images/finance.jpg"
                  alt="Finance"
                  className="img-fluid rounded mt-3"
                />
              </div>
            </div>

            {/* Card 5: Manufacturing */}
            <div
              className="col-md-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-[#002c50] text-white text-center p-6 rounded-xl shadow-md hover:bg-[#00406f] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <i className="fas fa-cogs text-2xl mb-3 text-white"></i>
                <h5 className="font-bold mb-2">Manufacturing</h5>
                <p className="text-sm">
                  Connect factories with vendors for just-in-time data exchange.
                </p>
                <img
                  src="images/machine.jpg"
                  alt="Manufacturing"
                  className="img-fluid rounded mt-3"
                />
              </div>
            </div>

            {/* Card 6: E-Commerce */}
            <div
              className="col-md-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#002c50] text-white text-center p-6 rounded-xl shadow-md hover:bg-[#00406f] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <i className="fas fa-globe text-2xl mb-3 text-white"></i>
                <h5 className="font-bold mb-2">E-Commerce</h5>
                <p className="text-sm">
                  Exchange product feeds, order data, and delivery statuses
                  globally.
                </p>
                <img
                  src="images/shop.jpg"
                  alt="E-Commerce"
                  className="img-fluid rounded mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How It Works */}
      <section className="py-12 bg-[#f0f8f5]">
        <div className="container">
          <div className="row items-center">
            {/* Left: Steps */}
            <div className="col-md-6" data-aos="fade-right">
              <h5 className="text-[#6dfd83] uppercase tracking-wider mb-2">
                How It Works
              </h5>
              <h2 className="font-bold text-3xl text-[#002c50] mb-4">
                A Simple, Streamlined EDI Process
              </h2>

              <div className="mb-6 flex">
                <div className="me-4">
                  <div className="rounded-full bg-[#6dfd83] text-white w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-file-alt"></i>
                  </div>
                </div>
                <div>
                  <h6 className="font-bold text-[#002c50]">
                    1. Document Preparation
                  </h6>
                  <p className="text-[#002c50]">
                    Business documents are converted to EDI-ready format for
                    seamless processing.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex">
                <div className="me-4">
                  <div className="rounded-full bg-[#6dfd83] text-white w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-lock"></i>
                  </div>
                </div>
                <div>
                  <h6 className="font-bold text-[#002c50]">
                    2. Secure Transmission
                  </h6>
                  <p className="text-[#002c50]">
                    Files are encrypted and securely sent through trusted
                    communication channels.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex">
                <div className="me-4">
                  <div className="rounded-full bg-[#6dfd83] text-white w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                </div>
                <div>
                  <h6 className="font-bold text-[#002c50]">3. Integration</h6>
                  <p className="text-[#002c50]">
                    The data is automatically routed into your internal systems
                    (ERP, CRM, etc).
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="me-4">
                  <div className="rounded-full bg-[#6dfd83] text-white w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
                <div>
                  <h6 className="font-bold text-[#002c50]">4. Confirmation</h6>
                  <p className="text-[#002c50]">
                    Acknowledgments or response files are sent back
                    automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src="https://via.placeholder.com/500x350"
                alt="EDI Process"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#001f38] text-white py-16">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-8">
              <h4 className="font-bold text-[#6dfd83] mb-4">OHRES</h4>
              <p className="text-sm leading-relaxed">
                Delivering secure, automated, and scalable EDI solutions to
                simplify how businesses communicate and grow.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-8">
              <h5 className="font-bold text-white mb-4">Quick Links</h5>
              <ul className="list-unstyled text-sm leading-loose">
                <li>
                  <a href="#about" className="text-white hover:text-[#6dfd83]">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#usecases"
                    className="text-white hover:text-[#6dfd83]"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#howitworks"
                    className="text-white hover:text-[#6dfd83]"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover:text-[#6dfd83]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-8">
              <h5 className="font-bold text-white mb-4">Contact</h5>
              <p className="text-sm">
                <i className="fas fa-envelope me-2 text-[#6dfd83]"></i>{' '}
                support@ohres.com
              </p>
              <p className="text-sm">
                <i className="fas fa-phone me-2 text-[#6dfd83]"></i> +234 812
                345 6789
              </p>
              <p className="text-sm">
                <i className="fas fa-map-marker-alt me-2 text-[#6dfd83]"></i>{' '}
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          <hr className="border-white/10 my-8" />

          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} OHRES. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Bootstrap & AOS Scripts */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

