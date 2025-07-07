import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const slides = [
    {
      icon: '💼',
      title: 'Why We Exist',
      description:
        'We started OHRES to simplify how businesses exchange data — no more outdated systems or complex setups.',
    },
    {
      icon: '⚙️',
      title: 'How We Work',
      description:
        'We integrate with your infrastructure, automate document flows, and reduce errors with smarter B2B connectivity.',
    },
    {
      icon: '⚡',
      title: 'What Makes Us Different',
      description:
        'Built for speed, scale, and simplicity — our EDI solutions let you grow without limits or manual stress.',
    },
  ];

  return (
    <section className="relative max-w-[700px] mx-auto ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 flex flex-col items-center text-center mx-auto max-w-[700px] bg-white rounded-lg">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl">
                {slide.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {slide.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev !hidden lg:!flex !left-0 lg:!left-[-80px] !text-secondary"></div>
      <div className="swiper-button-next !hidden lg:!flex !right-0 lg:!right-[-80px] !text-secondary"></div>

      {/* Custom CSS for Arrows */}
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 10;
          cursor: pointer;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 1.5rem;
          font-weight: bold;
        }

        @media (min-width: 1024px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
};

export default Carousel;
