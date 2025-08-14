import WinnerSection from "@/components/WinnerSection";
import BenenfitSection from "@/components/BenenfitSection";
import HeroSection from "@/components/HeroSection";
import SummarySection from "@/components/SummarySection";
import StepsSection from "@/components/StepsSection";
import CTA from "@/components/CTA";
import MemberSection from "@/components/MemberSection";
import FAQ from "@/components/FAQ";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
      <Navbar/>
      <HeroSection />
      <WinnerSection />
      <CTA topText="Each Ninja Here is uniquely crafted" bottomText="With rare traits and hidden power in tech" />
      <BenenfitSection />
      <SummarySection />
      <StepsSection />
      <MemberSection />
      <FAQ />
      <CTA topText="Each Ninja Here is uniquely crafted" bottomText="With rare traits and hidden power in tech" />
      <Banner />
      <Footer/>
    </div>
  );
}
