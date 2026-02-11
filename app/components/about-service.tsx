import { aboutServiceContent } from '@/app/services/service_data';

interface AboutServiceProps {
  slug: string;
  title: string;
  description: string;
}

export default function AboutService({ slug, title, description }: AboutServiceProps) {
  const content = aboutServiceContent[slug as keyof typeof aboutServiceContent] || {
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
