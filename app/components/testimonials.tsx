'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Hemant Seta',
      title: 'Head of Marketing',
      company: 'Nirmai Health Analytics',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237598/Hemant_Seta_xs6h2p.png',
      rating: 5,
      text: 'Kamal is a talented, hardworking and dedicated person. He knows the nuances of digital marketing very well and effectively puts them to use. He is cooperative and gels well with his fellow colleagues.',
    },
    {
      id: 2,
      name: 'Aditya Kanwal',
      title: 'Manager',
      company: 'Kayloons School of Beaulty',
      image: 'https://placehold.co/80x80?text=AK',
      rating: 5,
      text: 'Very nice service, professional and result-oriented approach ... Highly recommended !!!',
    },
    {
      id: 3,
      name: 'Aneesh Nair',
      title: 'Senior Manager',
      company: 'Art Of Living',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237597/Aneesh_Nair_tf4rtb.png',
      rating: 5,
      text: 'Kamal possesses a deep understanding of performance marketing strategies and consistently delivers outstanding results. His expertise in PPC, conversion rate optimization, attribution modeling etc. has been instrumental in driving ROI for our campaigns.',
    },
    {
      id: 4,
      name: 'Mehul Malviya',
      title: 'Manager',
      company: 'Sri Sri Tattva',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237599/Mehul_Malvia_ws6ef5.png',
      rating: 5,
      text: 'Kamal has been a very proactive teammate always ready to take up responsibility for his work in his area of expertise. Kamal directly managed and executed the ad campaigns on Google and Facebook and ensured deliverables as per the expected plan.',
    },
    {
      id: 5,
      name: 'Dr. Debasis Mitra',
      title: 'Founder & President',
      company: 'PMMITAS',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237597/Dr._Debasis_Mitra_f0xlba.png',
      rating: 5,
      text: 'Outstanding digital marketing service! From SEO to social media, they handle everything. Our coaching institute enrollments went from 50 to 180 per month. If you need reliable digital marketing service, this is the team to hire.',
    },
    {
      id: 6,
      name: 'Udit Kumar Chaturvedit',
      title: 'Consultant',
      company: 'Delloitte',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237599/Udit_Kumar_zjkn0a.png',
      rating: 5,
      text: 'Kamal sir has been a great colleague to work with. He has extensive knowledge of his domain & keeps on updating himself with the latest trends. As far as I observed, he has been a self-motivated & resourceful professional.',
    },
    {
      id: 7,
      name: 'Steven Buckley',
      title: 'Owner',
      company: 'MTB Clean, UK',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237598/Steven_Buckley_h8b5a1.png',
      rating: 5,
      text: 'Working with Meegan Media completely transformed our online presence. Within three months, our website traffic increased by 50%, and our leads have doubled. Their team is incredibly data-driven and responsive.'
    },
    {
      id: 8,
      name: 'Himanshi Verma',
      title: 'Executive',
      company: 'Graphic Era',
      image: 'https://placehold.co/80x80?text=HV',
      rating: 5,
      text: 'Great experience with this digital marketing firm. Kamal Sir helped me set up and optimize my friends Google Business Profile with complete professionalism. Excellent service and highly recommended'
    },
    {
      id: 9,
      name: 'Preeti Taneja',
      title: 'Founder',
      company: 'Letsdiskuss and SnapShopHub',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237598/Preeti_Taneja_wol4kx.png',
      rating: 5,
      text: 'You can trust this organisation for the thorough work they do. They give results.'
    },
    {
      id: 10,
      name: 'Dilip Kumar',
      title: 'Manager',
      company: 'Sanjay Ghodawat International School',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237597/Dilip_Kumar_ckgztt.png',
      rating: 5,
      text: 'Positive experience with this digital marketing agency. Their strategy is clear, execution is timely, and reporting is transparent. The team is responsive and easy to work with. Would definitely recommend.'
    },
    {
      id: 11,
      name: 'Aishwarya Khilwani',
      title: 'Owner',
      company: 'Mohraya',
      image: 'https://placehold.co/80x80?text=AK',
      rating: 5,
      text: 'Reached out to them for a Google-related problem. He solved it in 10 minutes. Thank you for your help.'
    },
    {
      id: 12,
      name: 'Anchal Rawat',
      title: 'Manager',
      company: 'Languafina',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771237597/Anchal_Rawat_takw3j.png',
      rating: 5,
      text: 'I had a great experience working with Meegan Media as a marketing agency. Their team is creative, professional, and truly understands brand positioning. Communication was smooth, and they delivered quality work on time.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real testimonials from businesses I've helped grow
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.testimonials-prev',
              nextEl: '.testimonials-next',
            }}
            pagination={{
              el: '.testimonials-pagination',
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
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 h-full min-h-115 flex flex-col">


                  {/* Author Info */}
                  <div className="pt-6 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-secondary font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6 mt-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  {/* Separator */}
                  <div className="h-px bg-gray-300 dark:bg-gray-700 mb-6"></div>
                  {/* Testimonial Text */}
                  <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          {/* <button
            className="testimonials-prev absolute left-0 top-1/3 -translate-y-1/2 -translate-x-12 md:translate-x-0 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition duration-300 flex items-center justify-center shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="testimonials-next absolute right-0 top-1/3 -translate-y-1/2 translate-x-12 md:translate-x-0 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition duration-300 flex items-center justify-center shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}

          {/* Pagination */}
          <div className="testimonials-pagination flex justify-center mt-8 gap-2"></div>
        </div>
      </div>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx>{`
        :global(.testimonials-pagination .swiper-pagination-bullet) {
          background-color: var(--primary, #1a4d8f) !important;
          opacity: 0.5 !important;
        }

        :global(.testimonials-pagination .swiper-pagination-bullet-active) {
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
