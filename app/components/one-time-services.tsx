'use client';
import Link from 'next/link';
import { useCurrencyDetection } from '@/app/hooks/useCurrencyDetection';

type OneTimeService = {
  title: string;
  description: string;
  prices: {
    inr: string;
    usd: string;
  };
};

type OneTimeServicesProps = {
  services: OneTimeService[];
  eyebrow: string;
  title: string;
  description: string;
};

export default function OneTimeServices({
  services,
  eyebrow,
  title,
  description,
}: OneTimeServicesProps) {
  const { currency } = useCurrencyDetection();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            {description}
          </p>
          <div className="mt-8 inline-flex rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-1">
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
