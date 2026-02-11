import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Key, PenTool, Target, FileText, DollarSign, Users, Smartphone } from 'lucide-react';
import CTA from '@/app/components/cta';
import Testimonials from '@/app/components/testimonials';
import Clients from '@/app/components/clients';
import FAQSection from '@/app/components/faq-section';
import AboutService from '@/app/components/about-service';
import ProcessSection from '@/app/components/process-section';

const iconMap = {
  Building2,
  Key,
  PenTool,
  Target,
  FileText,
  DollarSign,
  Users,
  Smartphone,
};

export const metadata: Metadata = {
  title: 'Google Ads Services | Search & Display Campaigns | Kamal Bhatt',
  description: 'High-intent Google Ads campaigns optimized for conversions, lead generation, and ROI.',
};

export default function GoogleAdsPage() {
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
                Google Ads
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                High-intent search and display campaigns optimized for conversions and ROI.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Reach customers actively searching for your products or services. We handle keyword strategy, bid management, and conversion optimization to maximize your ad spend efficiency.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Book a Google Ads Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/paid-ads"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:border-primary transition"
                >
                  View All Ad Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">1-2</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Weeks to launch optimized campaigns</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">4-6</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Months to 3x+ ROAS</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Optimization points per account</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Automated bid management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutService
        slug="google-ads"
        title="Google Ads"
        description="High-intent search and display campaigns optimized for conversions and ROI."
      />

      {/* What We Do */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Include
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive Google Ads management for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Campaign Architecture',
                description: 'Structured campaigns built for scale, control, and easy optimization. We organize your account by conversion goals and audience segments.',
                iconName: 'Building2',
              },
              {
                title: 'Keyword Strategy',
                description: 'Comprehensive keyword research focused on high-intent, revenue-driving terms. Match types optimized for quality and volume.',
                iconName: 'Key',
              },
              {
                title: 'Ad Copy Testing',
                description: 'Data-driven ad variations tested across audiences. We optimize headlines, descriptions, and CTAs for maximum CTR and quality score.',
                iconName: 'PenTool',
              },
              {
                title: 'Conversion Tracking',
                description: 'Complete pixel setup and conversion tracking implementation. Monitor every action from click to purchase or lead submission.',
                iconName: 'Target',
              },
              {
                title: 'Landing Page Optimization',
                description: 'Recommendations for landing page improvements that increase conversion rates and reduce bounce rates.',
                iconName: 'FileText',
              },
              {
                title: 'Bid Management',
                description: 'Smart bidding strategies aligned with your CPA or ROAS goals. Automated optimization with manual oversight and control.',
                iconName: 'DollarSign',
              },
              {
                title: 'Audience Targeting',
                description: 'Refined audience segments, lookalike audiences, and remarketing strategies to reach high-value prospects.',
                iconName: 'Users',
              },
              {
                title: 'Performance Max',
                description: 'Multi-channel campaign setup running your ads across Search, Display, YouTube, Gmail, and Maps.',
                iconName: 'Smartphone',
              },
            ].map((item) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap];
              return (
              <div key={item.title} className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
                <Icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <ProcessSection
        heading="Our Google Ads Process"
        description="From audit to scale, we optimize every aspect of your campaigns."
        steps={[
          {
            title: 'Account Audit',
            details: 'Review your current Google Ads account structure, quality scores, spending patterns, and identify missed opportunities.',
          },
          {
            title: 'Strategy & Setup',
            details: 'Build a customized campaign structure with keyword groups, ad copy variations, and conversion tracking implementation.',
          },
          {
            title: 'Launch & Monitor',
            details: 'Deploy optimized campaigns and monitor initial performance. Make real-time adjustments to improve CTR and conversion rates.',
          },
          {
            title: 'Optimize & Scale',
            details: 'Continuous optimization based on data. Scale best-performing keywords and audiences while cutting underperformers.',
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        faqs={[
          {
            question: 'How long until we see results?',
            answer: 'Most businesses see measurable improvements within 1-2 weeks of launching optimized campaigns. Significant ROI growth typically follows within 4-6 weeks as we scale winning keywords and audiences.',
          },
          {
            question: 'What budget do we need to get started?',
            answer: 'We work with budgets of all sizes. To see meaningful results, we recommend a minimum daily budget that allows for proper testing and optimization across your core keyword groups.',
          },
          {
            question: 'How do you track conversions?',
            answer: 'We implement Google Tags on your website to track page views, form submissions, purchases, and custom events. We also set up conversion tracking in Google Ads and connect it with Google Analytics for complete attribution.',
          },
          {
            question: 'What about Quality Score?',
            answer: 'Quality Score directly impacts your ad costs. We optimize landing page experience, ad relevance, and CTR to improve your scores, which lowers your cost-per-click and improves visibility.',
          },
          {
            question: 'Do you handle other ad channels too?',
            answer: 'Yes! We also manage Meta Ads and LinkedIn Ads. Many clients benefit from a multi-channel strategy that reaches customers across different platforms.',
          },
        ]}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Clients */}
      <Clients />

      {/* CTA */}
      <CTA />
    </main>
  );
}
