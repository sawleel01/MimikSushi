import IntroSection from "@/components/IntroSection";
import PrivacyPolicy from "@/layout/Legal/privacy-policy";

export default function PrivacyPage() {
  return (
    <main className="wrapper pt-large">
      <IntroSection title="Privacy Policy" />
      <PrivacyPolicy />
    </main>
  );
}
