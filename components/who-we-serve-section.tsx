"use client";

import { motion } from "framer-motion";
import { Heart, Stethoscope, Building2, Landmark, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Mothers & families",
    description: "Direct support for maternal health decisions"
  },
  {
    icon: Stethoscope,
    title: "Community health workers",
    description: "Tools that enhance frontline care delivery"
  },
  {
    icon: Building2,
    title: "NGOs & civil society",
    description: "Scalable solutions for community programs"
  },
  {
    icon: Landmark,
    title: "Public health institutions",
    description: "Data-driven insights for policy and planning"
  },
  {
    icon: Lightbulb,
    title: "Researchers & global health innovators",
    description: "Open frameworks for health AI advancement"
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }
};

export default function WhoWeServeSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins bg-gradient-to-r from-[#d55a40] to-[#372c79] bg-clip-text text-transparent mb-4">
            Who We Serve
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our solutions are designed for the entire maternal health ecosystem
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#d55a40]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d55a40]/10 to-[#372c79]/10 flex items-center justify-center mb-4 group-hover:from-[#d55a40]/20 group-hover:to-[#372c79]/20 transition-all duration-300">
                <audience.icon className="w-8 h-8 text-[#d55a40]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-base mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
