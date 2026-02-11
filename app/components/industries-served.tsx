'use client';

import { CheckCircle } from 'lucide-react';

export default function IndustriesServed() {
  const industries = [
    {
      name: 'EdTech & Coaching Institutes',
      growth: '320%+ Enrollment Growth',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770808204/1_ozep0p.svg',
    },
    {
      name: 'E-commerce & D2C Brands',
      growth: '₹2.5Cr+ Revenue Increases',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770808205/2_aslzx0.svg',
    },
    {
      name: 'Healthcare & Wellness',
      growth: '450% Lead Generation Boost',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770808205/3_yr1npj.svg',
    },
    {
      name: 'Real Estate & Property',
      growth: '250%+ Inquiry Growth',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770808208/4_weh92p.svg',
    },
    {
      name: 'SaaS & Professional Services',
      growth: '280% Qualified Leads',
      image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770808206/5_vawhkt.svg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proven expertise across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {industry.name}
                    </h3>
                  </div>
                </div>

                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Results:
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {industry.growth}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
