import AboutHero from '@/app/components/about-hero';
import WhatIDo from '@/app/components/what-i-do';
import TrackRecord from '@/app/components/track-record';
import CoreExpertise from '@/app/components/core-expertise';
import IndustriesServed from '@/app/components/industries-served';
import Philosophy from '@/app/components/philosophy';
import Testimonials from '@/app/components/testimonials';
import CTA from '@/app/components/cta';

export const metadata = {
  title: 'About Kamal Bhatt - Founder of Meegan Media',
  description: 'Learn about Kamal Bhatt, Founder & CEO of Meegan Media. 100+ successful campaigns, 7X average ROAS, 98% client retention. Digital marketing expert based in Dehradun.',
  keywords: 'Kamal Bhatt, Meegan Media, Digital Marketing Expert, Dehradun',
  openGraph: {
    title: 'About Kamal Bhatt - Founder of Meegan Media',
    description: 'Learn about Kamal Bhatt and Meegan Media. Expert in SEO, Google Ads, Social Media Marketing.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatIDo />
      <TrackRecord />
      <CoreExpertise />
      <IndustriesServed />
      <Philosophy />
      <Testimonials />
      <CTA />
    </>
  );
}
