'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Client 1',
      logo: 'https://via.placeholder.com/200x100?text=Client+1',
    },
    {
      id: 2,
      name: 'Client 2',
      logo: 'https://via.placeholder.com/200x100?text=Client+2',
    },
    {
      id: 3,
      name: 'Client 3',
      logo: 'https://via.placeholder.com/200x100?text=Client+3',
    },
    {
      id: 4,
      name: 'Client 4',
      logo: 'https://via.placeholder.com/200x100?text=Client+4',
    },
    {
      id: 5,
      name: 'Client 5',
      logo: 'https://via.placeholder.com/200x100?text=Client+5',
    },
    {
      id: 6,
      name: 'Client 6',
      logo: 'https://via.placeholder.com/200x100?text=Client+6',
    },
    {
      id: 7,
      name: 'Client 7',
      logo: 'https://via.placeholder.com/200x100?text=Client+7',
    },
    {
      id: 8,
      name: 'Client 8',
      logo: 'https://via.placeholder.com/200x100?text=Client+8',
    },
    {
      id: 9,
      name: 'Client 9',
      logo: 'https://via.placeholder.com/200x100?text=Client+9',
    },
    {
      id: 10,
      name: 'Client 10',
      logo: 'https://via.placeholder.com/200x100?text=Client+10',
    },
    {
      id: 11,
      name: 'Client 11',
      logo: 'https://via.placeholder.com/200x100?text=Client+11',
    },
    {
      id: 12,
      name: 'Client 12',
      logo: 'https://via.placeholder.com/200x100?text=Client+12',
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join hundreds of businesses that trust us to grow their digital presence
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: '.clients-prev',
              nextEl: '.clients-next',
            }}
            pagination={{
              el: '.clients-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="!pb-16"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 h-32">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full h-auto max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="clients-pagination flex justify-center mt-8 gap-2"></div>
        </div>
      </div>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx>{`
        :global(.clients-pagination .swiper-pagination-bullet) {
          background-color: var(--primary, #1a4d8f) !important;
          opacity: 0.5 !important;
        }

        :global(.clients-pagination .swiper-pagination-bullet-active) {
          background-color: var(--primary, #1a4d8f) !important;
          opacity: 1 !important;
        }

        :global(.swiper-button-disabled) {
          opacity: 0.5 !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </section>
  );
}
