'use client';

import { ArrowRight, Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Quote */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-12 mb-12">
          <Quote className="w-12 h-12 text-secondary mb-6" />
          <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
            Marketing without data is just guessing. Data without action is just numbers. At Meegan Media, we turn data into strategies and strategies into measurable business growth.
          </p>
        </div>

        {/* Location Info */}
        <div className="text-center mb-12">
          <p className="text-white/90 text-lg mb-6">
            Based in Dehradun, Uttarakhand • Serving clients across India
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-gray-900 font-bold px-8 py-4 rounded-full transition duration-300 group"
          >
            <span>Start Your Growth Journey Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
