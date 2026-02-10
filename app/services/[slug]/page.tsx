import Link from 'next/link';
import type { Metadata } from 'next';
import { getServiceBySlug } from '../service_data';
import Testimonials from '@/app/components/testimonials';
import CTA from '@/app/components/cta';
import Clients  from '@/app/components/clients';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service does not exist.',
    };
  }

  return {
    title: `${service.title} | Kamal Bhatt`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Kamal Bhatt`,
      description: service.description,
      type: 'website',
    },
  };
};

export default async function ServiceTemplate({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="bg-white dark:bg-gray-950">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Service not found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Please check the URL or explore our services page.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
            >
              Back to Services
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-gray-950">
      <section className="py-24 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Service
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {service.tagline}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={service.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition"
                >
                  {service.cta.label}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:border-primary transition"
                >
                  View all services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 text-center"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {service.tools?.length ? (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Tools and technologies used
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
                Flexible stacks based on your goals, budget, and team workflow.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {service.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 shadow-lg"
                >
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
                  <span className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Strategy snapshot
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  {service.description}
                </p>
              </div>
              <div className="space-y-4">
                {service.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {service.processHeading}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              {service.processDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.process.map((step, index) => (
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

      {/* <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  FAQ
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  Quick answers to common questions before we start.
                </p>
              </div>
              <div className="space-y-6">
                {service.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <CTA />
      <Clients />
      <Testimonials />
    </main>
  );
}
