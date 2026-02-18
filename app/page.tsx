import Hero from './components/hero';
import AboutSection from './components/about-section';
import AboutMeeganMedia from './components/about-meegan-media';
import Clients from './components/clients';
import CTA from './components/cta';
import Blog from './components/blog_snippit_home';
import Testimonials from './components/testimonials';
import ServicesSection from './components/services-section';
import FAQSection from './components/faq-section';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <AboutMeeganMedia />
      <Clients />
      <CTA />
      {/* <Blog /> */}
      <Testimonials />
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: 'What is digital marketing and how does it help businesses grow?',
            answer: (
              <>
                <p>
                  Digital marketing is the use of online channels — <strong>SEO</strong>, <strong>Google Ads</strong>, <strong>Social Media</strong>, <strong>Email</strong>, and <strong>Web</strong> — to attract customers and grow revenue. It helps businesses reach targeted audiences 24/7, generate measurable leads, and achieve <strong>3–7X</strong> return on investment compared to traditional marketing.
                </p>

                <h4 className="font-semibold mt-4">How It Helps Businesses:</h4>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li><strong>SEO:</strong> Ranks your website on Google to drive free, organic traffic</li>
                  <li><strong>Google Ads:</strong> Generates instant leads through paid search campaigns</li>
                  <li><strong>Social Media:</strong> Builds brand awareness and community</li>
                  <li><strong>Web Development:</strong> Converts visitors into paying customers</li>
                  <li><strong>Email Marketing:</strong> Nurtures leads into repeat customers</li>
                </ul>

                <p className="mt-3"><strong>Real‑World Impact:</strong> Businesses investing in digital marketing see an average of <strong>300% traffic growth within 6 months</strong> and reduce customer acquisition costs by <strong>40–60%</strong> compared to offline methods.</p>

                <p className="mt-3"><strong>Meegan Media</strong> is a digital marketing agency that has helped <strong>100+</strong> businesses globally achieve these results since 2015.</p>
              </>
            ),
          },

          {
            question: 'How much does digital marketing cost for a small business in India?',
            answer: (
              <>
                <p>
                  Digital marketing for small businesses in India typically costs between <strong>₹15,000–₹1,50,000/month</strong> depending on services and scope. Below is a quick pricing breakdown by service.
                </p>

                <table className="w-full text-sm mt-3 border-collapse">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Service</th>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Starting Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">SEO Service</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹15,000/month</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google Ads Management</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹20,000/month (plus ad spend)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Social Media Marketing</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹20,000/month</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Web Development</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹25,000 (one‑time)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Digital Marketing Training</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹50,000 (course fee)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Complete Package</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹85,000/month</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-3"><strong>Important:</strong> Google Ads budget (₹30,000–₹50,000/month) is paid directly to Google and is separate from management fees.</p>

                <p className="mt-2"><strong>Expected ROI:</strong> Most small businesses see positive returns within <strong>90–120 days</strong>. Average ROAS achieved by Meegan Media clients: <strong>7X</strong>.</p>
              </>
            ),
          },

          {
            question: 'How long does SEO take to show results?',
            answer: (
              <>
                <p>
                  SEO typically takes <strong>3–6 months</strong> to show measurable results. Technical fixes can move the needle in weeks; ranking and traffic gains compound over months.
                </p>

                <h4 className="font-semibold mt-4">SEO Results Timeline</h4>
                <table className="w-full text-sm mt-3 border-collapse">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Time</th>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">What to expect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Week 1–4</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Technical SEO fixes and on‑page optimization</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Month 2</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">First ranking improvements</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Month 3–4</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Organic traffic begins increasing (50–150%)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Month 5–6</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Consistent leads from organic search</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Month 6–12</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Dominant rankings, 300–500% traffic growth</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mt-4">Factors that affect speed</h4>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>Industry competition level</li>
                  <li>Current website health</li>
                  <li>Content quality</li>
                  <li>Backlink profile strength</li>
                  <li>Budget investment</li>
                </ul>

                <p className="mt-3"><strong>Meegan Media’s average client result:</strong> Page‑1 rankings for target keywords within 4–6 months, with <strong>380%+ average traffic increase by month 6</strong>.</p>
              </>
            ),
          },

          {
            question: 'What is the difference between SEO and Google Ads?',
            answer: (
              <>
                <p>
                  <strong>SEO</strong> builds long‑term organic rankings (3–6 months). <strong>Google Ads</strong> delivers paid traffic immediately (24–48 hours). Use both together for fastest, most cost‑efficient growth.
                </p>

                <table className="w-full text-sm mt-3 border-collapse">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Factor</th>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">SEO</th>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Google Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Results timeline</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3–6 months</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">24–48 hours</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Cost type</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Monthly retainer</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Per click + management</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Traffic type</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Organic (free clicks)</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Paid clicks</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Long‑term value</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">High (compounds)</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Stops when budget stops</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Best for</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Sustainable growth</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Immediate leads</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-3"><strong>Smart strategy:</strong> Use Google Ads for immediate leads while SEO builds momentum — by month 6–9 organic growth typically allows you to reduce ad spend by <strong>30–50%</strong> while maintaining lead volume.</p>

                <p className="mt-2"><strong>Meegan Media</strong> manages both channels and helps clients achieve an average <strong>7X ROAS</strong> on ads while building organic traffic for long‑term growth.</p>
              </>
            ),
          },

          {
            question: 'What does a digital marketing agency do?',
            answer: (
              <>
                <p>
                  A digital marketing agency plans and executes online strategies that attract customers and grow revenue. Core services include SEO, Google Ads, social media, content, web development, email, and analytics — all focused on measurable ROI.
                </p>

                <h4 className="font-semibold mt-4">Core responsibilities</h4>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>Strategy: research, competitor analysis, and a custom marketing plan</li>
                  <li>SEO: rank your website organically on Google</li>
                  <li>Google Ads: run and optimize paid campaigns</li>
                  <li>Social media: create content and manage presence</li>
                  <li>Web development: build conversion‑focused websites</li>
                  <li>Analytics & reporting: track, measure and improve results</li>
                </ul>

                <p className="mt-3"><strong>What to expect:</strong> dedicated account management, transparent reporting, measurable KPIs (traffic, leads, ROAS), and no hidden costs.</p>

                <p className="mt-2"><strong>Meegan Media</strong> is a full‑service digital agency (founded 2015) serving India, USA, UK, and Germany with a <strong>98% client retention rate</strong>.</p>
              </>
            ),
          },

          {
            question: 'Is digital marketing a good career in India in 2025–2026?',
            answer: (
              <>
                <p>
                  Yes — digital marketing remains one of India’s fastest‑growing career fields in 2025–2026. Salaries scale quickly with experience and specialization.
                </p>

                <table className="w-full text-sm mt-3 border-collapse">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Role</th>
                      <th className="px-3 py-2 text-left text-gray-700 dark:text-gray-300">Typical pay (INR/month)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">SEO Specialist</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹25,000–₹60,000</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Google Ads Manager</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹30,000–₹80,000</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Social Media Manager</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹20,000–₹50,000</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Digital Marketing Manager</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹50,000–₹1,50,000</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">Freelancer / Agency Owner</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">₹50,000–₹3,00,000+</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mt-4">Skills & how to start</h4>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>Core skills: SEO, PPC (Google Ads), social media, content writing, analytics (GA4), email marketing, and strategy</li>
                  <li>How to start: complete a certified training course (2–4 months). Course costs range from ₹30,000–₹60,000.</li>
                </ul>

                <p className="mt-3"><strong>Meegan Media</strong> offers training (Haldwani + online) with an <strong>85% placement rate</strong> and hands‑on live projects.</p>
              </>
            ),
          },

          {
            question: 'How do I choose the right digital marketing agency for my business?',
            answer: (
              <>
                <p>
                  Choose an agency based on proven results, transparent pricing, clear communication, and measurable ROI. Verify case studies, ask for senior access, and avoid long lock‑in contracts.
                </p>

                <h4 className="font-semibold mt-4">7‑Point agency checklist</h4>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                  <li>✅ Proven case studies with real numbers</li>
                  <li>✅ Transparent pricing and clear deliverables</li>
                  <li>✅ Direct access to senior strategists</li>
                  <li>✅ Clear monthly reporting (traffic, leads, ROAS)</li>
                  <li>✅ No black‑hat SEO — Google‑compliant methods</li>
                  <li>✅ Flexible contracts (avoid 12‑month lock‑ins)</li>
                  <li>✅ Strong E‑E‑A‑T signals and solid online presence</li>
                </ul>

                <h4 className="font-semibold mt-4">Red flags to avoid</h4>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>Guaranteed #1 rankings in 30 days</li>
                  <li>Pricing below ₹5,000/month for “full service”</li>
                  <li>No verifiable client testimonials or case studies</li>
                  <li>Lack of transparency about methods or results</li>
                </ul>

                <h4 className="font-semibold mt-4">Questions to ask before hiring</h4>
                <ol className="list-decimal list-inside mt-2 text-sm">
                  <li>Can I see case studies from my industry?</li>
                  <li>Who will manage my account?</li>
                  <li>How do you report results?</li>
                  <li>What’s your average client ROAS?</li>
                  <li>What happens if I want to cancel?</li>
                </ol>

                <p className="mt-3"><strong>Meegan Media</strong> offers a free 30‑minute consultation with no obligation. Founded 2015 | 100+ clients | 7X avg ROAS | 98% retention.</p>
              </>
            ),
          },
        ]}
      />
    </>
  );
}
