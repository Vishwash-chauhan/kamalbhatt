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
