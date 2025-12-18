// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="w-full py-3 flex items-center justify-end pr-4">

        <div className="hidden md:flex items-center space-x-8 text-slate-300 font-medium">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>

          <a
            href="public/Danushi Rathnayaka_CV.pdf"
            download
            className="ml-4 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/20 transition"
          >
            Download CV
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
