import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// static categories shown on portfolio landing page

// categories displayed on portfolio overview
const categories = [
  { name: 'SEO Optimisation', slug: 'seo-optimisation' },
  { name: 'Meta Ads', slug: 'meta-ads' },
  { name: 'Google Ads', slug: 'google-ads' },
];


export const metadata: Metadata = {
  title: 'Portfolio | Kamal Bhatt',
  description:
    'Browse categories—SEO optimisation, Meta Ads, and Google Ads—and explore case studies soon.',
  openGraph: {
    title: 'Portfolio | Kamal Bhatt',
    description:
      'Categories for SEO, Meta Ads, and Google Ads case studies with measurable results.',
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                className="relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-800">
                  <img
                    src={
                      cat.slug === 'meta-ads'
                        ? 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771937336/2_i1cz6n.svg'
                        : cat.slug === 'google-ads'
                        ? 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771937369/3_zwqs8o.svg'
                        : cat.slug === 'seo-optimisation'
                        ? 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771937304/1_zgc37c.svg'
                        : `https://placehold.co/600x400?text=${encodeURIComponent(cat.name)}`
                    }
                    alt={cat.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white dark:bg-gray-900">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    View case studies for {cat.name.toLowerCase()}.
                  </p>
                  <span className="inline-flex items-center text-primary font-bold mt-4">
                    Explore <ArrowRight className="ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
