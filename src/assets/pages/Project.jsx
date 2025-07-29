import React, { useState } from "react";
import { Button } from "../../components/ui/button";

const projectsData = {
  Film: [
    {
      title: "Short Film: Sejati",
      desc: "Sejati adalah film pendek bertema persahabatan lintas iman.",
      image: "src/assets/image/film.jpg",
      sub: "Lomba Short Film",
      link: "https://youtube.com/sejati-film",
      type: "video",
    },
    {
      title: "Short Film: Berandalan Tobat",
      desc: "Perjalanan seorang pemuda dari dunia gelap menuju kesadaran dan hijrah.",
      image: "src/assets/image/berandal.jpg",
      sub: "Film Portfolio",
      link: "https://youtube.com/berandalan-tobat",
      type: "video",
    },
  ],
  "Web Programming": [
    {
      title: "Web Tiket Konser DJ4U",
      desc: "Full-stack e-commerce solution built with native HTML, JS, CSS PHP",
      image: "src/assets/image/DJ4U.png",
      sub: "Lomba Web Programming",
      link: "https://github.com/RAFIF-RF10/DJ4U_konserrrr",
      type: "code",
    },
    {
      title: "Website Djember Fest",
      desc: "Reactjs + Tailwind.",
      image: "src/assets/image/image.png",
      sub: "Lomba Web Programming",
      link: "https://github.com/username/djember-fest",
      type: "code",
    },
    {
      title: "Portfolio Website",
      desc: "React + Express untuk voting realtime.",
      image: "src/assets/image/portfolio.jpg",
      sub: "Portfolio",
      link: "https://yourportfolio.vercel.app",
      type: "code",
    },
  ],
  "Desaign UI/UX": [
    {
      title: "Desaign App Geraiku",
      desc: "Figma UI/UX App Geraiku.",
      image: "src/assets/image/geraiku.jpg",
      sub: "Desain UI/UX",
      link: "https://www.figma.com/file/yourfigma",
      type: "design",
    },
  ],
  "Photograpy":[
    {
      title: "Photography Portfolio",
      desc: "A collection of my best photography work.",
      image: "src/assets/image/gunung.jpg",
      sub: "Photography",
      link: "https://yourphotographyportfolio.com",
      type: "photo",
    },
  ],
  
};

const getButtonLabel = (type) => {
  switch (type) {
    case "video":
      return "View Video";
    case "photo":
      return "View Photo";
    case "design":
      return "View Design";
    case "code":
    default:
      return "View Code";
  }
};

export default function Project() {
  const [activeTab, setActiveTab] = useState("Web Programming");

  return (
    <section id="project" className="py-16 px-4 min-h-screen bg-[#0f172a]">
      {/* Title */}
      <h2 className="text-center text-white text-4xl font-bold mb-10">
        PROJECT
      </h2>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
        {["Film", "Web Programming", "Desaign UI/UX", "Photograpy"].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 w-60 py-2 font-medium transition-all duration-100 shadow ${
              activeTab === tab
                ? "bg-white text-black hover:bg-white hover:text-black"
                : "bg-[#1E293B] text-white hover:bg-white hover:text-black"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectsData[activeTab]?.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E293B] rounded-xl p-5 text-white shadow-md hover:shadow-2xl transition flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              {project.sub && (
                <span className="absolute top-2 right-2 bg-blue-300 border border-blue-500 rounded-full text-blue-800 text-xs px-3 py-1 font-medium">
                  {project.sub}
                </span>
              )}
            </div>

            {/* Title & Desc */}
            <h3 className="text-lg font-semibold leading-snug mb-2">
              {project.title || "Untitled Project"}
            </h3>
            <p className="text-sm text-start text-gray-300 mb-4 leading-relaxed line-clamp-3">
              {project.desc || "Deskripsi belum tersedia."}
            </p>

            {/* Action Button */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {getButtonLabel(project.type)}
                </Button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
