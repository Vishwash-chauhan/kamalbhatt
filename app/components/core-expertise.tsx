'use client';

import { Check, TrendingUp, Target, Users, MapPin, Zap } from 'lucide-react';

export default function CoreExpertise() {
  const expertise = [
    {
      icon: Search,
      title: 'SEO Services',
      details: [
        '10+ years optimizing websites for Google',
        'Specialization: Local SEO, Technical Audits, Content Strategy',
        'Average result: 300% traffic growth in 6-12 months',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Google Ads Management',
      details: [
        'Certified Google Ads Professional',
        'Managed ₹2Cr+ in ad spend',
        'Average ROAS: 5-15X depending on industry',
      ],
    },
    {
      icon: Target,
      title: 'Meta Ads (Facebook & Instagram)',
      details: [
        'Lead generation campaigns for B2C and B2B',
        'Service-based and E-commerce scaling strategies',
        'Creative optimization and testing',
      ],
    },
    {
      icon: Users,
      title: 'Social Media Management',
      details: [
        'Full-funnel social media strategies',
        'Community building and engagement',
        'Influencer partnership management',
      ],
    },
    {
      icon: MapPin,
      title: 'Google My Business',
      details: [
        'Local visibility optimization',
        'Review generation and management',
        'Multi-location GMB strategies',
      ],
    },
    {
      icon: Zap,
      title: 'Lead Generation',
      details: [
        'End-to-end funnel optimization',
        'Landing page CRO',
        'Marketing automation setup',
      ],
    },
  ];

  // Icon mapping
  const iconMap = {
    'Search': Search,
    'TrendingUp': TrendingUp,
    'Target': Target,
    'Users': Users,
    'MapPin': MapPin,
    'Zap': Zap,
  };

  const getIcon = (index) => {
    const icons = [Search, TrendingUp, Target, Users, MapPin, Zap];
    return icons[index];
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Core Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Services that drive measurable results
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((service, index) => {
            const IconComponent = getIcon(index);
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 dark:text-gray-300">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Import icons from lucide-react
import { Search } from 'lucide-react';
