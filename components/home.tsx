"use client";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-[#04152D] w-full min-h-screen opacity-100 relative">
      <Navbar />
      <div className="bg-[#19376DB2]  blur-[200px]  w-[60vw] h-[60vw] max-w-[760px]
       max-h-[674px] rounded-full opacity-90 absolute top-[-20%] left-[-30%] md:top-[-128px] md:left-[-216px]"></div>
      <div className="bg-[#19376DB2] blur-[200px] animate-pulse w-[50vw] h-[50vw] max-w-[600px] max-h-[450px]
       rounded-full opacity-90 absolute top-[20%] left-[70%] md:top-[100px] md:left-[800px]"></div>
      <HeroSection />
    </div>
  );
}
