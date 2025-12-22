
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172B] text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="asset/image/logo.png" alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#0668e8] transition">Home</button>
          <button onClick={() => scrollToSection('project')} className="hover:text-[#0668e8] transition">Project</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-[#0668e8] transition">Skills</button>
          <button onClick={() => scrollToSection('certificate')} className="hover:text-[#0668e8] transition">Certificate</button>
          <button onClick={() => scrollToSection('achievement')} className="hover:text-[#0668e8] transition">Achievement</button>
          <button onClick={() => scrollToSection('education')} className="hover:text-[#0668e8] transition">Educations</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <span onClick={() => setMenuOpen(!menuOpen)} className="text-white w-6 h-6 inline-flex cursor-pointer">
            <FiX size={24} className={`absolute transition-all duration-200 ${menuOpen ? 'opacity-100 rotate-90' : 'opacity-0'}`}  />
            <FiMenu size={24} className={`absolute transition-all duration-200 ${menuOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`}  />
          </span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 bg-[#0F172B]">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#0668e8] transition text-left">Home</button>
          <button onClick={() => scrollToSection('project')} className="hover:text-[#0668e8] transition text-left">Project</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-[#0668e8] transition text-left">Skills</button>
          <button onClick={() => scrollToSection('certificate')} className="hover:text-[#0668e8] transition text-left">Certificate</button>
          <button onClick={() => scrollToSection('achievement')} className="hover:text-[#0668e8] transition text-left">Achievement</button>
          <button onClick={() => scrollToSection('education')} className="hover:text-[#0668e8] transition text-left">Educations</button>
        </div>
      )}
    </nav>
  );
}
