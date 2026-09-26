
import React from "react";
import { motion } from "framer-motion";

import VisionSection from "./Section1";
import ProjectBrief from "./Section2";
import StrategySessionSection from "./Section3";

const MotionSection = motion.section;

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#141414",
      }}
    >
      {/* Vision Section */}
      <MotionSection
        variants={sectionVariants}
        style={{
          width: "100%",
        }}
      >
        <VisionSection />
      </MotionSection>

      {/* Project Brief */}
      <MotionSection
        variants={sectionVariants}
        style={{
          width: "100%",
        }}
      >
        <ProjectBrief />
      </MotionSection>

      {/* Strategy Session */}
      <MotionSection
        variants={sectionVariants}
        style={{
          width: "100%",
        }}
      >
        <StrategySessionSection />
      </MotionSection>
    </motion.main>
  );
}
