import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Testimonials from '@/app/components/Testimonials';
import Certifications from '@/app/components/Certifications';
import CaseStudies from '@/app/components/CaseStudies';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <Certifications />
      <Contact />
    </main>
  );
}
