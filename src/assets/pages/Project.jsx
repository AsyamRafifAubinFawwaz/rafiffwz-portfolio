import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../../components/ui/button";

const projectsData = {
  Film: [
    {
      title: "Short Film: Sejati",
      desc: "Sejati adalah film pendek bertema persahabatan lintas iman.",
      image: "asset/image/film.jpg",
      sub: "Lomba Short Film",
      link: "https://youtu.be/VRcdXxBjiSg?si=UUFaP7zaHFCADzLx",
      type: "video",
    },
    {
      title: "Short Film: Berandalan Tobat",
      desc: "Perjalanan seorang pemuda dari dunia gelap menuju kesadaran dan hijrah.",
      image: "asset/image/berandal.jpg",
      sub: "Film Portfolio",
      link: "https://youtu.be/hUjKMT9ROks?si=zLQc4K-dcS_OU1Zu",
      type: "video",
    },
  ],

  "Web Programming": [
    {
      title: "Web Tiket Konser DJ4U",
      desc: "Full-stack e-commerce solution built with native HTML, JS, CSS PHP",
      image: "asset/image/DJ4U.png",
      sub: "Lomba Web Programming",
      live: "https://dj4u-live-demo.com",
      repo: "https://github.com/RAFIF-RF10/DJ4U_konserrrr",
      type: "code",
    },
    {
      title: "Web Sekolah SMKN 8 Jember",
      desc: "Website resmi SMKN 8 Jember dengan fitur lengkap untuk informasi sekolah.",
      image: "asset/image/smkn8jember.png",
      sub: "Lomba Web Programming",
      live: "https://smkn08jember.sch.id/",
      repo: "https://github.com/hanNajib/jhic",
      type: "code",

    },
    {
      title: "Web MOTODO",
      desc: "Website Learning Management System (LMS) untuk siswa dan guru. ",
      image: "asset/image/1.jpg",
      sub: "Tugas PraUKK 2024-2025  ",
      live: "https://motodo.eskalaber.my.id/",
      repo: "https://github.com/RAFIF-RF10/Motodo",
      type: "code",

    },
    {
      title: "Website LABERATION",
      desc: "Website penjualan tiket konser SMKN 8 JEMBER.",
      image: "asset/image/Laberation.png",
      sub: "Lomba Web Programming",
      live: "http://laboration.vercel.app/",
      repo: "https://github.com/hanNajib/LABERATION-2025",
      type: "code",
    },
    {
      title: "Website Djember Fest",
      desc: "Reactjs + Tailwind.",
      image: "asset/image/image.png",
      sub: "Lomba Web Programming",
      live: "http://djember-fest.vercel.app/",
      repo: "https://github.com/hanNajib/DJEMBER-FEST",
      type: "code",
    },
    {
      title: "Portfolio Website",
      desc: "React + Express untuk voting realtime.",
      image: "asset/image/portfolio.jpg",
      sub: "Portfolio",
      live: "https://yourportfolio.vercel.app",
      repo: "https://github.com/username/portfolio",
      type: "code",
    },
  ],

  "Desaign UI/UX": [
    {
      title: "Desaign App Geraiku",
      desc: "Figma UI/UX App Geraiku.",
      image: "asset/image/geraiku.jpg",
      sub: "Desain UI/UX",
      link: "https://www.figma.com/design/REixsjI97YG7fbkB9EElR2/Mie-ayam-3-porsi?node-id=0-1&t=qbrAPKt6ZkJYOmMG-1",
      type: "design",
    },
  ],

  Photograpy: [
    {
      title: "Photography Portfolio",
      desc: "A collection of my best photography work.",
      image: "asset/image/gunung.jpg",
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
      return "Live Demo";
  }
};

export default function Project() {
  const [activeTab, setActiveTab] = useState("Web Programming");
  const tabs = ["Film", "Web Programming", "Desaign UI/UX", "Photograpy"];

  return (
    <section id="project" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center text-white">
            PROJECTS
          </h2>
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
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">
                      {project.sub}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex items-center gap-4">
                  <a href={project.live || project.link} target="_blank">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-blue-500 transition-all duration-300 group/btn">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-zinc-300 group-hover/btn:text-white">
                        {getButtonLabel(project.type)}
                      </span>
                    </button>
                  </a>

                  {project.type === "code" && project.repo && (
                    <a href={project.repo} target="_blank">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-blue-500 transition-all duration-300 group/btn">
                        <Github className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-zinc-300 group-hover/btn:text-white">
                          Repo
                        </span>
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
