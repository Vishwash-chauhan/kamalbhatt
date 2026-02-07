'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Businesses Through Data-Driven Digital Marketing
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Hi, I'm <span className="font-bold">Kamal Bhatt</span> - Founder & CEO of <span className="font-bold">Meegan Media</span>, a digital marketing agency that's helped 100+ businesses across India achieve exponential growth through strategic SEO, Google Ads, and social media marketing.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-gray-900 font-bold px-8 py-4 rounded-full transition duration-300 group"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src="https://placehold.co/500x500?text=Kamal+Bhatt"
              alt="Kamal Bhatt"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
