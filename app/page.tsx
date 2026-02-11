import Hero from './components/hero';
import AboutSection from './components/about-section';
import AboutMeeganMedia from './components/about-meegan-media';
import Clients from './components/clients';
import CTA from './components/cta';
import Blog from './components/blog_snippit_home';
import Testimonials from './components/testimonials';
import ServicesSection from './components/services-section';
import FAQSection from './components/faq-section';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <AboutMeeganMedia />
      <Clients />
      <CTA />
      <Blog />
      <Testimonials />
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: 'How much does digital marketing cost in Dehradun?',
            answer: 'Digital marketing costs in Dehradun typically range from ₹15,000 to ₹50,000 per month, depending on services included. SEO packages start at ₹15,000/month, Google Ads management from ₹10,000/month, and social media marketing from ₹12,000/month. I offer customized packages based on your business goals and budget. Contact me for a free quote tailored to your specific needs.',
          },
          {
            question: 'How long does it take to see results from digital marketing in Dehradun?',
            answer: 'SEO typically shows initial results in 2-3 months, with significant improvements in 4-6 months. Google Ads can generate leads within days of launch. Social media marketing shows engagement growth within 4-6 weeks. The timeline depends on your industry competition, current online presence, and campaign objectives. I provide monthly reports to track your progress transparently.',
          },
          {
            question: 'Which digital marketing service is best for small businesses in Dehradun?',
            answer: 'For small businesses in Dehradun, I recommend starting with local SEO and Google Business Profile optimization to appear in "near me" searches. This drives immediate local visibility. Combined with targeted Google Ads for quick leads and social media for brand building, this creates a complete digital presence. I\'ll assess your specific needs and recommend the most cost-effective strategy.',
          },
          {
            question: 'Why hire a local digital marketing expert in Dehradun instead of a big agency?',
            answer: 'A local Dehradun-based expert understands the regional market dynamics, local competition, and customer behavior specific to Uttarakhand. You get personalized attention, direct communication, faster response times, and strategies tailored to Dehradun\'s business environment. Plus, you can meet in person and avoid the high overhead costs of big agencies while getting the same quality results.',
          },
          {
            question: 'What\'s the difference between SEO and Google Ads for Dehradun businesses?',
            answer: 'SEO builds long-term organic visibility on Google without paying per click. It takes 3-6 months but provides sustainable traffic. Google Ads delivers immediate visibility and leads but requires ongoing budget. For Dehradun businesses, I recommend combining both: Google Ads for instant results while SEO builds your long-term organic presence. This balanced approach maximizes ROI.',
          },
          {
            question: 'Do you provide digital marketing for hotels and tourism businesses in Dehradun?',
            answer: 'Yes, I specialize in digital marketing for Dehradun\'s hospitality and tourism sector. Services include Google Business Profile optimization, booking platform integration, seasonal campaign management, reputation management, and targeted ads to tourists searching for "hotels in Dehradun" or "Mussoorie tour packages." I understand the seasonal nature of tourism business and plan campaigns accordingly.',
          },
          {
            question: 'How do you measure digital marketing success in Dehradun?',
            answer: 'I track key performance indicators including website traffic, Google rankings, conversion rates, cost per lead, ROI, Google Business Profile insights, and social media engagement. You receive detailed monthly reports showing exactly what\'s working. I use Google Analytics, Google Search Console, and campaign dashboards to provide transparent, data-driven results for your Dehradun business.',
          },
          {
            question: 'How can I start digital marketing for my Dehradun business?',
            answer: 'Start with a free consultation where I\'ll analyze your current online presence, identify opportunities, and recommend a customized strategy. Simply fill out the contact form, WhatsApp me at +91-9548765897, or email info@kamalbhatt.com. I\'ll schedule a meeting (in-person in Dehradun or online) to discuss your goals and create an action plan within 24-48 hours.',
          },
          {
            question: 'What\'s included in your digital marketing packages for Dehradun businesses?',
            answer: 'My packages include SEO (keyword research, on-page optimization, content creation, link building), Google Ads management (campaign setup, optimization, reporting), social media marketing (content creation, posting, engagement), monthly analytics reports, and ongoing strategy adjustments. All packages are customizable based on your business needs, budget, and growth goals.',
          },
          {
            question: 'Can you help my business outrank competitors in Dehradun on Google?',
            answer: 'Yes, I conduct thorough competitor analysis to identify what\'s working for them and find opportunities to outperform them. Through strategic SEO, targeted content, and optimized Google Ads, I help you capture market share from competitors. I\'ve helped numerous Dehradun businesses achieve top rankings in their industry through data-driven strategies and continuous optimization.',
          },
        ]}
      />
    </>
  );
}
