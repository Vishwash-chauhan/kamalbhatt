import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Key, PenTool, Target, FileText, DollarSign, Users, Smartphone } from 'lucide-react';
import CTA from '@/app/components/cta';
import Testimonials from '@/app/components/testimonials';
import Clients from '@/app/components/clients';
import FAQSection from '@/app/components/faq-section';
import AboutService from '@/app/components/about-service';
import ProcessSection from '@/app/components/process-section';
import ServicesSection from '@/app/components/services-section';
import PricingPlans from '@/app/components/pricing-plans';
import OneTimeServices from '@/app/components/one-time-services';

const iconMap = {
  Building2,
  Key,
  PenTool,
  Target,
  FileText,
  DollarSign,
  Users,
  Smartphone,
};

export const metadata: Metadata = {
  title: 'Google Ads Services | Search & Display Campaigns | Kamal Bhatt',
  description: 'High-intent Google Ads campaigns optimized for conversions, lead generation, and ROI.',
};

export default function GoogleAdsPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      tagline: 'Perfect for small businesses',
      features: [
        '1 Campaign Type (Search OR Performance Max)',
        'Up to ₹30,000 ad spend',
        'Monthly optimization',
        'Basic monthly reporting',
        'Email support',
      ],
      ctaLabel: 'Get Started',
      featured: false,
    },
    {
      name: 'Professional',
      tagline: 'For growing businesses',
      badge: 'Most Popular',
      features: [
        '2-3 Campaign Types',
        'Up to ₹1,00,000 ad spend',
        'Weekly optimization',
        'Detailed reporting + monthly call',
        'Priority email & phone support',
        'A/B testing included',
      ],
      ctaLabel: 'Get Started',
      featured: true,
    },
    {
      name: 'Advanced',
      tagline: 'For established brands',
      features: [
        'All Campaign Types',
        'Unlimited ad spend',
        'Daily monitoring & optimization',
        'Advanced reporting + bi-weekly calls',
        'Dedicated account manager',
        'Advanced A/B testing & experiments',
        'Landing page optimization',
      ],
      ctaLabel: 'Get Started',
      featured: false,
    },
  ];

  const pricingByCurrency = {
    inr: {
      label: 'India Pricing (INR)',
      symbol: '₹',
      prices: ['12,000', '28,000', '55,000'],
    },
    usd: {
      label: 'Global Pricing (USD)',
      symbol: '$',
      prices: ['600', '1,500', '3,000'],
    },
  };

  const oneTimeServices = [
    {
      title: 'Performance Max Setup',
      description: 'Complete Performance Max campaign setup with asset optimization',
      prices: {
        inr: '₹ 8,000',
        usd: '$400',
      },
    },
    {
      title: 'AI Max Campaign Setup',
      description: 'AI Max campaign with search term optimization',
      prices: {
        inr: '₹ 10,000',
        usd: '$500',
      },
    },
    {
      title: 'Shopping Feed Setup',
      description: 'Complete product feed optimization & Shopping campaign setup',
      prices: {
        inr: '₹ 12,000',
        usd: '$600',
      },
    },
    {
      title: 'Landing Page Optimization',
      description: 'Conversion rate optimization for landing pages',
      prices: {
        inr: '₹ 15,000',
        usd: '$750',
      },
    },
    {
      title: 'Conversion Tracking Setup',
      description: 'Google Tag Manager & Analytics 4 setup with conversion tracking',
      prices: {
        inr: '₹ 5,000',
        usd: '$250',
      },
    },
    {
      title: 'Campaign Audit & Strategy',
      description: 'Comprehensive audit of existing campaigns with recommendations',
      prices: {
        inr: '₹ 7,000',
        usd: '$350',
      },
    },
  ];

  const faqs = [
    {
      question: 'How much do Google Ads management services cost?',
      answer: (
        <>
          <p>Google Ads management fees range from $600-$3,000 per month depending on ad spend volume and campaign complexity. Starter plans cost $600/month for up to ₹30,000 ad spend, professional management costs $1,500/month for up to ₹1,00,000 spend, and advanced packages cost $3,000/month for unlimited spend with dedicated account management.</p>

          <p className="font-semibold mt-4">Pricing Breakdown:</p>
          <table className="w-full text-sm mt-3 border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Package</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Monthly Fee</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Ad Spend Limit</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Starter</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">$600/month</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Up to ₹30,000</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Small businesses, single campaign</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Professional</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">$1,500/month</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Up to ₹1,00,000</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Growing businesses, 2-3 campaigns</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Advanced</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">$3,000/month</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Unlimited</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Established brands, all campaign types</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-3"><strong>What Affects Cost:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Monthly ad spend budget</li>
            <li>Number of campaigns managed</li>
            <li>Campaign types (Search, Performance Max, Shopping, Display)</li>
            <li>Level of optimization required</li>
            <li>Reporting frequency</li>
            <li>Dedicated account manager need</li>
          </ul>

          <p className="mt-3"><strong>Percentage-Based Alternative:</strong> Some agencies charge 15-25% of ad spend. For example:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>₹50,000 ad spend = ₹7,500-₹12,500 management fee</li>
            <li>₹1,00,000 ad spend = ₹15,000-₹25,000 management fee</li>
          </ul>

          <p className="mt-3"><strong>One-Time Setup Services:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Performance Max Setup: $400</li>
            <li>AI Max Campaign Setup: $500</li>
            <li>Shopping Feed Setup: $600</li>
            <li>Conversion Tracking: $250</li>
            <li>Campaign Audit: $350</li>
          </ul>

          <p className="mt-3"><strong>What’s Included:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Complete campaign setup and strategy</li>
            <li>Keyword research and ad copywriting</li>
            <li>Bid management and optimization</li>
            <li>A/B testing</li>
            <li>Monthly reporting and strategy calls</li>
            <li>Conversion tracking setup</li>
            <li>Landing page recommendations</li>
          </ul>

          <p className="mt-3">Meegan Media offers transparent flat-rate pricing starting at $600/month with no hidden fees. The professional package ($1,500/month) is most popular for growing businesses.</p>
        </>
      ),
    },
    {
      question: 'How long does it take to see results from Google Ads?',
      answer: (
        <>
          <p>Initial Google Ads results appear within 1-2 weeks of campaign launch as ads enter the learning phase. Significant optimization and improved conversion rates occur at 6-8 weeks with sufficient data. Maximum performance and 3X+ ROAS typically achieved at 3-6 months with continuous testing and optimization.</p>

          <p className="font-semibold mt-4">Google Ads Results Timeline:</p>
          <table className="w-full text-sm mt-3 border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Phase</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Timeframe</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">What Happens</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Launch</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Week 1-2</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Campaigns go live, initial impressions and clicks, learning phase begins</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Learning</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Week 2-4</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google’s AI learns audience behavior, initial conversion data collected</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Optimization</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Week 6-8</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Bid adjustments, ad testing, significant improvements in CTR and conversions</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Maturity</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Month 3-6</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3X+ ROAS achieved, consistent performance, scaled budget</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Scale</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Month 6+</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Expand to new campaigns, audiences, and keywords</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-3 font-semibold">Expected Performance Improvements:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Month 1: Campaign structure established, baseline metrics collected, initial conversions begin, 1-2X ROAS</li>
            <li>Month 2: Quality scores improving, better targeting based on data, 20-30% reduction in CPA, 2-2.5X ROAS</li>
            <li>Month 3: Full optimization implemented, 20-50% improvement in conversion rates, 30-40% reduction in CPA, 2.5-3X ROAS</li>
            <li>Month 4-6: Sustained high performance, scaled ad spend with maintained efficiency, 3-5X ROAS, predictable lead flow</li>
          </ul>

          <p className="mt-3 font-semibold">Why Google Ads is Faster Than SEO:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>SEO takes 6-12 months for results</li>
            <li>Google Ads shows results in weeks</li>
            <li>Ideal for immediate lead generation</li>
            <li>Can be paused/adjusted anytime</li>
          </ul>

          <p className="mt-3 font-semibold">Factors Affecting Speed:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Industry competition</li>
            <li>Ad budget size (higher budget = more data faster)</li>
            <li>Landing page quality</li>
            <li>Conversion tracking setup</li>
            <li>Ad creative quality</li>
          </ul>

          <p className="mt-3">Meegan Media clients typically achieve 2-3X ROAS within 3 months and 3-5X ROAS by month 6 through continuous optimization and testing.</p>
        </>
      ),
    },
    {
      question: 'What is included in Google Ads management services?',
      answer: (
        <>
          <p>Google Ads management includes comprehensive campaign strategy, keyword research, ad copywriting, bid management, A/B testing, conversion tracking setup, Performance Max and AI Max campaign management, landing page optimization recommendations, monthly reporting, and continuous optimization across all Google Ads campaign types including Search, Shopping, Display, Video, and Local Services Ads.</p>

          <h4 className="font-semibold mt-4">Complete Service Breakdown:</h4>
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>
              <strong>Campaign Strategy &amp; Setup</strong> – Account structure optimization, campaign type selection (Search, Performance Max, Shopping, Display), conversion goal mapping, budget allocation across campaigns, audience targeting strategy.
            </li>
            <li>
              <strong>Keyword Research &amp; Management</strong> – High-intent keyword identification, negative keyword implementation, match type optimization, search term analysis, keyword bid management.
            </li>
            <li>
              <strong>Ad Copy Creation &amp; Testing</strong> – Responsive Search Ads with multiple headline/description variations, A/B testing of ad copy, call‑to‑action optimization, ad extensions setup (sitelinks, callouts, structured snippets), dynamic keyword insertion.
            </li>
            <li>
              <strong>Advanced Campaign Types</strong>:
              <ul className="list-disc list-inside mt-1 text-sm">
                <li>
                  <strong>Performance Max:</strong> Multi-channel campaigns across Search, Display, YouTube, Gmail, Maps; asset group optimization; audience signal implementation; creative testing.
                </li>
                <li>
                  <strong>AI Max for Search:</strong> AI-powered search campaigns with enhanced control; search term insights; brand exclusions; negative keyword management.
                </li>
                <li>
                  <strong>Google Shopping:</strong> Product feed optimization; Shopping campaign setup; product group bidding; Merchant Center management.
                </li>
              </ul>
            </li>
            <li>
              <strong>Bid Management</strong> – Smart bidding strategy implementation (Target CPA, Target ROAS, Maximize Conversions), manual bid adjustments when needed, automated bid rules, device/location/time-based bid modifiers.
            </li>
            <li>
              <strong>Conversion Tracking</strong> – Google Tag Manager setup, Google Analytics 4 configuration, conversion action setup, phone call tracking, form submission tracking, e-commerce transaction tracking.
            </li>
            <li>
              <strong>Landing Page Optimization</strong> – Landing page speed analysis, conversion rate optimization recommendations, A/B testing suggestions, mobile responsiveness review.
            </li>
            <li>
              <strong>Audience Targeting</strong> – Custom audience creation, remarketing lists setup, in-market audience targeting, customer match lists, similar audiences.
            </li>
            <li>
              <strong>Reporting &amp; Communication</strong> – Monthly performance reports, strategy calls (monthly or bi-weekly), real-time dashboard access, insights and recommendations, competitive analysis.
            </li>
            <li>
              <strong>Continuous Optimization</strong> – Weekly performance monitoring, quality score improvements, ad schedule optimization, geographic performance analysis, budget reallocation based on performance.
            </li>
          </ol>

          <p className="mt-3">Meegan Media provides full-service Google Ads management with 50+ optimization points per account, ensuring maximum return on ad spend.</p>
        </>
      ),
    },
    {
      question: 'What is Performance Max and should I use it?',
      answer: (
        <>
          <p>Performance Max is Google’s AI-powered multi-channel campaign type that automatically runs ads across Search, Display, YouTube, Gmail, Discovery, and Maps using a single campaign. It’s ideal for businesses wanting maximum reach and conversions using Google’s machine learning. Best used alongside AI Max for Search to maintain search term visibility and control.</p>

          <h4 className="font-semibold mt-4">How Performance Max Works:</h4>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li><strong>Multi-Channel Reach:</strong> Performance Max distributes your ads across Search, Display Network, YouTube, Gmail, Discover, Maps.</li>
            <li><strong>AI-Powered Optimization:</strong> Google’s AI allocates budget to highest-performing channels, tests thousands of ad combinations, identifies best-converting audiences, and optimizes bids in real-time.</li>
            <li><strong>What You Provide:</strong> Asset groups (headers, descriptions, images, videos), conversion goals, budget, audience signals (optional but recommended).</li>
          </ul>

          <h4 className="font-semibold mt-4">Performance Max vs Traditional Campaigns:</h4>
          <table className="w-full text-sm mt-3 border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Factor</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Performance Max</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Traditional Search Ads</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Channel Coverage</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">All Google channels</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Search only</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Control</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Less (AI-driven)</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">More (manual control)</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Setup Complexity</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Simpler</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">More complex</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Search Terms</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Limited visibility</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Full visibility</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Best For</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Maximum reach</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Search-focused control</td>
              </tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4">When to Use Performance Max:</h4>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>✅ You want maximum reach across all Google platforms</li>
            <li>✅ Have good conversion data (50+ conversions/month ideal)</li>
            <li>✅ Trust AI optimization</li>
            <li>✅ Want simpler campaign management</li>
            <li>✅ Need multi-channel presence</li>
          </ul>
          <ul className="list-disc list-inside mt-1 text-sm">
            <li>❌ Avoid when you need full search term control</li>
            <li>❌ Budget under ₹20,000/month</li>
            <li>❌ Brand-new business with no conversion data</li>
            <li>❌ Require granular keyword bidding control</li>
          </ul>

          <p className="mt-3 font-semibold">The “Power Pack” Strategy:</p>
          <p>Meegan Media recommends running:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Performance Max – Broad reach, all channels</li>
            <li>AI Max for Search – Search-specific with control</li>
            <li>Demand Gen (optional) – Awareness building</li>
          </ul>
          <p>This combination provides maximum coverage, search term visibility, control where needed, and the best overall performance.</p>

          <p className="mt-3 font-semibold">Typical Results:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>14-27% more conversions vs Search-only campaigns</li>
            <li>Lower CPA through AI optimization</li>
            <li>Expanded reach to new audiences</li>
            <li>Simplified management</li>
          </ul>
          <p className="mt-3">Meegan Media specializes in Performance Max setup ($400 one-time) and management, combining it with AI Max for optimal results.</p>
        </>
      ),
    },
    {
      question: 'What results can I expect from Google Ads management?',
      answer: (
        <>
          <p>Most businesses see 20-50% improvement in conversion rates within 3 months, 30-40% reduction in cost-per-acquisition, and 2-3X return on ad spend (ROAS) with professional management. Results vary by industry, competition, and budget. Focus is on continuous optimization using AI Max and Performance Max to deliver 14-27% more conversions.</p>

          <h4 className="font-semibold mt-4">Expected Performance Metrics:</h4>
          <table className="w-full text-sm mt-3 border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Metric</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Month 1</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Month 3</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Month 6</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">ROAS</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1.5-2X</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">2.5-3X</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3-5X</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Conversion Rate</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Baseline</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">+20-30%</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">+40-60%</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Cost Per Acquisition</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Baseline</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">-25-35%</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">-40-50%</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Quality Score</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">5-7</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">7-8</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">8-10</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Click-Through Rate</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">2-4%</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">4-6%</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">5-8%</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4 font-semibold">Industry-Specific Benchmarks:</p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li><strong>E-commerce:</strong> Avg ROAS 4-6X, conversion rate 2-4%, example ₹1,00,000 ad spend → ₹4,00,000-₹6,00,000 revenue</li>
            <li><strong>Lead Generation (B2B):</strong> Cost per lead ₹500-₹2,000, lead quality 30-40% convert, example ₹50,000 ad spend → 25-100 quality leads</li>
            <li><strong>Local Services:</strong> Cost per lead ₹300-₹1,500, conversion to booking 40-60%, example ₹30,000 ad spend → 20-100 bookings</li>
            <li><strong>Professional Services:</strong> Cost per consultation ₹1,000-₹5,000, close rate 20-30%, example ₹1,00,000 ad spend → 20-100 consultations → 4-30 clients</li>
          </ul>

          <p className="mt-4"><strong>Real Client Example:</strong> Industry: Online Education, Ad Spend: ₹80,000/month. Results after 3 months: Enrollments +45%, Cost per enrollment -38%, ROAS 4.2X, Revenue ₹3,36,000 from ads.</p>

          <p className="mt-4 font-semibold">What Affects Results:</p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Positive Factors: higher ad budget, quality landing pages, strong offer, less competition, good product-market fit</li>
            <li>Challenging Factors: very low budget (&lt;₹15,000/month), highly competitive keywords, poor website conversions, new brand, seasonal fluctuations</li>
          </ul>

          <p className="mt-4 font-semibold">Realistic Expectations:</p>
          <p>Good Results: 2-3X ROAS consistently, positive ROI after management fees, predictable lead flow, continuous improvement month-over-month.</p>
          <p>Exceptional Results: 5-10X ROAS (e-commerce, established brands), 60%+ CPA reduction over 6 months, scaled budget 2-3X while maintaining efficiency.</p>

          <p className="mt-3">Meegan Media guarantees transparent reporting and measurable improvements, with average client ROAS of 3-5X by month 6.</p>
        </>
      ),
    },
    {
      question: 'What is the minimum budget needed for Google Ads to work?',
      answer: (
        <>
          <p>The minimum effective Google Ads budget is ₹15,000-₹30,000 per month for most industries. This allows 30-60 clicks per day, providing enough data for Google’s AI to optimize. Lower budgets work for very niche, low-competition keywords, but ₹30,000+/month is recommended for consistent results and meaningful optimization.</p>

          <h4 className="font-semibold mt-4">Budget Recommendations by Business Type:</h4>
          <table className="w-full text-sm mt-3 border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Business Type</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Minimum Budget</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Recommended Budget</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Local Services</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹15,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹30,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Lower competition, local targeting</td></tr>
              <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">E-commerce</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹30,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹50,000-₹1,00,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Need volume for testing products</td></tr>
              <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">B2B Services</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹30,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹60,000-₹1,00,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Higher CPC, longer sales cycles</td></tr>
              <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Professional Services</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹20,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹40,000-₹60,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Moderate competition</td></tr>
              <tr className="border-t"><td className="px-3 py-2 text-gray-600 dark:text-gray-400">SaaS/Software</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹50,000/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹1,00,000+/month</td><td className="px-3 py-2 text-gray-600 dark:text-gray-400">Very competitive keywords</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4">Why Budget Matters:</h4>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Data for Optimization: Google’s AI needs 30-50 conversions per campaign to optimize effectively; low budget = limited data = slower optimization; higher budget = faster learning = better results</li>
            <li>Competition: If competitors spend ₹1,00,000/month and you spend ₹10,000, you’ll get minimal visibility; budget must be competitive to show ads consistently</li>
            <li>Testing Ability: Need budget to test multiple ad variations, audiences and keywords, A/B test landing pages</li>
          </ul>

          <p className="mt-4"><strong>Budget Breakdown Example:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>₹30,000/month budget: average CPC ₹50 → 600 clicks/mo (20/day) → conversion rate 5% → 30 conversions → cost/conversion ₹1,000</li>
            <li>₹60,000/month budget: average CPC ₹50 → 1,200 clicks/mo (40/day) → same conversion rate → 60 conversions → advantage: 2X more data, faster optimization, can test more</li>
          </ul>

          <p className="mt-4 font-semibold">What If Budget Is Limited?</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Focus on ultra-specific long-tail keywords (less competition)</li>
            <li>Target very specific geographic areas</li>
            <li>Use only Search campaigns (avoid Display)</li>
            <li>Start with 1-2 campaigns maximum</li>
            <li>Set conservative bids to extend budget</li>
            <li>Focus on highest-intent keywords only</li>
          </ul>

          <p className="mt-4 font-semibold">Budget Scaling Path:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Month 1-2: Start with ₹30,000/month</li>
            <li>Month 3-4: Increase to ₹50,000 if ROAS is positive</li>
            <li>Month 5-6: Scale to ₹80,000-₹1,00,000 based on performance</li>
            <li>Month 6+: Aggressive scaling if maintaining 3X+ ROAS</li>
          </ul>

          <p className="mt-4 font-semibold">Red Flags for Too-Low Budget:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Budget depleted before noon daily</li>
            <li>Can’t compete for important keywords</li>
            <li>Insufficient data for AI optimization (under 10 conversions/mo)</li>
            <li>Can’t test multiple ad variations</li>
          </ul>

          <p className="mt-3">Meegan Media’s Starter package ($600/month management) supports up to ₹30,000 ad spend, while Professional package ($1,500/month) handles up to ₹1,00,000 ad spend for optimal results.</p>
        </>
      ),
    },
    {
      question: 'Do you manage Performance Max and AI Max campaigns?',
      answer: (
        <>
          <p>Yes, I specialize in advanced Google Ads campaign types including Performance Max, AI Max for Search, Demand Gen, and Shopping campaigns. I implement the “Power Pack” strategy combining Performance Max for broad multi-channel reach, AI Max for search visibility with control, and Demand Gen for awareness — ensuring comprehensive coverage across all Google platforms.</p>

          <h4 className="font-semibold mt-4">Advanced Campaign Types Managed:</h4>
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>
              <strong>Performance Max</strong> – Multi-channel automation across Search, Display, YouTube, Gmail, Maps; asset group optimization; audience signal implementation; product feed integration (for e-commerce); 14-27% more conversions on average.
            </li>
            <li>
              <strong>AI Max for Search</strong> – AI-powered search campaigns with enhanced control; search term visibility (unlike Performance Max); negative keyword management; brand exclusion controls; best for maintaining search oversight.
            </li>
            <li>
              <strong>Demand Gen</strong> – Visual-first campaigns for YouTube, Discover, Gmail; awareness and consideration stage targeting; video and image asset optimization; lookalike audience building.
            </li>
            <li>
              <strong>Google Shopping</strong> – Product feed optimization; Shopping campaign structure; product group bidding; supplemental feed management.
            </li>
            <li>
              <strong>Local Services Ads</strong> – For home services, professional services; lead generation with Google Guarantee badge; pay-per-lead model; dispute management.
            </li>
          </ol>

          <h4 className="font-semibold mt-4">The “Power Pack” Strategy:</h4>
          <p><strong>Why Use Multiple Campaign Types:</strong> Traditional approach: Single Search campaign – Problem: Limited reach, missing potential customers</p>
          <p>Power Pack approach:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Performance Max – Captures conversions across all channels</li>
            <li>AI Max for Search – Maintains search term visibility and control</li>
            <li>Demand Gen – Builds awareness with visual storytelling</li>
          </ul>
          <p>Benefits: 30-50% more total conversions; expanded reach without overlap; control where needed (AI Max); automation where beneficial (Performance Max); full-funnel coverage (awareness → conversion).</p>

          <p className="mt-4 font-semibold">Real Example:</p>
          <p>Client: E-commerce Fashion Store – Before (Search Only): Monthly conversions 80, ROAS 2.5X; After (Power Pack Strategy): Performance Max 60 conv, AI Max 35 conv, Demand Gen 15 conv (new customers). Total: 110 conv (+37.5%) ROAS 3.8X.</p>

          <p className="mt-4">Setup Services: Performance Max Setup $400 one-time, AI Max Campaign Setup $500 one-time, Shopping Feed Setup $600 one-time.</p>

          <p className="mt-3">Meegan Media stays updated on all latest Google Ads features and implements cutting-edge strategies like the Power Pack to maximize client results.</p>
        </>
      ),
    },
    {
      question: 'What is the difference between Google Ads and Facebook Ads?',
      answer: (
        <>
          <p>Google Ads targets high-intent users actively searching for products or services (pull marketing), while Facebook Ads targets users based on interests and demographics (push marketing). Google Ads has higher conversion rates and better for immediate purchases. Facebook Ads is better for brand awareness, engagement, and lower cost per click. Most businesses benefit from using both.</p>

          <h4 className="font-semibold mt-4">Google Ads vs Facebook Ads Comparison:</h4>
          <table className="w-full text-sm mt-3 border-collapse">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Factor</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Google Ads</th>
                <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Facebook Ads</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">User Intent</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">High (actively searching)</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Low (scrolling feed)</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Marketing Type</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Pull marketing</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Push marketing</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Cost Per Click</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹20-₹200+</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹5-₹50</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Conversion Rate</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3-8%</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1-3%</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Average ROAS</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3-6X</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">2-4X</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Best For</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Lead gen, e-commerce, services</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Brand awareness, engagement</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Ad Format</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Text, Shopping, Video</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Image, Video, Carousel, Stories</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Targeting</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Keywords, audience</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Demographics, interests, behaviors</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Buying Cycle</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Bottom of funnel</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Top & middle of funnel</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-3"><strong>When to Use Google Ads:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Selling products/services people actively search for</li>
            <li>Need immediate, high-intent leads</li>
            <li>Have urgent need (plumbers, lawyers, dentists)</li>
            <li>Higher budget available (CPC is higher)</li>
            <li>Want to capture demand that already exists</li>
            <li>B2B services or professional services</li>
            <li>Local services (“near me” searches)</li>
          </ul>

          <p className="mt-3"><strong>When to Use Facebook Ads:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Building brand awareness</li>
            <li>Selling products people don’t search for</li>
            <li>Targeting very specific demographics</li>
            <li>Visual products (fashion, food, lifestyle)</li>
            <li>Retargeting website visitors</li>
            <li>Lower budget (CPC is cheaper)</li>
            <li>E-commerce with broad appeal</li>
            <li>Creating interest in new products</li>
          </ul>

          <p className="mt-3"><strong>The Winning Strategy - Use Both:</strong></p>
          <p className="mt-2"><strong>Full-Funnel Approach:</strong></p>
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>Facebook Ads (Top of Funnel): Build awareness, generate interest, collect website visitors, cost: ₹30,000/month</li>
            <li>Google Ads (Bottom of Funnel): Capture search intent, retarget Facebook visitors (via Performance Max), convert high-intent searchers, cost: ₹50,000/month</li>
            <li>Retargeting (Both Platforms): Re-engage website visitors who didn’t convert, remind them of products viewed, special offers to close the sale</li>
          </ol>

          <p className="mt-3"><strong>Combined Example:</strong> Business: Online Jewelry Store, Total Budget: ₹1,00,000/month</p>
          <p>Facebook Ads (₹40,000): Beautiful product images/videos target women 25-45, interested in fashion → 5,000 website visitors → 50 direct purchases (1% conversion) → ROAS: 2.5X</p>
          <p>Google Ads (₹60,000): Target “buy gold earrings online” - capture searchers ready to buy, retarget Facebook visitors → 100 purchases (5% conversion from search, 3% from retargeting) → ROAS: 4X</p>
          <p>Combined ROAS: 3.5X</p>

          <p className="mt-3">Meegan Media manages both Google Ads and Facebook Ads, creating integrated strategies that maximize total ROAS across platforms.</p>
        </>
      ),
    },
    {
      question: 'What industries do you work with for Google Ads?',
      answer: (
        <>
          <p>I’ve managed Google Ads campaigns across diverse industries including B2B SaaS, e-commerce, professional services (legal, accounting, consulting), healthcare, education, real estate, home services, and more. Cross-industry experience of 10+ years allows me to apply proven strategies while customizing approaches for each specific market and competitive landscape.</p>

          <h4 className="font-semibold mt-4">Industries Served &amp; Strategies:</h4>
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>
              <strong>E-commerce</strong> - Campaign Types: Shopping, Performance Max, Search - Strategy: Product feed optimization, dynamic remarketing, abandoned cart campaigns
              <p>Avg ROAS: 4-6X - Example: Fashion store ₹5L → ₹25L monthly revenue</p>
            </li>
            <li>
              <strong>Education &amp; Coaching</strong> - Campaign Types: Search, Performance Max, Local Services - Strategy: Geographic targeting, seasonal campaigns, lead gen forms 
              <p>Avg Cost Per Enrollment: ₹500-₹2,000 - Example: IAS coaching enrollments +260%</p>
            </li>
            <li>
              <strong>Healthcare (Clinics, Hospitals)</strong> - Campaign Types: Local Search, Call-Only Ads - Strategy: “near me” targeting, appointment booking, call tracking 
              <p>Avg Cost Per Patient: ₹300-₹1,500 - Example: Dental clinic patient calls +380%</p>
            </li>
            <li>
              <strong>Professional Services (Legal, Accounting, Consulting)</strong> - Campaign Types: Search, LinkedIn-connected Performance Max - Strategy: High-value keyword targeting, consultation booking 
              <p>Avg Cost Per Lead: ₹1,000-₹5,000 - Example: CA firm quality leads +45%</p>
            </li>
            <li>
              <strong>Real Estate</strong> - Campaign Types: Search, Display, Performance Max with location extensions - Strategy: Property listing ads, virtual tour promotion, lead nurturing 
              <p>Avg Cost Per Lead: ₹500-₹2,000 - Example: Property inquiries 25 → 150/month</p>
            </li>
            <li>
              <strong>Home Services (Plumbing, Electrical, HVAC)</strong> - Campaign Types: Local Services Ads, Search - Strategy: Emergency keywords, location targeting, call-focused 
              <p>Avg Cost Per Job: ₹200-₹1,000 - Example: Plumber service calls +320%</p>
            </li>
            <li>
              <strong>B2B SaaS/Software</strong> - Campaign Types: Search, LinkedIn-targeted Performance Max, Display - Strategy: Free trial promotion, demo booking, nurture campaigns 
              <p>Avg Cost Per Trial: ₹2,000-₹10,000 - Example: CRM software trials +180%</p>
            </li>
            <li>
              <strong>Restaurants &amp; Food Services</strong> - Campaign Types: Local Search, Performance Max with location assets - Strategy: “near me” optimization, menu promotion, special offers 
              <p>Avg ROAS: 3-5X - Example: Restaurant online orders +340%</p>
            </li>
            <li>
              <strong>Hospitality (Hotels, Resorts)</strong> - Campaign Types: Search, Performance Max, Hotel Ads - Strategy: Seasonal campaigns, package promotion, direct booking focus 
              <p>Avg ROAS: 4-7X - Example: Hotel bookings +280%</p>
            </li>
            <li>
              <strong>Fitness &amp; Wellness</strong> - Campaign Types: Search, Performance Max, Video - Strategy: Class booking, membership promotion, seasonal campaigns 
              <p>Avg Cost Per Membership: ₹800-₹3,000 - Example: Gym memberships doubled</p>
            </li>
          </ol>

          <h4 className="font-semibold mt-4">Cross-Industry Learnings:</h4>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>High-quality landing pages increase conversions 40-60%</li>
            <li>Performance Max + AI Max combination delivers 25-35% more conversions</li>
            <li>Regular A/B testing improves CTR by 20-40%</li>
            <li>Proper conversion tracking is essential</li>
            <li>Mobile optimization critical (60%+ traffic is mobile)</li>
          </ul>

          <h4 className="font-semibold mt-4">Industry-Specific Expertise:</h4>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Healthcare: HIPAA compliance, patient privacy</li>
            <li>Legal: Bar association advertising rules</li>
            <li>Finance: Regulatory compliance</li>
            <li>Education: Seasonal enrollment patterns</li>
          </ul>

          <p className="mt-3">Whether you’re in e-commerce, services, B2B, or local businesses, Meegan Media applies proven Google Ads strategies customized to your industry’s unique challenges and opportunities.</p>
        </>
      ),
    },
    {
      question: 'Do you provide Google Ads training for businesses?',
      answer: (
        <>
          <p>Yes, I offer comprehensive Google Ads training for businesses and marketing teams who want to manage campaigns in-house. Training covers campaign strategy, setup, optimization, Performance Max, AI Max, conversion tracking, and the latest AI-powered features. Available as one-on-one consulting, team workshops, or part of complete digital marketing training programs.</p>

          <h4 className="font-semibold mt-4">Google Ads Training Options:</h4>
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li>
              <strong>Custom Corporate Training</strong> - Duration: 2-3 days intensive or 8 weeks part-time; Format: On-site or virtual; Audience: Marketing teams, business owners; Customized to your industry and business goals; Hands-on with your actual campaigns.
            </li>
            <li>
              <strong>Digital Marketing Training Course</strong> - Comprehensive program including Google Ads; Also covers SEO, social media, analytics; Duration: 2-3 months; Certifications included (Google Ads, Analytics).
            </li>
            <li>
              <strong>One-on-One Consulting</strong> - Hourly rate: $150-$200; Audit your existing campaigns; Hands-on optimization training; Strategy development sessions; Ongoing support packages available.
            </li>
            <li>
              <strong>Workshop Format</strong> - Half-day or full-day workshops; Group training (5-15 people); Interactive, hands-on learning; Real campaign examples; Q&A sessions.
            </li>
          </ol>

          <p className="mt-3">Training Outcomes:</p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Set up campaigns from scratch</li>
            <li>Conduct keyword research effectively</li>
            <li>Write compelling ad copy that converts</li>
            <li>Implement conversion tracking properly</li>
            <li>Optimize bids and budgets</li>
            <li>Analyze performance data</li>
            <li>Scale successful campaigns</li>
            <li>Troubleshoot common issues</li>
            <li>Stay updated with latest features</li>
          </ul>

          <p className="mt-3"><strong>Who Should Consider Training:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Marketing teams who want in-house capability</li>
            <li>Business owners managing smaller budgets (₹20,000-₹50,000/month)</li>
            <li>Agencies building PPC services</li>
            <li>Freelancers expanding service offerings</li>
            <li>Startups with limited budgets for ongoing management</li>
          </ul>

          <p className="mt-3"><strong>Better to Outsource:</strong></p>
          <ul className="list-disc list-inside mt-2 text-sm space-y-1">
            <li>Very large budgets (₹2L+/month)</li>
            <li>ROI of expert management justifies cost</li>
            <li>Complex multi-campaign setups</li>
            <li>Limited time to manage daily</li>
            <li>Need for 24/7 monitoring and optimization</li>
          </ul>

          <p className="mt-3">Hybrid Option: Many businesses do initial training, then ongoing consulting: you manage day-to-day and I provide monthly audits and strategy.</p>

          <p className="mt-3">Meegan Media offers both Google Ads management and training, helping you choose the best approach based on your budget, time, and goals. Visit the Digital Marketing Training page for full course details.</p>
        </>
      ),
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Paid Advertising
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Google Ads
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                High-intent search and display campaigns optimized for conversions and ROI.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Reach customers actively searching for your products or services. We handle keyword strategy, bid management, and conversion optimization to maximize your ad spend efficiency.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  Book a Google Ads Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/paid-ads"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:border-primary transition"
                >
                  View All Ad Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">1-2</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Weeks to launch optimized campaigns</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">4-6</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Months to 3x+ ROAS</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Optimization points per account</p>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Automated bid management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutService
        slug="google-ads"
        title="Google Ads"
        description="High-intent search and display campaigns optimized for conversions and ROI."
      />
     <ServicesSection />

      {/* What We Do */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Include
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive Google Ads management for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Campaign Architecture',
                description: 'Structured campaigns built for scale, control, and easy optimization. We organize your account by conversion goals and audience segments.',
                iconName: 'Building2',
              },
              {
                title: 'Keyword Strategy',
                description: 'Comprehensive keyword research focused on high-intent, revenue-driving terms. Match types optimized for quality and volume.',
                iconName: 'Key',
              },
              {
                title: 'Ad Copy Testing',
                description: 'Data-driven ad variations tested across audiences. We optimize headlines, descriptions, and CTAs for maximum CTR and quality score.',
                iconName: 'PenTool',
              },
              {
                title: 'Conversion Tracking',
                description: 'Complete pixel setup and conversion tracking implementation. Monitor every action from click to purchase or lead submission.',
                iconName: 'Target',
              },
              {
                title: 'Landing Page Optimization',
                description: 'Recommendations for landing page improvements that increase conversion rates and reduce bounce rates.',
                iconName: 'FileText',
              },
              {
                title: 'Bid Management',
                description: 'Smart bidding strategies aligned with your CPA or ROAS goals. Automated optimization with manual oversight and control.',
                iconName: 'DollarSign',
              },
              {
                title: 'Audience Targeting',
                description: 'Refined audience segments, lookalike audiences, and remarketing strategies to reach high-value prospects.',
                iconName: 'Users',
              },
              {
                title: 'Performance Max',
                description: 'Multi-channel campaign setup running your ads across Search, Display, YouTube, Gmail, and Maps.',
                iconName: 'Smartphone',
              },
            ].map((item) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap];
              return (
              <div key={item.title} className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
                <Icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <ProcessSection
        heading="Our Google Ads Process"
        description="From audit to scale, we optimize every aspect of your campaigns."
        steps={[
          {
            title: 'Account Audit',
            details: 'Review your current Google Ads account structure, quality scores, spending patterns, and identify missed opportunities.',
          },
          {
            title: 'Strategy & Setup',
            details: 'Build a customized campaign structure with keyword groups, ad copy variations, and conversion tracking implementation.',
          },
          {
            title: 'Launch & Monitor',
            details: 'Deploy optimized campaigns and monitor initial performance. Make real-time adjustments to improve CTR and conversion rates.',
          },
          {
            title: 'Optimize & Scale',
            details: 'Continuous optimization based on data. Scale best-performing keywords and audiences while cutting underperformers.',
          },
        ]}
      />

      <PricingPlans
        plans={pricingPlans}
        pricingByCurrency={pricingByCurrency}
        eyebrow={pricingByCurrency.inr.label}
        title="Google Ads Management Pricing"
        description="Transparent pricing for businesses of all sizes. Choose from monthly packages or percentage-based management fees."
      />

      <OneTimeServices
        services={oneTimeServices}
        eyebrow="One-Time Setup Services"
        title="One-Time Setup Services"
        description="Professional campaign setup and optimization services (one-time fees)"
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Testimonials */}
      <Testimonials />

      {/* Clients */}
      <Clients />

      {/* CTA */}
      <CTA />
    </main>
  );
}
