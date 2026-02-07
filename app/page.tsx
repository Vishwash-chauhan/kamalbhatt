import Hero from './components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive digital marketing solutions tailored for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                SEO Services
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Boost your online visibility with our proven SEO strategies and techniques.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Social Media Marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Grow your audience and engage with your community on social platforms.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Content Marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create compelling content that attracts and converts your target audience.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Brand Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build a strong brand identity that resonates with your target market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
