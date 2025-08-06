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
    imgsrc: "https://framerusercontent.com/images/3UoxEzinM0DOo41L6alyidNZ2HI.png?scale-down-to=1024", 
    alt: "Shoyeb Ansari", 
    name: "Shoyeb Ansari", 
    role: "President & Tech Enthusiast" 
  },
  { 
    imgsrc: "https://framerusercontent.com/images/JXwPfm1cWuBEaalb5Hf01Pxs1s.png?scale-down-to=1024", 
    alt: "Aman Raj Gupta", 
    name: "Aman Raj Gupta", 
    role: "Full Stack Developer" 
  },
  { 
    imgsrc: "https://framerusercontent.com/images/gSL1SD0ZiFzDf743zursNEjBbA0.png?scale-down-to=1024", 
    alt: "Saiyam Kumar", 
    name: "Saiyam Kumar", 
    role: "Frontend Developer" 
  },
  { 
    imgsrc: "https://framerusercontent.com/images/ctIccYk4RHqHazQhrbY02jIjTU4.png?scale-down-to=1024", 
    alt: "Rohit Makani", 
    name: "Rohit Makani", 
    role: "Data Analyst & ML" 
  },
  { 
    imgsrc: "https://framerusercontent.com/images/RucuVRxi74jc3NfBOk3uits2vGA.png?scale-down-to=1024", 
    alt: "Jivan Jamadar", 
    name: "Jivan Jamadar", 
    role: "Open Source Enthusiast" 
  },
  { 
    imgsrc: "https://framerusercontent.com/images/GPL9wq5xw8Zsms1fZnE5sACmA.png?scale-down-to=1024", 
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
