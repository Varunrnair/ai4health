"use client";

import { ArrowRight, Target, Database, Scale, Layers, TestTube } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const workItems = [
  {
    icon: Target,
    text: "Benchmarking medical-AI performance on maternal and community-health tasks"
  },
  {
    icon: Database,
    text: "Developing evaluation datasets grounded in field realities and health-worker needs"
  },
  {
    icon: Scale,
    text: "Assessing model bias, consistency, and clinical relevance in low-resource contexts"
  },
  {
    icon: Layers,
    text: "Building open evaluation frameworks for speech, multimodal, and LLM-based health models"
  },
  {
    icon: TestTube,
    text: "Testing models in real workflows with NGOs, health programs, and care providers"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }
};

export default function MedicalAISection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins leading-tight bg-gradient-to-r from-[#d55a40] to-[#372c79] bg-clip-text text-transparent mb-2">
            Medical AI Evaluations  & Benchmarking
          </h2>
         
          <p className="text-sm md:text-base text-gray-600 mb-2 italic">
            Strengthening safety, accuracy, and real-world reliability in medical AI
          </p>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            We conduct rigorous, context-aware evaluation of medical AI models to ensure 
            they work safely and effectively for diverse populations and real clinical environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
              Our work includes:
            </h3>

            <motion.ul
              className="space-y-3 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {workItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#d55a40]/10 to-[#372c79]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-[#d55a40]" />
                  </div>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Link href="/projects/medical-ai-evaluation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d55a40] to-[#372c79] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-200 text-sm"
              >
                Learn about our evaluations
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src="/medicaleval/medeval.png"
                alt="Medical AI Evaluations"
                className="w-full max-w-[480px] h-auto rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
