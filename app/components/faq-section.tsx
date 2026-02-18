'use client';

import React from 'react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  bgColor?: 'light' | 'dark';
}

export default function FAQSection({ 
  faqs, 
  title = 'Frequently Asked Questions',
  bgColor = 'light'
}: FAQSectionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const bgClasses = bgColor === 'light' 
    ? 'bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800'
    : 'bg-white dark:bg-gray-950';

  return (
    <section className={`py-24 ${bgClasses}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-200 ${
                bgColor === 'light'
                  ? 'bg-white dark:bg-gray-950'
                  : 'bg-gray-50 dark:bg-gray-900'
              }`}
            >
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-left">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                    expandedId === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {expandedId === index && (
                <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-800 ${
                  bgColor === 'light'
                    ? 'bg-gray-50 dark:bg-gray-900'
                    : 'bg-white dark:bg-gray-950'
                }`}>
                  <div className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
