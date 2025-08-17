"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-gray-300 px-6 md:px-0 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Qubit Logo" className="w-6 h-6" />
            <h2 className="text-xl font-extrabold text-white">QUBIT</h2>
          </div>
          <p className="text-sm">
            Forged in shadows. Ruled by community.
            <br />
            Powered by Tech
          </p>

          <div className="flex items-center gap-4 text-lime-400">
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:opacity-80 transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:opacity-80 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:opacity-80 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:opacity-80 transition" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-lime-500 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition">
                Members
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end mt-6 text-xs text-gray-400">
        © 2025 Qubit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
