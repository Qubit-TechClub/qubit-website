import Image from "next/image";
import React from "react";

const CardCollectible: React.FC = () => (
  <div className="bg-[#04141c] rounded-[24px] px-6 pt-6 flex flex-col gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-center md:text-start text-white font-black text-[24px] md:text-[28px] leading-tight tracking-tight">
        SPECIAL ATTENTION <br /> AND GUIDANCE FROM CLUB
      </h3>
      <p className=" text-center md:text-start text-xs md:text-lg text-white/60 mt-2 leading-relaxed">
        Get one-on-one support and personalized guidance 
        <br className="hidden md:block" />
        to help you learn, grow, and achieve your goals faster.
      </p>
    </div>
    <div className="overflow-hidden rounded-[20px]">
      <Image
        src="https://framerusercontent.com/images/X39pZLCdkVaalzkGwyfd2dy76M.png"
        alt="Special Attention and Guidance"
        className="w-full h-[350px] object-cover object-top"
      />
    </div>
  </div>
);

const CardStaking: React.FC = () => (
  <div className="bg-[#04141c] rounded-[24px] p-6 flex flex-col gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-center md:text-start text-white font-black text-[24px] md:text-[28px] leading-tight tracking-tight">
        SPECIAL MENTORSHIP <br /> AND DEDICATED CLASSES
      </h3>
      <p className="text-center md:text-start text-xs md:text-lg text-white/60  mt-2 leading-relaxed">
        Gain access to exclusive classes and mentoring 
        <br className="hidden md:block" />
        sessions designed to accelerate your learning experience.
      </p>
    </div>
    <div className="overflow-hidden rounded-[20px]">
      <Image
        src="https://framerusercontent.com/images/EEfzIxKu8ijHqN0QXlbXIfUowI.png"
        alt="Special Mentorship and Classes"
        className="w-full h-[350px] md:h-[600px] object-cover"
      />
    </div>
  </div>
);

const CardCommunity: React.FC = () => (
  <div className="bg-[#04141c] rounded-[24px] px-6 pt-6 flex flex-col gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-center md:text-start text-white font-black text-[24px] md:text-[28px] leading-tight tracking-tight">
        SPECIAL  GUEST LECTURES<br className="hidden md:block" /> & INDUSTRY EXPERTS CHAT
      </h3>
      <p className="text-white/60 text-center md:text-start text-xs md:text-lg mt-2 leading-relaxed">
        Learn directly from industry experts with 
        <br className="hidden md:block" />
        tailored guest lectures that match your interests.
      </p>
    </div>
    <div className="overflow-hidden rounded-[20px]">
      <Image
        src="https://framerusercontent.com/images/LJOCU2sfuw7vCFwhM0QKhiuOjYc.png"
        alt="Personalised Guest Lectures"
        className="w-full h-[350px] object-cover object-top"
      />
    </div>
  </div>
);

const CardCTA: React.FC = () => (
  <div className="bg-[#072733] rounded-[24px] px-6 pt-6 pb-8 flex flex-col justify-between gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-center md:text-start text-white font-black text-[24px] md:text-[28px] leading-tight tracking-tight">
        READY TO JOIN <br /> THE CLAN?
      </h3>
      <p className="text-white/60 text-center md:text-start text-xs md:text-lg mt-2 leading-relaxed">
        Start your journey with Qubitand unlock access to 
        exclusive perks, guidance, and a powerful tech community.
      </p>
    </div>
    <a
      href="/about"
      className="inline-flex w-full md:w-fit justify-center items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-lime-200 transition"
    >
     Be a Ninja
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </div>
);

const BenenfitSection: React.FC = () => {
  return (
    <section className="relative w-full z-50 px-6 md:px-0 max-w-6xl mx-auto py-6 md:py-16">
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-white">
          UNLOCK JOINING PERKS 🚀
        </h2>
        <p className="text-sm md:text-lg text-white text-center opacity-70 max-w-lg mb-12">
          A community-driven ecosystem built for learning, mentorship, 
          and long-term growth in technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-7">
          <div className="flex flex-col gap-8">
            <CardCollectible />
            <CardCommunity />
          </div>
          <div className="flex flex-col gap-8">
            <CardStaking />
            <CardCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenenfitSection;
