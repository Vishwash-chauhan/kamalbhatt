import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type PortfolioItem = {
  title: string;
  tag: string;
  description: string;
  results: string[];
  image: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Local SEO Growth for ABC Company',
    tag: 'SEO',
    description:
      'Improved local search visibility with on-page optimization, technical fixes, and GBP enhancements to drive consistent inbound leads.',
    results: [
      '3.2x increase in organic calls',
      'Top 3 rankings for 12 keywords',
      '43% lift in map pack visibility',
      '26% higher conversion rate on service pages',
    ],
    image: 'https://placehold.co/560x360?text=Local+SEO',
  },
  {
    title: 'Performance Ads for XYZ Company',
    tag: 'Paid Ads',
    description:
      'Built a high-intent campaign structure with conversion tracking, creative testing, and landing page iteration for scalable revenue.',
    results: [
      '5.1x ROAS in 60 days',
      '28% lower CAC',
      '19% increase in repeat purchases',
      '34% improvement in checkout completion',
    ],
    image: 'https://placehold.co/560x360?text=Paid+Ads',
  },
  {
    title: 'Social Media Launch for ABC Company',
    tag: 'Social',
    description:
      'Created a content system, optimized profiles, and launched paid + organic storytelling to build community and trust.',
    results: [
      '+18k followers in 90 days',
      '3.8% engagement rate',
      '2.4x increase in profile visits',
      '120+ weekly inbound DMs',
    ],
    image: 'https://placehold.co/560x360?text=Social+Launch',
  },
  {
    title: 'Website Redesign for XYZ Company',
    tag: 'Web Design',
    description:
      'Delivered a conversion-focused website refresh with improved UX, clearer messaging, and mobile-first performance.',
    results: [
      '41% lift in form submissions',
      '2.3s faster load time',
      '27% reduction in bounce rate',
      '1.6x increase in average time on site',
    ],
    image: 'https://placehold.co/560x360?text=Website+Redesign',
  },
];

export const metadata: Metadata = {
  title: 'Portfolio | Kamal Bhatt',
  description:
    'Explore digital marketing case studies in SEO, paid ads, social media, and web design with measurable results.',
  openGraph: {
    title: 'Portfolio | Kamal Bhatt',
    description:
      'Case studies across SEO, paid media, social, and web design with real-world results.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="py-24 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mt-4 tracking-tight">
            Results-Driven Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            A selection of recent work focused on growth, performance, and brand impact.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 py-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gray-100 dark:bg-gray-900 rounded-3xl transition-transform group-hover:scale-105" />
                  <div className="relative h-80 md:h-[400px] w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                    <div className="absolute bottom-6 right-6 h-2 w-24 bg-secondary/30 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {item.results.map((result) => (
                    <li key={result} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
