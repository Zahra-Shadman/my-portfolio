'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const items = [
  {
    image: '/caffeeshop.png',
    title: 'cafe online shop',
    desc: 'A simple, user-friendly website for selling coffee and related products...',
    link: 'https://github.com/Zahra-Shadman/Coffee_Shop_nextUl',
    demo: '',
  },
  {
    image: '/weather.png',
    title: 'weather app',
    desc: 'A fully working weather dashboard app with a login/logout feature.',
    link: 'https://github.com/Zahra-Shadman/weather-app',
    demo: 'https://weather-app-six-hazel-62.vercel.app/',
  },
  {
    image: '/slide4.png',
    title: 'restaurant menu',
    desc: 'A responsive Next.js web app for a cafe/restaurant menu...',
    link: 'https://github.com/Zahra-Shadman/cafe-restaurant-Menu',
    demo: '',
  },
  {
    image: '/taskmanagr.png',
    title: 'task management',
    desc: 'A simple React web app for task management and Pomodoro timer...',
    link: 'https://github.com/Zahra-Shadman/Pomodoro-and-task-management',
    demo: 'https://pomodoro-and-task-management.vercel.app/',
  },
  {
    image: '/slide2.png',
    title: 'login form',
    desc: 'A lightweight and user-friendly sign-up and login form built with React...',
    link: 'https://github.com/Zahra-Shadman/react-sample-Form',
    demo: '',
  },
];
const ProjectSlider = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="relative max-w-7xl mx-auto px-4 py-10">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative group w-full h-80 overflow-hidden rounded-2xl shadow-md">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:blur-sm"
                />

                {/* Overlay with content */}
                <div className="absolute inset-0 bg-blend-saturation bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                  <h2 className=" text-lg font-semibold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-black mb-4">{item.desc}</p>
                  <div className="flex gap-4">
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-sm text-blue-300 underline hover:text-blue-400"
                      >
                        GitHub
                      </Link>
                    )}
                    {item.demo && (
                      <Link
                        href={item.demo}
                        target="_blank"
                        className="text-sm text-green-300 underline hover:text-green-400"
                      >
                        Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
});
ProjectSlider.displayName = 'projects';

export default ProjectSlider;
