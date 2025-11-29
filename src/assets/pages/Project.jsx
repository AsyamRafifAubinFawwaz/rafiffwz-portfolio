import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
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
  Photograpy: [
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

  const tabs = ["Film", "Web Programming", "Desaign UI/UX", "Photograpy"];

  return (
    <section id="project" className="relative py-28 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          

          <h2 className="text-3xl font-bold text-center  text-white">PROJECTS</h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Koleksi project terbaikku di berbagai bidang 
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData[activeTab]?.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500 transition-all duration-500"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                {project.sub && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-purple-500/30">
                      {project.sub}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl mb-3 text-white  group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-6 leading-relaxed">{project.desc}</p>

                <div className="flex items-center gap-4">
                  <a href={project.link} target="_blank">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-purple-500 transition-all duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-zinc-300 group-hover/btn:text-white">
                        {getButtonLabel(project.type)}
                      </span>
                    </button>
                  </a>

                  {project.type === "code" && (
                    <a href={project.link} target="_blank">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-purple-500 transition-all duration-300 group/btn">
                        <Github className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-zinc-300 group-hover/btn:text-white">Source</span>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
