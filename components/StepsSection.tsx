'use client';

import React from 'react';

const steps = [
  {
    step: '01',
    title: 'HAVE ENERGY',
    description: 'Keep an eye on the latest events happening',
  },
  {
    step: '02',
    title: 'PARTICIPATE',
    description: 'Build in public, compete , learn and then excel',
  },
  {
    step: '03',
    title: 'GET REWARDED',
    description: 'Start earning rewards,gain xp, be in top positions & get rewardedd',
  },
];

const StepsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 md:gap-16 px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16 relative z-10">

      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-6">
          <span>BE A NINJA</span> <span>IN 3 SIMPLE STEPS</span>
        </h2>
        <p className="text-sm md:text-lg text-white text-center opacity-60 mt-4 max-w-xl mx-auto">
          Follow the process learn, build,compete ,get attention and be the next new ninja
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
        {steps.map((item) => (
          <div
            key={item.step}
            className="bg-[#04141C] rounded-2xl p-6 md:p-8 lg:p-12 flex flex-col gap-4 h-[200px] md:h-[250px]"
          >
            <h3 className="text-lime-400 text-3xl lg:text-5xl font-bold">{item.step}</h3>
            <div>
              <h6 className="text-white text-3xl lg:text-3xl font-semibold">{item.title}</h6>
              <p className="text-white text-opacity-60 mt-2 text-sm md:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default StepsSection;
