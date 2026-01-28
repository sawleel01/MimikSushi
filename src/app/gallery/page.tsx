import IntroSection from "@/components/IntroSection";
import SushiGallery from "@/layout/Gallery/HeroSection";

export default function Menu() {
  return (
    <>
      <IntroSection
        subtitle="Insights"
        title="Gallery"
        description="View our delicious creations and the art of sushi making through our gallery."
      />
      <SushiGallery />
    </>
  );
}
