import React from "react";
import { FaEye, FaDownload, FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex items-center justify-center px-2 py-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:px-10">
        {/* Teks di kiri */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Asyam Rafif Aubin Fawwaz
          </h1>
          <h2 className="text-[#0668e8] text-2xl md:text-3xl font-semibold mt-2">
            Web Development
          </h2>
          <p className="text-gray-300 mt-4 max-w-md">
            Passionate web developer with a focus on building responsive and
            user-friendly websites using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-[#2563EB] text-white px-6 py-3 rounded-md border-2 border-[#2563EB] hover:bg-white hover:text-[#2563EB] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl">
              <FaPlay className="text-sm transition-colors duration-300" />
              View Project
            </button>
            <button className="bg-white text-[#2563EB] px-6 py-3 rounded-md border-2 border-white hover:bg-[#2563EB] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl">
              <FaDownload className="text-sm transition-colors duration-300" />
              Download CV
            </button>
          </div>
        </div>

        {/* Gambar di kanan */}
        <div className="flex-1 flex justify-center md:mt-36 md:justify-end ml-2 md:ml-10 bg-gradient-to-t from-[#0668e8] to-[#1E293B] rounded-lg overflow-hidden max-w-[320px]">
          <img
            src="src/assets/image/profil.png"
            alt="Foto Profil"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
