import React from 'react'
import { FaAngular, FaFigma, FaHtml5, FaReact } from 'react-icons/fa'
import { SiCodeigniter, SiCss3, SiIonic, SiMysql } from "react-icons/si";

export default function Skills() {
  return (
    <section className="text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">SKILLS</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Card Skill */}
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <FaAngular size={60} color="#DD0031"  className=" mb-3 " />
          <p className="text-sm font-medium">Angular</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <SiIonic size={60} color="#3880FF"  className=" mb-3 " />
          <p className="text-sm font-medium">Ionic</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <FaFigma size={60} className=" mb-3 " />
          <p className="text-sm font-medium">Figma</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <img src="src\assets\image\tailwindcss.svg" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">Tailwind</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
         <img src="src\assets\image\laravel.svg" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">laravel</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <img src="src\assets\image\php.svg" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">PHP</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <FaHtml5 size={60}  className=" mb-3 text-red-500" />
          <p className="text-sm font-medium">HTML</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <SiCss3 size={60} color="#1572B6" className=" mb-3 " />
          <p className="text-sm font-medium">CSS</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <FaReact size={60}  className=" mb-3 text-[#61DBFB] " />
          <p className="text-sm font-medium">ReactJs</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <SiMysql  size={60} color="#F29111"  className=" mb-3  " />
          <p className="text-sm font-medium">MySQL</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <SiCodeigniter size={60} color="#EF4223"   className=" mb-3  " />
          <p className="text-sm font-medium">Codeigniter 3</p>
        </div>
      
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <img src="src\assets\image\word.svg" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">MS World</p>
        </div>
      </div>
    </section>
  )
}
