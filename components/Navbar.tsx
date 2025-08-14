"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#082527] text-white px-6 py-4 z-50">
      <div
        className="h-full absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundSize: "142px 142px",
          backgroundImage:
            "linear-gradient(to right, rgba(45, 115, 96, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 115, 96, 0.4) 1px, transparent 1px)",
        }}
      />
      <div className="flex items-center justify-between max-w-6xl mx-auto mt-5 md:mt-2">
        <div className="flex items-center space-x-2">
          <span className="text-white font-extrabold text-xl tracking-wide">
            QUBIT
          </span>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <Link href={'/events'}><li className="cursor-pointer hover:text-white transition">Events</li></Link>
          <li className="cursor-pointer hover:text-white transition">About</li>
          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>
          <li className="cursor-pointer hover:text-white transition">Team</li>
          <li className="cursor-pointer hover:text-white transition">
            Benefits
          </li>
        </ul>

        <button className="hidden md:block bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition z-50">
          Register
        </button>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#08282D] text-gray-300 shadow-lg rounded-b-lg md:hidden z-50">
          <ul className="flex flex-col space-y-4 p-6 font-medium">
            <li className="cursor-pointer hover:text-white transition">
              Events
            </li>
            <li className="cursor-pointer hover:text-white transition">
              About
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Contact
            </li>
            <li className="cursor-pointer hover:text-white transition">Team</li>
            <li>
              <button className="w-full bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
                Regsiter
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
