import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#0F172B] w-full">
      <div className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">
                Rafif<span className="text-sky-400">.</span>
              </h3>
              <p className="text-gray-400 text-sm">Full Stack Web Developer</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2 text-gray-400 text-sm">
                <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="hover:text-sky-400 transition">Home</button>
                <button onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })} className="hover:text-sky-400 transition">Project</button>
                <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="hover:text-sky-400 transition">Skills</button>
              </div>
            </div>

            {/* Contact Me */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex flex-col space-y-3">
                <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition text-sm">
                  <FaEnvelope size={16} />
                  your.email@example.com
                </a>
                <a href="https://wa.me/+6289627507491" className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition text-sm">
                  <FaWhatsapp size={16} />
                </a>
                <div className="flex gap-4 text-gray-400 text-lg pt-2">
                  <a href="https://github.com/AsyamRafif" className="hover:text-white transition">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/asyam-rafif/" className="hover:text-white transition">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/rafif3207" className="hover:text-white transition">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-8"></div>

          {/* Bottom */}
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Asyam Rafif Aubin Fawwaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
