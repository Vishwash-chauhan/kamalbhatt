import React from 'react';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq-section py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <style>{`.faq-section details[open] .faq-chevron{transform:rotate(180deg);} .faq-section .faq-chevron{transform:rotate(0deg);transition:transform .2s ease-in-out;}`}</style>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">
          {title}
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden"
            >
              <summary className="cursor-pointer px-5 py-4 flex items-center justify-between text-left text-gray-900 dark:text-white">
                <span className="font-bold">{faq.question}</span>
                <svg aria-hidden="true" className="faq-chevron w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ml-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>

              <div className="px-5 pb-4 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
