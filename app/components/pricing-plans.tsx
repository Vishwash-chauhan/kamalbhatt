'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCurrencyDetection } from '@/app/hooks/useCurrencyDetection';

const plans = [
  {
    name: 'Starter',
    tagline: 'For small businesses',
    features: [
      'Local SEO optimization',
      'Google Business Profile setup',
      'Basic on-page SEO (10 pages)',
      'Monthly reporting',
      'Email support',
    ],
    ctaLabel: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Comprehensive SEO (25 pages)',
      'Google Ads or Meta Ads',
      'Content creation (4 articles/month)',
      'Social media management (2 platforms)',
      'Monthly strategy calls',
      'Advanced reporting',
    ],
    ctaLabel: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For established brands',
    features: [
      'Everything in Professional',
      'Full-service digital marketing',
      'Multi-platform ad management',
      'Advanced SEO (unlimited pages)',
      'Social media (all platforms)',
      'Dedicated account manager',
      'Priority support',
      'Quarterly strategy reviews',
    ],
    ctaLabel: 'Get Started',
    featured: false,
  },
];

const pricingByCurrency = {
  inr: {
    label: 'India Pricing (INR)',
    symbol: '₹',
    prices: ['25,000', '50,000', '95,000'],
  },
  usd: {
    label: 'Global Pricing (USD)',
    symbol: '$',
    prices: ['1,200', '2,500', '5,000'],
  },
} as const;

export default function PricingPlans() {
  const { currency, setCurrency, isLoading } = useCurrencyDetection();
  const currencyConfig = pricingByCurrency[currency];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            {currencyConfig.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Choose the plan for your growth
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Transparent monthly retainers built for predictable results and scalable performance.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-1">
            {/* <button
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
            </button> */}
            {/* <button
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
            </button> */}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border bg-gray-50 dark:bg-gray-900 p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.featured
                  ? 'border-secondary ring-1 ring-secondary/40'
                  : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-wide text-gray-900">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{plan.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  {currencyConfig.symbol} {currencyConfig.prices[index]}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/mo</span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-secondary text-gray-900 hover:bg-secondary/90'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
                aria-label={`${plan.ctaLabel} on ${plan.name} plan`}
              >
                {plan.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
