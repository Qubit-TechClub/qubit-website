import React from "react";

const EventCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
        <div className="w-full md:w-1/3 ">
          <div className="rounded-xl overflow-hidden shadow-lg flex justify-start items-center">
            <img
              src="https://framerusercontent.com/images/Yjm7Rb0Vjyfy5Mu4r8Yatx1Yyr4.png?scale-down-to=2048" 
              className="w-[80%] h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 text-left text-white space-y-4">
  
        <h2 className="text-2xl md:text-4xl font-bold">
          Where Art Meets Code, A Ninja Was Born
        </h2>
        
        <p className="text-gray-400 text-xs md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tenetur iste veritatis nesciunt eaque tempore laudantium fuga, nemo, beatae suscipit dicta animi. Repudiandae eius, temporibus neque doloremque iusto, ipsum aut nobis, animi impedit aperiam vero?
        </p>

        <div className="space-y-2 mt-4">
          <p className="text-gray-300">
            <span className="font-semibold text-white">📍 Venue:</span> Tech Arena, San Francisco
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">🗓️ Date:</span> August 28, 2025
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">👨‍💻 Team Size:</span> 3-5 members
          </p>
        </div>

        {/* Participate Now Button */}
        <button className="mt-4 bg-[#A7FF00] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#94e000] transition-colors">
          Participate Now
        </button>
      </div>
      </div>
  );
};

export default EventCard;
