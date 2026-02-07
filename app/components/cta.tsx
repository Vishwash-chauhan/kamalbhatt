'use client';

import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 77, 143, 0.95) 0%, rgba(226, 127, 42, 0.1) 100%)`,
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-white/80 text-lg mb-4">
              Are you ready to take the big step towards your digital growth?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get Your Free Audit Now!
            </h2>

            {/* Support Info */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-900/60 rounded-full p-4 flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">+91 95487 65897</p>
              </div>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-secondary text-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition duration-300 group"
            >
              <span>Contact Us</span>
              <div className="bg-secondary group-hover:bg-gray-900 text-gray-900 group-hover:text-white rounded-full p-3 flex items-center justify-center transition duration-300">
                <ArrowRight className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
