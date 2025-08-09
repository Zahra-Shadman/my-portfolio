'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const skills = [
  { src: '/image 6.svg', alt: 'html logo', label: 'HTML v5' },
  { src: '/image 5.svg', alt: 'css logo', label: 'CSS v3' },
  { src: '/icons8-js.svg', alt: 'js logo', label: 'JavaScript' },
  { src: '/image 7.svg', alt: 'react logo', label: 'React.js v19' },
  { src: '/next.svg', alt: 'nextjs logo', label: 'Next.js v15' },
];

const SKILLS = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <section className="mt-10 sm:py-10 md:py-6 text-2xl sm:text-3xl font-sans text-left max-w-[1215px] text-gray-50 w-full mx-auto rounded-2xl bg-[#123458] relative">
        <TooltipProvider>
          <p className="text-center py-8 sm:py-10 md:py-12">SKILLS</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-8 md:px-16 lg:px-20">
            {skills.map((skill, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex justify-center items-center p-2 rounded-2xl bg-gray-500 cursor-pointer mx-auto">
                    <Image
                      src={skill.src}
                      alt={skill.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <p className="text-center p-6 sm:p-8 md:p-12 font-light text-xs sm:text-sm">
            Hover us 😊
          </p>
        </TooltipProvider>
      </section>
    </div>
  );
});

SKILLS.displayName = 'SKILLS';

export default SKILLS;