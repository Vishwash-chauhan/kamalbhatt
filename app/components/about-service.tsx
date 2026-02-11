interface AboutServiceProps {
  slug: string;
  title: string;
  description: string;
}

export default function AboutService({ slug, title, description }: AboutServiceProps) {
  // Service-specific content
  const serviceContent = {
    seo: {
      title: 'Professional SEO Services That Drive Real Organic Growth',
      text: `Is your website invisible on Google? Losing traffic to AI search engines like ChatGPT and Gemini? As an expert in both traditional SEO and cutting-edge Answer Engine Optimization (AEO), I help businesses dominate search across all platforms—Google, AI Overviews, ChatGPT, voice assistants, and more.

With 60% of Google searches now resulting in zero clicks due to AI Overviews and featured snippets, traditional SEO alone isn't enough. You need a comprehensive strategy that positions your content as the definitive answer across all search platforms. My SEO services combine proven ranking strategies with next-generation AEO techniques to ensure maximum visibility in 2026 and beyond.

Whether you're a local business competing for "near me" searches or an e-commerce brand targeting competitive keywords, I deliver measurable results: 40-60% increases in organic traffic, first-page rankings for high-intent keywords, and AI search visibility that drives qualified leads to your business. Learn more about my complete digital marketing services.`,
    },
    'paid-ads': {
      title: 'Performance Paid Ads That Drive Qualified Leads',
      text: `Tired of wasting money on ads that don't convert? Most businesses run inefficient campaigns with poor tracking, misaligned budgets, and creative that doesn't resonate with their audience.

I build high-performance paid advertising campaigns designed to reduce wasted spend and maximize ROI across Google Ads, Meta, and LinkedIn. From comprehensive account audits to creative testing and landing page optimization, I align every campaign element to your specific business goals.

Whether you're a B2B company looking for qualified leads, an e-commerce brand driving sales, or a service business filling your pipeline, I deliver results: 2-4 weeks to optimize core campaigns, consistent 3x+ ROAS targets, and predictable lead generation that scales with your business. Let's turn your ad spend into revenue.`,
    },
    'google-ads': {
      title: 'Strategic Google Ads That Reach Ready-to-Buy Customers',
      text: `Your ideal customers are searching for you right now on Google. But if your Google Ads campaigns aren't optimized, you're either paying too much per click or missing high-intent prospects entirely.

I build and manage Google Ads campaigns designed to reach customers at the exact moment they're searching for solutions you provide. Through meticulous keyword strategy, smart bid management, and continuous A/B testing, I ensure every dollar of your ad budget generates measurable ROI—not wasted impressions.

From search campaigns capturing high-intent keywords to display and remarketing campaigns that pull back window shoppers, I structure your account for both immediate conversions and long-term scale. You'll get weekly optimization reports, full transparency into campaign performance, and strategic recommendations to keep improving results. Whether you're a B2B company generating leads or an e-commerce store driving sales, expect faster results: 1-2 weeks to optimize core campaigns and 4-6 months to consistent 3x+ ROAS.`,
    },
    'meta-ads': {
      title: 'High-Converting Meta Ads That Turn Scrollers into Customers',
      text: `Facebook and Instagram were built for one thing: capturing attention in the feed. But most businesses fail at Meta ads because they're not telling a story—they're just throwing products at people.

I create Meta Ads campaigns that speak directly to your ideal customer's pain points, then guide them through a conversion journey that actually works. From audience targeting and lookalike strategies to creative testing and funnel optimization, I treat Meta like what it actually is: a premium direct-response channel.

Every campaign gets custom audience segmentation, high-performing creative tested against your competitors, and conversion tracking built into your sales funnel. You'll know exactly which audiences convert best, which creatives outperform, and where to reinvest your budget. The result: predictable lead generation and sales growth from platforms your customers are already on daily.`,
    },
    'linkedin-ads': {
      title: 'B2B LinkedIn Ads That Generate Qualified Business Leads',
      text: `LinkedIn is where your B2B customers make buying decisions. But most B2B companies waste money on LinkedIn ads because they're either targeting too broadly or telling the wrong story to the wrong people.

I build LinkedIn Ads campaigns designed specifically for complex B2B sales cycles where decision-makers research solutions, compare competitors, and evaluate ROI before buying. That means precision targeting by job title and company size, messaging that speaks to business problems (not features), and funnel optimization to qualify leads before they reach your sales team.

From account-based marketing campaigns targeting specific high-value prospects to demand generation programs building awareness across your ideal buyer personas, I structure your LinkedIn ads to support your full sales cycle. Expect qualified leads with longer decision windows, higher average deal values, and better conversion rates. Let's turn LinkedIn from a "nice-to-have" channel into predictable pipeline generation.`,
    },
  };

  // Get content based on slug, otherwise use default
  const content = serviceContent[slug as keyof typeof serviceContent] || {
    title,
    text: description,
  };

  return (
    <section className="py-16 border-b border-gray-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              {content.title}
            </h2>
          </div>
          <div className="space-y-6">
            {content.text.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
