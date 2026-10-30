import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhyNorc } from "@/components/sections/WhyNorc";
import { Insights } from "@/components/sections/Insights";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <FeaturedWork />
        <HowWeWork />
        <WhyNorc />
        <Insights />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
