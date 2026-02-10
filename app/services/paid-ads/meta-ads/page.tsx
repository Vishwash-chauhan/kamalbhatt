import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Palette, Rocket, BarChart3, RefreshCw, FileText, Edit, TrendingUp } from 'lucide-react';
import CTA from '@/app/components/cta';
import Testimonials from '@/app/components/testimonials';
import Clients from '@/app/components/clients';
import FAQSection from '@/app/components/faq-section';

const iconMap = {
  Target,
  Palette,
  Rocket,
  BarChart3,
  RefreshCw,
  FileText,
  Edit,
  TrendingUp,
};

export const metadata: Metadata = {
  title: 'Meta Ads Services | Facebook & Instagram Ads | Kamal Bhatt',
  description: 'Facebook and Instagram ads designed to reach your ideal audience and drive engagement, leads, and sales.',
};

export default function MetaAdsPage() {
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
                Meta Ads
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Facebook and Instagram ads designed to reach your ideal audience and drive engagement.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With billions of active users across Facebook and Instagram, Meta offers unparalleled targeting capabilities. We create compelling ads and funnels that convert viewers into customers.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Book a Meta Ads Strategy Call
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
                <p className="text-3xl font-bold text-primary">2-3</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Weeks to scale winning ads</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">5-8x</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Typical ROAS range</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Ad variations tested</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Conversion API setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Include
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Complete Meta ads management and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Audience Targeting',
                description: 'Precision targeting using demographics, interests, behaviors, and lookalike audiences. We find your most valuable customer segments.',
                iconName: 'Target',
              },
              {
                title: 'Creative Testing',
                description: 'A/B testing of multiple ad creatives, copy variations, and formats. We identify top performers and scale them.',
                iconName: 'Palette',
              },
              {
                title: 'Campaign Setup',
                description: 'Strategic campaign structure aligned with your goals: awareness, consideration, or conversion. Daily and lifetime budget optimization.',
                iconName: 'Rocket',
              },
              {
                title: 'Conversion API',
                description: 'Complete Conversion API implementation for accurate tracking across web, mobile, and offline conversions.',
                iconName: 'BarChart3',
              },
              {
                title: 'Retargeting Funnels',
                description: 'Strategic retargeting campaigns that nurture warm leads. Website visitors, video viewers, and engagement audiences.',
                iconName: 'RefreshCw',
              },
              {
                title: 'Landing Page Optimization',
                description: 'Recommendations for improving landing page conversion rates. We test copy, layouts, and CTAs.',
                iconName: 'FileText',
              },
              {
                title: 'Lead Ad Campaigns',
                description: 'Native lead generation forms that capture high-quality leads without leaving the platform.',
                iconName: 'Edit',
              },
              {
                title: 'Performance Analysis',
                description: 'Weekly performance reports and monthly strategy reviews. Clear metrics on spend, conversions, and ROI.',
                iconName: 'TrendingUp',
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

      {/* Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Meta Ads Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Strategic approach to maximize your ROAS and lead quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Discovery & Setup',
                details: 'Understand your business, goals, and audience. Set up pixel tracking, Conversion API, and event tracking for accurate measurement.',
                step: '01',
              },
              {
                title: 'Audience & Creative',
                details: 'Build target audience segments and create multiple ad variations. Test different messaging, visuals, and formats.',
                step: '02',
              },
              {
                title: 'Campaign Launch',
                details: 'Launch campaigns with proper budget allocation and bid strategies. Monitor daily for quick wins and adjustments.',
                step: '03',
              },
              {
                title: 'Optimize & Scale',
                details: 'Pause underperforming ads. Scale winners. Test new audiences and creatives. Refine based on conversion data.',
                step: '04',
              },
            ].map((step) => (
              <div key={step.title} className="relative">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 h-full">
                  <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={[
          {
            question: "What's the minimum budget needed?",
            answer: 'We recommend starting with a budget of $500-$1000/month to allow for proper testing and optimization. Smaller budgets can work but limit testing opportunities.',
          },
          {
            question: 'How quickly can we scale?',
            answer: 'Once we identify winning audiences and creatives (usually 1-2 weeks), we can scale budgets 20-40% weekly if performance metrics support the increase.',
          },
          {
            question: "What's the difference between Performance Max and targeted campaigns?",
            answer: 'Performance Max uses AI for audience targeting and placement optimization. We use targeted campaigns when you want more granular control over audiences and testing.',
          },
          {
            question: 'How important is the Conversion API?',
            answer: 'Extremely important. It provides accurate conversion tracking across devices and platforms, improving Meta\'s optimization algorithms and your reporting accuracy.',
          },
          {
            question: 'Can we combine Meta Ads with other channels?',
            answer: 'Absolutely. Many clients see best results combining Meta Ads with Google Ads or LinkedIn Ads for a multi-channel strategy that reaches customers at different stages.',
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
