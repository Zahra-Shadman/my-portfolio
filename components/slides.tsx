import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const images = [
  {
    src: "/slide3.png",
    alt: "Project 1",
    desc: " this is a simple, user-friendly website for selling coffee and related products. Built with Next.js for fast performance and NextUI for a clean, responsive design. It offers easy browsing, a straightforward cart, and a blog for coffee tips. Ideal for coffee lovers seeking a hassle-free shopping experience",
    link: "https://github.com/Zahra-Shadman/Coffee_Shop_nextUl",
    demo: "",
  },
  {
    src: "/slide4.png",
    alt: "Project 2",
    desc: "A responsive Next.js web app for a cafe/restaurant menu, featuring a sleek, user-friendly interface to display menu items and prices. Includes an admin panel for easy management. Optimized for desktop and mobile.",
    link: "https://github.com/Zahra-Shadman/cafe-restaurant-Menu",
    demo: "",
  },
  {
    src: "/slide5.png",
    alt: "Project 3",
    desc: "A simple React web app for task management and Pomodoro timer. It features a clean, responsive interface to track tasks and boost productivity. Includes an admin panel for easy management. Optimized for desktop and mobile.  ",
    link: "https://github.com/Zahra-Shadman/Pomodoro-and-task-management",
    demo: "https://pomodoro-and-task-management.vercel.app/",
  },
  {
    src: "/slide2.png",
    alt: "Project 4",
    desc: "A lightweight and user-friendly sign up and login form built with React and React Hook Form and Next UI. This project demonstrates how to create a simple form with fields for name and email, complete with client-side validation and error handling",
    link: "https://github.com/Zahra-Shadman/react-sample-Form",
    demo: "",
  },
];

const ProjectSlider: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-3xl"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div>
                <Card className="bg-gray-900 border-none">
                  <CardContent className="flex flex-col aspect-square items-center justify-center">
                    <div className="relative w-60 h-60 group">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded transition-all duration-300 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded">
                        <p className="text-white font-thin text-sm text-center mb-4 px-2">
                          {img.desc}
                        </p>
                        <div className="flex gap-2">
                          <a href={img.link}>
                            <Button variant="secondary" size="sm">
                              source code
                            </Button>
                          </a>
                          <a href={img.demo}>
                            <Button variant="outline" size="sm">
                              demo
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectSlider;
