import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">
              Kamal Bhatt
            </h3>
            <p className="text-sm text-gray-400">
              Expert digital marketing services for businesses in Dehradun, Uttarakhand.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 Email: hello@kamalbhatt.com</li>
              <li>📱 Phone: +91 XXXXX XXXXX</li>
              <li>📍 Location: Dehradun, Uttarakhand</li>
            </ul>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-3 1" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Kamal Bhatt. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
