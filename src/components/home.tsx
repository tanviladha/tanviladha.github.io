import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsGrid from "./ProjectsGrid";
import FeaturesSection from "./FeaturesSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center py-16">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        <ExperienceTimeline />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center py-16">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        <ProjectsGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default Home;
