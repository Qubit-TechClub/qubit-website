'use client'

import React from "react";

interface CounterCardProps {
  value: number;
  suffix?: string;
  label: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ value, suffix, label }) => (
  <div className="relative w-[150px] md:w-[250px] h-[150px] md:h-[250px] flex flex-col items-center justify-center text-white">
    <img
      src="/bgShape.svg"
      alt="Background Shape"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 flex flex-col items-center">
      <div
        style={{
          fontFamily: `"Dela Gothic One", sans-serif`,
          fontWeight: 400,
          fontSize: "36px",
          lineHeight: "120%",
          letterSpacing: "-1.5px",
        }}
      >
        {value}
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
      <p className="text-xs md:text-xl text-white text-center mt-1">{label}</p>
    </div>
  </div>
);

const SummarySection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <div className="text-center flex flex-col items-center max-w-3xl mb-20">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center mt-2">
          COMPETE, LEARN AND WIN
        </h2>
        <p className="text-sm md:text-lg text- opcaity-70 text-center mt-4 max-w-3xl">
          Our Tech Club is where coding meets competition! 
          Earn points, unlock rewards, and collaborate with like-minded innovators 
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-28 relative justify-items-center z-40">
        <CounterCard value={100} suffix="+" label="Active Members" />
        <CounterCard value={3} suffix="+" label="Tech Events Hosted" />
        <CounterCard value={5} suffix="+" label="Projects Completed" />
        <CounterCard value={1000} suffix="+" label="XP Points Earned" />

        <div className="w-full flex justify-center items-center absolute h-full z-40">
          <img src="/blueRobo.svg" alt="Blue Robot" className="h-[130%]" />
        </div>
      </div>

      <div className="hidden lg:block lg:absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin [animation-duration:20s]">
        <img
          src="/bgZodiac.png"
          alt="Decor"
          className="w-[650px] h-[650px]"
        />
      </div>
    </section>
  );
};

export default SummarySection;
