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
        'google-ads-growth-campaign': {
          title: 'GOOGLE ADS — GROWTH CAMPAIGN',
          subtitle: `From 37 to 689 Conversions — Orane Dwarka's Breakout Year`,
          intro: `Orane International, Dwarka started with minimal Google Ads presence. Over 12 months (Feb 2025 to Feb 2026), Meegan Media scaled the account from near-zero performance to 689 conversions — an increase of 652 conversions, representing an extraordinary 1,762% growth in lead volume at a controlled ₹412 per conversion.`,
          stats: [
            { label: 'Total Conversions', value: '689' },
            { label: 'YoY Conversion Growth', value: '+652' },
            { label: 'Cost Per Conversion', value: '₹412' },
            { label: 'Conversion Growth Rate', value: '1762%' },
          ],
          challenge: [
            'Account was nearly inactive — starting from just 37 conversions in the prior period',
            'Dwarka (Delhi) is a highly competitive market with multiple beauty academy chains operating',
            'New account with limited Quality Score history — initial CPCs were higher than desired',
            'Building campaign momentum from scratch while keeping cost per conversion commercially viable',
          ],
          actions: [
            'Rebuilt the entire account structure — new campaigns, ad groups, and keyword lists aligned to beauty course intent',
            'Started with a controlled budget and scaled spend as conversion data accumulated and Smart Bidding improved',
            'Used broad match + Smart Bidding in early phase to discover converting search terms, then locked to exact match winners',
            'Created Dwarka-specific landing pages to improve Quality Score and relevance for local searches',
            'Added call tracking and WhatsApp conversion events to capture all lead touchpoints',
            'Progressively increased monthly budgets as CPA stabilised — scaling from test budget to full campaign',
          ],
          performanceTable: {
            headers: ['Metric', 'Before', 'After'],
            rows: [
              ['Conversions', '37', '689'],
              ['Clicks', '~1.7K', '6.82K'],
              ['Cost Per Conv.', '~₹599', '₹412'],
              ['Total Ad Spend', '~₹22K', '₹284K'],
            ],
          },
          keyResults: [
            'Conversions grew from 37 to 689 — a 1,762% increase in lead volume year over year',
            'Clicks grew from approximately 1.7K to 6.82K — a 4x increase in campaign reach',
            'Cost per conversion improved from approximately ₹599 to ₹412 — more efficient as campaign matured',
            'Total managed spend of ₹284K with strong ROI — each lead representing high potential enrolment value',
            'Campaign now operates as a mature, high-performing account ready to scale further in 2026',
          ],
        },
      'google-ads-beauty-education': {
        title: 'GOOGLE ADS — BEAUTY EDUCATION',
        subtitle: '869 Leads at ₹285 Per Conversion — Orane Noida',
        intro: `Orane International School of Beauty, Noida needed a consistent Google Ads pipeline for beauty course admissions. Over a 12-month campaign period (March 2024 to March 2025), Meegan Media built and managed a lead generation campaign that delivered 869 conversions at ₹285 per lead — well below industry benchmarks for beauty education.`,
        stats: [
          { label: 'Total Conversions', value: '869' },
          { label: 'Cost Per Conversion', value: '₹285' },
          { label: 'Clicks Generated', value: '7.71K' },
          { label: 'Total Ad Spend', value: '₹248K' },
        ],
        challenge: [
          'Beauty education market in Noida is competitive — Lakme Academy, VLCC, and Jawed Habib all running ads',
          'Limited monthly budget required maximising every rupee of spend for conversion efficiency',
          'Needed to reach students researching beauty courses at different stages of the decision journey',
          'Tracking call-based conversions in addition to form fills — beauty students often call before applying',
        ],
        actions: [
          "Structured campaigns around high-intent keywords: 'beauty courses in Noida', 'cosmetology institute Noida', 'makeup academy Noida'",
          'Created separate ad groups for each course type — hair, skin, makeup, nail art, cosmetology',
          'Wrote benefit-led ad copy focusing on placement assistance, certified courses, and hands-on training',
          'Implemented call extensions and call-only ads to capture phone-first leads',
          'Ran remarketing campaigns targeting visitors who had not yet converted after visiting the landing page',
          'Monthly optimisation cadence — improving CTR and conversion rate incrementally over the 12 months',
        ],
        performanceTable: undefined,
        keyResults: [
          '869 total conversions generated over 12 months at a cost of ₹285 per lead',
          'Conversions grew by 126 leads year-over-year — a 17% increase in lead volume',
          'Clicks grew from 4.29K to 7.71K — more than doubling campaign reach',
          'Cost per conversion reduced by ₹28.34 year-over-year — consistent efficiency improvement',
          'Total spend of ₹248K delivering strong ROI — each enrolled student representing significant course revenue',
        ],
      },
    'google-ads-higher-education': {
      title: 'GOOGLE ADS — HIGHER EDUCATION',
      subtitle: '35,600 Conversions at ₹412 Per Lead — Graphic Era University',
      intro: `Graphic Era University is one of Uttarakhand's largest private universities with thousands of applicants every year. Managing Google Ads at this scale requires precision — ensuring high conversion volume without letting cost per lead spiral. In July 2024, Meegan Media managed campaigns delivering 35,600 conversions at a controlled ₹412 cost per conversion.`,
      stats: [
        { label: 'Conversions (July 2024)', value: '35.6K' },
        { label: 'Cost Per Conversion', value: '₹412' },
        { label: 'Clicks Generated', value: '373K' },
        { label: 'Total Ad Spend Managed', value: '₹14.7M' },
      ],
      challenge: [
        'Managing high-volume university admissions campaigns at scale without overspending',
        'University admission season creates intense competition — CPC spikes significantly in April–July',
        'Needed to maintain low cost per lead while generating enough volume for multiple courses and programs',
        'Tracking conversions accurately across multiple landing pages and course-specific funnels',
      ],
      actions: [
        'Built a campaign architecture covering all major courses — Engineering, MBA, BBA, Law, and more',
        'Implemented granular ad group structures ensuring high ad relevance scores and lower CPCs',
        'Used Target CPA bidding strategy with historical conversion data to automate efficient spend',
        'Set up Smart Bidding with seasonal adjustments ahead of admission peak periods',
        'Created dedicated landing pages per course with strong above-fold CTAs to maximise conversion rate',
        'Monitored and optimised weekly — pausing underperforming ad groups and reallocating budget',
      ],
      performanceTable: undefined,
      keyResults: [
        'Delivered 35,600 conversions in a single month (July 2024) — a massive volume for an education client',
        'Maintained cost per conversion at just ₹412 despite running in the most competitive admissions month',
        'Generated 373,000 clicks, reflecting strong ad relevance and reach across target audiences',
        'Total spend of ₹14.7M managed efficiently — demonstrating the ability to handle large-scale ad budgets',
        'Campaign structure and learnings carried forward to sustain performance in subsequent months',
      ],
    },
  'google-ads-maritime-education': {
    title: 'GOOGLE ADS — MARITIME EDUCATION',
    subtitle: '₹17.59 Cost Per Lead for IMBA — Maritime Academy',
    intro: `International Maritime Business Academy (IMBA), Dehradun runs specialised programs in maritime, shipping, and supply chain management. Google Ads for a niche education sector is notoriously inefficient — but through hyper-targeted Search and Performance Max campaigns, Meegan Media delivered leads as low as ₹17.59 per conversion.`,
    stats: [
      { label: 'Lowest Cost Per Conv.', value: '₹17.59' },
      { label: 'Conversions (Best Campaign)', value: '720' },
      { label: 'Conversions @ ₹8.30 (P.Max)', value: '87' },
      { label: 'Campaigns Managed', value: '6 Camp.' },
    ],
    challenge: [
      'Maritime education is ultra-niche — low monthly search volumes and limited audience size',
      'National competitors with larger ad budgets dominating for generic keywords',
      'High cost-per-click for education keywords — needed to maximise conversion efficiency',
      'Multi-regional targeting required: North India, Maharashtra, and South India (Chennai, Kochi, Vishakhapatnam)',
    ],
    actions: [
      'Built separate geo-targeted campaigns for North India, Maharashtra, and South India to tailor messaging and bids',
      'Implemented Performance Max campaign alongside Search — Performance Max generated 87 conversions at just ₹8.30/conv',
      'Used tight keyword matching with negative keyword lists to eliminate irrelevant traffic',
      'Wrote ad copy addressing specific career outcomes for each maritime program type',
      'Set up conversion tracking for form submissions and phone calls to capture all lead types',
      'Continuously A/B tested headlines and descriptions to improve Quality Scores and reduce CPC',
    ],
    performanceTable: {
      headers: ['Campaign', 'Clicks', 'Conversions', 'Cost/Conv.', 'Conv. Rate'],
      rows: [
        ['Leads-Search-14Jan', '1,343', '720', '₹17.59', '—'],
        ['PGDM Maritime — North India', '2,624', '424', '₹54.04', '—'],
        ['PGDM Maritime — Maharashtra', '2,220', '358', '₹71.13', '—'],
        ['Leads-Performance Max', '1,328', '87', '₹8.30', '—'],
        ['PGDM Maritime — South India', '1,428', '171', '₹116.40', '—'],
      ],
    },
    keyResults: [
      'Best-performing campaign delivered 720 conversions at just ₹17.59 per lead — exceptional for education niche',
      'Performance Max campaign achieved 87 conversions at ₹8.30 per conversion — the lowest cost of any campaign',
      'Total of 1,760+ conversions generated across all active IMBA campaigns',
      'Multi-region strategy ensured national reach with localised messaging for each target geography',
      'Phone call tracking captured 80+ inbound calls as additional revenue-generating conversions',
    ],
  },
};

const imageMap: Record<string, string> = {
        'google-ads-growth-campaign': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771932391/Comparision_of_Orane_Dwarka_hnqmvw.jpg',
      'google-ads-beauty-education': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771932299/Orane_Noida_my3yaj.jpg',
    'google-ads-higher-education': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771932153/GEU_Results_lggbiq.png',
  'google-ads-maritime-education': 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771931761/IMBA_Search_and_PMax_jlzsi4.png',
};
const altMap: Record<string, string> = {
        'google-ads-growth-campaign': 'Orane Dwarka Google Ads Growth Campaign',
      'google-ads-beauty-education': 'Orane Noida Google Ads Results',
    'google-ads-higher-education': 'Graphic Era University Google Ads Results',
  'google-ads-maritime-education': 'IMBA Maritime Google Ads Performance',
};

export default function GoogleAdsPage() {
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
        <div className="mb-6 flex items-center justify-between">
          <Link href="/services/google-ads" className="text-primary hover:underline text-sm">
            ← Back to Google Ads
          </Link>
          <div>
            {slugs.map((s, idx) => {
              const labelMap: Record<string, string> = {
                'google-ads-maritime-education': 'IMBA Maritime Academy',
                'google-ads-higher-education': 'Graphic Era University',
                'google-ads-beauty-education': 'Orane Noida',
                'google-ads-growth-campaign': 'Orane Dwarka',
              };
              return (
                <button
                  key={s}
                  onClick={() => {
                    setIndex(idx);
                    scrollToTop();
                  }}
                  className={`px-2 py-1 mx-1 rounded-full text-sm ${idx === index ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  {labelMap[s] || s}
                </button>
              );
            })}
          </div>
        </div>

        {/* render current case study */}
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
                src={imageMap[slug] || imageMap['google-ads-maritime-education']}
                alt={altMap[slug] || 'Google Ads Case Study'}
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
      </div>
    </main>
  );
}
