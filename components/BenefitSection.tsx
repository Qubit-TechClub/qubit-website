import React from "react";

interface CounterCardProps {
  value: number;
  suffix?: string;
  label: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ value, suffix, label }) => (
  <div className="relative w-[200px] md:w-[250px] h-[200px] md:h-[250px] flex flex-col items-center justify-center text-white">
    <img
      src="https://framerusercontent.com/images/rb9407KvCZGxSE7FSnZlOW1gUs.svg"
      alt="Background Shape"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 flex flex-col items-center">
      <div
        style={{
          fontFamily: `"Dela Gothic One", sans-serif`,
          fontWeight: 400,
          fontSize: "56px",
          lineHeight: "120%",
          letterSpacing: "-1.5px",
        }}
      >
        {value}
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
      <p className="text-white text-center mt-1">{label}</p>
    </div>
  </div>
);

const BenefitSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-28">
      <div className="text-center flex flex-col items-center max-w-3xl mb-20">
        <p className="text-[rgb(211,237,5)] uppercase tracking-wide">
          nft economy
        </p>
        <h2 className="text-white text-4xl font-bold mt-2">
          The Shadow Economy
        </h2>
        <p className="text-white mt-4 text-lg max-w-xl">
          A stealth-crafted ecosystem built for sustainability, utility, and
          long-term holder value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 relative justify-items-center z-40">
        <CounterCard value={0} suffix="%" label="Public Mint" />
        <CounterCard value={0} suffix="%" label="Whitelist Sale" />
        <CounterCard value={0} suffix=" ETH" label="Mint Price" />
        <CounterCard value={0} suffix=" NFTs" label="Max Per Wallet" />

        <div className="w-full flex justify-center items-center md:absolute h-full z-40">
          <img src="/blueRobo.svg" alt="Blue Robot" className="md:h-[140%]" />
        </div>
      </div>

      <div className="hidden lg:block lg:absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin [animation-duration:20s]">
        <img
          src="https://framerusercontent.com/images/rb4X1a8zhi8WTVRpzCRKoBZ3Tk.png"
          alt="Decor"
          className="w-[700px] h-[700px]"
        />
      </div>
    </section>
  );
};

export default BenefitSection;
