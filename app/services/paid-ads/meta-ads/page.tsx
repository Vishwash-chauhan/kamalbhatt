import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Palette, Rocket, BarChart3, RefreshCw, FileText, Edit, TrendingUp } from 'lucide-react';
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
  const pricingPlans = [
    {
      name: 'Starter',
      tagline: 'For small businesses',
      features: [
        '1-2 campaign types',
        'Up to ₹25k ad spend',
        'Basic audience targeting',
        'Monthly optimization',
        'Performance reporting',
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
        'Up to ₹1L ad spend',
        'Advantage+ campaigns',
        'Advanced targeting & retargeting',
        'Creative development (4-6 ads/month)',
        'Weekly optimization',
        'A/B testing',
      ],
      ctaLabel: 'Get Started',
      featured: true,
    },
    {
      name: 'Advanced',
      tagline: 'For scaling businesses',
      features: [
        'Everything in Professional',
        'Unlimited ad spend',
        'All campaign types',
        'Premium creative (10+ ads/month)',
        'Daily monitoring',
        'Dedicated account manager',
        'Bi-weekly strategy calls',
      ],
      ctaLabel: 'Get Started',
      featured: false,
    },
  ];

  const pricingByCurrency = {
    inr: {
      label: 'India Pricing (INR)',
      symbol: '₹',
      prices: ['10,000', '25,000', '50,000'],
    },
    usd: {
      label: 'Global Pricing (USD)',
      symbol: '$',
      prices: ['500', '1,500', '3,000'],
    },
  };

  const oneTimeServices = [
    {
      title: 'Account Setup & Audit',
      description: 'Complete account structure + pixel setup + conversion tracking',
      prices: {
        inr: '₹ 8,000',
        usd: '$400',
      },
    },
    {
      title: 'Creative Package',
      description: '10 ad creatives (image/video) + copywriting',
      prices: {
        inr: '₹ 15,000',
        usd: '$750',
      },
    },
    {
      title: 'Landing Page Design',
      description: 'Conversion-optimized landing page for Meta Ads',
      prices: {
        inr: '₹ 18,000',
        usd: '$900',
      },
    },
    {
      title: 'Catalog Setup',
      description: 'Product catalog setup for dynamic ads (up to 50 products)',
      prices: {
        inr: '₹ 10,000',
        usd: '$500',
      },
    },
    {
      title: 'Campaign Rescue',
      description: 'Fix underperforming campaigns + optimization strategy',
      prices: {
        inr: '₹ 12,000',
        usd: '$600',
      },
    },
    {
      title: 'Strategy Consultation',
      description: '1-hour strategy call + automation plan',
      prices: {
        inr: '₹ 5,000',
        usd: '$250',
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

      <AboutService
        slug="meta-ads"
        title="Meta Ads"
        description="Facebook and Instagram ads designed to reach your ideal audience and drive engagement."
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

      <ProcessSection
        heading="Our Meta Ads Process"
        description="Strategic approach to maximize your ROAS and lead quality."
        steps={[
          {
            title: 'Strategy & Research',
            details: 'Business analysis, competitor research, audience identification, and campaign goal setting.',
          },
          {
            title: 'Account Setup',
            details: 'Business Manager configuration, pixel installation, conversion tracking, and catalog setup.',
          },
          {
            title: 'Creative Development',
            details: 'Ad creative design, copywriting, video production, and Reels content creation.',
          },
          {
            title: 'Campaign Launch',
            details: 'Audience targeting, budget allocation, bid strategy, and campaign deployment.',
          },
          {
            title: 'Monitor & Optimize',
            details: 'Performance tracking, A/B testing, audience refinement, and creative refresh.',
          },
          {
            title: 'Scale & Report',
            details: 'Winning campaign scaling, budget expansion, and comprehensive ROI reporting.',
          },
        ]}
      />

      <PricingPlans
        plans={pricingPlans}
        pricingByCurrency={pricingByCurrency}
        eyebrow={pricingByCurrency.inr.label}
        title="Meta Ads Management Pricing"
        description="Transparent pricing for Facebook & Instagram advertising management."
      />

      <OneTimeServices
        services={oneTimeServices}
        eyebrow="One-Time Meta Ads Services"
        title="One-Time Meta Ads Services"
        description="Professional campaign setup and optimization services (one-time fees)"
      />

      {/* FAQ */}
      <FAQSection
       faqs={[
         {
           question: "What's the difference between Meta Ads and Facebook Ads?",
           answer:
             "Meta Ads is the new name for Facebook Ads. Meta (formerly Facebook Inc.) manages both Facebook and Instagram advertising through the same platform—Meta Business Suite and Ads Manager. When you run 'Meta Ads,' you're advertising on Facebook, Instagram, Messenger, and Audience Network.",
         },
         {
           question: "How much should I spend on Meta Ads?",
           answer:
             "Minimum recommended ad spend is ₹15,000-₹25,000/month ($500-$1,000) to generate meaningful data and results. For e-commerce, budget at least ₹30,000-₹50,000/month. B2B companies can start lower (₹15K-₹20K) focusing on lead generation. My management fees are separate from ad spend.",
         },
         {
           question: "What results can I expect from Meta Ads?",
           answer:
             "Most clients achieve 5-8x ROAS within 2-3 months of optimization. E-commerce brands see 3-5% conversion rates, while lead generation campaigns deliver ₹200-₹500 cost per lead depending on industry. Results vary by product, offer, and market competition.",
         },
         {
           question: "Do you create ad creatives?",
           answer:
             "Yes! Creative development is included in Professional and Advanced packages. I create images, videos, Reels ads, carousel designs, and write compelling ad copy. For Starter package, creative services available as add-on (₹15,000/month or $750).",
         },
         {
           question: "Can Meta Ads work for B2B businesses?",
           answer:
             "Absolutely! Meta Ads for B2B are highly effective for lead generation, webinar registrations, and brand awareness. LinkedIn may have more business users, but Facebook offers better targeting at lower costs. I've helped B2B companies generate qualified leads at ₹300-₹800 per lead.",
         },
         {
           question: "What's Advantage+ and should I use it?",
           answer:
             "Advantage+ Shopping is Meta's AI-powered campaign type that automates targeting, creative, and placements. It typically delivers 14-20% better performance than manual campaigns for e-commerce. I implement Advantage+ for most e-commerce clients alongside manual campaigns for testing.",
         },
       ]}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Clients */}
      {/* <Clients /> */}

      {/* CTA */}
      <CTA />
    </main>
  );
}
