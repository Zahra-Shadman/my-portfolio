"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutMeTypewriter from "./motions/aboutMeMotions";
import AboutSection from "./AboutSection";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 md:px-14 mt-12">
      <div className="w-[1250px] flex flex-col md:flex-row justify-end md:mr-44 gap-8 md:gap-20">
        <AboutMeTypewriter />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-[400px] self-center"
        >
          <Image
            src={"/Untitled.png"}
            alt={"logo"}
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      <AboutSection />
    </div>
  );
};

export default HeroSection;
