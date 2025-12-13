import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import SakhiSection from "@/components/sakhi-section";
import SanjeevaniSection from "@/components/sanjeevani-section";
import MedicalAISection from "@/components/medical-ai-section";
import ImpactSection from "@/components/impact-section";
import WhoWeServeSection from "@/components/who-we-serve-section";
import TimelineSection from "@/components/timeline-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="projects">
        <SakhiSection />
        <SanjeevaniSection />
        <MedicalAISection />
      </div>
      <ImpactSection />
      <WhoWeServeSection />
      <TimelineSection />
      <Footer />
    </main>
  );
}
