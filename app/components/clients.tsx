'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

export default function Clients() {
  const clients = [
    { id: 1, name: 'ACC', logo: '/images/clients/ACC.png' },
    { id: 2, name: 'Adhiroha', logo: '/images/clients/Adhiroha.png' },
    { id: 3, name: 'Amogeo Solar', logo: '/images/clients/AMOGEO SOLAR.png' },
    { id: 4, name: 'Ananta Hills', logo: '/images/clients/Ananta Hills.png' },
    { id: 5, name: 'Bagwath Katha', logo: '/images/clients/Bagwath Katha.png' },
    { id: 6, name: 'Brigadier Defence Academy', logo: '/images/clients/Brigadier Defence Academy.png' },
    { id: 7, name: 'Equation IAS', logo: '/images/clients/Equation IAS.png' },
    { id: 8, name: 'Foodholic', logo: '/images/clients/FOODHOLIC.png' },
    { id: 9, name: 'Gamaholic', logo: '/images/clients/Gamaholic.png' },
    { id: 10, name: 'GEHU', logo: '/images/clients/GEHU.png' },
    { id: 11, name: 'GEU', logo: '/images/clients/GEU.png' },
    { id: 12, name: 'IMBA', logo: '/images/clients/IMBA.png' },
    { id: 13, name: 'Investor Clinic', logo: '/images/clients/Investor Clinic.png' },
    { id: 14, name: 'Kaylons', logo: '/images/clients/Kaylons.png' },
    { id: 15, name: 'Kia Ora', logo: '/images/clients/KIA ORA.png' },
    { id: 16, name: 'KJ Golf Cart', logo: '/images/clients/KJ GOLF CART.png' },
    { id: 17, name: 'Letsdiskuss', logo: '/images/clients/Letsdiskuss.png' },
    { id: 18, name: 'Meena Marbles', logo: '/images/clients/Meena Marbles.png' },
    { id: 19, name: 'MTB Clean', logo: '/images/clients/MTB Clean.png' },
    { id: 20, name: 'Orane', logo: '/images/clients/ORANE.png' },
    { id: 21, name: 'PMMITAS Society', logo: '/images/clients/PMMITAS Society.png' },
    { id: 22, name: 'Prasun Solar', logo: '/images/clients/PRASUN SOLAR.png' },
    { id: 23, name: 'Realty Bricks', logo: '/images/clients/Realty bricks.png' },
    { id: 24, name: 'Rentacartci', logo: '/images/clients/Rentacartci.png' },
    { id: 25, name: 'Sanova Consulting', logo: '/images/clients/SANOVA CONSULTANCY.png' },
    { id: 26, name: 'Sapphire International School', logo: '/images/clients/Sapphire International School.png' },
    { id: 27, name: 'SnapShopHub', logo: '/images/clients/SnapShopHub.png' },
    { id: 28, name: 'Sri Sri Wellbeing', logo: '/images/clients/SRI SRI WELLBEING.png' },
    { id: 29, name: 'TR Talent Hiring', logo: '/images/clients/TR Talent Hiring.png' },
    { id: 30, name: 'Udipi', logo: '/images/clients/Udipi.png' },
    { id: 31, name: 'Vindhya Solar', logo: '/images/clients/Vindhya Solar.png' },
    { id: 32, name: 'Winni Bakers', logo: '/images/clients/Winni Bakers.png' },
  ];

  return (
    <section 
      id="clients" 
      className="py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Clients
          </h2>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>

        {/* Clients Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="!pb-2"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex items-center justify-center p-6 h-32 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={112}
                  height={112}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
