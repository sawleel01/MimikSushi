import AboutSection from "@/layout/Main/AboutSection";
import SushiFAQ from "@/layout/Main/FAQ";
import SushiHero from "@/layout/Main/HeroSection";
import LocationShowcase from "@/layout/Main/LocationShowcase";
import SushiPartners from "@/layout/Main/Partners";
import SignatureDishes from "@/layout/Main/SignatureDish";
import SushiTestimonials from "@/layout/Main/Testimonials";

export default function Home() {
  return (
    <>
      <SushiHero />
      <LocationShowcase />
      <SignatureDishes />
      <AboutSection />
      <SushiPartners />
      <SushiTestimonials />
      <SushiFAQ />
    </>
  );
}
