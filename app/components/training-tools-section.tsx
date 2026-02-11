export default function TrainingToolsSection() {
  const tools = [
    {
      name: 'Google Ads',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg',
    },
    {
      name: 'Google Analytics 4',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleanalytics.svg',
    },
    {
      name: 'Semrush',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/semrush.svg',
    },
    {
      name: 'Mailchimp',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailchimp.svg',
    },
    {
      name: 'Google Search Console',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg',
    },
    {
      name: 'Gen AI',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            <span>Industry Standard </span>
            <span className="text-primary">Tools</span>
            <span> you will </span>
            <span className="text-primary">Master</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
              <span className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
