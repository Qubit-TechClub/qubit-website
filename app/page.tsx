import AboutSection from "@/components/AboutSection";
import BentoGridSection from "@/components/BentoGrid";
import HeroSection from "@/components/HeroSection";
import "./globals.css";
import BenefitSection from "@/components/BenefitSection";
export default function Home() {
  return (
    <div
      className="bg-black text-white"
      style={{
        backgroundSize: "142px 142px",
        backgroundImage:
          "linear-gradient(to right, rgba(128, 100, 100, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 100, 100, 0.3) 1px, transparent 1px)",
      }}
    >
      <HeroSection />
      <AboutSection />
      <BentoGridSection />
      <BenefitSection />
    </div>
  );
}
