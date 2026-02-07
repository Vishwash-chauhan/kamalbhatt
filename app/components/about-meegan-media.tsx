'use client';

import { ArrowRight } from 'lucide-react';

export default function AboutMeeganMedia() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Title with Accent Line */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                About Meegan Media
              </h2>
              <div className="h-1 w-20 bg-secondary"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Meegan Media is a full-service digital marketing agency dedicated to empowering businesses with innovative digital solutions. We combine creativity, strategy, and cutting-edge technology to help brands achieve their goals and exceed their expectations.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our team of experienced professionals specializes in delivering comprehensive digital marketing strategies tailored to your business needs. From brand strategy and web development to paid advertising and content creation, we provide end-to-end solutions that drive real business results and sustainable growth.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Data-driven strategies that deliver measurable ROI</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Dedicated team of marketing experts and innovators</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">Proven track record across diverse industries</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-primary text-white font-bold px-6 py-3 rounded-full transition duration-300 group"
            >
              <span>Read More</span>
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center group-hover:translate-x-1 transition">
                <ArrowRight className="w-5 h-5 text-gray-900" />
              </div>
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="Meegan Media Team"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            {/* Decorative Shape */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
