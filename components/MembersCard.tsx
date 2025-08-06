import React from "react";

interface CardProps {
  imgsrc: string;
  name?: string;
  role?: string;
}

const MembersCard: React.FC<CardProps> = ({ imgsrc, name , role }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative md:w-[370px] rounded-[32px] border border-white/20 p-2 bg-transparent z-10 transition-transform duration-500 ease-out hover:rotate-3 hover:scale-[1.03]">
        <img
          src={imgsrc}
          alt={name}
          className="w-full aspect-square rounded-[24px] object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-white font-semibold text-xl md:text-3xl">{name}</p>
        <p className="text-lime-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default MembersCard;
