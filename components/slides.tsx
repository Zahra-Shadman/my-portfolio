import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

import Image from "next/image";

const Slider: React.FC = () => {
  return (
    <div className="w-[900px] h-screen flex justify-center">
    <Carousel  opts={{
        align: "start",
      }}    className="w-full max-w-sm">
      <CarouselContent>
        <CarouselItem><Image src={"/slide1.png"} alt={"slide"} width={800} height={400} /></CarouselItem>
        <CarouselItem><Image src={"/slide 2.png"} alt={"slide"} width={800} height={400} /></CarouselItem>
        <CarouselItem><Image src={"/slide3.png"} alt={"slide"} width={800} height={400} /></CarouselItem>
                <CarouselItem><Image src={"/slide4.png"} alt={"slide"} width={800} height={400} /></CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export default Slider;
