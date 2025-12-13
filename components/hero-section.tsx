import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/particles-background";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-white overflow-hidden py-20 sm:py-28 lg:py-36">
      <ParticlesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-gray-900 mb-6 text-balance leading-tight">
          Trusted maternal health guidance,{" "}
          <span className="bg-gradient-to-r from-[#d55a40] to-[#372c79] bg-clip-text text-transparent">
            accessible to every woman.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
          AI4Health creates multilingual, expert-verified AI systems that support mothers, families, 
          and frontline workers — making trustworthy maternal health guidance accessible through 
          WhatsApp and low-resource platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#d55a40] to-[#372c79] hover:from-[#c54a30] hover:to-[#271c69] text-white px-8 py-3 w-full sm:w-auto text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#projects">Explore Our Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
