import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventHeroSection from "@/components/EventHeroSection";
import EventLists from "@/components/EventLists";


export default function Home() {
  return (
    <div
      className="bg-black text-white overflow-hidden"
      style={{
        backgroundSize: "142px 142px",
        backgroundImage:
          "linear-gradient(to right, rgba(128, 100, 100, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 100, 100, 0.3) 1px, transparent 1px)",
      }}
    >
      <Navbar/>
      <EventHeroSection />
      <EventLists/>
      <Footer/>
    </div>
  );
}
