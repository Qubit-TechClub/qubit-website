'use client'

import React from "react";
import WinnersCard from "./WinnersCard";

interface CardData {
  imgsrc: string;
  alt: string;
}

const cards: CardData[] = [
  { imgsrc: "/miniCardRobo.svg", alt: "Mini Card Robo" },
  { imgsrc: "/yelloCardRobo.svg", alt: "Yellow Card Robo" },
  { imgsrc: "/greenCardRobo.svg", alt: "Green Card Robo" },
];

const WinnerSection: React.FC = () => {
  return (
    <section className="px-6 md:px-0 max-w-6xl mx-auto pt-16 pb-10 md:pb-16 md:pt-28">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 tracking-wide">
        LAST EVENT TOP WARRIORS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-center">
        {cards.map((card, index) => (
          <WinnersCard key={index} imgsrc={card.imgsrc} />
        ))}
      </div>
    </section>
  );
};

export default WinnerSection;
