import { Badge } from "lucide-react";
import React from "react";

const achievement = [
  {
    title: "EPIM - Web Development",
    desc: "Full-stack Ticketing solution built with native HTML JS CSS",
    image: ["src/assets/image/epim2025.jpg"],
    badge: ["1st Place"],
    date: ["31 Agustus 2024"],
  },
  {
    title: "EPIM - Web Development",
    desc: "Full-stack Ticketing solution built with native HTML JS CSS PHP",
    image: ["src/assets/image/epim.jpg"],
    badge: ["3rd Runner-up"],
    date: ["31 Agustus 2024"],
  },
  {
    title: "Desain UI/UX Mobile App and Web",
    desc: "Figma UI/UX prototype for e-commerce mobile app",
    image: ["src/assets/image/desain.jpg"],
    badge: ["3rd place"],
    date: ["31 Agustus 2024"],
  },
  {
    title: "Short Film - KEMENAG",
    desc: "Film pendek 'Sejati' menggambarkan perjuangan persahabatan di tengah perbedaan keyakinan.",
    image: ["src/assets/image/sejati.jpg"],
    badge: ["2nd place"],
    date: ["5 Desember 2024"],
  },
];

export default function Achievement() {
  return (
    <section className="py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-white mb-10 text-4xl font-bold text-center">
          Achievement
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">
          {achievement.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E293B] border border-white/10 rounde-xl text-white flex flex-col justify-between h-full p-5 "
            >
              <div className="relative group">
                <img
                  src={item.image[0]}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover mb-4 border border-white/20"
                />
                <div className="text-white">
                    <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3 ">
                        {item.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium  ">
                            {item.badge[0]}
                        </span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
