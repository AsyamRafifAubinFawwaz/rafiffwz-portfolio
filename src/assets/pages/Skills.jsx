import React from 'react'
import { FaFigma, FaHtml5 } from 'react-icons/fa'

export default function Skills() {
  return (
    <section className="text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">SKILLS</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {/* Card Skill */}
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <img src="src\assets\image\angular.png" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">Angular</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <FaFigma className="text-4xl mb-3 " />
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
          <FaHtml5  className="text-4xl mb-3 text-red-500" />
          <p className="text-sm font-medium">HTML</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
       <img src="src\assets\image\angular.png" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">Angular</p>
        </div>
        <div className="bg-[#1E293B] border border-gray-600 rounded-lg p-6 flex flex-col items-center hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
          <img src="src\assets\image\word.svg" alt="" className="w-14 text-4xl mb-3" />
          <p className="text-sm font-medium">MS World</p>
        </div>
      </div>
    </section>
  )
}
