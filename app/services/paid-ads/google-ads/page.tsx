import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Key, PenTool, Target, FileText, DollarSign, Users, Smartphone } from 'lucide-react';
import CTA from '@/app/components/cta';
import Testimonials from '@/app/components/testimonials';
import Clients from '@/app/components/clients';
import FAQSection from '@/app/components/faq-section';
import AboutService from '@/app/components/about-service';
import ProcessSection from '@/app/components/process-section';
import ServicesSection from '@/app/components/services-section';
import PricingPlans from '@/app/components/pricing-plans';
import OneTimeServices from '@/app/components/one-time-services';

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
  const pricingPlans = [
    {
      name: 'Starter',
      tagline: 'Perfect for small businesses',
      features: [
        '1 Campaign Type (Search OR Performance Max)',
        'Up to ₹30,000 ad spend',
        'Monthly optimization',
        'Basic monthly reporting',
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
        '2-3 Campaign Types',
        'Up to ₹1,00,000 ad spend',
        'Weekly optimization',
        'Detailed reporting + monthly call',
        'Priority email & phone support',
        'A/B testing included',
      ],
      ctaLabel: 'Get Started',
      featured: true,
    },
    {
      name: 'Advanced',
      tagline: 'For established brands',
      features: [
        'All Campaign Types',
        'Unlimited ad spend',
        'Daily monitoring & optimization',
        'Advanced reporting + bi-weekly calls',
        'Dedicated account manager',
        'Advanced A/B testing & experiments',
        'Landing page optimization',
      ],
      ctaLabel: 'Get Started',
      featured: false,
    },
  ];

  const pricingByCurrency = {
    inr: {
      label: 'India Pricing (INR)',
      symbol: '₹',
      prices: ['12,000', '28,000', '55,000'],
    },
    usd: {
      label: 'Global Pricing (USD)',
      symbol: '$',
      prices: ['600', '1,500', '3,000'],
    },
  };

  const oneTimeServices = [
    {
      title: 'Performance Max Setup',
      description: 'Complete Performance Max campaign setup with asset optimization',
      prices: {
        inr: '₹ 8,000',
        usd: '$400',
      },
    },
    {
      title: 'AI Max Campaign Setup',
      description: 'AI Max campaign with search term optimization',
      prices: {
        inr: '₹ 10,000',
        usd: '$500',
      },
    },
    {
      title: 'Shopping Feed Setup',
      description: 'Complete product feed optimization & Shopping campaign setup',
      prices: {
        inr: '₹ 12,000',
        usd: '$600',
      },
    },
    {
      title: 'Landing Page Optimization',
      description: 'Conversion rate optimization for landing pages',
      prices: {
        inr: '₹ 15,000',
        usd: '$750',
      },
    },
    {
      title: 'Conversion Tracking Setup',
      description: 'Google Tag Manager & Analytics 4 setup with conversion tracking',
      prices: {
        inr: '₹ 5,000',
        usd: '$250',
      },
    },
    {
      title: 'Campaign Audit & Strategy',
      description: 'Comprehensive audit of existing campaigns with recommendations',
      prices: {
        inr: '₹ 7,000',
        usd: '$350',
      },
    },
  ];

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
     <ServicesSection />

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

      <PricingPlans
        plans={pricingPlans}
        pricingByCurrency={pricingByCurrency}
        eyebrow={pricingByCurrency.inr.label}
        title="Google Ads Management Pricing"
        description="Transparent pricing for businesses of all sizes. Choose from monthly packages or percentage-based management fees."
      />

      <OneTimeServices
        services={oneTimeServices}
        eyebrow="One-Time Setup Services"
        title="One-Time Setup Services"
        description="Professional campaign setup and optimization services (one-time fees)"
      />

      {/* FAQ */}
        <FAQSection
          faqs={[
            {
          question: 'What is included in your Google Ads management services?',
          answer: 'My Google Ads management services include comprehensive campaign strategy, keyword research, ad copywriting, landing page optimization, bid management, A/B testing, conversion tracking setup, monthly reporting, and continuous optimization. I manage all campaign types: Search, Performance Max, AI Max, Shopping, Display, Video, and Local Services Ads.',
            },
            {
          question: 'How much do Google Ads management services cost?',
          answer: 'Google Ads management fees typically range from 15-25% of monthly ad spend or a flat monthly retainer starting from $1,500. Pricing depends on campaign complexity, ad spend volume, and services required. I offer custom packages tailored to your budget and goals. Contact me for a personalized quote.',
            },
            {
          question: 'What results can I expect from your Google Ads management?',
          answer: 'Most clients see 20-50% improvement in conversion rates within 3 months, 30-40% reduction in cost-per-acquisition, and 2-3x return on ad spend (ROAS). Results vary by industry, competition, and budget. I focus on continuous optimization using AI Max and Performance Max to deliver 14-27% more conversions at similar CPA.',
            },
            {
          question: 'Do you manage Performance Max and AI Max campaigns?',
          answer: 'Yes, I specialize in advanced Google Ads campaign types including Performance Max and AI Max for Search. I implement the Power Pack strategy combining Performance Max for broad reach, AI Max for search visibility with control, and Demand Gen for awareness—ensuring comprehensive coverage across all Google channels.',
            },
            {
          question: 'How long does it take to see results from Google Ads?',
          answer: 'Initial results appear within 2-4 weeks as campaigns enter the learning phase. Significant optimization occurs at 6-8 weeks with sufficient conversion data. Maximum performance typically achieved at 3 months with continuous testing and refinement. PPC delivers faster results than SEO, making it ideal for immediate lead generation.',
            },
            {
          question: 'What industries do you work with?',
          answer: 'I\'ve managed Google Ads campaigns across diverse industries including B2B SaaS, e-commerce, professional services (legal, accounting, consulting), healthcare, education, real estate, home services, and more. My cross-industry experience allows me to apply proven strategies while customizing approaches for your specific market.',
            },
            {
          question: 'Do you provide Google Ads training?',
          answer: 'Yes! In addition to Google Ads management, I offer comprehensive PPC training for businesses and marketing teams who want to manage campaigns in-house. Training covers campaign strategy, setup, optimization, and the latest AI-powered features. Learn more about my AI-Driven Digital Marketing Training programs.',
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
