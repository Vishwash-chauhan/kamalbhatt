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
