import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import PromotionBar from "@/components/PromotionBar";
import Features from "@/components/pricing/Features";
import Pricing from "@/components/pricing/Pricing";
import Proccess from "@/components/proccess/Proccess";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <PromotionBar />
      <Pricing />
      <Features />
      <About />
      <Services />
      <div className="mt-48 bg-[url('../assets/ellipse.png')] bg-cover py-24">
        <Proccess />
        <Team />
      </div>
      <Testimonials />
    </>
  );
}
