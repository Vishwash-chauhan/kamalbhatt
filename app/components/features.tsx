interface FeaturesProps {
  highlights: Array<{ value: string; label: string }>;
}

export default function Features({ highlights }: FeaturesProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Course Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {highlight.value}
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
