import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import PromotionBar from "@/components/PromotionBar";
import Features from "@/components/pricing/Features";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <PromotionBar />
      <Pricing />
      <Features />
      <About />
    </>
  );
}
