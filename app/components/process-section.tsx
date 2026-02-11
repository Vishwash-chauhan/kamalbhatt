interface ProcessStep {
  title: string;
  details: string;
}

interface ProcessSectionProps {
  heading: string;
  description: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  heading,
  description,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 shadow-lg"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
                Step {index + 1}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
