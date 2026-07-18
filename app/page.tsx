import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";










export default function Home() {
  return (
    <main className="bg-[#09090B] text-white overflow-x-hidden">
      <Navbar />
      <CursorGlow />
      <Hero />
      <Stats />
      <About />
      <Process />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Tech />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      




    </main>
  );
}