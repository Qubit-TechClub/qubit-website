"use client";

import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="relative px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#0d3b1e] rounded-2xl overflow-hidden p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-lg">
        <div className="flex-1 text-white z-10 text-center md:text-left">
          <p className="text-lime-400 font-semibold uppercase tracking-wide mb-2">
            Get Started
          </p>
          <h2 className="text-2xl md:text-5xl font-extrabold text-center md:text-start leading-tight mb-4">
            WELCOME AND BECOME <br className="hidden md:block" /> NINJA TODAY!
          </h2>
          <p className="hidden md:block text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0 mb-6">
            Join the Qubit clan in IOI to connect with fellow collectors, get
            early amazing rewards.
          </p>
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-md shadow-lg transition-colors w-full md:w-fit">
            Join The Clan
          </button>
        </div>

        <div className="hidden flex-1 mt-12 md:mt-0 md:flex justify-center absolute md:right-16">
          <img 
            src="/authImage.png"
            alt="ninja"
            className="h-64 md:h-96 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
