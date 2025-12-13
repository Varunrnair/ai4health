import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/particles-background";
import GradientText from "@/components/gradient-text";

const projects = [
  {
    id: "sakhi",
    title: "Sakhi",
    thumbnail: "/sakhi/sakhi_main.png?height=300&width=1000",
    description:
      "Multilingual GenAI intervention using expert-in-the-loop chatbot to improve maternal health literacy in rural India. Trails with 100 participants demonstrated significant increases in awareness of antenatal care practices.",
    link: "https://sakhi-health.com/",
  },
  {
    id: "medical-ai-evaluation",
    title: "Evaluating LLMs for Healthcare QA",
    thumbnail: "/medicaleval/medeval.png?height=300&width=400",
    description:
      "We are expanding state-of-the-art health benchmarks to Hindi and Marathi, collaborating with Cohere Labs to develop clinical expert-validated healthcare evaluation systems for reproductive health.",
    link: "https://health-eval.simppl.org/",
  },
  {
    id: "sanjeevani-app",
    title: "Sanjeevani App",
    thumbnail: "/sanjeevani/sang.png?height=300&width=400",
    description:
      "We worked with a leading infertility specialist to improve the efficiency of their remote outpatient departments by creating a patient onboarding platform  in sensitive healthcare settings.",
    link: "https://sanjivni-app.vercel.app/",
  },
];

export default function ProjectCards() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Research Platforms for<GradientText variant="green">  AI x Health </GradientText>{" "}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-pretty text-justify">
                Examine our evidence-based AI healthcare interventions that address critical gaps in maternal health literacy 
                and demonstrate statistically significant improvements in knowledge of antenatal care practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden h-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-balance">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 text-pretty text-justify flex-grow">
                  {project.description}
                </p>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm sm:text-base mt-auto">
                  Learn More
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
