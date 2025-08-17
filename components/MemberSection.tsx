'use client'

import React from "react";
import MembersCard from "./MembersCard";

interface CardData {
  imgsrc: string;
  alt: string;
  name: string;
  role: string;
}

const cards: CardData[] = [
  { 
    imgsrc: "/greenNinja.png", 
    alt: "Shoyeb Ansari", 
    name: "Shoyeb Ansari", 
    role: "President & Tech Enthusiast" 
  },
  { 
    imgsrc: "/yellowNinjaCard.png", 
    alt: "Aman Raj Gupta", 
    name: "Aman Raj Gupta", 
    role: "Full Stack Developer" 
  },
  { 
    imgsrc: "/yellowCardRobo.png", 
    alt: "Saiyam Kumar", 
    name: "Saiyam Kumar", 
    role: "Frontend Developer" 
  },
  { 
    imgsrc: "/yellowMiniCardRobo.png", 
    alt: "Rohit Makani", 
    name: "Rohit Makani", 
    role: "Data Analyst & ML" 
  },
  { 
    imgsrc: "/orangeCardRobo.png", 
    alt: "Jivan Jamadar", 
    name: "Jivan Jamadar", 
    role: "Open Source Enthusiast" 
  },
  { 
    imgsrc: "/futureRobo.png", 
    alt: "Extra Member", 
    name: "Maybe You", 
    role: "Compete & Be Here" 
  },
];

const MemberSection: React.FC = () => {
  return (
    <section className="px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 tracking-wide">
        MEET THE TEAM 🫡
      </h2>
      <p className="text-sm md:text-lg text-white text-center opacity-60 max-w-2xl mx-auto mb-5 md:mb-12">
        A stealth-crafted ecosystem built for sustainability, utility, and long-term holder value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-12 place-items-center">
        {cards.map((card, index) => (
          <MembersCard key={index} imgsrc={card.imgsrc} name={card.name} role={card.role} />
        ))}
      </div>
    </section>
  );
};

export default MemberSection;
