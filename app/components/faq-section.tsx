interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  bgColor?: 'light' | 'dark';
}

export default function FAQSection({ 
  faqs, 
  title = 'Frequently Asked Questions',
  bgColor = 'light'
}: FAQSectionProps) {
  const bgClasses = bgColor === 'light' 
    ? 'bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800'
    : 'bg-white dark:bg-gray-950';

  return (
    <section className={`py-24 ${bgClasses}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`rounded-xl border border-gray-200 dark:border-gray-800 p-8 ${
              bgColor === 'light'
                ? 'bg-white dark:bg-gray-950'
                : 'bg-gray-50 dark:bg-gray-900'
            }`}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
