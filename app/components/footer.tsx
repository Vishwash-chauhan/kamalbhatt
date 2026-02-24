import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-white mb-2">
              MEEGAN MEDIA
            </h3>
            <p className="text-sm text-white leading-relaxed">
              Global Digital Marketing Agency | Based in Uttarakhand, India<br />
              Grow Your Business Online Today<br />
              Professional digital marketing services for businesses worldwide. Expert SEO, Google Ads, Social Media Marketing, and Web Development delivering 7X average ROAS. Trusted by 100+ International Clients.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Paid Ads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Web Development & Designing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition">
                  Digital Marketing Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-secondary transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-secondary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Email: ceo@meegan-media.com</li>
              <li>Phone: +91 95487 65897</li>
              <li>Location: Dehradun, Uttarakhand</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white">
              © {currentYear} Kamal Bhatt. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <Link href="#" className="text-white hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition">
                Terms of Service
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
