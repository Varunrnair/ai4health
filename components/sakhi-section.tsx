"use client";

import { ArrowRight, MessageCircle, Heart, BarChart3, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: MessageCircle,
    title: "Multi-language Support",
    description: "Verified, expert-reviewed health information in multiple languages via WhatsApp."
  },
  {
    icon: Heart,
    title: "Maternal Health",
    description: "Accurate, timely guidance for expectant mothers and families on reproductive health."
  },
  {
    icon: BarChart3,
    title: "NGO Dashboards",
    description: "Monitor needs, intervene early, and support community health with data-driven insights."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Strict privacy, accuracy, and safety standards designed for vulnerable communities."
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }
};

export default function SakhiSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Centered */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins leading-tight bg-gradient-to-r from-[#d55a40] to-[#372c79] bg-clip-text text-transparent">
            Sakhi
          </h2>
          <p className="mt-2 text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
            Verified Health Knowledge for Communities
          </p>
          <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Transparency alone is not enough. People need reliable, accessible knowledge they can trust. 
            Sakhi delivers expert-verified maternal and community-health information directly over WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Feature Cards - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="group p-5 rounded-xl border border-gray-200 bg-white transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#d55a40]/10 to-[#372c79]/10 flex items-center justify-center mb-3 group-hover:from-[#d55a40]/20 group-hover:to-[#372c79]/20 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-[#d55a40]" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Impact Highlight & CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-[#d55a40]/30 shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#d55a40]" />
                <span className="text-sm text-gray-700">
                  <span className="font-semibold text-[#d55a40]">&gt;60% gains</span> in antenatal care knowledge
                </span>
              </div>
              <Link href="/projects/sakhi">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d55a40] to-[#372c79] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-200 text-sm"
                >
                  Learn about Sakhi
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Sakhi Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src="/sakhi/sakhi_main.png"
                alt="Sakhi - Health Knowledge Platform"
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
