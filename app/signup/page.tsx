import Navbar from "@/components/Navbar";
import SignUpForm from "@/components/SignUpForm";


export default function SignUp() {
  return (
      <div
      className="bg-[#082527] text-white overflow-hidden "
        style={{
          backgroundSize: "142px 142px",
          backgroundImage:
            "linear-gradient(to right, rgba(45, 115, 96, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 115, 96, 0.4) 1px, transparent 1px)",
        }}
      >
      <Navbar/>
      <SignUpForm/>
    </div>
  );
}
