import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import ProjectMedia from "@/components/project-media";
import ParticlesBackground from "@/components/particles-background";
import GradientText from "@/components/gradient-text";

const project = {
  title: "Sanjeevani App",
  tagline:
    "Digital healthcare platform connecting patients with medical professionals",
  heroMedia: {
    type: "image" as const,
    src: "/sanjeevani/ai_image_3.jpg?height=600&width=1200",
  },
  externalLink: "https://sanjivni-app.vercel.app/",
};

const teamMembers = [
  {
    name: "Kalash ",
    role: "CEO",
    image: "/team/kalash.jpg?height=200&width=200",
    bio: "",
    education: "",
  },
  {
    name: "Abhijeet",
    role: "CTO",
    image: "/team/abhijeet_sapar.png?height=200&width=200",
    bio: "",
    education: "",
  },
  {
    name: "Jaimeen",
    role: "Full Stack Development",
    image: "/team/jaimeen.png?height=200&width=200",
    bio: "",
    education: "",
  },
  {
    name: "Harsh",
    role: "AI/ML Development",
    image: "/team/harsh_sangani.png?height=200&width=200",
    bio: "",
    education: "",
  },
  {
    name: "Tarun",
    role: "Cloud Development",
    image: "/team/tarun.jpg?height=200&width=200",
    bio: "",
    education: "",
  },
];

// const trustedByLogos = [
//   { name: "Ministry of Health", image: "/placeholder.svg?height=48&width=120" },
//   { name: "NITI Aayog", image: "/placeholder.svg?height=48&width=120" },
//   { name: "Apollo Hospitals", image: "/placeholder.svg?height=48&width=120" },
//   { name: "Fortis Healthcare", image: "/placeholder.svg?height=48&width=120" },
// ];

const solutionFeatures = [
  {
    title:
      "An intelligent, couple-centric intake form designed for fertility cases.",
  },
  {
    title:
      "A unified dashboard for clinicians to review all patient data and reports at a glance.",
  },
  {
    title:
      "A secure and simple portal for patients to upload all past medical documents.",
  },
  {
    title:
      "A privacy-first, local/offline architecture to ensure complete data security.",
  },
  {
    title:
      "Smart appointment scheduling to manage multiple clinic and OPD locations.",
  },
  {
    title:
      "Automated patient notifications and bilingual support (English & Hindi).",
  },
];

export default function SanjeevaniAppPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                <GradientText variant="green">Sanjeevani App</GradientText>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-700 mb-8 text-pretty">
                {project.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Initiative
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-full aspect-auto">
              <ProjectMedia project={project} />
            </div>
          </div>
        </div>
      </section>

      {/* About Sanjeevani App Section */}
      <section className="py-16 lg:py-25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              About <GradientText variant="green">Sanjeevani App</GradientText>
            </h2>
            <div className="text-gray-700 mb-8 leading-relaxed space-y-4 text-lg">
              <p className="text-justify">
                Sanjeevani is a purpose-built clinical software solution
                designed specifically for the nuanced needs of Infertility and
                OB-GYN practices. Developed in close collaboration with medical
                professionals, it moves beyond generic patient management to
                tackle the core challenge of data collection. Our platform
                automates and structures the entire patient intake process, from
                initial registration to detailed medical history. By providing a
                comprehensive digital profile for each couple before their first
                consultation, Sangeevani empowers clinicians to dedicate their
                valuable time to diagnosis and care, rather than repetitive data
                entry.
              </p>
            </div>

            {/* Trusted By Logos */}
            {/*<div className="mt-12">
              <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
                Trusted By
              </h3>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {trustedByLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 lg:py-25 bg-green-50/40">
        <div className="max-w-7xl mx-auto px-9 sm:px-4 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-center">
            {/* Text column - spans 2 of 6 columns */}
            <div className="order-2 lg:order-1 lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Our <GradientText variant="green">Solution</GradientText>
              </h2>
              <div className="space-y-6">
                {solutionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <p className="text-base text-gray-700 text-justify">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image column - spans 4 of 6 columns */}
            <div className="order-1 lg:order-2 lg:col-span-4">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/sanjeevani/working.png"
                  alt="Sanjeevani App Solution on Mobile"
                  className="w-full h-auto max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODIFIED SECTION: "Why Sanjeevani App is Unique" --- */}
      <section className="py-16 lg:py-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <GradientText variant="green">Sanjeevani App</GradientText>{" "}
              Stands Out
            </h2>
          </div>

          {/* Centered the "Unique Value" block */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Unique <GradientText variant="green">Value</GradientText>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  24/7 availability with certified medical professionals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Designed for Clinical Efficiency: Its primary purpose is to
                  save the doctor’s time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Co-Created with Specialists: Developed in direct partnership
                  with clinicians to solve real-world problems.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Affordable pricing model for all economic segments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 lg:py-25 bg-green-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet the <GradientText variant="green">Team</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-xs mx-auto px-4">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>

                <p className="text-xl text-black font-medium mb-2">
                  {member.role}
                </p>

                <p className="text-lg text-gray-700 mb-1">{member.bio}</p>

                <p className="text-lg text-gray-500">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
