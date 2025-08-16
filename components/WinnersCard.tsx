import Image from "next/image";
import React from "react";

interface CardProps {
  imgsrc: string;
}

const WinnersCard: React.FC<CardProps> = ({ imgsrc }) => {
  return (
    <div className="relative md:w-[370px] flex flex-col items-center rounded-[32px] border border-white/20 p-2 bg-transparent gap-3 z-10 transition-transform duration-500 ease-out hover:rotate-3 hover:scale-[1.03]">
      <div className="relative w-full">
        <Image
          src={imgsrc}
          alt="Robot"
          className="w-full h-auto rounded-[48px] object-cover"
        />

        <div className="absolute bottom-4 left-4 right-4 bg-[#0B1D1C]/80 backdrop-blur-md border border-[#c9ec0680] rounded-[24px] p-4 flex items-center justify-between">
          <div className="flex flex-col text-white">
            <p className="text-sm font-medium">{"NAME"}</p>
            <p className="text-lg font-semibold">{"POSITION 🔥"}</p>
          </div>

          <div className="relative w-[40px] h-[40px] rounded-full bg-lime-400 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#030e14"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 z-10"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersCard;
