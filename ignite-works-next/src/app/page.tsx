import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="pt-[110px] md:pt-[150px]">
        <div className="max-w-[1100px] mx-auto px-5">
          <Hero />
          <About />
          <Skills />
        </div>

        <Services />
        <Works />
        <Pricing />

        <div className="max-w-[1100px] mx-auto px-5 pb-20">
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
