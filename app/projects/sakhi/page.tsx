import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import ProjectMedia from "@/components/project-media";
import ParticlesBackground from "@/components/particles-background";
import GradientText from "@/components/gradient-text";
import ImageCarousel from "@/components/image-carousel";

const project = {
  title: "Sakhi",
  tagline:
    "AI-powered health companion for personalized care and wellness guidance",
  heroMedia: {
    type: "video" as const,
    src: "/sakhi/sakhi_testimonial_trimmed (1).mp4",
  },
  externalLink: "https://sakhi-health.com/",
};

const teamMembers = [
  {
    name: "Smriti Bhaya",
    role: "CEO",
    image: "/team/smriti_bhaya.jpg",
    bio: "Social Entrepreneur, Architect",
    education: "MS, City Planning, MIT",
  },
  {
    name: "Swapneel Mehta",
    role: "Chief Scientist",
    image: "/team/swapneel_mehta.jpg",
    bio: "Postdoc, MIT & Boston University",
    education: "Ph.D. New York University",
  },
  {
    name: "Dhara Mungra",
    role: "CTO",
    image: "/team/dhara_mungra.png",
    bio: "Data Scientist",
    education: "MS, New York University",
  },
  {
    name: "Utkarsh Verma",
    role: "Founding Engineer",
    image: "/team/utkarsh_verma.png",
    bio: "D.J. Sanghvi College of Engg.",
    education: "B. Tech Computer Engineering ‘ 25",
  },
];

// const trustedByLogos = [
//   { name: "MIT", image: "/sakhi/logos/mit.png" },
//   { name: "UNICEF", image: "/sakhi/logos/unicef.png" },
//   { name: "World Bank", image: "/sakhi/logos/world-bank.png" },
//   { name: "BRICS", image: "/sakhi/logos/brics.png" },
// ];

const solutionFeatures = [
  {
    title:
      "Multilingual WhatsApp chatbot provides personalized health info and reminders for expectant mothers.",
  },
  {
    title:
      "A real-time dashboard offers actionable insights for NGOs and healthcare providers.",
  },
  {
    title:
      "Frontline health workers get AI-assisted support to verify and push accurate answers.",
  },
  {
    title:
      "Our human-curated knowledge base ensures hallucination-free and accurate responses.",
  },
  {
    title:
      "The platform bridges the digital and physical divide between women and healthcare.",
  },
];

const successMetrics = [
  { percentage: "45%", description: "engaged in multiple sessions" },
  { percentage: "60%", description: "accessed information proactively" },
  { percentage: "35%", description: "used 'Ask a Worker' feature" },
  { percentage: "5-7", description: "minutes average session time" },
];

const carouselImages = [
  {
    src: "/sakhi/slides/slide1.png",
    alt: "Sakhi Platform Overview",
  },
  {
    src: "/sakhi/slides/slide2.png",
    alt: "Dashboard Analytics",
  },
  {
    src: "/sakhi/slides/slide3.png",
    alt: "Community Impact",
  },
  {
    src: "/sakhi/slides/slide4.png",
    alt: "Sakhi Hero Interface",
  },
  {
    src: "/sakhi/slides/slide5.png",
    alt: "Sakhi User Interface",
  },
  {
    src: "/sakhi/slides/slide6.png",
    alt: "Sakhi Mobile Interface",
  },
  {
    src: "/sakhi/slides/slide7.png",
    alt: "Sakhi Mobile Interface",
  },
];

export default function SakhiPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-rose-50/60 to-white">
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
                <GradientText variant="roseToPlum">
                  {project.title}
                </GradientText>
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

      {/* About Sakhi Section */}
      <section className="py-16 lg:py-25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              About <GradientText variant="roseToPlum">Sakhi</GradientText>
            </h2>
            <div className="text-gray-700 mb-8 leading-relaxed space-y-4 text-lg">
              <p className="text-justify">
                Sakhi is an MIT-incubated AI-powered digital health literacy
                platform addressing the critical issue of maternal mortality in
                India (103 deaths per 100,000 live births) by targeting the
                systemic lack of health literacy. Through our WhatsApp-based
                platform, we provide personalized health information to
                expectant mothers while offering healthcare service providers
                real-time analytics to monitor and respond to community needs.
              </p>
              <p className="text-justify">
                Our work has received recognition from UNICEF's Gender Response
                Innovation Challenge and has been featured at the World Bank and
                BRICS Youth Innovation Summit. The platform has been
                co-developed with NGO partners in Jalgaon, Maharashtra since
                2024, with a proven track record of improving maternal health
                outcomes.
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
      <section className="py-16 lg:py-25 bg-rose-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Our <GradientText variant="roseToPlum">Solution</GradientText>
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

            <div className="order-1 lg:order-2">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src="/sakhi/Sakhi Demo2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sakhi is Unique Section */}
      <section className="py-16 lg:py-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <GradientText variant="roseToPlum">Sakhi</GradientText> Stands
              Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Unique <GradientText variant="roseToPlum">Value</GradientText>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    MIT-incubated, AI-powered personalization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Recognition by UNICEF, World Bank, BRICS
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Co-created with NGO partners for cultural fit
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Behavioral gamification boosting ANC compliance
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Evidence of{" "}
                <GradientText variant="roseToPlum">Success</GradientText>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {metric.percentage}
                    </div>
                    <div className="text-sm text-gray-700">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-24 lg:py-32 bg-rose-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <GradientText variant="roseToPlum">Sakhi</GradientText> Platform
              Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the key features and interfaces of our AI-powered maternal
              health platform. These slides highlight Sakhi's user experience,
              dashboard capabilities, and real-world impact on healthcare
              accessibility.
            </p>
          </div>

          <div className="max-w-6xl mx-auto aspect-video">
            <ImageCarousel
              images={carouselImages}
              autoPlay={true}
              autoPlayInterval={10000}
              showDots={true}
              showArrows={true}
              imageClassName="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 lg:py-25 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet the <GradientText variant="roseToPlum">Team</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-xs mx-auto px-4">
                {/* Bigger image circle */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xl text-black font-medium mb-2">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-lg text-gray-700 mb-1">{member.bio}</p>

                {/* Education */}
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
