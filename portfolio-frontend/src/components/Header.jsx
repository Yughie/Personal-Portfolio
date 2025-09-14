import React, { useState } from "react";
import logo from "../assets/LogoIcon.svg"; // your logo path

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Stack", "Career", "Project", "Template"]; // add your links

  return (
    <header className="fixed top-0 left-0 w-full bg-brandblue shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-16 py-4">
        {/* Left: Logo on Desktop */}
        <div className="hide md:flex md:items-center">
          <img src={logo} alt="Logo" className="w-50 h-10" />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-brandwhite hover:text-hoverblue font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="bg-brandyellow hover:bg-hoveryellow text-brandblack hover:text-brandblack px-14 py-2 rounded-lg font-bold transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-brand font-bold ${
              isMobileMenuOpen
                ? "bg-hoverblue hover:bg-brandwhite"
                : "bg-brandyellow hover:bg-hoveryellow"
            } focus:outline-none text-brandblack transition-colors duration-100 ease-in-out`}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brandwhite shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-black font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brandblue hover:text-hoverblue"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brandyellow hover:bg-hoveryellow text-brandblack hover:text-brandblack px-4 py-2 rounded-lg text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
