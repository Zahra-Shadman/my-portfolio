'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutMeTypewriter from './motions/aboutMeMotions';
import AboutSection from './AboutSection';

const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="relative w-full px-4 sm:px-6 md:px-14 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-end gap-8 md:gap-20">
        <AboutMeTypewriter />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg self-center"
        >
          <Image
            src="/Untitled.png"
            alt="logo"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
      <AboutSection />
    </div>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;