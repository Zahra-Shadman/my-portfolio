"use client";
import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { src: "/image 6.svg", alt: "html logo", label: "HTML v5 " },
  { src: "/image 5.svg", alt: "css logo", label: "CSS v3 " },
  { src: "/icons8-js.svg", alt: "js logo", label: "JavaScript" },
  { src: "/image 7.svg", alt: "react logo", label: "React js v19 " },
  { src: "/next.svg", alt: "nextjs logo", label: "Next.js v15" },

];

const SKILLS: React.FC = () => {
  return (
    <div className="">
      <section className="py-12 text-3xl font-sans text-left max-w-[1265px] text-gray-50  w-full mx-auto rounded-2xl bg-[#04152D] relative">
        <TooltipProvider>
          <p className="text-center py-12">SKILLS</p>
          <div className="grid grid-cols-5 gap-20 px-30">
            {skills.map((skill, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div className="w-28 h-28 mr-12 flex justify-center items-center rounded-full bg-gray-500 cursor-pointer">
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={80}
                      height={80}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <p className="text-center p-12 font-light text-sm">Hover us 😊</p>
        </TooltipProvider>
      </section>
    </div>
  );
};

export default SKILLS;
