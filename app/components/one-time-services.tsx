'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCurrencyDetection } from '@/app/hooks/useCurrencyDetection';

const services = [
  {
    title: 'Website Development',
    description: 'Professional website design and development',
    prices: {
      inr: '₹ 45,000',
      usd: '$2,250',
    },
  },
  {
    title: 'Digital Marketing Audit',
    description: 'Complete digital presence analysis',
    prices: {
      inr: '₹ 15,000',
      usd: '$750',
    },
  },
  {
    title: 'Social Media Setup',
    description: 'Complete profile optimization (all platforms)',
    prices: {
      inr: '₹ 12,000',
      usd: '$600',
    },
  },
  {
    title: 'Brand Identity Package',
    description: 'Logo, colors, typography, brand guidelines',
    prices: {
      inr: '₹ 35,000',
      usd: '$1,750',
    },
  },
  {
    title: 'Campaign Setup',
    description: 'Google Ads or Meta Ads campaign setup',
    prices: {
      inr: '₹ 18,000',
      usd: '$900',
    },
  },
  {
    title: 'Content Strategy',
    description: '3-month content calendar + keyword strategy',
    prices: {
      inr: '₹ 20,000',
      usd: '$1,000',
    },
  },
];

export default function OneTimeServices() {
  const { currency, setCurrency, isLoading } = useCurrencyDetection();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            One-Time Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Launch faster with focused, fixed-scope work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Ideal for brands that need a quick setup or a strategic reset without a monthly retainer.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-1">
            <button
              type="button"
              onClick={() => setCurrency('inr')}
              aria-pressed={currency === 'inr'}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                currency === 'inr'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary'
              }`}
            >
              India (INR)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('usd')}
              aria-pressed={currency === 'usd'}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                currency === 'usd'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary'
              }`}
            >
              Global (USD)
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                {service.description}
              </p>
              <div className="mt-6">
                <span className="text-3xl font-bold text-primary">
                  {currency === 'inr' ? service.prices.inr : service.prices.usd}
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">one-time</span>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition bg-primary text-white hover:bg-primary/90"
                aria-label={`Get started with ${service.title}`}
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
