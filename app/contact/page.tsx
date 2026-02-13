
import ContactForm from '@/app/components/contact-form';
import ContactInfo from '@/app/components/contact-info';
import Testimonials from '../components/testimonials';
import Clients from '../components/clients';

export const metadata = {
  title: 'Contact Us | Meegan Media',
  description: 'Get in touch with Meegan Media. Lets discuss your digital marketing strategy and growth goals.',
};

export default function ContactPage() {
  return (
    <main>
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      {/* <Clients /> */}
    </main>

  );
}
