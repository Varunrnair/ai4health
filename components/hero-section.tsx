import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/particles-background";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-white overflow-hidden py-16 sm:py-20 lg:py-50">
      <ParticlesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-tight">
          Rebuilding Trust in Medical Health
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Digital health interventions can measurably influence maternal health outcomes in resource-limited settings. Our health literacy initiative has reached participants across Maharashtra, India, deploying expert-in-the-loop WhatsApp chatbots, multilingual GenAI question-answering systems, and community health worker support platforms for reproductive healthcare delivery.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 w-full sm:w-auto text-sm sm:text-base"
          >
            <Link href="#projects">Explore Projects</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto text-sm sm:text-base"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
