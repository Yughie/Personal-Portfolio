import React, { useState } from "react";
import logo from "../assets/LogoIcon.svg"; // your logo path

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Portfolio", "About", "Blog"]; // add your links

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo on Desktop */}
        <div className="hide md:flex md:items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>

        {/* Center: Logo on Mobile */}
        <div className="flex-1 flex justify-center md:justify-start md:hidden">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-pink-500 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 font-bold"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
