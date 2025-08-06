import React from "react";

interface CTAProps {
  topText: string;
  bottomText: string;
}

const CTA: React.FC<CTAProps> = ({ topText, bottomText }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center bg-transparent md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <h2 className="text-md md:text-5xl font-extrabold text-center uppercase text-gray-400">
        {topText}
      </h2>
      <h3 className="text-xl md:text-5xl font-extrabold uppercase text-white mt-2">
        {bottomText}
      </h3>
    </div>
  );
};

export default CTA;
