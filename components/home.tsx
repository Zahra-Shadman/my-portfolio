"use client";
import { useRef } from "react";
import SKILLS from "./SkillsSection";
import HeroSection from "./HeroSection";
import ProjectSlider from "./projects";
import HireMe from "./hireMe";
import Navbar from "./navbar";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const hireMeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    section: "about" | "skills" | "projects" | "hireMe"
  ) => {
    const refs = {
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      hireMe: hireMeRef,
    };
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-0 inset-0 bg-[#ECEBDE] w-full min-h-screen opacity-100 relative overflow-x-hidden">
      <div>
        <Navbar scrollToSection={scrollToSection} />
      </div>
      <HeroSection ref={aboutRef} />
      <SKILLS ref={skillsRef} />
      <ProjectSlider ref={projectsRef} />
      <HireMe ref={hireMeRef} />
      
    </div>
  );
}
