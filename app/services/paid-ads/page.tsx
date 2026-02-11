import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTA from '@/app/components/cta';
import Clients from '@/app/components/clients';
import Testimonials from '@/app/components/testimonials';
import AboutService from '@/app/components/about-service';
import ProcessSection from '@/app/components/process-section';
import ServicesSection from '@/app/components/services-section';
import FAQSection from '@/app/components/faq-section';
import OneTimeServices from '@/app/components/one-time-services';
import PricingPlans from '@/app/components/pricing-plans';

export const metadata: Metadata = {
  title: 'Paid Ads Services | Google Ads, Meta Ads, LinkedIn Ads | Kamal Bhatt',
  description: 'Maximize ROI with targeted paid advertising campaigns on Google, Meta, and LinkedIn platforms.',
};

const paidAdServices = [
  {
    title: 'Google Ads',
    slug: 'google-ads',
    description: 'High-intent search and display campaigns optimized for conversions and ROI.',
    highlights: [
      'Search campaign optimization',
      'Performance Max campaigns',
      'Display and remarketing',
      'Conversion tracking setup',
    ],
    image: 'https://placehold.co/560x360?text=Google+Ads',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Meta Ads',
    slug: 'meta-ads',
    description: 'Facebook and Instagram ads designed to reach your ideal audience and drive engagement.',
    highlights: [
      'Audience targeting and segmentation',
      'Creative testing and optimization',
      'Conversion API setup',
      'Funnel optimization',
    ],
    image: 'https://placehold.co/560x360?text=Meta+Ads',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'LinkedIn Ads',
    slug: 'linkedin-ads',
    description: 'B2B advertising campaigns that connect with professionals and decision-makers.',
    highlights: [
      'Account-based marketing',
      'Lead generation campaigns',
      'Sponsored content optimization',
      'Conversion tracking and ROI',
    ],
    image: 'https://placehold.co/560x360?text=LinkedIn+Ads',
    color: 'from-blue-600 to-cyan-500',
  },
];

export default function PaidAdsPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Paid Advertising
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Performance Paid Ads
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Turn ad spend into predictable revenue growth across Google, Meta, and LinkedIn.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our paid media programs are built to reduce wasted spend and increase lead quality. From account audits to landing page optimization, we align every click to your business goals.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">2-4</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Weeks to optimize core campaigns</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Conversion signals tracked</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Average ROAS target range</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Always-on lead generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutService 
        slug="paid-ads"
        title="Performance Paid Ads"
        description="Our paid media programs are built to reduce wasted spend and increase lead quality."
      />
     <ServicesSection />

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Ad Platforms
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the platform that fits your business goals, or combine multiple channels for maximum reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidAdServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/paid-ads/${service.slug}`}
                className="group"
              >
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br to-white dark:to-gray-950 overflow-hidden hover:border-primary transition-all duration-300 h-full flex flex-col hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg mt-0.5">•</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        heading="Our Paid Ads Strategy"
        description="Data-driven campaigns optimized for maximum ROI and lead quality."
        steps={[
          {
            title: 'Audit & Strategy',
            details: 'Review current account health, competitors, and offer positioning to define the target CPA/ROAS.',
          },
          {
            title: 'Build & Launch',
            details: 'Ship a structured campaign build with clean tracking, pixel setup, and conversion goals.',
          },
          {
            title: 'Test & Optimize',
            details: 'Run creative and audience tests to improve CTR, CVR, and cost efficiency.',
          },
          {
            title: 'Scale & Refine',
            details: 'Reinvest into top performers, expand audiences, and optimize landing pages for lift.',
          },
        ]}
      />

      <PricingPlans />
      <OneTimeServices />
      <Clients />
      <Testimonials />
      {/* FAQ Section */}

    </main>
  );
}
