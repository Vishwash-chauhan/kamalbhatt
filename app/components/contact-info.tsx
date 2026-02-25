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
      details: 'ceo@meegan-media.com',
      href: 'mailto:ceo@meegan-media.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8679265897',
      href: 'tel:+918679265897',
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

      {/* Google Maps Embed */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3482.0655963348536!2d79.511217!3d29.221625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b8cb6f3c809%3A0xb58b89c7af5d2653!2sMEEGAN%20MEDIA!5e0!3m2!1sen!2sin!4v1771235018831!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
