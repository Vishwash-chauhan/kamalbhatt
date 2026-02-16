import type { Metadata } from 'next';
import Link from 'next/link';
import Features from '@/app/components/features';
import TrainingInstructorSection from '@/app/components/training-instructor-section';
import CourseRoadmap from '@/app/components/course-roadmap';
import TrainingToolsSection from '@/app/components/training-tools-section';
import Clients from '@/app/components/clients';
import Testimonials from '@/app/components/testimonials';
import CTA from '@/app/components/cta';
import FAQSection from '@/app/components/faq-section';
import PricingPlans from '@/app/components/pricing-plans';

const modules = [
  {
    id: 'module-1',
    title: 'Module 1: Introduction to Digital Marketing with AI',
    topics: ['What is digital marketing?','Traditional Marketing vs Digital Marketing vs Modern Digital Marketing with AI','Key digital channels: SEO, SEM, SMM, Content','Understanding customer journey and funnels','Overview of tools used in modern digital marketing','AI Tools for content writing, SEO, captions, Ad Copies, Blog Outline, Topic Searches, etc.',	
],
  },
  {
    id: 'module-2',
    title: 'Module 2: Website & Landing Page Essentials',
    topics: ['Domain & hosting basics', 'Introduction to WordPress & Elementor', 'Website structure and navigation', 'Components of a landing page', 'Importance of responsiveness and user experience'],
  },
  {
    id: 'module-3',
    title: 'Module 3: SEO Fundamentals & Keyword Research',
    topics: ['What is SEO and why it matters', 'On-page vs off-page SEO vs technical SEO', 'Keyword research methods', 'Optimizing content: meta tags, headers, internal & outbound links', 'Free SEO tools: Ubersuggest, Google Keyword Planner'],
  },
  {
    id: 'module-4',
    title: 'Module 4: Technical SEO',
    topics: ['Website speed optimization', 'Robots.txt and XML sitemap setup', 'Crawlability and indexing', 'Structured data and schema basics'],
  },
  {
    id: 'module-5',
    title: 'Module 5: Analytics & Tracking Setup',
    topics: ['Setting up Google Analytics (GA4)', 'Setting up Google Tag Manager (GTM)', 'Verifying the website with Google Search Console (GSC)', 'Creating custom events and goals in GA4'],
  },
  {
    id: 'module-6',
    title: 'Module 6: Social Media Marketing',
    topics: ['Overview: Facebook, Instagram, LinkedIn, YouTube', 'Content strategy for each platform', 'Post types: stories, reels, carousels, videos', 'Community engagement techniques', 'Post scheduling and calendar planning'],
  },
  {
    id: 'module-7',
    title: 'Module 7: Facebook & Instagram Ads',
    topics: ['Introduction to Meta Ads', 'Campaign, Ad Set, and Ad structure', 'Audience targeting and interest selection', 'Ad creatives, formats, and CTA', 'Ad metrics: CTR, CPC, Reach'],
  },
  {
    id: 'module-8',
    title: 'Module 8: Google Ads & Campaign Types',
    topics: ['Setting up a Google Ads account', 'Keyword match types: Broad, Phrase, Exact', 'Writing effective ad copy', 'Running Search and Performance Max campaigns', 'Basics of conversion tracking'],
  },
  {
    id: 'module-9',
    title: 'Module 9: Content Marketing Strategy',
    topics: ['Role of content in digital marketing', 'Blog writing basics and formatting', 'Visual content: infographics, videos, guides', 'Building a monthly content calendar', 'Content distribution and promotion methods'],
  },
  {
    id: 'module-10',
    title: 'Module 10: Marketing Funnels & Strategy',
    topics: ['Understanding basic funnel structure', 'Lead generation and nurturing flow', 'Planning a digital strategy for conversion', 'Integrating forms, automation, and follow-ups'],
  },
  {
    id: 'module-11',
    title: 'Module 11: AI In Digital Marketing',
    topics: ['Overview of AI’s impact on marketing trends', 'Personalized targeting & predictive analytics', 'AEO, GEO & AI Mode', 'AI in SEO & content planning', 'Rise of chatbots & marketing automation', 'Voice search and the future of digital'],
  },
];

const outcomes = [
  'Build a full digital marketing plan with clear KPIs',
  'Launch a basic Google or Meta Ads campaign',
  'Create a 30-day content calendar with post ideas',
  'Audit a website for SEO improvements',
  'Deliver a final capstone project for your portfolio',
];

const whoItsFor = [
  'Students looking for job-ready marketing skills',
  'Fresh graduates building a practical portfolio',
  'Early-career marketers seeking structured growth',
  'Freelancers who want a repeatable process',
];  

const courseHighlights = [
  { value: '100%', label: 'Job Assistance' },
  { value: '9+', label: 'Modules' },
  { value: '5+', label: 'Tools' },
  { value: '15', label: 'PDP Sessions' },
  { value: '4+', label: 'Projects' },
  { value: '1yr+', label: 'LMS Access' },
];

const faqs = [
  {
    question: 'What will I learn in the Digital Marketing Training?',
    answer:
      "You'll master all core digital marketing channels including Search Engine Optimization (SEO), Google Ads (PPC), Meta Ads (Facebook & Instagram), social media marketing, content marketing, email marketing, analytics, e-commerce marketing, and modern AI marketing tools. The program includes 50+ assignments, live campaigns, portfolio projects, and hands-on experience with industry tools like Google Analytics, Ads Manager, WordPress, and more.",
  },
  {
    question: 'Do I need prior marketing or technical experience?',
    answer:
      "No prior experience required! The course is designed for complete beginners to intermediate learners. We start with fundamentals and progress systematically. Whether you're a student, professional switching careers, business owner, or freelancer-you'll learn everything from scratch through practical, step-by-step guidance. Basic computer skills and internet knowledge are all you need.",
  },
  {
    question: 'Is this training available online or offline?',
    answer:
      "We offer flexible training options: live online sessions via Zoom with interactive workshops, self-paced online learning with recorded modules and lifetime access, in-person training in Dehradun and surrounding areas, and corporate on-site training for teams. Choose the format that best suits your schedule and learning style.",
  },
  {
    question: 'Will I get a certificate after completion?',
    answer:
      "Yes! Upon successful completion, you'll receive a Professional Digital Marketing Certification from Kamal Bhatt Digital. The certificate validates your expertise across SEO, PPC, social media, content marketing, analytics, and all major digital marketing channels-valuable for job applications, freelancing, and professional credibility.",
  },
  {
    question: 'What tools and software will I learn?',
    answer:
      "You'll get hands-on experience with industry-standard tools including Google Analytics 4, Google Ads, Facebook Ads Manager, Google Search Console, WordPress, Mailchimp/email platforms, Canva, SEMrush/Ahrefs (SEO tools), Hootsuite/Buffer (social media), and modern AI tools like ChatGPT for content creation. Most tools have free versions or trial periods for learning.",
  },
  {
    question: 'How long does the training take?',
    answer:
      'The complete program is structured as a 12-week intensive course for live training (3 sessions per week, 2 hours each). Self-paced learners can complete at their own speed-most finish within 3-4 months with 6-8 hours of weekly study. The training includes 80+ hours of content covering 12 comprehensive modules from basics to advanced strategies.',
  },
  {
    question: 'Do you provide job placement assistance?',
    answer:
      "While we don't guarantee job placement, we provide career support including: resume optimization, portfolio building guidance, interview preparation for marketing roles, freelancing strategies and client acquisition, and access to our network of hiring partners. Many graduates have successfully transitioned to digital marketing roles. Contact us for career guidance.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a 7-day money-back guarantee for all courses. If you're not satisfied within the first week, request a full refund-no questions asked. For live training, refunds are available before the 3rd session. We're confident in the value we provide and stand behind our training quality.",
  },
];

const trainingPackages = [
  {
    name: 'Self-Paced Online',
    tagline: 'Learn on your schedule',
    features: [
      'Lifetime access to all 12 modules',
      '80+ hours of video content',
      '50+ assignments and projects',
      'Private community access',
      'Certificate of completion',
      'Email support',
    ],
    ctaLabel: 'Enroll Now',
    featured: false,
  },
  {
    name: 'Live Online Training',
    tagline: 'Instructor-led cohorts',
    badge: 'Most Popular',
    features: [
      '12-week live sessions (3x per week)',
      'Interactive workshops and Q&A',
      '1-on-1 mentorship sessions (5x)',
      'All self-paced content included',
      'Priority support',
      'Project review and feedback',
      'Certification exam',
    ],
    ctaLabel: 'Enroll Now',
    featured: true,
  },
  {
    name: 'Corporate Training',
    tagline: 'Custom for teams',
    features: [
      'Customized curriculum for your team',
      'On-site or virtual training',
      'Flexible scheduling',
      'Industry-specific case studies',
      'Team licenses for AI tools',
      'Ongoing consultation (3 months)',
      'Team certifications',
    ],
    ctaLabel: 'Get Quote',
    featured: false,
  },
];

const trainingPricingByCurrency = {
  inr: {
    label: 'India Pricing (INR)',
    symbol: '₹',
    prices: ['24,999', '44,999', 'Custom'],
  },
  usd: {
    label: 'Global Pricing (USD)',
    symbol: '$',
    prices: ['100', '200', '300'],
  },
};

export const metadata: Metadata = {
  title: 'Digital Marketing Training | Kamal Bhatt',
  description:
    'A hands-on digital marketing training program for students. Learn SEO, paid ads, social media, and growth systems with a capstone project.',
  openGraph: {
    title: 'Digital Marketing Training | Kamal Bhatt',
    description:
      'A hands-on digital marketing training program for students. Learn SEO, paid ads, social media, and growth systems with a capstone project.',
    type: 'website',
  },
};

export default function TrainingPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                Training Program
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                Advanced Digital Marketing Course With Gen AI
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our Advanced Digital Marketing Course with AI offers comprehensive training in SEO, PPC, Social Media, and Content Marketing. You'll gain the skills needed to drive traffic, optimize conversions, and thrive in the digital marketing industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Apply for Training
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:border-primary transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-6">
                <img
                  src="https://res.cloudinary.com/dwffrfajl/image/upload/v1771236368/Digital_Marketing_Course_Image_cfrfur.svg"
                  alt="Digital Marketing Training"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">3 Months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mode</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Online/Offline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features highlights={courseHighlights} />
      
 
      <TrainingToolsSection />
      <TrainingInstructorSection />
      <CourseRoadmap modules={modules} />
      <PricingPlans
        plans={trainingPackages}
        pricingByCurrency={trainingPricingByCurrency}
        eyebrow={trainingPricingByCurrency.inr.label}
        title="Training Packages"
        description="Choose the learning format that fits your goals and schedule."
      />
      <FAQSection faqs={faqs} />
      <Testimonials />
      <CTA />

      
    </main>
  );
}
