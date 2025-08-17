import { viewProfile } from "@/actions/user";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";


export default async function Home() {
   const user = await viewProfile();
  return (
    <div
      className="bg-[#082527] text-white overflow-hidden"
      style={{
        backgroundSize: "142px 142px",
        backgroundImage:
          "linear-gradient(to right, rgba(128, 100, 100, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 100, 100, 0.3) 1px, transparent 1px)",
      }}
    >
      <Navbar/>
      <Profile user={user} />
    </div>
  );
}
