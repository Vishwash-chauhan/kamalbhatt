import { Metadata } from 'next';
import Link from 'next/link';

// This dynamic route will serve as a generic case study page for each category.
//
// To add additional case studies for new slugs simply extend the `caseStudyData`
// object below with another key matching the category slug (e.g. "meta-ads").
//
// The structure mimics the content example you provided: headline, stats,
// challenge list, "what we did" actions, a performance table, and key results.
// Adjust the template markup as needed and feel free to move this component
// into a shared folder if you plan to reuse it elsewhere.

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
  'seo-optimisation': {
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
  // additional slugs can be added here. you can copy the structure above
  // and replace the text with the appropriate case study data.
  'meta-ads': {
    title: 'META ADS — CATEGORY NAME',
    subtitle: 'Short descriptive subtitle',
    intro: 'Introductory paragraph describing the client and campaign overview.',
    stats: [
      { label: 'Example stat', value: '123' },
      // ...
    ],
    challenge: [
      'Describe the main challenges encountered.',
    ],
    actions: [
      'Outline what was done to address the challenge.',
    ],
    performanceTable: {
      headers: ['Column1', 'Column2'],
      rows: [['Value1', 'Value2']],
    },
    keyResults: [
      'Key result bullet point.',
    ],
  },
  'google-ads': {
    title: 'GOOGLE ADS — CATEGORY NAME',
    intro: 'Placeholder for the Google Ads case study.',
    stats: [],
    challenge: [],
    actions: [],
    keyResults: [],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // `params` is a promise in Next.js app router, so unwrap it before use.
  const { slug } = await params;
  const data = caseStudyData[slug];
  return {
    title: data ? `${data.title} | Portfolio` : 'Portfolio case study',
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // `params` is a promise; unwrap using await to access slug value.
  const { slug } = await params;
  // debug: check slug value
  console.log('rendering category page, slug=', slug);
  const data = caseStudyData[slug] || {
    title: 'Category placeholder',
    intro: 'Content will go here.',
  };

  return (
    <main className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* breadcrumb/back link */}
        <div className="mb-6">
          <Link href="/portfolio" className="text-primary hover:underline text-sm">
            ← Back to portfolio
          </Link>
        </div>

        {/* header/intro section */}
        <header className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {data.title}
          </h1>
          {data.subtitle && (
            <h2 className="mt-2 text-xl text-gray-600 dark:text-gray-300">
              {data.subtitle}
            </h2>
          )}
          {data.intro && <p className="mt-4 text-gray-700 dark:text-gray-300">{data.intro}</p>}
          {/* featured image */}
          <div className="mt-8">
            <img
              src="https://res.cloudinary.com/dwffrfajl/image/upload/v1771921648/Search_Console_GEU_ewoxzf.jpg"
              alt="Search Console Report"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </header>

        {/* debug info (hidden on production) */}
        <p className="mt-2 text-sm text-gray-400 sr-only">slug: {slug}</p>

      {data.stats && (
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Campaign Highlights</h3>
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
          <h3 className="text-2xl font-semibold mb-2 text-secondary">The Challenge</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {data.challenge.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      {data.actions && (
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-2 text-secondary">What We Did</h3>
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
          <h3 className="text-2xl font-semibold mb-2 text-primary">Key Results</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {data.keyResults.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {data.notes && <div className="mt-8">{data.notes}</div>}
      </div>
    </main>
  );
}
