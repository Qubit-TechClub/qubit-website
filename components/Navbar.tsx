"use client";
import React, { useState } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

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

      <div className="flex items-center justify-between max-w-6xl mx-auto mt-5 md:mt-2 relative z-20">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-white font-extrabold text-xl tracking-wide">
            QUBIT
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <Link href={"/events"}>
            <li className="cursor-pointer hover:text-white transition">
              Events
            </li>
          </Link>
          <li className="cursor-pointer hover:text-white transition">About</li>
          <li className="cursor-pointer hover:text-white transition">
            Contact
          </li>
          <li className="cursor-pointer hover:text-white transition">Team</li>
          <li className="cursor-pointer hover:text-white transition">
            Benefits
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center">
          {!session ? (
            <Link href={"/signup"}>
              <button className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
                Register
              </button>
            </Link>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-lime-400">
                  <AvatarImage
                    src={session.user?.image || ""}
                    alt={session.user?.name || "User"}
                  />
                  <AvatarFallback>
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-48 bg-white text-black shadow-md rounded-lg p-2">
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    <User size={18} /> Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 text-red-600"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
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
              {!session ? (
                <Link href={"/signup"}>
                  <button className="w-full bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
                    Register
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => signOut()}
                  className="w-full bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-400 transition"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
