"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2023", title: "Maternal health pilots" },
  { year: "2024", title: "Sakhi launch" },
  { year: "2024", title: "60% knowledge gains (RCT)" },
  { year: "2025", title: "Bangladesh expansion" },
  { year: "2025", title: "Sanjeevani deployed" }
];

export default function TimelineSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-24 px-6 lg:px-20 overflow-x-auto">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins bg-gradient-to-r from-[#d55a40] to-[#372c79] bg-clip-text text-transparent">
            Our Journey
          </h2>
        </motion.div>

        {/* Node Timeline with Arrows */}
        <motion.div
          className="flex items-start justify-center gap-2 md:gap-4 min-w-max mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start">
              {/* Node + Title */}
              <div className="flex flex-col items-center">
                {/* Year Node */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#d55a40] to-[#372c79] flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs md:text-sm font-bold">
                    {milestone.year}
                  </span>
                </div>
                {/* Title below node */}
                <p className="mt-3 text-gray-700 text-xs md:text-sm text-center max-w-[100px] md:max-w-[120px] leading-tight">
                  {milestone.title}
                </p>
              </div>

              {/* Arrow connecting nodes */}
              {index < milestones.length - 1 && (
                <div className="flex items-center h-14 md:h-16 mx-1 md:mx-2">
                  <span className="text-[#d55a40] text-lg md:text-xl font-medium">→</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
