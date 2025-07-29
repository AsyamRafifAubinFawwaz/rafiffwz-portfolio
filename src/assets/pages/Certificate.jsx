import React, { useState } from "react";
import { ZoomIn } from "lucide-react";

const certificates = [
  {
    title: "EPIM - Web Development",
    desc: "Full-stack Ticketing solution built with native HTML JS CSS PHP",
    images: [
      "src/assets/image/Tim Eskalaber piagam.jpg",
      "src/assets/image/Tim Eskalaber piagam-nama.jpg",
    ],
    badge: "3rd Runner Up",
    level: "Nasional",
    date: "31 Agustus 2024",
    location: "Jember, East Java",
  },
 {
  title: "Short Film - KEMENAG",
  desc: "‘Sejati’ menggambarkan perjuangan persahabatan di tengah perbedaan keyakinan.",
  images: ["src/assets/image/sertifikat-sejati.jpg"],
  badge: "2nd Place",
  level: "Provinsi",
  date: "14 Juli 2025",
  location: "East Java",
},
  {
    title: "Desain UI/UX Mobile App and Web",
    desc: "Figma UI/UX prototype for e-commerce mobile app",
    images: ["src/assets/image/hummatect.jpg"],
    badge: "3rd Place",
    level: "Kota",
    date: "14 Juli 2025",
    location: "Malang, East Java",
  },
  {
    title: "PT. Pringapus Digital Technology",
    desc: "Figma UI/UX prototype for e-commerce mobile app",
    images: ["src/assets/image/pkl.jpg"],
    badge: "Magang",
    level: "Industri",
    date: "6 Januari 2025 - 6 Juni 2025",
    location: "Malang, East Java",
  },
  {
    title: "PlayIt Polinema 2024",
    desc: "Lomba Pengembangan Website Polinema 2024",
    images: ["src/assets/image/polinema2024.jpg"],
    badge: "Peserta",
    level: "Nasional",
    date: "1-3 November 2024",
    location: "Malang, East Java",
  },
  {
    title: "Kominfo",
    desc: "Seminar Literasi Digital",
    images: ["src/assets/image/sertifikat-kominfo.jpg"],
    badge: "Seminar",
    level: "Industri",
    date: "31 Januari 2024",
    location: "Jember, East Java",
  },
];

export default function Certificate() {
  const [showModal, setShowModal] = useState(false);
  const [activeImages, setActiveImages] = useState([]);

  const openModal = (images) => {
    setActiveImages(images);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveImages([]);
    setShowModal(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen ">
      <div>
        <h2 className=" text-white text-4xl text-center font-bold mb-10 max-w-6xl mx-auto">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E293B] border border-white/10 rounded-xl text-white flex flex-col justify-between h-full p-5"
            >
              <div className="relative group">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover mb-4 cursor-pointer transition-all duration-300 group-hover:brightness-75"
                  onClick={() => openModal(item.images)}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/50 rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {(item.badge || item.level) && (
                <div className="flex items-center justify-between mb-3 flex-wrap">
                  {item.badge && (
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-0.5 rounded w-fit
                      ${
                        item.badge.toLowerCase().includes("1st") ||
                        item.badge.toLowerCase().includes("gold")
                          ? "bg-yellow-300 text-yellow-800"
                          : item.badge.toLowerCase().includes("2nd") ||
                            item.badge.toLowerCase().includes("silver")
                          ? "bg-gray-300 text-gray-800"
                          : item.badge.toLowerCase().includes("3rd") ||
                            item.badge.toLowerCase().includes("bronze")
                          ? "bg-orange-200 text-orange-800"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.level && (
                    <span className="text-xs text-white/70 border border-white/20 rounded px-3 py-0.5">
                      {item.level}
                    </span>
                  )}
                </div>
              )}

              <h3 className="text-xl font-semibold text-left">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1 text-left">
                {item.desc}
              </p>
              <div className="flex justify-between text-gray-400 text-sm mt-6">
                <span>{item.date}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-600 transition-colors z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>

              <div
                className={`p-4 ${
                  activeImages.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-1 md:grid-cols-2 gap-4"
                }`}
              >
                {activeImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Certificate ${i + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
