"use client"
import React, { useState } from "react";
import EventCard from "./EventCard";

const EventLists: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const tabs = ["Past", "Upcoming", "Live"];

  return (
    <div className="w-full flex flex-col items-center text-center bg-transparent px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <h2 className="text-3xl md:text-6xl font-bold mb-6 text-lime-400">
        Event Lists
      </h2>

      <div className="w-full flex justify-center items-center gap-4 mb-10 border border-lime-400/50 rounded-2xl py-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "bg-lime-400 text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-12 w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventLists;
