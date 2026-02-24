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
  'meta-ads-higher-education': {
    title: 'META ADS — HIGHER EDUCATION',
    subtitle: '27,057 Leads Across 6 Regions — Graphic Era University',
    intro: `Graphic Era University runs a massive Meta lead generation operation targeting students across all major Indian geographies. Meegan Media managed multi-city campaigns across UK (NRI students), UP, North East, Delhi NCR, Madhya Pradesh, and other states — delivering 27,000+ leads at tightly controlled cost-per-lead figures across every region.`,
    stats: [
      { label: 'Total Leads Generated', value: '27K+' },
      { label: 'Lowest Cost Per Lead (UP)', value: '₹53' },
      { label: 'Geo‑Targeted Campaigns', value: '6' },
      { label: 'Total Impressions', value: '74M+' },
    ],
    challenge: [
      'University admissions require targeting very different student profiles across 6+ geographic regions simultaneously',
      'NRI and international-origin students (UK campaign) require different messaging and higher budget allocation',
      'Balancing lead volume vs cost per lead — some regions have smaller audiences requiring smarter targeting',
      'Admission season competition spikes — multiple universities running Meta ads for the same student pool',
    ],
    actions: [
      'Built dedicated campaigns per region — UK/NRI, UP, North East, Delhi NCR, MP, and others — each with customised audience targeting',
      'Created region-specific ad creatives and copy emphasising locally-relevant course outcomes and campus highlights',
      'Used Meta Lead Ads with instant forms to reduce friction and maximise form submission rates',
      'Deployed Lookalike Audiences based on existing student data to find high-quality prospects in each region',
      'Implemented 7-day click attribution window for accurate lead counting across longer decision journeys',
      'Ran continuous A/B tests on creatives — images, videos, headlines — to find top performers per region',
    ],
    performanceTable: {
      headers: ['Region / Campaign', 'Leads', 'Reach', 'Impressions', 'Cost / Lead'],
      rows: [
        ['IDP — UK (NRI Students)', '11,097', '4,290,459', '37,449,228', '₹99.02'],
        ['IDP — Uttar Pradesh', '4,523', '4,457,326', '28,728,403', '₹53.20'],
        ['IDP — North East', '3,649', '851,992', '2,241,641', '₹61.59'],
        ['IDP — Delhi NCR', '3,335', '1,903,753', '5,786,359', '₹73.89'],
        ['IDP — Madhya Pradesh', '3,033', '923,476', '2,339,332', '₹66.60'],
        ['IDP — Other States', '1,420', '687,727', '2,999,453', '₹109.45'],
      ],
    },
    keyResults: [
      '27,057 total leads generated across all 6 regional campaigns',
      'UK/NRI campaign delivered 11,097 leads — largest single campaign, valuable high-intent international student segment',
      'UP campaign achieved the lowest cost per lead at ₹53.20 — exceptional efficiency for a major state market',
      '74M+ total impressions built massive brand awareness for Graphic Era across all target geographies',
      'All campaigns maintained cost per lead under ₹110 — within university admissions benchmarks for meta ads',
    ],
  },
  'meta-ads-beauty': {
    title: 'META ADS — BEAUTY EDUCATION (ONLINE)',
    subtitle: '98% Lead Growth After Andromeda Update — Orane Online Nutrition Course',
    intro: `Orane International's online nutrition and beauty courses faced a significant challenge when Meta's Andromeda algorithm update disrupted campaign performance industry-wide. Meegan Media rapidly adapted the campaign strategy — restructuring ad sets, refreshing creatives, and re-optimising targeting — resulting in a 98% jump in leads and an 18.66% reduction in cost per lead in just 30 days.`,
    stats: [
      { label: 'Lead Growth (30 days)', value: '+98%' },
      { label: 'Leads in Jan 2026', value: '773' },
      { label: 'Cost Per Lead', value: '₹51.90' },
      { label: 'CPL Reduction Post-Update', value: '-18.7%' },
    ],
    challenge: [
      "Meta's Andromeda algorithm update caused widespread campaign disruption — leads dropped and costs spiked for most advertisers",
      'Online beauty and nutrition courses face unique trust barriers — students are sceptical of online certifications',
      'Multiple ad sets competing in the same account required clear audience segmentation to avoid overlap',
      'Needed to recover and outperform previous campaign benchmarks within a short timeframe',
    ],
    actions: [
      'Immediately diagnosed the impact of the Andromeda update — identified which ad sets were penalised and which were benefiting',
      'Restructured all ad sets with fresh audiences, removing fatigued segments that had been over-served',
      'Relaunched with new creative formats — Reels-style vertical videos outperformed static images post-update',
      'Introduced the Bridal Lead Campaign targeting a high-intent adjacent audience (bridal makeup seekers interested in professional training)',
      'Ran Webinar-based lead ads as an alternative funnel — lower friction entry point building course credibility',
      "Tightened daily budget allocation to top-performing ad sets — concentrated spend where Meta's algorithm was rewarding the account",
    ],
    performanceTable: {
      headers: ['Ad Set', 'Leads', 'Cost / Lead', 'Amount Spent'],
      rows: [
        ['Nutrition Course — Diploma', '773', '₹51.90', '₹40,115'],
        ['Bridal Lead Campaign 25K', '316', '₹38.56', '₹12,186'],
        ['Online Courses — Kamal Reel', '201', '₹64.14', '₹12,893'],
        ['Nutrition Course — Webinar', '117', '₹60.86', '₹7,121'],
      ],
    },
    keyResults: [
      'Leads jumped from 390 to 773 in 30 days — a 98.21% increase post Andromeda update adaptation',
      'Cost per lead dropped from ₹63.80 to ₹51.90 — an 18.66% improvement in efficiency',
      'Bridal Lead Campaign delivered 316 leads at just ₹38.56 — the lowest cost per lead in the account',
      'Reel-format creative delivered 201 leads at ₹64.14 — confirming video-first creative strategy post-Andromeda',
      'Total of 1,407 leads generated in the 30-day period across all active ad sets',
    ],
  },
  'meta-ads-dwarka': {
    title: '190% Lead Growth for Orane Dwarka — Beating Every Competitor',
    subtitle: '',
    intro: `Following Meta's Andromeda algorithm update, most beauty institutes in Dwarka saw their Meta ad performance collapse. Orane Dwarka's Combined Beauty Course campaign, managed by Meegan Media, did the opposite — leads grew by 190% in 30 days while competitors struggled. This was a direct result of proactive creative and audience strategy adaptation within 72 hours of the update rolling out.`,
    stats: [
      { label: 'Lead Growth (30 days)', value: '+190%' },
      { label: 'Leads (Jan 2026)', value: '206' },
      { label: 'Leads Previous Period', value: '71' },
      { label: 'Cost Per Lead', value: '₹85.09' },
    ],
    challenge: [
      'Meta Andromeda update hit local beauty institute campaigns particularly hard — smaller budgets have less algorithmic data to recover',
      'Orane Dwarka competes directly with Lakme Academy, VLCC, and multiple local institutes all running Meta ads',
      'Dwarka is a high-competition Delhi locality — audience sizes are limited and ad fatigue sets in faster',
      'Cost per lead increased by ₹21.70 post-update — needed to contain the rise while aggressively growing volume',
    ],
    actions: [
      'Refreshed all ad creatives within 72 hours of Andromeda rollout — new hooks, new visuals, new CTAs',
      "Switched primary format to Reels and short video — these gained preferential reach in Meta's post-Andromeda ranking",
      'Rebuilt audiences using engagement-based custom audiences rather than interest-only targeting',
      'Introduced combined beauty course messaging (hair + skin + makeup together) to maximise appeal per impression',
      'Expanded geographic radius to capture students from adjoining Dwarka sectors previously excluded',
      'Rapid daily monitoring and optimisation during the first 2 weeks post-update — zero passive management',
    ],
    performanceTable: {
      headers: ['Before leads', 'After leads', 'Growth'],
      rows: [
        ['71', '206', '+190%'],
      ],
    },
    keyResults: [
      'Leads grew from 71 to 206 in just 30 days — a 190.14% increase while competitors declined',
      'Became the only Orane location to outperform pre-Andromeda benchmarks within the same period',
      'Cost per lead at ₹85.09 remains commercially viable for beauty course admissions in Delhi',
      'Result demonstrates our ability to respond rapidly to platform algorithm changes and maintain client performance',
      'Strategy learnings from Dwarka immediately applied to other Orane locations — Noida benefited from same playbook',
    ],
    notes: (
      <div className="mt-8">
        <img
          src="https://res.cloudinary.com/dwffrfajl/image/upload/v1771928110/Orane_Dwarka_Meta_ads_after_andromeda_update_vsoyds.jpg"
          alt="Orane Dwarka Growth"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    ),
  },
};
// ...existing code...

export default function MetaAdsPage() {
  const slugs = Object.keys(caseStudyData);
  const [index, setIndex] = useState(0);
  const slug = slugs[index];
  const data = caseStudyData[slug];
  function goNext() {
    setIndex((i) => (i + 1 < slugs.length ? i + 1 : i));
  }
  function goPrev() {
    setIndex((i) => (i - 1 >= 0 ? i - 1 : i));
  }

  return (
    <main className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* breadcrumb/back link */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/portfolio" className="text-primary hover:underline text-sm">
            ← Back to portfolio
          </Link>
          <div>
            {slugs.map((s, idx) => (
              <button
                key={s}
                onClick={() => setIndex(idx)}
                className={`px-2 py-1 mx-1 rounded-full text-sm ${idx === index ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                {s.replace('meta-ads-', '').replace(/-/g, ' ')}
              </button>
            ))}
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
                src={
                  slug === 'meta-ads-beauty'
                    ? 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771927893/Meta_ads_for_Online_Nutrition_Leads_vkmifi.jpg'
                    : slug === 'meta-ads-dwarka'
                      ? 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771928110/Orane_Dwarka_Meta_ads_after_andromeda_update_vsoyds.jpg'
                      : 'https://res.cloudinary.com/dwffrfajl/image/upload/v1771927698/GEU_Meta_ads_y0r8sx.jpg'
                }
                alt={
                  slug === 'meta-ads-beauty'
                    ? 'Orane Dwarka SEO'
                    : slug === 'meta-ads-dwarka'
                      ? 'Orane Dwarka Growth'
                      : 'Search Console Report'
                }
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
                Regional Campaign Performance Breakdown
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

          {/* Remove extra notes/image at the bottom */}

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