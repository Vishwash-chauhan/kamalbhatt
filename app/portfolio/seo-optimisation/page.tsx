'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

interface CaseStudyData {
  title: string;
  subtitle?: string;
  intro?: string;
  stats?: { label: string; value: string }[];
  challenge?: string[];
  actions?: string[];
  performanceTable?: {
    headers: string[];
    rows: string[][];
  };
  keyResults?: string[];
  notes?: React.ReactNode;
}

const caseStudyData: Record<string, CaseStudyData> = {
        'local-seo-gmb': {
          title: 'LOCAL SEO — GMB',
          subtitle: 'Top 3 Google Map Pack in 2 Months for Kaylons School of Beauty',
          intro: `Kaylons School of Beauty is a beauty and cosmetology institute in Kharar, Punjab. With no existing Google Business Profile presence, they were invisible in local search. Meegan Media set up and optimised their GMB profile from scratch — achieving Top 3 map pack rankings for competitive local keywords in just 2 months.`,
          stats: [
            { label: 'Beauty School in Kharar', value: 'Top 3' },
            { label: 'Time to Rank', value: '2 Mo.' },
            { label: 'Google Rating', value: '5.0★' },
            { label: 'Beauty School Near Me', value: '#3' },
          ],
          challenge: [
            'No Google Business Profile — the business was completely invisible in local search',
            'Competing against established institutions including ORANE International (4.7★, 362 reviews) in the same city',
            'Short timeline — client needed results quickly to drive admissions for the upcoming intake',
            'New profile with zero reviews vs competitors with hundreds of established reviews',
          ],
          actions: [
            'Created and fully verified the Google Business Profile from scratch with correct NAP details',
            'Optimised all profile categories, services, attributes, and business description for beauty school keywords',
            'Uploaded high-quality photos of classrooms, equipment, and student work to build visual trust signals',
            'Implemented a systematic review generation strategy — reached 42 reviews with 5.0 star average',
            'Added all course offerings as services with detailed descriptions and pricing where applicable',
            'Set up weekly Google Posts to signal activity and relevance to Google\'s local algorithm',
            'Built local citations across India-specific directories to strengthen NAP consistency',
          ],
          keyResults: [
            "Ranked in Top 3 Google Map Pack for 'beauty school in Kharar' — within just 2 months",
            "Ranking for 'beauty school near me' in the Kharar area — capturing high-intent mobile searches",
            "Achieved 5.0 star rating with 42 reviews — strongest rating in local pack ahead of established competitors",
            'Consistent inbound enquiry calls directly through the GBP listing',
            'Demonstrated that a well-executed GMB strategy can compete with 300+ review competitors in weeks',
          ],
        },
      'seo-maritime-education': {
        title: 'SEO — MARITIME EDUCATION',
        subtitle: '30+ Keywords Ranked for International Maritime Business Academy (IMBA)',
        intro: `IMBA Dehradun is a specialised institute offering maritime, shipping, and supply chain management programs. The maritime education niche is highly competitive with very low search volumes — yet very high intent. Starting from near-zero organic presence, Meegan Media built IMBA's rankings from scratch across 30+ niche keywords.`,
        stats: [
          { label: 'Keywords Now Ranked', value: '30+' },
          { label: 'Ship Chartering Courses India', value: '#1' },
          { label: 'Port Management Courses', value: 'Top 3' },
          { label: 'Multiple Keywords', value: 'NR→#1' },
        ],
        challenge: [
          'Brand-new domain with no existing organic authority or search presence',
          'Maritime education is an ultra-niche vertical with highly specific search intent',
          'Most target keywords showed \'NR\' (Not Ranking) in first 3 months — starting from zero',
          'Competing against established national institutions like IMU, IME, and IIMU',
          'Low monthly search volumes required ranking at top positions to generate meaningful traffic',
        ],
        actions: [
          'Built a comprehensive keyword map covering all course types: maritime, shipping, logistics, supply chain, port management, and chartering',
          'Created dedicated, deeply optimised landing pages for each course and specialisation',
          'Implemented schema markup for educational programs to boost SERP visibility',
          'Developed a topic cluster content strategy — supporting blog articles to build topical authority',
          'Executed a steady link-building campaign targeting maritime, logistics, and education publications',
          'Monthly ranking tracking and content updates to sustain and improve positions',
        ],
        performanceTable: {
          headers: ['Keyword', 'Before', 'After'],
          rows: [
            ['ship chartering and brokering courses in India', 'NR', '#1'],
            ['ship chartering courses in India', 'NR', '#1'],
            ['chartering course', 'NR', '#1'],
            ['port management courses in India', 'NR', '3'],
            ['port management course', '31', '3'],
            ['international maritime academy', '6', '2'],
            ['bba in shipping management', '26', '1'],
            ['commercial shipping academy', 'NR', '3'],
            ['vessel chartering courses', 'NR', '4'],
            ['pgdm in supply chain management', '45', '5'],
          ],
        },
        keyResults: [
          '30+ keywords moved from NR (Not Ranking) to Page 1 positions within 12 months',
          "Ranked #1 for 'ship chartering and brokering courses in India' — highest intent keyword",
          "Ranked #1 for 'ship chartering courses in India' and 'chartering course'",
          "Ranked in Top 3 for 'port management courses in India' and 'port management course'",
          "Core brand keyword 'international maritime academy' moved to consistent Top 3",
          "Broad maritime keywords like 'pgdm in supply chain management' now ranking in Top 5",
        ],
      },
    'seo-education': {
      title: 'SEO — EDUCATION',
      subtitle: '54% Click Growth for Graphic Era University',
      intro: `Graphic Era University is one of Uttarakhand's leading private universities. Despite a strong offline reputation, their organic search performance was well below potential — high bounce, low visibility, and ranking outside Page 1 for their most important keywords.`,
      stats: [
        { label: 'Monthly Clicks', value: '1.35M' },
        { label: 'Monthly Impressions', value: '9.92M' },
        { label: 'Avg. Position (from 15.8)', value: '12.1' },
        { label: 'Best University in Dehradun', value: '#1' },
      ],
      challenge: [
        'Low organic click rate despite a strong brand name and large website',
        'Average ranking position of 15.8 — mostly Page 2 for key search terms',
        'Competing against DIT University, UPES, and other well-optimised institutions',
        'Google Business Profile underoptimised, limiting local map pack visibility',
      ],
      actions: [
        'Conducted a full technical SEO audit — fixed crawlability, site speed, and internal linking issues',
        'Rewrote and optimised meta titles and descriptions across 60+ core landing pages',
        'Built a targeted keyword strategy around high-intent university search terms',
        'Enhanced Google Business Profile with updated categories, photos, and Q&A',
        'Executed a structured backlink outreach campaign to authoritative education directories',
      ],
      performanceTable: undefined,
      keyResults: [
        'Total clicks grew from 876K to 1.35M — a 54% increase over 6 months',
        'Total impressions nearly doubled from 5.06M to 9.92M',
        'Average ranking position improved from 15.8 to 12.1',
      
        "Ranked #1 on Google for 'Best University in Dehradun' and 'University in Dehradun'",
        "Ranked #2 for 'Global School in Dehradun' — capturing competitor traffic",
      ],
    },
  'local-seo-multi-location': {
    title: 'LOCAL SEO — MULTI-LOCATION',
    subtitle: '#1 Rankings Across 3 Cities for Orane International School of Beauty',
    intro: `Orane International is a leading beauty and cosmetology academy with multiple locations across India. Meegan Media executed a multi-location local SEO strategy — achieving #1 organic and map pack rankings for each city's most competitive 'beauty school' keywords in Noida, Dwarka (Delhi), and Gurugram simultaneously.`,
    stats: [
      { label: 'Beauty School in Noida', value: '#1' },
      { label: 'Beauty School in Dwarka', value: '#1' },
      { label: 'Beauty School in Gurugram', value: 'Top 2' },
      { label: 'Simultaneous Rankings', value: '3 Cities' },
    ],
    challenge: [
      'Multi-location SEO requires separate strategies for each city — each with different competition levels',
      'Beauty education is a highly competitive niche dominated by national chains like Lakme Academy and Jawed Habib',
      'Each location had its own website subdomain requiring individual on-page and GBP optimisation',
      'Gurugram search results heavily influenced by Justdial aggregator listings with 1,997+ reviews',
    ],
    actions: [
      'Built individual keyword strategies for each city — Noida, Dwarka, and Gurugram — targeting city-specific search intent',
      'Optimised separate subdomains (noida.orane.com, dwarka-delhi.orane.com, gurugram.orane.com) with location-specific content',
      'Created geo-targeted meta titles and descriptions referencing the specific locality for each site',
      'Optimised and actively managed 3 separate Google Business Profiles with city-specific categories and service areas',
      'Built location-specific landing page content covering courses, faculty, and local beauty industry context',
      'Executed city-level backlink campaigns including local business directories and city-specific educational listings',
    ],
    keyResults: [
      "Orane Noida ranked #1 organically for 'beauty school in Noida' — ahead of Lakme Academy and all other competitors",
      "Orane Dwarka ranked #1 organically for 'beauty school in Dwarka' — appearing as the first result in the city",
      "Orane Gurugram ranked #2 organically for 'beauty school in Gurugram' — immediately below a major aggregator",
      'All 3 locations achieved first-page visibility simultaneously, reflecting a scalable multi-location SEO methodology',
      'Orane Kharar also achieved Top 3 map pack visibility — extending dominance to a 4th city',
    ],
  },
'international-seo': {
    title: 'INTERNATIONAL SEO',
    subtitle: '#1 Google Ranking for Clover HR, Birmingham UK',
    intro: `Clover HR is a Birmingham-based HR consultancy serving UK businesses. They needed to break into Page 1 for competitive local search terms in the UK market — an international SEO challenge requiring deep understanding of UK search behaviour and Google's local algorithm.`,
    stats: [
      { label: 'HR Consultant Birmingham', value: '#1' },
      { label: 'UK Map Pack', value: 'Top 3' },
      { label: 'Organic Enquiry Growth', value: '3x' },
      { label: 'International Market Won', value: 'UK' },
    ],
    challenge: [
      'Highly competitive UK market for HR consulting — established local players with years of domain authority',
      'Website had weak on-page signals and no structured local SEO foundation',
      'No Google Business Profile optimisation for the Birmingham area',
      'Limited backlink profile compared to top-ranking UK competitors',
    ],
    actions: [
      'Performed a competitor gap analysis across top 5 ranking HR consultancies in Birmingham',
      'Rebuilt on-page SEO structure: targeted title tags, schema markup, and service page content',
      'Optimised and verified Google Business Profile with UK-specific categories, service areas, and regular posts',
      'Acquired high-authority UK business directory and niche HR publication backlinks',
      'Created location-specific landing page content aligned with local Birmingham search intent',
    ],
    keyResults: [
      "Achieved #1 position on Google for 'HR Consultant Birmingham' — the most competitive target keyword",
      'Broke into the Google Map Pack Top 3, generating consistent inbound calls from local searches',
      'Organic enquiries from the website increased approximately 3x within 5 months',
      "Proved Meegan Media's ability to deliver international SEO results outside India, competing in the UK market",
    ],
  },
  // Add your SEO case studies here in the same format as other pages
};

const imageMap: Record<string, string> = {
        'local-seo-gmb': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771933483/Kaylons_GMB_yhshuz.png',
      'seo-maritime-education': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771933189/International_Maritime_Business_Academy_SEO_Keywords_zhj0br.jpg',
    'seo-education': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771932791/Search_Console_GEU_ordme5.jpg',
    'local-seo-multi-location': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771933569/Orane_Dwarka_SEO_h2icqt.jpg',
    'international-seo': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771933933/HR_Birmingham_Results_bdypvr.jpg',
  // Add image URLs for each case study slug
};
const altMap: Record<string, string> = {
        'local-seo-gmb': 'Kaylons School of Beauty GMB Map Pack Rankings',
      'seo-maritime-education': 'IMBA Maritime SEO Keyword Rankings',
    'seo-education': 'Graphic Era University SEO Results',
    'local-seo-multi-location': 'Orane multi-city SEO rankings',
    'international-seo': 'Clover HR Birmingham SEO results',
  // Add alt text for each case study slug
};

export default function SeoOptimisationPage() {
  const slugs = Object.keys(caseStudyData);
  const [index, setIndex] = useState(0);
  const slug = slugs[index];
  const data = caseStudyData[slug];
  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  function goNext() {
    setIndex((i) => {
      const newIndex = i + 1 < slugs.length ? i + 1 : i;
      scrollToTop();
      return newIndex;
    });
  }
  function goPrev() {
    setIndex((i) => {
      const newIndex = i - 1 >= 0 ? i - 1 : i;
      scrollToTop();
      return newIndex;
    });
  }

  return (
    <main className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* breadcrumb/back link */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <Link href="/services/seo-optimisation" className="text-primary hover:underline text-sm">
            ← Potrfolio
          </Link>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {slugs.map((s, idx) => {
              const labelMap: Record<string, string> = {
                'seo-education': 'Graphic Era University',
                'seo-maritime-education': 'IMBA Maritime Academy',
                'local-seo-gmb': 'Kaylons School of Beauty',
                'local-seo-multi-location': 'Orane Intl School of Beauty',
                'international-seo': 'Clover HR Birmingham',
              };
              return (
                <button
                  key={s}
                  onClick={() => {
                    setIndex(idx);
                    scrollToTop();
                  }}
                  className={`px-2 py-1 rounded-full text-sm ${idx === index ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  {labelMap[s] || s}
                </button>
              );
            })}
          </div>
        </div>

        {/* render current case study */}
        {slugs.length > 0 && data && (
          <section className="mb-20">
            <header className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                {data.title}
              </h1>
              {data.subtitle && (
                <h2 className="mt-2 text-xl text-gray-600 dark:text-gray-300">
                  {data.subtitle}
                </h2>
              )}
              {data.intro && (
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {data.intro}
                </p>
              )}
              <div className="mt-8">
                <img
                  src={imageMap[slug] || ''}
                  alt={altMap[slug] || 'SEO Optimisation Case Study'}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </header>

            {data.stats && (
              <section className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Campaign Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {data.stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition"
                    >
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {s.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.challenge && (
              <section className="mt-12">
                <h3 className="text-2xl font-semibold mb-2 text-secondary">
                  The Challenge
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {data.challenge.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            )}

            {data.actions && (
              <section className="mt-8">
                <h3 className="text-2xl font-semibold mb-2 text-secondary">
                  What We Did
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {data.actions.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </section>
            )}

            {data.performanceTable && (
              <section className="mt-8 overflow-x-auto">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Campaign Performance Breakdown
                </h3>
                <table className="w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr>
                      {data.performanceTable.headers.map((h) => (
                        <th
                          key={h}
                          className="border px-3 py-2 text-left bg-gray-100 dark:bg-gray-800"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.performanceTable.rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 ? 'bg-gray-50 dark:bg-gray-900' : ''}
                      >
                        {row.map((cell, i) => (
                          <td key={i} className="border px-3 py-2">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            {data.keyResults && (
              <section className="mt-8">
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  Key Results
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {data.keyResults.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* next/prev controls */}
            <div className="mt-10 flex justify-between">
              <button
                onClick={goPrev}
                disabled={index === 0}
                className="px-4 py-2 bg-secondary text-white rounded disabled:opacity-50"
              >
                ← Previous
              </button>
              <button
                onClick={goNext}
                disabled={index === slugs.length - 1}
                className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
              >
                Next →
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
