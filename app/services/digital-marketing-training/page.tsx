import type { Metadata } from 'next';
import Link from 'next/link';
import Features from '@/app/components/features';
import TrainingInstructorSection from '@/app/components/training-instructor-section';
import CourseRoadmap from '@/app/components/course-roadmap';
import TrainingToolsSection from '@/app/components/training-tools-section';
import Clients from '@/app/components/clients';
import Testimonials from '@/app/components/testimonials';
import CTA from '@/app/components/cta';

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
                  src="https://placehold.co/1280x720"
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


      <Testimonials />
      <CTA />

      
    </main>
  );
}
