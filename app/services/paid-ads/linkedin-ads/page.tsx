import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, FileText, Newspaper, MessageCircle, Briefcase, BarChart3, Star, TrendingUp } from 'lucide-react';
import CTA from '@/app/components/cta';
import Testimonials from '@/app/components/testimonials';
import Clients from '@/app/components/clients';
import FAQSection from '@/app/components/faq-section';
import AboutService from '@/app/components/about-service';
import ProcessSection from '@/app/components/process-section';
import ServicesSection from '@/app/components/services-section';
import PricingPlans from '@/app/components/pricing-plans';

const iconMap = {
  Target,
  FileText,
  Newspaper,
  MessageCircle,
  Briefcase,
  BarChart3,
  Star,
  TrendingUp,
};

const linkedinAdPlans = [
  {
    name: 'Basic',
    tagline: 'Foundation campaigns for steady lead flow',
    features: [
      'Number of posts/month: 5',
      'Reels/videos: 1',
      'Articles & newsletters/month: 1',
      'Lead generation outreach: 10/day',
      'Connection requests/day: 15/week',
      'Performance reporting: Monthly',
    ],
    ctaLabel: 'Get Started',
    featured: false,
  },
  {
    name: 'Standard',
    tagline: 'Balanced performance and volume',
    features: [
      'Number of posts/month: 8',
      'Reels/videos: 2',
      'Articles & newsletters/month: 1',
      'Lead generation outreach: 20/day',
      'Connection requests/day: 10-20',
      'Performance reporting: Bi-weekly',
    ],
    ctaLabel: 'Get Started',
    featured: true,
  },
  {
    name: 'Premium',
    tagline: 'Scale campaigns with advanced targeting',
    features: [
      'Number of posts/month: 12',
      'Reels/videos: 4',
      'Articles & newsletters/month: 3',
      'Lead generation outreach: 30/day',
      'Connection requests/day: 15-30',
      'Performance reporting: Weekly',
    ],
    ctaLabel: 'Get Started',
    featured: false,
  },
  {
    name: 'Enterprise',
    tagline: 'Custom plans for aggressive growth',
    features: [
      'Number of posts/month: 20',
      'Reels/videos: 6',
      'Articles & newsletters/month: 7',
      'Lead generation outreach: 100/day',
      'Connection requests/day: 30-50',
      'Performance reporting: Alternate days',
    ],
    ctaLabel: 'Get Started',
    featured: false,
  },
];

const linkedinPricingByCurrency = {
  inr: {
    label: 'India Pricing (INR)',
    symbol: '₹',
    prices: ['10,000', '15,000', '20,000', '30,000+'],
  },
  usd: {
    label: 'Global Pricing (USD)',
    symbol: '$',
    prices: ['200', '300', '400', '500+'],
  },
};

export const metadata: Metadata = {
  title: 'LinkedIn Ads Services | B2B Lead Generation | Kamal Bhatt',
  description: 'LinkedIn advertising campaigns that connect with professionals, decision-makers, and drive quality B2B leads.',
};

export default function LinkedInAdsPage() {
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
                LinkedIn Ads
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                B2B advertising campaigns that connect with professionals and decision-makers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                LinkedIn is the world's largest professional network. With 900+ million professionals, it's the ideal platform for B2B lead generation, account-based marketing, and thought leadership campaigns.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Book a LinkedIn Ads Strategy Call
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
                <p className="text-3xl font-bold text-primary">B2B</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Focused targeting</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">900M+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Professional users</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">High</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Quality leads</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">Account</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Based targeting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutService
        slug="linkedin-ads"
        title="LinkedIn Ads"
        description="B2B advertising campaigns that connect with professionals and decision-makers."
      />
     <ServicesSection />

      {/* What We Do */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Include
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Complete LinkedIn ads strategy and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Account-Based Marketing',
                description: 'Target specific companies and decision-makers with personalized campaigns. Perfect for enterprise sales strategies.',
                iconName: 'Target',
              },
              {
                title: 'Lead Gen Campaigns',
                description: 'Native LinkedIn lead generation forms that capture qualified contact information directly on the platform.',
                iconName: 'FileText',
              },
              {
                title: 'Sponsored Content',
                description: 'Native ads that appear in users\' LinkedIn feeds. Build brand awareness and engagement with relevant audiences.',
                iconName: 'Newspaper',
              },
              {
                title: 'Text Ads & InMail',
                description: 'Direct messaging through LinkedIn InMail for high-intent outreach. Highly personalized at scale.',
                iconName: 'MessageCircle',
              },
              {
                title: 'Audience Targeting',
                description: 'Target by job title, company size, industry, seniority, and skills. Reach decision-makers precisely.',
                iconName: 'Briefcase',
              },
              {
                title: 'Conversion Tracking',
                description: 'Proper conversion pixel setup and website event tracking. Measure ROI from lead to customer.',
                iconName: 'BarChart3',
              },
              {
                title: 'Thought Leadership',
                description: 'Build personal or brand authority through sponsored content and native advertising. Establish expertise.',
                iconName: 'Star',
              },
              {
                title: 'Performance Analysis',
                description: 'Weekly reports on CTR, impressions, conversions, and cost per lead. Monthly strategy optimization reviews.',
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

      <ProcessSection
        heading="Our LinkedIn Ads Process"
        description="Strategic B2B approach to maximize lead quality and sales velocity."
        steps={[
          {
            title: 'Strategy & Targeting',
            details: 'Define your ideal customer profile (ICP). Set up account lists, audience segments, and campaign goals aligned with your sales pipeline.',
          },
          {
            title: 'Campaign Setup',
            details: 'Create targeted campaigns with lead gen forms, sponsored content, or InMail. Set conversion tracking and lead routing.',
          },
          {
            title: 'Launch & Optimize',
            details: 'Deploy campaigns and monitor daily performance. Adjust audience targeting and budgets based on early data.',
          },
          {
            title: 'Scale & Refine',
            details: 'Increase budgets to winning campaigns. Test new audiences and creative variations. Optimize for sales-qualified leads.',
          },
        ]}
      />

      <PricingPlans
        plans={linkedinAdPlans}
        pricingByCurrency={linkedinPricingByCurrency}
        eyebrow={linkedinPricingByCurrency.inr.label}
        title="LinkedIn Ads Service Plans"
        description="Pick a plan that matches your outreach goals and reporting cadence."
      />

      {/* FAQ */}
      <FAQSection
        faqs={[
          {
            question: 'Is LinkedIn expensive?',
            answer: 'LinkedIn has higher costs per click than Google or Meta, but often delivers lower cost per lead for B2B companies due to audience quality. The right targeting and strategy make it highly profitable.',
          },
          {
            question: "What's the minimum budget?",
            answer: 'We recommend starting with $1000-$2000/month for B2B campaigns. This allows sufficient budget for testing different audiences and creative variations.',
          },
          {
            question: 'How long until we see leads?',
            answer: 'Most campaigns show initial leads within 1-2 weeks. It typically takes 4-6 weeks to optimize for quality leads and lower cost per lead.',
          },
          {
            question: 'What industries work best?',
            answer: 'LinkedIn works exceptionally well for: software/SaaS, professional services, B2B consulting, enterprise sales, recruiting, manufacturing, and financial services.',
          },
          {
            question: 'Can we combine LinkedIn with Google and Meta ads?',
            answer: 'Yes! A multi-channel approach often delivers the best results. Use LinkedIn for B2B, Google for high-intent searches, and Meta for broader awareness.',
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
