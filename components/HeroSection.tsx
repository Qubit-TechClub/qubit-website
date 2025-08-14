import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative  md:h-auto z-20 flex flex-col">
      <div className="absolute inset-0 z-10">
        <img
          src="https://framerusercontent.com/images/AMNoMN6TjEY2VvvBUrqVUv83y0.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08282D] via-[#1b371f] to-[#aaf318] opacity-90" />
      </div>

      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundSize: "142px 142px",
          backgroundImage:
            "linear-gradient(to right, rgba(45, 115, 96, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 115, 96, 0.4) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-40 flex flex-col items-center justify-start gap-10 px-4 sm:px-6">
        <div className="text-center  mt-10">
          <h1 className="text-white font-extrabold leading-tight">
            <span className="inline-block text-[42px] sm:text-5xl md:text-7xl lg:text-9xl">
              LEVEL UP YOUR
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              TECH GAME 🔥
            </span>
          </h1>
          <p className="mt-6 text-xs sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Join our futuristic tech club where coding meets creativity. Compete,
            collaborate, and conquer challenges as you unlock new skills and
            achievements.
          </p>
          <button className="mt-8 px-6 py-3 bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg shadow-lg transition duration-300">
            Start Your Journey
          </button>
        </div>

        <div className="flex justify-center items-start md:mt-0">
          <img
            src="https://framerusercontent.com/images/PU3qayNkkTpSqPCq3jAcnOFmjU.svg"
            alt="Main Visual"
            className="w-[95%] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[650px]"
          />
        </div>
      </div>

      <div className="absolute -bottom-5 md:-bottom-10 left-0 w-full z-30">
        <img src="/grassGrp.png" alt="Grass" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
