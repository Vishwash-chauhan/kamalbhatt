'use client';

import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function WhatIDo() {
  const painPoints = [
    'Frustrated with poor ROI from digital campaigns',
    'Overwhelmed by the complexity of SEO and paid ads',
    'Struggling to generate consistent, qualified leads',
    'Tired of agencies that over-promise and under-deliver',
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://placehold.co/500x500?text=What+I+Do"
              alt="What I Do"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <div className="h-1 w-20 bg-secondary mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I help business owners and marketing leaders who are:
            </p>

            {/* Pain Points */}
            <div className="space-y-4 mb-10">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300 text-lg">{point}</p>
                </div>
              ))}
            </div>

            {/* Approach */}
            <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg border-l-4 border-secondary">
              <p className="text-gray-900 dark:text-white font-bold text-lg mb-4">
                My approach is simple:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-primary">Transparent strategies</span> + 
                <span className="font-semibold text-primary"> measurable results</span> + 
                <span className="font-semibold text-primary"> continuous optimization</span> = 
                <span className="font-semibold text-secondary"> sustainable business growth</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
