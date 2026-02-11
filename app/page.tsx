import Hero from './components/hero';
import AboutSection from './components/about-section';
import AboutMeeganMedia from './components/about-meegan-media';
import Clients from './components/clients';
import CTA from './components/cta';
import Blog from './components/blog_snippit_home';
import Testimonials from './components/testimonials';
import ServicesSection from './components/services-section';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <AboutMeeganMedia />
      <Clients />
      <CTA />
      <Blog />
      <Testimonials />
    </>
  );
}
