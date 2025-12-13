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
  title: "Medical LLM Evaluation",
  tagline:
    "Rigorous evaluation framework for multilingual medical AI systems in maternal healthcare contexts",
  heroMedia: {
    type: "image" as const,
    src: "/medicaleval/ai_image.png?height=600&width=1200",
  },
  externalLink: "https://health-eval.simppl.org/",
};

const teamMembers = [
  {
    name: "Varun Nair",
    role: "Machine Learning Engineer",
    image: "/team/varun_nair.png",
    bio: "D.J. Sanghvi College of Engg.",
    education: "B. Tech Computer Engineering ‘ 25",
  },
  {
    name: "Himanshu Beniwal",
    role: "Mentor",
    image: "/team/himanshu_beniwal.png",
    bio: "PHD Student",
    education: "Indian Institute of Technology Gandhinagar",
  },
  {
    name: "Dhara Mungra",
    role: "CTO",
    image: "/team/dhara_mungra.png",
    bio: "Data Scientist",
    education: "MS, New York University",
  },
  {
    name: "Swapneel Mehta",
    role: "Chief Scientist",
    image: "/team/swapneel_mehta.jpg",
    bio: "Postdoc, MIT & Boston University",
    education: "Ph.D. New York University",
  },
];

// const trustedByLogos = [
//   { name: "FDA", image: "/placeholder.svg?height=48&width=120" },
//   { name: "WHO", image: "/placeholder.svg?height=48&width=120" },
//   { name: "Mayo Clinic", image: "/placeholder.svg?height=48&width=120" },
//   { name: "Johns Hopkins", image: "/placeholder.svg?height=48&width=120" },
// ];

const solutionFeatures = [
  {
    title: "Comprehensive AI model testing and validation protocols.",
  },
  {
    title:
      "A gold-standard dataset of questions and answers created and validated by local medical experts.",
  },
  {
    title:
      "A professionally weighted scoring system to determine the clinical accuracy, completeness, and contextual safety.",
  },
  {
    title:
      "Evaluation of responses on multiple dimensions: medical quality, semantic similarity, and language quality.",
  },
  {
    title:
      "Focus on low-resource languages like Hindi and Marathi to ensure linguistic accessibility and cultural relevance.",
  },
  {
    title:
      "Utilization of state-of-the-art NLP models like Cohere's Command-A and Aya Expanse for multilingual QA.",
  },
  {
    title:
      "A holistic final score that aggregates medical, semantic, and linguistic quality for a complete performance metric.",
  },
];

const carouselImages = [
  {
    src: "/medicaleval/slides/slide2.png",
    alt: "Medical LLM Evaluation Dashboard",
  },
  {
    src: "/medicaleval/slides/slide3.png",
    alt: "AI Model Performance Analysis",
  },
  {
    src: "/medicaleval/slides/slide4.png",
    alt: "Clinical Decision Support",
  },
  {
    src: "/medicaleval/slides/slide5.png",
    alt: "Healthcare Data Visualization",
  },
  {
    src: "/medicaleval/slides/slide6.png",
    alt: "Medical AI Research Platform",
  },
  {
    src: "/medicaleval/slides/slide7.png",
    alt: "Clinical Outcome Metrics",
  },
  {
    src: "/medicaleval/slides/slide8.png",
    alt: "AI Model Validation Results",
  },
];

export default function MedicalAIEvaluationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50/60 to-white">
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
                <GradientText variant="blue">MedicaLLM Evaluation</GradientText>
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

      {/* About Medical LLM Evaluation Section */}
      <section className="py-16 lg:py-25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              About <GradientText variant="blue">LLM Evaluation</GradientText>
            </h2>
            <div className="text-gray-700 mb-8 leading-relaxed space-y-4 text-lg">
              <p className="text-justify">
                    Medical LLM Evaluation establishes systematic protocols for validating 
                    AI-powered language models in maternal healthcare applications. Our 
                    framework evaluates Large Language Model performance across English, 
                    Hindi, and Marathi using expert-validated question sets, weighted 
                    scoring mechanisms, and multi-dimensional assessment criteria. This 
                    infrastructure enables evidence-based validation of AI systems prior 
                    to deployment with patients and community health workers in 
                    resource-limited settings.            
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
      <section className="py-16 lg:py-25 bg-blue-50/40">
        <div className="max-w-7xl mx-auto px-9 sm:px-4 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-center">
            {/* Text column - spans 2 of 6 columns */}
            <div className="order-2 lg:order-1 lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Our <GradientText variant="blue">Solution</GradientText>
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
                  src="/medicaleval/scores.png"
                  alt="Medical Evaluation Scores"
                  className="w-full h-auto max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Medical LLM Evaluation is Unique Section */}
      <section className="py-16 lg:py-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <GradientText variant="blue">LLM Evaluation</GradientText>{" "}
              Stands Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Unique Value List */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Unique <GradientText variant="blue">Value</GradientText>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Comprehensive multi-dimensional evaluation framework
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Real-time bias detection and mitigation tools
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Regulatory compliance and safety assessment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Clinical validation with healthcare partners
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Evidence of <GradientText variant="blue">Success</GradientText>
              </h3>
              <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-center">
                <div className="text-center mb-4 lg:mb-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    6+
                  </div>
                  <div className="text-sm text-gray-700">
                    AI Models Evaluated
                    <br />
                    <span className="font-dark text-sm mt-1">
                      *Including Cohere's Command-A and Aya
                    </span>
                  </div>
                </div>
                <div className="text-center mb-4 lg:mb-0">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm text-gray-700">
                    Languages Supported
                    <br />
                    <span className="font-dark text-sm mt-1">
                      English, Hindi, Marathi
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center md:text-left">
                <div className="text-xl font-bold text-blue-600 mb-2">
                  Automated + LLM-as-a-Judge
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Dual Scoring System</span>
                  <p className="font-dark text-sm mt-1">
                    *Semantic Similarity, Linguistic Analysis, and LLM-based
                    Evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-24 lg:py-32 bg-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <GradientText variant="blue">Medical LLM Evaluation</GradientText>{" "}
              Platform Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These slides demonstrate our comprehensive approach to assessing
              medical AI systems, featuring our dashboard interface, scoring
              mechanisms, and validation methodologies.
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
      <section className="py-16 lg:py-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet the <GradientText variant="blue">Team</GradientText>
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
