'use client';

import { useState } from 'react';

interface Module {
  id: string;
  title: string;
  topics?: string[];
}

interface CourseRoadmapProps {
  modules: Module[];
}

export default function CourseRoadmap({ modules }: CourseRoadmapProps) {
  const [expandedId, setExpandedId] = useState<string | null>(modules[0]?.id || null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Curriculum roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            A detailed structure designed to build core skills and confidence.
          </p>
        </div>
        <div className="space-y-3 max-w-4xl mx-auto">
          {modules.map((module) => (
            <div
              key={module.id}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setExpandedId(expandedId === module.id ? null : module.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-left">
                  {module.title}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                    expandedId === module.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {expandedId === module.id && module.topics && module.topics.length > 0 && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                  <div className="space-y-2">
                    {module.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
