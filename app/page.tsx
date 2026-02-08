import Hero from './components/hero';
import AboutSection from './components/about-section';
import AboutMeeganMedia from './components/about-meegan-media';
import Clients from './components/clients';
import CTA from './components/cta';
import Blog from './components/blog_snippit_home';
import Testimonials from './components/testimonials';
import { Search, TrendingUp, Share2, Code, BookOpen, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
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
            {/* Service Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary">
                    <Search className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    SEO
                  </h3>
                  <div className="h-1 w-12 bg-secondary mt-2"></div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Boost your online visibility with our proven SEO strategies. We optimize your website to rank higher in search results and drive organic traffic to grow your business.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition font-semibold">
                Know More <span className="ml-2">→</span>
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Paid Ads
                  </h3>
                  <div className="h-1 w-12 bg-secondary mt-2"></div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Maximize your ROI with targeted paid advertising campaigns. We manage Google Ads, Facebook Ads, and other platforms to drive quality leads and conversions.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition font-semibold">
                Know More <span className="ml-2">→</span>
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary">
                    <Share2 className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Social Media Marketing
                  </h3>
                  <div className="h-1 w-12 bg-secondary mt-2"></div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Build a strong social presence and engage with your audience across all platforms. We create compelling content that drives engagement and builds brand loyalty.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition font-semibold">
                Know More <span className="ml-2">→</span>
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Web Development & Designing
                  </h3>
                  <div className="h-1 w-12 bg-secondary mt-2"></div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Create stunning, responsive websites that convert visitors into customers. We design and develop custom solutions that align with your brand vision.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition font-semibold">
                Know More <span className="ml-2">→</span>
              </a>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Digital Marketing Training
                  </h3>
                  <div className="h-1 w-12 bg-secondary mt-2"></div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Master digital marketing skills with our comprehensive training programs. Learn SEO, social media, content creation, and more from industry experts.
              </p>
              <a href="#" className="inline-flex items-center text-primary hover:text-secondary transition font-semibold">
                Know More <span className="ml-2">→</span>
              </a>
            </div>

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

      <AboutSection />
      <AboutMeeganMedia />
      <Clients />
      <CTA />
      <Blog />
      <Testimonials />
    </>
  );
}
