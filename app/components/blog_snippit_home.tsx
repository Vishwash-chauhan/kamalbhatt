'use client';

import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogs = [

    {
      id: 1,
      title: 'Web Design Best Practices',
      excerpt: 'Master the principles of modern web design that convert visitors into customers and improve user experience.',
      date: 'Jan 22, 2024',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Email Marketing Strategies',
      excerpt: 'Effective email marketing strategies to increase engagement, build customer loyalty, and drive conversions.',
      date: 'Jan 18, 2024',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Content Marketing for Startups',
      excerpt: 'How startups can use content marketing to build authority, attract customers, and scale their business.',
      date: 'Jan 12, 2024',
      category: 'Content',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Top 10 SEO Tips for 2024',
      excerpt: 'Discover the most effective SEO strategies to boost your website visibility and drive organic traffic in 2024.',
      date: 'Feb 5, 2024',
      category: 'SEO',
      image: 'https://placehold.co/384x129',
    },
    {
      id: 5,
      title: 'Social Media Marketing Trends',
      excerpt: 'Learn about the latest trends in social media marketing and how to leverage them for your business growth.',
      date: 'Feb 3, 2024',
      category: 'Social Media',
      image: 'https://placehold.co/384x129',
    },
    {
      id: 6,
      title: 'Understanding Google Analytics 4',
      excerpt: 'A complete guide to Google Analytics 4 and how to use it to measure your digital marketing success.',
      date: 'Jan 28, 2024',
      category: 'Analytics',
      image: 'https://placehold.co/384x129',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in digital marketing
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-800">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold group/link transition"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition duration-300 group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
