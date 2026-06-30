import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import SolarCalculator from '@/components/SolarCalculator';
import Process from '@/components/Process';
import Benefits from '@/components/Benefits';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <SolarCalculator />
        <Process />
        <Benefits />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
