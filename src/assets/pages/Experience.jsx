import React from "react";
// import '../../../App.css'

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Web Developer and Mentor",
      company: "PT SMART TECHNOLOGY SOLUTION(SAMRTLOGY)",
      period: "Sep 2024 - Sekarang",
      description:
        "Bergabung sebagai Full Stack Web Developer di PT Smart Technology Solution (Smartlogy), saya bertanggung jawab dalam pengembangan aplikasi web menggunakan ReactJS dan laravel. Selain itu, saya juga berperan sebagai mentor bagi kelas industri, membimbing mereka dalam praktik terbaik pengembangan perangkat lunak dan kolaborasi tim. Proyek utama yang saya tangani melibatkan pembuatan sistem manajemen inventaris yang terintegrasi dengan API pihak ketiga untuk meningkatkan efisiensi operasional klien.",
      tags: [
        "ReactJs",
        "Laravel",
        "Mysql",
        "Bootstrap",
        "API",
        "Mentoring",
        "Teamwork",
        "Development",
      ],
    },
    {
      id: 2,
      title: "Intern Backend Developer",
      company: "PT Pingapus Digital Technology",
      period: "Jan 2025 - June 2025",
      description:
        "Selama magang di PT Pringapus Digital Technology, saya bekerja sebagai Backend Developer dengan menggunakan CodeIgniter 3, bertanggung jawab atas desain database, pembuatan API, implementasi CRUD, serta integrasi dengan frontend Ionic Angular, fokus pada input data, autentikasi pengguna, dan pembayaran digital, dalam proyek utama pembuatan aplikasi pemesanan makanan untuk mendukung UMKM lokal dengan fitur manajemen menu, pemesanan, pembayaran digital, dan manajemen pesanan seperti platform online food delivery pada umumnya",
      tags: ["CodeIgniter 3", "TypeScript", "CSS", "Ionic Angular", "MySQL"],
    },
    {
      id: 3,
      title: "Student",
      company: "PT Humma Teknologi Indonesia (HUMMATECH)",
      period: "Jan 2024 - Jan 2025",
      description:
        "Sebagai siswa  di PT Humma Teknologi Indonesia (Hummatech), saya berfokus pada pengembangan backend menggunakan Laravel. Tugas utama saya meliputi pembuatan API, implementasi CRUD. serta desain database untuk mendukung aplikasi web. ",
      tags: ["Java", "PHP", "Laravel", "Bootstrap", "MySQL"],
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">EXPERIENCE</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item text-left">
              <div className="timeline-marker"></div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <p className="description">{exp.description}</p>

                <div className="tags">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
