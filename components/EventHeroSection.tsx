import Image from "next/image";
import React from "react";

const EventHeroSection: React.FC = () => {
  return (
    <div className="relative h-screen 2xl:h-auto ">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08282D] via-[#1b371f] to-[#aaf318] opacity-90" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "142px 142px",
            backgroundImage:
              "linear-gradient(to right, rgba(45, 115, 96, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 115, 96, 0.4) 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center md:justify-end text-center h-full px-6 md:px-0">
        <h1 className="text-white font-extrabold leading-tight">
          <span className="text-[40px] sm:text-5xl md:text-6xl lg:text-9xl">
            CLUB EVENTS
          </span>
        </h1>
        <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-3xl italic">
          &quot;Great things are never done by one person; they&rsquo;re done by
          a team of people&quot;
        </p>

        <div className="flex justify-center items-center md:mt-10 gap-1 relative">
          <Image
            src="https://framerusercontent.com/images/bx5In8ji0dlI6j8dUFfjVlV513Y.png"
            alt="Character 1"
            className="max-h-[250px] sm:max-h-[400px] object-contain -mr-32 -mt-40 md:-mr-22 md:mt-0"
          />
          <Image
            src="https://framerusercontent.com/images/UKaiAYNZSDroF00ld4ilapV1YM.png?scale-down-to=2048"
            alt="Character 2"
            className="max-h-[320px] sm:max-h-[450px] object-contain mt-64 z-50 md:mt-0"
          />
          <Image
            src="https://framerusercontent.com/images/tKw5Dm7Ruux0rvPf9KCjmMrcH74.png?scale-down-to=1024"
            alt="Character 3"
            className="max-h-[250px] sm:max-h-[400px] object-contain -ml-32 -mt-40 md:-ml-22 md:mt-0"
          />
        </div>
      </div>

      <div className="absolute bottom-0 md:-bottom-6 left-0 w-full z-10">
        <Image
          src="/grassGrp.png"
          alt="Grass"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default EventHeroSection;
