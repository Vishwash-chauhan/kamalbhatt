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
    <section id="clients" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Our Clients
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto"></div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40} // Increased gap between logos
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }, // Fewer slides per view = bigger logos
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="flex items-center"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex items-center justify-center p-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200} // Increased base width
                  height={100}
                  className="h-20 w-auto md:h-28 object-contain" // Increased height from 16/24 to 20/28
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}