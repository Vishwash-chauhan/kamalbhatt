'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPaidAdsSubmenuOpen, setIsPaidAdsSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: 'SEO Optimization', slug: 'seo-optimisation' },
    { name: 'Paid Ads', slug: 'paid-ads', hasSubmenu: true },
    { name: 'Social Media Marketing', slug: 'social-media-marketing' },
    { name: 'Web Development & Design', slug: 'web-development-design' },
    { name: 'Digital Marketing Training', slug: 'digital-marketing-training' },
  ];

  const paidAdsServices = [
    { name: 'Google Ads', slug: 'google-ads' },
    { name: 'Meta Ads', slug: 'meta-ads' },
    { name: 'LinkedIn Ads', slug: 'linkedin-ads' },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Meegan Media Logo.png"
              alt="Meegan Media Logo"
              width={240}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition ${
                isActive('/') && pathname === '/'
                  ? 'text-primary dark:text-secondary font-semibold border-b-2 border-primary dark:border-secondary pb-1'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link 
                href="/services"
                className={`flex items-center gap-1 transition ${
                  isActive('/services')
                    ? 'text-primary dark:text-secondary font-semibold border-b-2 border-primary dark:border-secondary pb-1'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                }`}
              >
                Services
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isServicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </Link>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 z-50">
                  {services.map((service) => (
                    <div key={service.slug}>
                      {service.hasSubmenu ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setIsPaidAdsSubmenuOpen(true)}
                          onMouseLeave={() => setIsPaidAdsSubmenuOpen(false)}
                        >
                          <Link
                            href={`/services/${service.slug}`}
                            className={`flex items-center justify-between px-4 py-3 transition ${
                              isActive(`/services/${service.slug}`)
                                ? 'bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 border-l-4 border-primary dark:border-secondary'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            <span>{service.name}</span>
                            <ChevronDown className="w-4 h-4" />
                          </Link>
                          
                          {/* Paid Ads Submenu */}
                          {isPaidAdsSubmenuOpen && (
                            <div className="absolute left-full top-0 ml-0 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2">
                              {paidAdsServices.map((paidAdService) => (
                                <Link
                                  key={paidAdService.slug}
                                  href={`/services/paid-ads/${paidAdService.slug}`}
                                  className={`block px-4 py-3 transition ${
                                    isActive(`/services/paid-ads/${paidAdService.slug}`)
                                      ? 'bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 border-l-4 border-primary dark:border-secondary'
                                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800'
                                  }`}
                                >
                                  {paidAdService.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={`/services/${service.slug}`}
                          className={`block px-4 py-3 transition ${
                            isActive(`/services/${service.slug}`)
                              ? 'bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 border-l-4 border-primary dark:border-secondary'
                              : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {service.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className={`transition ${
                isActive('/about')
                  ? 'text-primary dark:text-secondary font-semibold border-b-2 border-primary dark:border-secondary pb-1'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className={`transition ${
                isActive('/portfolio')
                  ? 'text-primary dark:text-secondary font-semibold border-b-2 border-primary dark:border-secondary pb-1'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/digital-marketing-playbook" 
              className={`transition ${
                isActive('/digital-marketing-playbook')
                  ? 'text-primary dark:text-secondary font-semibold border-b-2 border-primary dark:border-secondary pb-1'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Playbook
            </Link>
            <Link 
              href="/contact" 
              className={`transition ${
                isActive('/contact')
                  ? 'text-primary dark:text-secondary font-semibold border-b-2 border-primary dark:border-secondary pb-1'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Contact
            </Link>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-2 rounded transition ${
                isActive('/') && pathname === '/'
                  ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className={`flex-1 px-4 py-2 rounded transition ${
                    isActive('/services')
                      ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                  }`}
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="pr-4 py-2"
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform text-primary dark:text-secondary ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {isServicesDropdownOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-primary dark:border-secondary">
                  {services.map((service) => (
                    <div key={service.slug}>
                      {service.hasSubmenu ? (
                        <div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/services/${service.slug}`}
                              className={`flex-1 flex items-center px-4 py-2 text-sm rounded transition ${
                                isActive(`/services/${service.slug}`)
                                  ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10'
                                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                              }`}
                            >
                              {service.name}
                            </Link>
                            <button
                              onClick={() => setIsPaidAdsSubmenuOpen(!isPaidAdsSubmenuOpen)}
                              className="pr-4 py-2"
                            >
                              <ChevronDown 
                                className={`w-3 h-3 transition-transform text-primary dark:text-secondary ${
                                  isPaidAdsSubmenuOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          </div>
                          {isPaidAdsSubmenuOpen && (
                            <div className="mt-1 ml-4 space-y-1 border-l-2 border-primary dark:border-secondary">
                              {paidAdsServices.map((paidAdService) => (
                                <Link
                                  key={paidAdService.slug}
                                  href={`/services/paid-ads/${paidAdService.slug}`}
                                  className={`block px-4 py-2 text-sm rounded transition ${
                                    isActive(`/services/paid-ads/${paidAdService.slug}`)
                                      ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10'
                                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                                  }`}
                                >
                                  {paidAdService.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={`/services/${service.slug}`}
                          className={`block px-4 py-2 text-sm rounded transition ${
                            isActive(`/services/${service.slug}`)
                              ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10'
                              : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                          }`}
                        >
                          {service.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`block px-4 py-2 rounded transition ${
                isActive('/about')
                  ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className={`block px-4 py-2 rounded transition ${
                isActive('/portfolio')
                  ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/digital-marketing-playbook"
              className={`block px-4 py-2 rounded transition ${
                isActive('/digital-marketing-playbook')
                  ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Playbook
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-2 rounded transition ${
                isActive('/contact')
                  ? 'text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              Contact
            </Link>
            <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
