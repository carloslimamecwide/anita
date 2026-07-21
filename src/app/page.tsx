import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { WhatsAppSticky } from "@/components/WhatsAppSticky";
import { Zones } from "@/components/Zones";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <HowItWorks />
        <Zones />
        <Contact />
      </main>
      <Footer />
      <WhatsAppSticky />
    </>
  );
}
