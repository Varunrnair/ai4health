"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Handshake, Globe, MessageSquare } from "lucide-react";

const impactItemsRow1 = [
  {
    icon: TrendingUp,
    text: "RCT-backed improvement in maternal health literacy"
  },
  {
    icon: Users,
    text: "Thousands of women supported"
  },
  {
    icon: Handshake,
    text: "Partnerships across India & Bangladesh with on-ground NGOs"
  }
];

const impactItemsRow2 = [
  {
    icon: Globe,
    text: "Low-resource, multilingual models designed for rural access"
  },
  {
    icon: MessageSquare,
    text: "Evidence-driven development with real user feedback"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }
};

export default function ImpactSection() {
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
            Impact Across Verticals
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            Built with & for communities. Validated through evidence.
          </p>
        </motion.div>

        {/* First row - 3 items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {impactItemsRow1.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#d55a40]/10 to-[#372c79]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-[#d55a40]" />
              </div>
              <span className="text-gray-800 text-sm md:text-base font-medium">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - 2 items centered */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {impactItemsRow2.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 sm:max-w-md"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#d55a40]/10 to-[#372c79]/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-[#d55a40]" />
              </div>
              <span className="text-gray-800 text-sm md:text-base font-medium">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
