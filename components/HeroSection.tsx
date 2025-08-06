import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[115vh] md:min-h-[175vh] 2xl:min-h-[70vh] z-20">
      <div className="absolute inset-0 z-10">
        <img
          src="https://framerusercontent.com/images/AMNoMN6TjEY2VvvBUrqVUv83y0.png"
          alt="Background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08282D] via-[#1b371f] to-[#aaf318] opacity-90" />
      </div>

      <div
        className="h-full absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundSize: "142px 142px",
          backgroundImage:
            "linear-gradient(to right, rgba(45, 115, 96, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 115, 96, 0.4) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-40 flex flex-col items-center text-center px-6 md:px-0 pt-28 md:pt-32">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="text-[40px] md:text-6xl lg:text-9xl">
            LEVEL UP YOUR
          </span>
          <br />
          TECH GAME
        </h1>
        <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-3xl">
          Join our futuristic tech club where coding meets creativity. Compete,
          collaborate, and conquer challenges as you unlock new skills and
          achievements
        </p>
        <button className="mt-8 px-6 py-3 bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg shadow-lg transition duration-300">
          Start Your Journey
        </button>
      </div>

      <div className="relative z-40 flex justify-center items-end md:items-center mt-12">
        <img
          src="https://framerusercontent.com/images/PU3qayNkkTpSqPCq3jAcnOFmjU.svg"
          alt="Main Visual"
          className="h-[40%] md:h-[80vh] lg:h-[90vh] md:w-auto"
        />
      </div>

      <div className="absolute -bottom-1 w-full z-30">
        <img src="/grassGrp.png" alt="Grass" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
