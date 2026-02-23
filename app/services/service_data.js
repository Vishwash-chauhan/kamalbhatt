import React from 'react';

export const services = [
  {
    slug: 'seo-optimisation',
    title: 'SEO Optimization',
    tagline: 'Build search visibility that compounds every month.',
    summary:
      'A full-funnel SEO program that turns your website into a predictable inbound lead channel. We focus on technical foundations, high-intent content, and local authority.',
    description:
      'Our SEO approach blends technical audits, on-page clarity, and off-page credibility so your business ranks for the searches that actually convert. Expect clear prioritization, fast wins, and long-term growth.',
    stats: [
      { value: '4-8', label: 'Weeks to first measurable lift' },
      { value: '30+', label: 'Ranking signals optimized' },
      { value: '24/7', label: 'Always-on inbound visibility' },
    ],
    highlights: [
      'Full technical audit with prioritized fixes',
      'On-page optimization for revenue-driving pages',
      'Local SEO and Google Business Profile growth',
      'Content brief + internal linking strategy',
    ],
    processHeading: 'Our SEO Process',
    processDescription: 'Structured sprints to improve visibility, traffic quality, and conversions.',
    process: [
      {
        title: 'SEO Audit',
        details: 'Comprehensive technical audit covering site health, content quality, backlink profile, and competitive analysis to identify all optimization opportunities.',
      },
      {
        title: 'Strategy Development',
        details: 'Custom SEO roadmap combining technical fixes, content strategy, link building plan, and AEO tactics aligned with your business goals.',
      },
      {
        title: 'Technical Optimization',
        details: 'Fix critical issues: site speed, mobile usability, crawlability, schema markup, Core Web Vitals, and indexation problems.',
      },
      {
        title: 'Content Optimization',
        details: 'Optimize existing pages for target keywords, create new content for gaps, implement AEO best practices, and build topic authority.',
      },
      {
        title: 'Authority Building',
        details: 'Strategic link building, digital PR, brand mentions, and E-E-A-T signals to increase domain authority and trustworthiness.',
      },
      {
        title: 'Monitor & Improve',
        details: 'Continuous tracking, testing, and optimization based on ranking changes, traffic patterns, and algorithm updates.',
      },
    ],
    pricingSection: {
      eyebrow: 'India Pricing (INR)',
      title: 'SEO Services Pricing',
      description:
        'Transparent SEO pricing designed for sustainable growth. Choose from monthly packages or project-based services.',
      plans: [
        {
          name: 'Local SEO',
          tagline: 'Perfect for local businesses',
          features: [
            'Google Business Profile optimization',
            'Local citation building (15 citations)',
            'On-page SEO (up to 10 pages)',
            'Monthly reporting & ranking tracking',
            'Review generation strategy',
          ],
          ctaLabel: 'Get Started',
          featured: false,
        },
        {
          name: 'Growth SEO',
          tagline: 'For growing businesses',
          badge: 'Most Popular',
          features: [
            'Everything in Local SEO',
            'National keyword targeting (10-15 keywords)',
            'Content optimization (up to 25 pages)',
            'Technical SEO (site speed, mobile, schema)',
            'Link building (5 quality backlinks/month)',
            'Answer Engine Optimization (AEO)',
            'Monthly strategy call',
          ],
          ctaLabel: 'Get Started',
          featured: true,
        },
        {
          name: 'Enterprise SEO',
          tagline: 'For competitive markets',
          features: [
            'Everything in Growth SEO',
            'Competitive keyword targeting (25+ keywords)',
            'Unlimited page optimization',
            'Advanced technical SEO & audits',
            'Aggressive link building (10+ quality backlinks)',
            'Content strategy & creation (4 articles/month)',
            'Dedicated account manager',
            'Bi-weekly strategy calls',
          ],
          ctaLabel: 'Get Started',
          featured: false,
        },
      ],
      pricingByCurrency: {
        inr: {
          label: 'India Pricing (INR)',
          symbol: '₹',
          prices: ['15,000', '35,000', '65,000'],
        },
        usd: {
          label: 'Global Pricing (USD)',
          symbol: '$',
          prices: ['800', '2,000', '4,000'],
        },
      },
    },
faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer: (
          <>
            <p>
              SEO typically shows initial improvements in <strong>4-8 weeks</strong> with technical fixes appearing fastest. Measurable ranking gains occur at <strong>3-6 months</strong>, and significant traffic increases happen at <strong>6-12 months</strong>. SEO is a long-term investment where results compound over time, unlike paid ads which stop when spending stops.
            </p>

            <p className="font-semibold mt-4">Timeline Breakdown:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Phase</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Timeframe</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">What You See</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Quick Wins</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">4-8 weeks</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Technical fixes, faster site speed, initial ranking movement</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Growth Phase</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3-6 months</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Top 10 rankings for target keywords, traffic increase 50–150%</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Maturity Phase</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">6-12 months</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Top 3 rankings, 200–400% traffic growth, consistent leads</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Compound Phase</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">12+ months</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Market dominance, reduced cost per lead, sustainable growth</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3">
              <strong>What Affects Timeline:</strong> industry competition level, current website technical health, content quality and quantity, backlink profile strength, budget and resource allocation.
            </p>
            <p className="mt-3">
              Meegan Media clients typically see first measurable lift in 4-8 weeks, with significant results by month 6. For example, PMMITAS grew enrollments from 50 to 180/month within 6 months of SEO implementation.
            </p>
          </>
        ),
      },
      {
        question: 'How much does SEO cost per month?',
        answer: (
          <>
            <p>
              Professional SEO services cost <strong>$800-$4,000 per month</strong> depending on scope and competition. Local SEO starts at $800/month for small businesses, growth SEO costs $2,000/month for competitive markets, and enterprise SEO runs $4,000+/month for national campaigns. One-time SEO services range from $400-$1,500 per project.
            </p>

            <p className="font-semibold mt-4">SEO Pricing Breakdown:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Package</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Monthly Cost</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Best For</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">What’s Included</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Local SEO</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">$800/month</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Local businesses, service areas</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">GMB optimization, 10 pages, 15 local citations, ranking tracking</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Growth SEO</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">$2,000/month</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Growing businesses, regional reach</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">25 pages optimized, 10-15 national keywords, technical SEO, 5 backlinks/month, AEO</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Enterprise SEO</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">$4,000/month</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Competitive industries, national scale</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Unlimited pages, 25+ keywords, 10+ backlinks/month, content creation, dedicated manager</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3">
              One-Time SEO Services: SEO Audit $600, Speed Optimization $900, Schema Markup $400, Content SEO Package $1,250, Link Building Campaign $1,500, AEO Implementation $750.
            </p>

            <p className="mt-3">
              <strong>What Determines Cost:</strong> number of target keywords, geographic scope (local vs national), industry competition, current website condition, content creation needs.
            </p>

            <p className="mt-3">Meegan Media offers transparent pricing with no hidden fees. Contact for customized quote based on your specific goals.</p>
          </>
        ),
      },
      {
        question: 'What is Answer Engine Optimization (AEO) and why does it matter in 2026?',
        answer: (
          <>
            <p>
              Answer Engine Optimization (AEO) is optimizing content to appear in AI-powered search results like Google AI Overviews, ChatGPT, Perplexity, and Claude. Unlike traditional SEO focusing on rankings, AEO ensures your content becomes the authoritative answer AI engines cite. Critical because 60% of Google searches now result in zero clicks.
            </p>

            <p className="font-semibold mt-4">Traditional SEO vs AEO:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Factor</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Traditional SEO</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Answer Engine Optimization (AEO)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Goal</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Rank in top 10 results</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Be THE cited answer in AI responses</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Format</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Keyword-optimized pages</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Concise, direct answers (30-50 words)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Platform</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google SERPs</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">ChatGPT, Google AI, Perplexity, Claude</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Clicks</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">User clicks to visit site</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">AI displays answer directly (zero-click)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Strategy</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Backlinks, keywords, content depth</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">E-E-A-T, schema markup, FAQ structure</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3 font-semibold">Why AEO Matters in 2026:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>60% of searches end without clicks (AI gives answer)</li>
              <li>Google AI Overviews appear in 85%+ of informational queries</li>
              <li>ChatGPT has 200M+ active users searching for answers</li>
              <li>Voice search relies entirely on AI-cited sources</li>
              <li>Perplexity, Claude, Gemini gaining search market share</li>
            </ul>

            <p className="mt-3 font-semibold">AEO Best Practices:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Write 30-50 word direct answers to questions</li>
              <li>Use FAQ schema markup</li>
              <li>Implement E-E-A-T signals (expertise, authority, trust)</li>
              <li>Structure content with clear H2/H3 headings</li>
              <li>Include tables, bullet points for easy parsing</li>
            </ul>

            <p className="mt-3">Meegan Media includes AEO implementation in Growth and Enterprise SEO packages, ensuring visibility across both traditional search and AI platforms.</p>
          </>
        ),
      },
      {
        question: 'What is the difference between local SEO and national SEO?',
        answer: (
          <>
            <p>
              Local SEO targets customers in specific geographic areas through Google Business Profile optimization, local citations, and “near me” searches. National SEO targets broader audiences across entire countries with competitive keyword strategies and authority building. Local SEO shows faster results (<strong>2-4 months</strong>) while national SEO takes <strong>6-12 months</strong>.
            </p>

            <p className="font-semibold mt-4">Local SEO vs National SEO:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Aspect</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Local SEO</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">National SEO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Target Audience</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">City, region, or service area</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Entire country or multiple countries</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Keywords</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">“dentist Haldwani”, “plumber near me”</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">“best CRM software”, “SEO services”</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Timeline</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">2-4 months to results</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">6-12 months to results</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Cost</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">$800-$1,500/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">$2,000-$5,000/month</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Primary Platform</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google Business Profile, Map Pack</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Organic search results</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Competition</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Local businesses</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">National/international companies</td></tr>
              </tbody>
            </table>

            <p className="mt-3">Local SEO Strategy:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Google Business Profile optimization</li>
              <li>Local citation building (Yelp, Yellow Pages, industry directories)</li>
              <li>“Near me” keyword targeting</li>
              <li>Service area pages</li>
              <li>Local review generation</li>
              <li>Geographic-specific content</li>
            </ul>
            <p className="mt-3">National SEO Strategy:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>High-volume competitive keywords</li>
              <li>Comprehensive content marketing</li>
              <li>Authority backlink building</li>
              <li>Technical SEO excellence</li>
              <li>National brand awareness</li>
            </ul>
            <p className="mt-3 font-semibold">Which Do You Need?</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li><strong>Choose Local SEO if:</strong> Physical location or service area business; Customers come from specific city/region; Budget under $1,500/month; Need results in 2-4 months</li>
              <li><strong>Choose National SEO if:</strong> E-commerce or online services; Customers nationwide; Budget $2,000+/month; Building long-term market authority</li>
            </ul>
            <p className="mt-3">Meegan Media offers both Local SEO ($800/month) and National Growth SEO ($2,000/month) packages, or combined strategies for businesses expanding from local to national markets.</p>
          </>
        ),
      },
      {
        question: 'What is E-E-A-T in SEO and why does Google care about it?',
        answer: (
          <>
            <p>
              E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google’s quality framework for evaluating content credibility. Websites with strong E-E-A-T rank higher because they demonstrate first-hand experience, subject expertise, industry authority through citations and backlinks, and trustworthiness through transparency. Critical for YMYL topics and AI search visibility.
            </p>
            <p className="font-semibold mt-4">The Four E-E-A-T Components:</p>
            <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
              <li>
                <strong>Experience (First E)</strong> - Demonstrates actual hands-on experience with the topic - Shows real-world application and results - Includes case studies, client testimonials, portfolio work - Example: “We managed SEO for 100+ clients across 10 industries”
              </li>
              <li>
                <strong>Expertise</strong> - Author credentials and qualifications displayed - Subject matter depth and accuracy - Professional certifications mentioned - Example: “Kamal Bhatt, 10+ years digital marketing, Google Ads certified”
              </li>
              <li>
                <strong>Authoritativeness</strong> - Recognized as a go-to source in the industry - Cited by other authoritative websites - Quality backlinks from trusted domains - Industry awards, speaking engagements, publications - Example: Cited by Search Engine Journal, featured in industry podcasts
              </li>
              <li>
                <strong>Trustworthiness</strong> - Transparent about who runs the site - Contact information clearly visible - Secure website (HTTPS) - Clear privacy policy and terms - Honest about limitations (no “guaranteed #1 rankings”)
              </li>
            </ol>

            <p className="font-semibold mt-4">Why E-E-A-T Matters:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Impact Area</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">How E-E-A-T Affects It</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google Rankings</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Higher E-E-A-T = better rankings, especially for competitive keywords</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">AI Citations</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">ChatGPT, Perplexity prefer citing high E-E-A-T sources</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">YMYL Topics</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Essential for medical, financial, legal content (Your Money Your Life)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Trust & Conversions</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Users more likely to convert from authoritative sources</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Algorithm Updates</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google increasingly rewards E-E-A-T in core updates</td>
                </tr>
              </tbody>
            </table>

            <p className="font-semibold mt-4">How to Build E-E-A-T:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Add detailed author bios with credentials</li>
              <li>Include real case studies and client results</li>
              <li>Get backlinks from industry authorities (.edu, news sites, industry publications)</li>
              <li>Display certifications and awards</li>
              <li>Show team expertise and experience</li>
              <li>Include client testimonials with full attribution</li>
              <li>Be transparent about methods and pricing</li>
              <li>Publish original research and insights</li>
            </ul>

            <p className="mt-3">Meegan Media demonstrates E-E-A-T through 100+ client success stories, 10+ years proven experience, and transparency about methods and realistic timelines — no false promises.</p>
          </>
        ),
      },
      {
        question: 'Can SEO agencies guarantee #1 rankings on Google?',
        answer: (
          <>
            <p>
              No ethical SEO agency can guarantee #1 rankings because Google uses 200+ ranking factors, and results depend on competition, algorithm updates, and content quality. Agencies promising guaranteed #1 rankings typically use black-hat techniques that risk Google penalties. Instead, reputable agencies guarantee transparent reporting, white-hat strategies, and measurable improvements in traffic, rankings, and conversions.
            </p>

            <p className="font-semibold mt-4">Why #1 Rankings Can’t Be Guaranteed:</p>
            <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
              <li><strong>Google Controls Rankings (Not SEO Agencies)</strong> - Google uses 200+ ranking signals; algorithm updates change rankings constantly (500+ updates/year); competitors actively improve their SEO too; user behavior affects rankings (CTR, dwell time, bounce rate).</li>
              <li><strong>Industry Competition Varies</strong> - Low-competition keywords easier to rank; high-competition keywords extremely difficult; local vs national competition differs drastically; new websites need time to build authority.</li>
              <li><strong>Google Penalties Risk</strong> - Black-hat tactics (keyword stuffing, link schemes) = penalties; guaranteed rankings often mean manipulation tactics; penalties can remove site from Google entirely; recovery from penalties takes 6-12+ months.</li>
            </ol>

            <p className="font-semibold mt-4">What Ethical SEO Agencies CAN Guarantee:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>✅ Transparent Reporting – Real-time access to ranking data, monthly traffic and conversion reports, clear explanation of work performed</li>
              <li>✅ White-Hat Strategies – Google-compliant optimization techniques, no spammy link building, quality content creation, technical best practices</li>
              <li>✅ Measurable Improvements – Traffic growth targets (50-300% in 6-12 months), keyword ranking improvements (top 10, then top 3), domain authority increases, conversion rate optimization</li>
              <li>✅ Realistic Timelines – 4-8 weeks: Initial improvements; 3-6 months: Significant ranking gains; 6-12 months: Market leadership position; 12+ months: Sustained competitive advantage</li>
            </ul>

            <p className="font-semibold mt-4">Red Flags to Avoid:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>❌ “Guaranteed #1 rankings in 30 days”</li>
              <li>❌ “We have a special relationship with Google”</li>
              <li>❌ “Guaranteed results or your money back” (rankings can’t be guaranteed)</li>
              <li>❌ Extremely cheap pricing ($100-300/month for full SEO)</li>
              <li>❌ No transparency about methods used</li>
            </ul>

            <p className="mt-3">What to Expect Instead: realistic goal setting based on competition analysis, incremental ranking improvements month over month, focus on revenue and conversions, not just rankings, and flexibility to adapt strategy based on results.</p>
            <p className="mt-3">Meegan Media guarantees transparent reporting, ethical white-hat strategies, and measurable traffic/conversion improvements within agreed timelines — but never guaranteed rankings, because that’s impossible to promise honestly.</p>
          </>
        ),
      },
      {
        question: 'What’s included in a professional SEO audit?',
        answer: (
          <>
            <p>
              A professional SEO audit analyzes 200+ factors across technical health, content quality, backlink profile, and competitive positioning. It identifies all optimization opportunities, prioritizes fixes by impact, and delivers an actionable roadmap. Comprehensive audits cover site speed, mobile usability, indexation, keyword gaps, content weaknesses, and toxic backlinks.
            </p>

            <p className="font-semibold mt-4">Complete SEO Audit Components:</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li><strong>Technical SEO Analysis:</strong> Site speed and Core Web Vitals scores; mobile responsiveness and usability; crawlability and indexation issues; XML sitemap and robots.txt review; HTTPS security and SSL certificates; duplicate content identification; canonical tag implementation; 404 errors and broken links; site architecture and URL structure.</li>
              <li><strong>On-Page SEO Evaluation:</strong> Title tag and meta description optimization; header tag (H1, H2, H3) structure; keyword usage and density; content quality and depth; image optimization (ALT tags, file size); internal linking structure; schema markup implementation; page-level optimization opportunities.</li>
              <li><strong>Off-Page SEO Assessment:</strong> Backlink profile quality analysis; toxic backlink identification; domain authority metrics; competitor backlink comparison; brand mention tracking; link building opportunities; social signal analysis.</li>
              <li><strong>Content & Keyword Analysis:</strong> Current keyword rankings; keyword gap analysis (vs competitors); content gap identification; content quality scoring; topic cluster opportunities; cannibalization issues; user intent alignment.</li>
              <li><strong>Competitive Analysis:</strong> Top 3-5 competitor SEO strategies; competitor keyword rankings; competitor backlink profiles; content strategy comparison; market share analysis.</li>
              <li><strong>AEO &amp; AI Search Readiness:</strong> FAQ schema implementation status; answer-focused content evaluation; E-E-A-T signal assessment; featured snippet opportunities; voice search optimization.</li>
            </ul>

            <p className="font-semibold mt-4">Audit Deliverables:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Component</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">What You Get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Written Report</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">30-50 page comprehensive analysis</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Priority Matrix</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Issues ranked by impact (high/medium/low)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Action Plan</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">90-day roadmap with specific tasks</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Competitor Benchmark</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">How you compare to top 3-5 competitors</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Quick Wins List</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Immediate fixes for fast results</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Long-term Strategy</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">6-12 month growth plan</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4">Timeline: Complete audit delivered in 7-10 business days<br />Cost: Professional SEO audits typically cost $600-$1,500 depending on site size</p>

            <p className="mt-3">Meegan Media’s Complete SEO Audit ($600) covers 200+ optimization factors and delivers a prioritized action plan. Clients use the audit to either implement fixes themselves or engage for ongoing SEO services.</p>
          </>
        ),
      },
      {
        question: 'What is local SEO and how does it help my business get more customers?',
        answer: (
          <>
            <p>
              Local SEO optimizes your online presence to attract customers searching for businesses “near me” or in specific locations. It focuses on Google Business Profile, local citations, location pages, and reviews to rank in the Map Pack (top 3 local results). Effective because 76% of “near me” searchers visit a business within 24 hours.
            </p>

            <p className="font-semibold mt-4">How Local SEO Drives Customers:</p>
            <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
              <li><strong>Google Map Pack Visibility</strong> - Appears above organic results for local searches; shows top 3 businesses with ratings, hours, location; 44% of clicks go to Map Pack results; example: search “dentist Haldwani” → Map Pack shows top 3.</li>
              <li><strong>“Near Me” Search Dominance</strong> - 46% of all Google searches have local intent; “near me” searches grew 900% in recent years; mobile users rely heavily on local results; voice search often returns local businesses.</li>
              <li><strong>High-Intent Traffic</strong> - Local searchers have immediate purchase intent; 76% visit a business within 24 hours; 28% of local searches result in purchase; much higher conversion than general traffic.</li>
            </ol>

            <p className="font-semibold mt-4">Local SEO Components:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Component</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">What It Does</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google Business Profile</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Your listing in Maps and local results</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Highest impact - 40% of ranking weight</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Local Citations</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Your business listed on directories (Yelp, Yellow Pages)</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Builds authority and consistency</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Reviews</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Customer ratings and testimonials</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Trust factor + ranking signal</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Location Pages</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Service area or multi-location pages</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Ranks for city/region keywords</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Local Backlinks</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Links from local newspapers, chambers, sponsors</td>
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Geographic relevance signal</td>
                </tr>
              </tbody>
            </table>

            <p className="font-semibold mt-4">Local SEO Results Timeline:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Month 1: GMB optimized, citations building started</li>
              <li>Month 2: Reviews increasing, rankings improving</li>
              <li>Month 3: Map Pack appearances, traffic growing</li>
              <li>Month 4-6: Consistent top 3 rankings, lead flow predictable</li>
            </ul>

            <p className="font-semibold mt-4">Perfect For These Businesses:</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Restaurants, cafes, food service</li>
              <li>Dental, medical, healthcare clinics</li>
              <li>Law firms, accounting, professional services</li>
              <li>Salons, spas, beauty services</li>
              <li>Gyms, fitness studios</li>
              <li>Plumbers, electricians, home services</li>
              <li>Retail stores with physical locations</li>
              <li>Real estate agents</li>
              <li>Coaching institutes, tutoring centers</li>
            </ul>

            <p className="font-semibold mt-4">Real Results Example:</p>
            <p>Business: Dental Clinic, Haldwani<br />Timeline: 6 months<br />Results: Map Pack ranking: Not visible → #1 for “dentist Haldwani”; Patient calls: +380%; Monthly new patients: 25 → 95; Google rating: 4.1 → 4.9 stars (85 reviews)</p>

            <p className="mt-3">Meegan Media’s Local SEO package ($800/month) includes complete GMB optimization, 15 local citations, on-page SEO for 10 pages, and review generation strategy — delivering results in 2-4 months.</p>
          </>
        ),
      },
      {
        question: 'Do you provide SEO services for e-commerce websites?',
        answer: (
          <>
            <p>
              Yes, e-commerce SEO services include product page optimization, category page strategies, technical fixes for large catalogs, product schema markup, internal linking optimization, and conversion-focused content. Services work with Shopify, WooCommerce, Magento, and custom platforms to improve organic rankings, traffic, and online sales.
            </p>

            <p className="font-semibold mt-4">E-commerce SEO Strategy:</p>
            <p><strong>Product Page Optimization:</strong> Product title optimization with buying keywords; Detailed, unique product descriptions (not manufacturer text); High-quality product images with ALT tags; Product schema markup (price, availability, reviews); Customer review integration; Related product recommendations.</p>
            <p><strong>Category Page SEO:</strong> Category descriptions optimized for keywords; Faceted navigation optimization; Breadcrumb navigation; Internal linking to subcategories; Collection page content.</p>
            <p><strong>Technical E-commerce SEO:</strong> Site speed optimization for large catalogs; Pagination and filtering SEO; Duplicate content prevention (product variants); Image compression and lazy loading; Mobile checkout optimization; Structured data implementation.</p>
            <p><strong>E-commerce Content Strategy:</strong> Buying guides (“Best X for Y”); Comparison pages (“X vs Y”); How-to content using products; Blog content driving product traffic; User-generated content (reviews, Q&A).</p>
            <p><strong>E-commerce Link Building:</strong> Product reviews from bloggers/influencers; Industry publication features; Supplier/manufacturer backlinks; Comparison and shopping guides; Digital PR for new products.</p>

            <p className="font-semibold mt-4">E-commerce SEO Results:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Metric</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Expected Growth (6 months)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Organic Traffic</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">200-400% increase</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Product Page Rankings</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">50-100 products ranking top 10</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Conversion Rate</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">15-30% improvement</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Revenue from Organic</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">3-5X increase</td></tr>
              </tbody>
            </table>

            <p className="mt-3">E-commerce Platforms We Work With: Shopify, WooCommerce (WordPress), Magento, BigCommerce, Custom platforms.</p>
            <p className="mt-3">E-commerce SEO Pricing: Growth SEO package: $2,000/month (25 products optimized); Enterprise SEO: $4,000/month (unlimited products); Custom pricing for large catalogs (1,000+ products).</p>

            <p className="mt-3">Meegan Media has optimized e-commerce stores including SnapShopHub and other online retailers, helping them grow from $2L to $14L+ monthly revenue through organic search.</p>
          </>
        ),
      },
      {
        question: 'What’s the difference between SEO and Google Ads for getting website traffic?',
        answer: (
          <>
            <p>
              SEO builds free organic traffic through rankings over 3-6 months with long-term compounding results. Google Ads delivers instant paid traffic within 24-48 hours but stops when budget stops. SEO has higher long-term ROI but slower start; Google Ads gives immediate leads at ongoing cost. Most businesses benefit from running both simultaneously.
            </p>

            <p className="font-semibold mt-4">SEO vs Google Ads Comparison:</p>
            <table className="w-full text-sm mt-3 border-collapse">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Factor</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">SEO (Organic)</th>
                  <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Google Ads (Paid)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Speed to Results</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">3-6 months</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">24-48 hours</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Cost Structure</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Monthly retainer ($800-$4,000)</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Per click + management fee</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Traffic Type</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Free organic clicks</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Paid clicks</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Sustainability</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Compounds over time</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Stops when spending stops</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Click-Through Rate</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Higher CTR (organic trusted more)</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Lower CTR (users know it’s ads)</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Cost Per Click</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">$0 (after ranking)</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">$1-$50+ per click</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Long-term ROI</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Very high (free traffic)</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Medium (ongoing cost)</td></tr>
                <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Credibility</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">High (earned rankings)</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Lower (paid placement)</td></tr>
              </tbody>
            </table>

            <p className="font-semibold mt-4">When to Use Each:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li><strong>Choose SEO When:</strong> Building long-term sustainable traffic; Budget for 6-12 month investment; Want to reduce dependence on paid ads; Targeting informational keywords; Building brand authority; Lower cost per lead over time.</li>
              <li><strong>Choose Google Ads When:</strong> Need leads immediately (this week); Testing new markets or products; Seasonal campaigns or promotions; High-value services (leads worth $1,000+); Competitive keywords too hard for SEO; Retargeting website visitors.</li>
            </ul>

            <p className="font-semibold mt-4">The Winning Strategy - Run Both:</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Month 1-3: Google Ads 90% / SEO 10%</li>
              <li>Month 4-6: Google Ads 70% / SEO 30%</li>
              <li>Month 7-12: Google Ads 40% / SEO 60%</li>
              <li>Month 12+: Reduce Ads budget 30-50%, SEO provides majority of leads, use ads for promotions, maintain total leads.</li>
            </ul>

            <p className="mt-4"><strong>Combined Example: Business: Professional Services, Haldwani</strong></p>
            <p>Month 1: SEO 5 leads ($2,000) + Ads 25 leads ($2,500+500 mgmt) = 30 leads @ $5,000</p>
            <p>Month 6: SEO 30 leads ($2,000) + Ads 20 leads ($2,000+500 mgmt) = 50 leads @ $4,500</p>
            <p>Month 12: SEO 60 leads ($2,000) + Ads 15 leads ($1,500+500 mgmt) = 75 leads @ $4,000 (2.5x leads, lower cost)</p>

            <p className="mt-3">Meegan Media recommends combining SEO and Google Ads for maximum growth. Start with ads for immediate leads while SEO builds, then reduce ad spend as organic traffic dominates.</p>
          </>
        ),
      },


    ],
    cta: {
      label: 'Book an SEO Strategy Call',
      href: '/contact',
    },
  },

  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    tagline: 'Build trust and demand with content that converts.',
    summary:
      'We create a consistent social presence that grows your audience, strengthens brand authority, and drives qualified inbound leads.',
    description:
      'Our social strategy blends contenttt planning, community engagement, and platform-specific best practices. Expect clearer positioning, stronger engagement, and steady growth across key channels.',
    stats: [
      { value: '2-3', label: 'Weeks to launch a content system' },
      { value: '12+', label: 'Content formats mapped to intent' },
      { value: '90', label: 'Day momentum plan for growth' },
    ],
    highlights: [
      'Brand voice and content pillars defined',
      'Monthly content calendar + creative direction',
      'Community management and engagement playbook',
      'Performance tracking and iteration',
    ],
    processHeading: 'Our Social Media Strategy',
    processDescription: 'Build a consistent presence that grows your audience and converts followers into customers.',
    process: [
      {
        title: 'Brand & Audience Discovery',
        details: 'Clarify audience needs, tone, and platform priorities to set a strong foundation.',
      },
      {
        title: 'Content System',
        details: 'Build a repeatable calendar with themes, formats, and creative guidelines.',
      },
      {
        title: 'Publish & Engage',
        details: 'Schedule, optimize, and manage community responses to build trust.',
      },
      {
        title: 'Analyze & Improve',
        details: 'Review performance insights and iterate on what drives reach and conversions.',
      },
    ],
    faqs: [
      {
        question: 'Which platforms will you prioritize for my business?',
        answer:
          'We choose 2–3 platforms based on your audience and offer. For example: B2B typically performs best on LinkedIn + YouTube, while local services often win on Instagram + Facebook.',
      },
      {
        question: 'What content formats will you produce?',
        answer:
          'You’ll get a mix of Reels/shorts, carousels, static posts, and story prompts mapped to awareness, trust, and conversion stages.',
      },
      {
        question: 'How do you define measurable success?',
        answer:
          'We track engagement quality, saves/shares, profile actions, and lead intent. Monthly reports include content winners, audience growth, and next‑month priorities.',
      },
      {
        question: 'Do you handle scheduling and community management?',
        answer:
          'Yes. We schedule posts, monitor comments/DMs, and provide response guidelines so your brand voice stays consistent and timely.',
      },
      {
        question: 'How long before we see traction?',
        answer:
          'Expect early signals in 3–6 weeks and stronger momentum around 8–12 weeks as content patterns and audience feedback compound.',
      },
    ],
    cta: {
      label: 'Plan My Social Strategy',
      href: '/contact',
    },
  },
  {
    slug: 'web-development-design',
    title: 'Web Development & Design',
    tagline: 'High-converting websites built for speed and clarity.',
    summary:
      'We design and develop modern, performance-first websites that communicate your value fast and convert visitors into leads.',
    description:
      'From structure and UX to development and optimization, we build websites that are easy to manage, fast to load, and focused on measurable business outcomes.',
    stats: [
      { value: '2-6', label: 'Weeks to launch most sites' },
      { value: '90+', label: 'Performance score targets' },
      { value: '3x', label: 'Average lift in lead clarity' },
    ],
    highlights: [
      'Conversion-focused UX and copy layout',
      'Responsive design for all devices',
      'SEO-ready architecture and clean code',
      'Analytics + conversion tracking setup',
    ],
    processHeading: 'Our Web Development Process',
    processDescription: 'End-to-end design and development that prioritizes speed, clarity, and conversions.',
    process: [
      {
        title: 'Discovery & Structure',
        details: 'Define goals, sitemap, and user journeys that align with your offer.',
      },
      {
        title: 'Design & Prototype',
        details: 'Create high-fidelity screens and brand visuals for clarity and trust.',
      },
      {
        title: 'Develop & Optimize',
        details: 'Build responsive pages with performance, accessibility, and SEO in mind.',
      },
      {
        title: 'Launch & Iterate',
        details: 'Ship with tracking, QA, and post-launch improvements.',
      },
    ],
    tools: [
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg',
      },
      {
        name: 'WordPress',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg',
      },
      {
        name: 'Webflow',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webflow.svg',
      },
      {
        name: 'Shopify',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg',
      },
    ],

    faqs: [
      {
        question: 'What is your typical timeline for a new website?',
        answer:
          'Most marketing sites launch in 2–6 weeks depending on page count, content readiness, and review cycles.',
      },
      {
        question: 'Do you help with copywriting and messaging?',
        answer:
          'Yes. We can refine existing copy or create new messaging focused on clarity, positioning, and conversion.',
      },
      {
        question: 'Will the site be fast and SEO‑ready at launch?',
        answer:
          'Yes. We build with performance, accessibility, and technical SEO best practices from day one.',
      },
      {
        question: 'Can you integrate forms, analytics, and lead tracking?',
        answer:
          'Absolutely. We set up forms, event tracking, and analytics so you can measure leads and page performance.',
      },
      {
        question: 'Can you redesign or rebuild an existing site?',
        answer:
          'Yes. We can improve UX, restructure content, and rebuild for speed, clarity, and modern design.',
      },
    ],

    cta: {
      label: 'Start My Website Project',
      href: '/contact',
    },
  },
  {
    slug: 'digital-marketing-training',
    title: 'Digital Marketing Training',
    tagline: 'Master digital marketing skills from industry experts.',
    summary:
      'Comprehensive training programs designed to upskill your team in SEO, paid ads, social media, and analytics.',
    description:
      'Our training programs are hands-on, practical, and tailored to your team. We cover strategy, tactics, and tools so your team can execute and measure results independently.',
    stats: [
      { value: '4-8', label: 'Weeks per training program' },
      { value: '90%', label: 'Post-training implementation rate' },
      { value: '15+', label: 'Topics covered per program' },
    ],
    highlights: [
      'Customized curriculum based on skill level',
      'Hands-on workshops and real-world projects',
      'Access to tools, templates, and resources',
      'Post-training support and group sessions',
    ],
    processHeading: 'Our Training Framework',
    processDescription: 'Build your team\'s digital marketing capabilities through structured learning and practice.',
    process: [
      {
        title: 'Assessment & Planning',
        details: 'Evaluate your team\'s current skills and define learning objectives aligned with business goals.',
      },
      {
        title: 'Curriculum & Delivery',
        details: 'Deliver hands-on training with real examples, case studies, and interactive activities.',
      },
      {
        title: 'Implementation & Support',
        details: 'Support your team as they apply new skills to live campaigns and projects.',
      },
      {
        title: 'Measure & Optimize',
        details: 'Track skill development, campaign results, and refine training based on outcomes.',
      },
    ],
    faqs: [
      {
        question: 'What\'s the ideal team size?',
        answer: 'We train groups of 3-10 people for maximum engagement and personalized feedback.',
      },
      {
        question: 'How long is the training?',
        answer: 'Programs typically run 4-8 weeks depending on depth and complexity of topics.',
      },
      {
        question: 'Do you provide certifications?',
        answer: 'Yes. We provide completion certificates and ongoing access to training materials.',
      },
    ],
    cta: {
      label: 'Schedule Training Consultation',
      href: '/contact',
    },
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const oneTimeServicesProps = {
  services: [
    {
      title: 'Complete SEO Audit',
      description: '200+ point technical audit with actionable recommendations',
      prices: {
        inr: '₹ 12,000',
        usd: '$600',
      },
    },
    {
      title: 'Website Speed Optimization',
      description: 'Core Web Vitals optimization for perfect PageSpeed scores',
      prices: {
        inr: '₹ 18,000',
        usd: '$900',
      },
    },
    {
      title: 'Schema Markup Setup',
      description: 'Complete schema implementation for all page types',
      prices: {
        inr: '₹ 8,000',
        usd: '$400',
      },
    },
    {
      title: 'Content SEO Package',
      description: 'Keyword research + 10 pages optimized + content strategy',
      prices: {
        inr: '₹ 25,000',
        usd: '$1,250',
      },
    },
    {
      title: 'Link Building Campaign',
      description: '10 high-quality backlinks from authority domains (DA 40+)',
      prices: {
        inr: '₹ 30,000',
        usd: '$1,500',
      },
    },
    {
      title: 'AEO Implementation',
      description: 'Answer Engine Optimization setup for AI search visibility',
      prices: {
        inr: '₹ 15,000',
        usd: '$750',
      },
    },
  ],
  eyebrow: 'One-Time SEO Services',
  title: 'One-Time SEO Services',
  description: 'Professional SEO audits and optimization services (one-time fees)',
};

export const aboutServiceContent = {
  'seo-optimisation': {
    title: 'Professional Google Business Profile Optimization',
    text: `Did you know that 76% of people who search for something nearby visit a business within 24 hours? And 46% of all Google searches have local intent. If your Google Business Profile isn't optimized, you're losing customers to competitors in the Map Pack.

With 60% of Google searches now resulting in zero clicks due to AI Overviews and featured snippets, traditional SEO alone isn't enough. You need a comprehensive strategy that positions your content as the definitive answer across all search platforms. My SEO services combine proven ranking strategies with next-generation AEO techniques to ensure maximum visibility in 2026 and beyond.

From complete profile setup and category optimization to strategic review generation and ongoing management, We handle everything needed to make your business the obvious choice for local customers. Explore my complete digital marketing services.`,
  },
  'paid-ads': {
    title: 'Performance Paid Ads That Drive Qualified Leads',
    text: `Tired of wasting money on ads that don't convert? Most businesses run inefficient campaigns with poor tracking, misaligned budgets, and creative that doesn't resonate with their audience.

I build high-performance paid advertising campaigns designed to reduce wasted spend and maximize ROI across Google Ads, Meta, and LinkedIn. From comprehensive account audits to creative testing and landing page optimization, I align every campaign element to your specific business goals.

Whether you're a B2B company looking for qualified leads, an e-commerce brand driving sales, or a service business filling your pipeline, I deliver results: 2-4 weeks to optimize core campaigns, consistent 3x+ ROAS targets, and predictable lead generation that scales with your business. Let's turn your ad spend into revenue.`,
  },
  'google-ads': {
    title: 'Professional Google Ads Management for Maximum ROI',
    text: `Are you struggling to get results from your Google Ads campaigns? Wasting budget on clicks that don't convert? As a certified Google Ads expert specializing in Performance Max, AI Max for Search, and advanced PPC management, I help businesses achieve measurable results through data-driven campaign optimization.

With over 10+ years of experience managing Google Ads campaigns across multiple industries, I've developed proven strategies that consistently deliver 14-27% more conversions while reducing cost-per-acquisition by 30-40%. Whether you're a startup looking to generate your first leads or an established business scaling your advertising, my Google Ads management services are designed to maximize your return on ad spend.

Looking for organic growth? Combine Google Ads with my SEO services for a complete digital marketing strategy.`,
  },
  'meta-ads': {
    title: 'Professional Meta Ads Management for Maximum ROI',
    text: `Reach your ideal customers where they spend their time—on Facebook and Instagram. With 3 billion active users across Meta platforms and advanced AI-powered targeting, Meta Ads (formerly Facebook Ads) offer unparalleled opportunities to connect with your audience, generate leads, and drive sales.

As a Meta Ads expert, I leverage Advantage+ campaigns, precise audience targeting, compelling creative strategies, and conversion optimization to deliver 5-8x ROAS for e-commerce brands, service businesses, and B2B companies. From strategy development to campaign execution and ongoing optimization, I manage every aspect of your Meta advertising to maximize results.

Whether you're launching your first campaign or scaling existing ads, my Meta Ads management services combine platform expertise with creative excellence to turn ad spend into revenue. Explore my complete digital marketing services for integrated strategies.`,
  },
  'linkedin-ads': {
    title: 'B2B LinkedIn Ads That Generate Qualified Business Leads',
    text: `LinkedIn is where your B2B customers make buying decisions. But most B2B companies waste money on LinkedIn ads because they're either targeting too broadly or telling the wrong story to the wrong people.

I build LinkedIn Ads campaigns designed specifically for complex B2B sales cycles where decision-makers research solutions, compare competitors, and evaluate ROI before buying. That means precision targeting by job title and company size, messaging that speaks to business problems (not features), and funnel optimization to qualify leads before they reach your sales team.

From account-based marketing campaigns targeting specific high-value prospects to demand generation programs building awareness across your ideal buyer personas, I structure your LinkedIn ads to support your full sales cycle. Expect qualified leads with longer decision windows, higher average deal values, and better conversion rates. Let's turn LinkedIn from a "nice-to-have" channel into predictable pipeline generation.`,
  },
  'social-media-marketing': {
    title: 'Social Media Marketing That Builds Trust and Drives Leads',
    text: `Social media isn’t just about posting—it’s about building a brand that people trust and want to buy from. I create social strategies that turn followers into customers through consistent storytelling, content planning, and data-backed growth.

From content calendars and creative production to community management and performance tracking, every step is designed to boost engagement and move people through your funnel. Whether you’re a local service business or a growing brand, I help you build visibility, authority, and pipeline across platforms.

Expect clear strategy, on-brand creatives, and measurable results: higher engagement, steady audience growth, and leads that convert.`,
  },
};
