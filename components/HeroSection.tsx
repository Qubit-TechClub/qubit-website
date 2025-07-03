import React from "react";
import Card from "./Card";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[137vh] md:min-h-[195vh]">
      <div className="absolute inset-0 z-10">
        <img
          src="https://framerusercontent.com/images/AMNoMN6TjEY2VvvBUrqVUv83y0.png"
          alt="Background"
          className="h-[100%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08282D] via-[#1b371f] to-[#aaf318] opacity-90 h-[137vh] md:h-[195vh]" />
      </div>

      <div className="z-40 h-full w-full flex justify-center items-end md:items-center lg:pt-72">
        <img
          src="https://framerusercontent.com/images/PU3qayNkkTpSqPCq3jAcnOFmjU.svg"
          alt="Main Visual"
          className="h-[40%] md:h-[80vh] lg:h-[105vh] md:w-auto z-40"
        />
      </div>

      <div
        className="h-[100vh] absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundSize: "142px 142px",
          backgroundImage:
            "linear-gradient(to right, rgba(45, 115, 96, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 115, 96, 0.4) 1px, transparent 1px)",
        }}
      />

      <div className="absolute -bottom-1 w-full z-30">
        <img src="/grassGrp.png" alt="Grass" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
