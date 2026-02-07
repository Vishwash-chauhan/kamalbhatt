'use client';

import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="Team working together"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            {/* Decorative Shape */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-lg"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Title with Accent Line */}
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                About Kamal Bhatt
              </h2>
              <div className="h-1 w-20 bg-secondary"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hi, I'm <span className="font-bold text-primary">Kamal Bhatt</span> - Founder & CEO of <span className="font-bold text-primary">Meegan Media</span>. I've had the privilege of helping 100+ businesses across India achieve exponential growth through strategic SEO, Google Ads, and social media marketing.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              With a passion for digital innovation and a deep understanding of the Indian market, I've developed a proven methodology that combines data-driven insights with creative excellence. Whether you're a startup looking to establish your digital presence or an established business aiming to scale, I specialize in creating customized strategies that deliver measurable results and sustainable growth. My focus is simple: your success is my success.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-400">Years Of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7X</div>
                <p className="text-gray-600 dark:text-gray-400">Average ROAS</p>
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
        </div>
      </div>
    </section>
  );
}
