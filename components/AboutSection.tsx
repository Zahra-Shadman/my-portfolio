"use client";

import React from "react";
import Image from "next/image";
import ScrollAnimation from "./motions/scrollMotion";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-2 md:px-12 lg:px-18 text-xl sm:text-2xl md:text-3xl font-medium text-left text-[#F5F5F5]  w-full max-w-[1211px] mx-auto rounded-2xl bg-[#123458] h-auto py-4 md:py-2">
      <div>
        <ScrollAnimation />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col md:flex-row justify-between items-center mx-auto gap-10 md:gap-0 py-8 md:py-24"
      >
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <Image
            src={"/pic2.png"}
            alt={"pic2"}
            width={300}
            height={200}
            className="w-48 h-auto md:w-[400px]"
            priority
          />
        </div>
        <ul className="flex flex-col gap-8 md:gap-14 w-full md:w-auto">
          <li className="flex items-center gap-3 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent rounded-2xl p-4 bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.5s] cursor-pointer">
            <Image src={"/image 4.svg"} alt={"svg"} width={40} height={40} />
            <div>
              <h1 className="text-lg md:text-xl">Frontend Developer</h1>
              <p className="text-base md:text-lg break-after-auto">
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          <li className="flex items-center gap-3 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent rounded-2xl p-4 bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.5s] cursor-pointer">
            <Image src={"/image 2.svg"} alt={"svg"} width={40} height={40} />
            <div>
              <h1 className="text-lg md:text-xl">React Development Expertise</h1>
              <p className="text-base md:text-lg break-after-auto">
                Expert in React development, crafting dynamic, responsive user
                interfaces with optimized performance and modular code
                architecture.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-transparent rounded-2xl p-4 bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-[0.5s] cursor-pointer">
            <Image src={"/image 3.svg"} alt={"svg"} width={40} height={40} />
            <div>
              <h1 className="text-lg md:text-xl">Next JS Development Expertise</h1>
              <p className="text-base md:text-lg break-after-auto">
                Skilled Next.js developer adept at building scalable,
                SEO-optimized web applications with React and efficient API
                integration.
              </p>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutSection;
