import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PricingPlans from '../components/pricing-plans';
import OneTimeServices from '../components/one-time-services';
import Clients from '../components/clients';
import Testimonials from '../components/testimonials';
import CTA from '../components/cta';


type Service = {
  title: string;
  description: string;
  image: string;
  tag: string;
  link: string;
};
const services: Service[] = [
  {
    title: 'SEO Optimization',
    tag: 'Visibility',
    description:
      'Boost your online visibility with our proven SEO strategies. We optimize your website to rank higher in search results and drive organic traffic to grow your business.',
    image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770815811/1_yopluk.svg',
    link: '/services/seo-optimisation',
  },
  {
    title: 'Paid Ads',
    tag: 'Growth',
    description:
      'Maximize your ROI with targeted paid advertising campaigns. We manage Google Ads, Facebook Ads, and other platforms to drive quality leads and conversions.',
    image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770815811/2_dc01bi.svg',
    link: '/services/paid-ads',
  },
  {
    title: 'Social Media Marketing',
    tag: 'Engagement',
    description:
      'Build a strong social presence and engage with your audience across all platforms. We create compelling content that drives engagement and builds brand loyalty.',
    image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770815811/3_zzwl08.svg',
    link: '/services/social-media-marketing',
  },
  {
    title: 'Web Development & Design',
    tag: 'Experience',
    description:
      'Create stunning, responsive websites that convert visitors into customers. We design and develop custom solutions that align with your brand vision.',
    image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770808206/5_vawhkt.svg',
    link: '/services/web-development-design',
  },
  {
    title: 'Digital Marketing Training',
    tag: 'Education',
    description:
      'Master digital marketing skills with our comprehensive training programs. Learn SEO, social media, content creation, and more from industry experts.',
    image: 'https://res.cloudinary.com/dwffrfajl/image/upload/v1770815810/5_ofefnv.svg',
    link: '/services/digital-marketing-training',
  },
];

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Kamal Bhatt',
  description: 'Explore premium SEO, paid ads, and web development services in Dehradun.',
};

export default function ServicesPage() {
  const pricingPlans = [
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
  };

  const oneTimeServices = [
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

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Expertise</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mt-4 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            We combine strategy, creativity, and technical expertise to help your brand thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Zig-Zag Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 py-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gray-100 dark:bg-gray-900 rounded-3xl transition-transform group-hover:scale-105" />
                  <div className="relative h-80 md:h-[400px] w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Decorative Element */}
                    <div className="absolute bottom-6 right-6 h-2 w-24 bg-secondary/30 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider">
                  {service.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h2>
                <div className="h-1.5 w-16 bg-primary mx-auto md:mx-0" />
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                  >
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <PricingPlans
        plans={pricingPlans}
        pricingByCurrency={pricingByCurrency}
        eyebrow={pricingByCurrency.inr.label}
        title="Choose the plan for your growth"
        description="Transparent monthly retainers built for predictable results and scalable performance."
      />
      <OneTimeServices
        services={oneTimeServices}
        eyebrow="One-Time Services"
        title="Launch faster with focused, fixed-scope work"
        description="Ideal for brands that need a quick setup or a strategic reset without a monthly retainer."
      />
      {/* <Clients /> */}
      <Testimonials />
      <CTA />
    </main>
  );
}