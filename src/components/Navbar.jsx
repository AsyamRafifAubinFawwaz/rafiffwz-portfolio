import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172B] text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="src/assets/image/logo.png" alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className=" hover:text-[#0668e8]">
            Home
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Project
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Skills
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Certificate
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Achievement
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Educations
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <span onClick={() => setMenuOpen(!menuOpen)} className="text-white w-6 h-6 inline-flex">
            <FiX size={24} className={`absolute transition-all duration-200 ${menuOpen ? 'opacity-100 rotate-90' : 'opacity-0'}`}  />
            <FiMenu size={24} className={`absolute transition-all duration-200 ${menuOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`}  />
          </span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 bg-[#0F172B]">
          <a href="#" className="hover:text-[#0668e8]">
            Home
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Project
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Skills
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Certificate
            
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Achievement
          </a>
          <a href="#" className="hover:text-[#0668e8]">
            Educations
          </a>
        </div>
      )}
    </nav>
  );
}
