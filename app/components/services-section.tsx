import { Search, TrendingUp, Share2, Code, BookOpen, ArrowRight } from 'lucide-react';

const iconMap = {
  Search,
  TrendingUp,
  Share2,
  Code,
  BookOpen,
};

const services = [
  {
    icon: 'Search',
    title: 'SEO',
    description: 'Boost your online visibility with our proven SEO strategies. We optimize your website to rank higher in search results and drive organic traffic to grow your business.',
    href: '/services/seo',
  },
  {
    icon: 'TrendingUp',
    title: 'Paid Ads',
    description: 'Maximize your ROI with targeted paid advertising campaigns. We manage Google Ads, Facebook Ads, and other platforms to drive quality leads and conversions.',
    href: '/services/paid-ads',
  },
  {
    icon: 'Share2',
    title: 'Social Media Marketing',
    description: 'Build a strong social presence and engage with your audience across all platforms. We create compelling content that drives engagement and builds brand loyalty.',
    href: '/services/social-media-marketing',
  },
  {
    icon: 'Code',
    title: 'Web Development & Designing',
    description: 'Create stunning, responsive websites that convert visitors into customers. We design and develop custom solutions that align with your brand vision.',
    href: '/services/web-development-design',
  },
  {
    icon: 'BookOpen',
    title: 'Digital Marketing Training',
    description: 'Master digital marketing skills with our comprehensive training programs. Learn SEO, social media, content creation, and more from industry experts.',
    href: '/services/training',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.title} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <div className="h-1 w-12 bg-secondary mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href={service.href} className="inline-flex items-center text-primary hover:text-secondary transition font-semibold">
                  Know More <span className="ml-2">→</span>
                </a>
              </div>
            );
          })}

          {/* CTA Card - View All Services */}
          <a href="/services" className="bg-gradient-to-br from-primary to-primary/80 dark:from-primary dark:to-primary/60 p-8 rounded-lg hover:shadow-lg transition duration-300 flex flex-col items-center justify-center min-h-96 text-center group cursor-pointer">
            <div className="mb-6">
              <ArrowRight className="w-16 h-16 text-white group-hover:text-secondary transition duration-300 group-hover:translate-x-1" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Explore All Services
            </h3>
            <p className="text-white/90 mb-6">
              Discover our complete range of digital marketing solutions
            </p>
            <span className="inline-flex items-center text-white font-semibold group-hover:text-secondary transition">
              View Services <span className="ml-2 group-hover:translate-x-1 transition">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
