'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition">
              About
            </Link>
            <Link href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition">
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
              href="#services"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition rounded"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition rounded"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition rounded"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition rounded"
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
