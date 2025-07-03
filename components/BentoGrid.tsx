import React from "react";

const CardCollectible: React.FC = () => (
  <div className="bg-[#04141c] rounded-[24px] px-6 pt-6 flex flex-col gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-white font-black text-[28px] leading-tight tracking-tight">
        COLLECTIBLE AND <br /> UNIQUE NINJAS
      </h3>
      <p className="text-white/60 text-base mt-2 leading-relaxed">
        Every ninja is one of a kind — crafted with{" "}
        <br className="hidden md:block" />
        hundreds of traits, clans, weapons, and skills.
      </p>
    </div>
    <div className="overflow-hidden rounded-[20px]">
      <img
        src="https://framerusercontent.com/images/X39pZLCdkVaalzkGwyfd2dy76M.png"
        alt="Collectible and Unique Ninjas"
        className="w-full h-[350px] object-cover object-top"
      />
    </div>
  </div>
);

const CardStaking: React.FC = () => (
  <div className="bg-[#04141c] rounded-[24px] p-6 flex flex-col gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-white font-black text-[28px] leading-tight tracking-tight">
        STAKING AND <br /> $SHADOW REWARDS
      </h3>
      <p className="text-white/60 text-base mt-2 leading-relaxed">
        Every ninja is one of a kind — crafted with{" "}
        <br className="hidden md:block" />
        hundreds of traits, clans, weapons, and skills.
      </p>
    </div>
    <div className="overflow-hidden rounded-[20px]">
      <img
        src="https://framerusercontent.com/images/EEfzIxKu8ijHqN0QXlbXIfUowI.png"
        alt="Staking and $shadow Rewards"
        className="w-full h-[350px] md:h-[600px] object-cover"
      />
    </div>
  </div>
);

const CardCommunity: React.FC = () => (
  <div className="bg-[#04141c] rounded-[24px] px-6 pt-6 flex flex-col gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-white font-black text-[28px] leading-tight tracking-tight">
        COMMUNITY <br /> POWERED DAO
      </h3>
      <p className="text-white/60 text-base mt-2 leading-relaxed">
        The rarer your ninja, the more rewards and{" "}
        <br className="hidden md:block" />
        special access you unlock.
      </p>
    </div>
    <div className="overflow-hidden rounded-[20px]">
      <img
        src="https://framerusercontent.com/images/LJOCU2sfuw7vCFwhM0QKhiuOjYc.png"
        alt="Community Powered DAO"
        className="w-full h-[350px] object-cover object-top"
      />
    </div>
  </div>
);

const CardCTA: React.FC = () => (
  <div className="bg-[#072733] rounded-[24px] px-6 pt-6 pb-8 flex flex-col justify-between gap-6 max-w-[555px] w-full h-full">
    <div>
      <h3 className="text-white font-black text-[24px] leading-tight tracking-tight">
        READY TO JOIN <br /> THE CLAN?
      </h3>
      <p className="text-white/60 text-base mt-2 leading-relaxed">
        Start your journey with nftninja and unlock access to rareninjas and a
        powerful Web3 community.
      </p>
    </div>
    <a
      href="/about"
      className="inline-flex w-fit items-center gap-2 bg-lime-300 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-lime-200 transition"
    >
      Mint Your Ninja
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

// Main Section
const BentoGridSection: React.FC = () => {
  return (
    <section className="relative z-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="py-16 flex flex-col items-center justify-center">
        <p className="text-lime-300 uppercase tracking-widest text-sm mb-2">
          features
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Unlock the Perks
        </h2>
        <p className="text-white text-center opacity-70 max-w-xl mb-12">
          A stealth-crafted ecosystem built for sustainability, utility, and
          long-term holder value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 max-w-7xl mx-auto items-stretch">
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

export default BentoGridSection;
