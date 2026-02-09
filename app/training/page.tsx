import type { Metadata } from 'next';
import Link from 'next/link';

const curriculum = [
  {
    week: 'Week 1',
    title: 'Foundations of Digital Marketing',
    topics: ['Customer journey mapping', 'Positioning and messaging', 'Channel selection'],
  },
  {
    week: 'Week 2',
    title: 'Search and Content',
    topics: ['SEO essentials', 'Keyword research', 'Content briefs'],
  },
  {
    week: 'Week 3',
    title: 'Paid Media Essentials',
    topics: ['Google Ads basics', 'Meta Ads basics', 'Conversion tracking'],
  },
  {
    week: 'Week 4',
    title: 'Social Media Growth',
    topics: ['Content systems', 'Community engagement', 'Analytics and reporting'],
  },
  {
    week: 'Week 5',
    title: 'Growth Systems',
    topics: ['Funnel planning', 'Landing pages', 'Lead quality optimization'],
  },
  {
    week: 'Week 6',
    title: 'Capstone and Career Prep',
    topics: ['Portfolio project', 'Interview prep', 'Certification roadmap'],
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

const formatDetails = [
  { label: 'Mode', value: 'Live + Hands-on' },
  { label: 'Duration', value: '6 Weeks' },
  { label: 'Sessions', value: '3 per week' },
  { label: 'Support', value: 'Weekly reviews + feedback' },
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
                Digital Marketing Training for Students
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A structured, live program that takes you from fundamentals to job-ready marketing skills.
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
            <div className="grid grid-cols-2 gap-4">
              {formatDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">{detail.label}</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Who this is for
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Built for students who want practical skills and a clear path to start working in marketing.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whoItsFor.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6"
                >
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Curriculum roadmap
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              A week-by-week structure designed to build core skills and confidence.
            </p>
          </div>
          <div className="space-y-6">
            {curriculum.map((module) => (
              <div
                key={module.week}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                      {module.week}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {module.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {module.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Outcomes you will achieve
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                You will finish the program with a portfolio-ready capstone and a repeatable growth framework.
              </p>
            </div>
            <div className="space-y-4">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Ready to start your marketing career?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Apply now to reserve a seat in the next cohort.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
            >
              Apply for Training
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
