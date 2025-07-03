import React from "react";
import Card from "./Card";

interface CardData {
  imgsrc: string;
  alt: string;
}

const cards: CardData[] = [
  { imgsrc: "/miniCardRobo.svg", alt: "Mini Card Robo" },
  { imgsrc: "/yelloCardRobo.svg", alt: "Yellow Card Robo" },
  { imgsrc: "/greenCardRobo.svg", alt: "Green Card Robo" },
];

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-0 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-center">
        {cards.map((card, index) => (
          <Card key={index} imgsrc={card.imgsrc} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
