import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Pen, Search, BarChart3, Award, Rocket, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Playbook | Kamal Bhatt',
  description:
    'A comprehensive guide based on 9 years of industry experience with actionable strategies to build your online presence, master content creation, and dominate SEO.',
};

export default function DigitalMarketingPlaybookPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 lg:w-96 h-auto">
                <img
                  src="https://m.media-amazon.com/images/I/61ZBaDarOpL._SY385_.jpg"
                  alt="Digital Marketing Playbook"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Resource
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 tracking-tight">
                  Digital Marketing Playbook
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
                  Perfect
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Based on 9 years of industry experience, this action-oriented{' '}
                <span className="font-semibold text-primary">Digital Marketing Playbook</span> equips you with
                actionable strategies and essential tools to build a thriving online presence. It will help you master
                content creation, dominate SEO, and harness the power of data-driven marketing.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Learn from real-world examples and insights to achieve explosive growth. This playbook serves as your
                roadmap to success, whether you're a student, building a personal brand or an entrepreneur looking to
                take your company to the next level.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href=""
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Get Your Copy
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:border-primary transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Master the essential strategies and tactics used by successful digital marketers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Content Creation',
                description:
                  'Learn proven frameworks for creating content that attracts, engages, and converts your audience.',
                icon: Pen,
              },
              {
                title: 'SEO Mastery',
                description:
                  'Discover the technical and strategic approaches to dominate search results and drive organic traffic.',
                icon: Search,
              },
              {
                title: 'Data-Driven Marketing',
                description:
                  'Understand how to leverage analytics and data to make informed decisions and optimize campaigns.',
                icon: BarChart3,
              },
              {
                title: 'Personal Branding',
                description:
                  'Build a strong personal or business brand that stands out in a crowded digital landscape.',
                icon: Award,
              },
              {
                title: 'Growth Strategies',
                description:
                  "Implement actionable strategies designed for explosive growth, whether you're starting from zero.",
                icon: Rocket,
              },
              {
                title: 'Real-World Examples',
                description:
                  'Learn from case studies and real-world examples that demonstrate how these strategies actually work.',
                icon: Lightbulb,
              },
            ].map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-lg hover:shadow-xl transition"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </main>
  );
}
