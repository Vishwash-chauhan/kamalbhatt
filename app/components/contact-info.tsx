'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string | string[];
  href?: string;
}

export default function ContactInfo() {
  const contactOptions: ContactOption[] = [
    {
      icon: Mail,
      title: 'Email',
      details: 'kamalbhattts@gmail.com',
      href: 'mailto:kamalbhattts@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 95487 65897',
      href: 'tel:+919548765897',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Dehradun, Uttarakhand',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 5:00 PM'],
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

      {contactOptions.map((option, index) => {
        const Icon = option.icon;
        const detailsArray = Array.isArray(option.details) ? option.details : null;
        const isLink = !!option.href;

        return (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20">
                <Icon className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{option.title}</h4>
              {detailsArray ? (
                <ul className="space-y-1">
                  {detailsArray.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : isLink ? (
                <a
                  href={option.href}
                  className="text-secondary hover:text-secondary/80 transition font-medium"
                >
                  {option.details}
                </a>
              ) : (
                <p className="text-gray-600">{option.details}</p>
              )}
            </div>
          </div>
        );
      })}


    </div>
  );
}
