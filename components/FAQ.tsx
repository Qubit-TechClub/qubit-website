"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Qubit?",
    answer:
      "Qubit is a tech club at PW IOI where innovation meets play. We focus on building real-world tech solutions, hosting coding challenges, hackathons, and interactive events that make learning technology fun and engaging.",
  },
  {
    question: "How can I join Qubit?",
    answer:
      "You can join Qubit by registering during our recruitment drive or applying through our official website. We welcome students from all technical and non-technical backgrounds who are passionate about tech and innovation.",
  },
  {
    question: "Does Qubit organize coding competitions or hackathons?",
    answer:
      "Absolutely! We regularly host coding competitions, hackathons, and gamified problem-solving sessions where members can showcase their skills, win rewards, and work on exciting projects.",
  },
  {
    question: "What skills can I learn as part of Qubit?",
    answer:
      "Qubit offers hands-on experience in coding, web and app development, cybersecurity, AI/ML, open-source contributions, and teamwork skills through interactive workshops and live projects.",
  },
  {
    question: "What benefits do members get in Qubit?",
    answer:
      "Members gain mentorship from experienced peers and industry professionals, opportunities to work on real-world tech projects, networking with like-minded innovators, and chances to win rewards and recognition in our gamified challenges.",
  },
];


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-sm md:text-lg text-white text-center opacity-60 mb-6 md:mb-10">
        Here are some of the most common queries to help you get started.
      </p>

      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl bg-black/40 text-white overflow-hidden py-4"
          >
            <button
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bold text-lg md:text-xl">
                {index + 1}. {item.question}
              </span>
              <span className="text-black bg-lime-400 rounded-full p-1">
                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </span>
            </button>
            <div
              className={`px-5 text-gray-300 transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
