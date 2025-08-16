"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name, email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(errorData.message || "Signup failed");
      return;
    }

    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen md:h-auto flex justify-center items-start py-32 md:py-10 px-6 md:px-0">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-white/5 backdrop-blur-xl">
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Create Account
            </h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Sign up to get started 🚀
            </p>
          </div>

          <form
            onSubmit={handleSignup}
            className="space-y-4 sm:space-y-5 max-w-md mx-auto w-full"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-500 bg-white/10 text-white rounded-xl py-3 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-500 bg-white/10 text-white rounded-xl py-3 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-500 bg-white/10 text-white rounded-xl py-3 px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white py-3 sm:py-3.5 rounded-xl font-semibold transition duration-200 shadow-lg text-sm sm:text-base"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-gray-400 text-xs sm:text-sm mt-6">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-green-400 font-medium hover:underline cursor-pointer">
                Login
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-start justify-center bg-gradient-to-br from-green-500/20 to-emerald-700/20 p-6">
          <img
            src="https://framerusercontent.com/images/OoBef7HplXLeVNtVPPtLjJRgWs4.png?scale-down-to=2048"
            alt="Signup Illustration"
            className="w-[70%] max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
