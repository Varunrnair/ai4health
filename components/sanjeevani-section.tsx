"use client";

import { ArrowRight, Smartphone, MessageSquare, BarChart2, Brain, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: Smartphone,
    text: "Offline-first Android app built for low-connectivity environments"
  },
  {
    icon: MessageSquare,
    text: "WhatsApp-based knowledge delivery for maternal and community health"
  },
  {
    icon: BarChart2,
    text: "Real-time dashboards that help teams track engagement and follow-ups"
  },
  {
    icon: Brain,
    text: "AI-powered insights into common questions, high-risk cases, and community trends"
  },
  {
    icon: Globe,
    text: "Lightweight speech + multilingual LLM pipelines designed for low-resource settings"
  },
  {
    icon: Users,
    text: "Seamless partner integration into field programs and NGO workflows"
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }
};

export default function SanjeevaniSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 lg:px-20">
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
            Sanjeevani
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-4">
            Digital tools for frontline community health
          </p>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Sanjeevani is an offline-first mobile and WhatsApp-based platform that supports 
            frontline workers, NGOs, and public-health teams in delivering maternal and 
            community-health guidance with speed, accuracy, and scale.
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
              What Sanjeevani enables:
            </h3>

            <motion.ul
              className="space-y-3 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#d55a40]/10 to-[#372c79]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-[#d55a40]" />
                  </div>
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Link href="/projects/sanjeevani-app">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d55a40] to-[#372c79] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-200 text-sm"
              >
                See Sanjeevani in action
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
                src="/sanjeevani/sang.png"
                alt="Sanjeevani Platform"
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
