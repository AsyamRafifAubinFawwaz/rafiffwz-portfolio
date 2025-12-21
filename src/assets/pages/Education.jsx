import React from 'react'

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Siswa Jurusan Rekayasa Perangkat Lunak',
      school: 'SMKN 8 JEMBER',
      period: '2023 - 2026',
      description: ' Memperdalam pengetahuan dan keterampilan dalam pengembangan perangkat lunak, termasuk pemrograman, desain sistem, dan manajemen proyek. Aktif berpartisipasi dalam berbagai kompetisi teknologi dan proyek kolaboratif.GPA: 89,8',
    //   achievements: ['Dean\'s List', 'Best Capstone Project', 'CS Department Scholarship']
    },
    // {
    //   id: 2,
    //   degree: 'Associate Degree in Information Technology',
    //   school: 'Community College',
    //   period: '2014 - 2016',
    //   description: 'Foundation in programming and IT fundamentals. Completed internship at a tech startup.',
    //   achievements: ['Top Student Award', 'Internship Experience', 'Technical Certification']
    // },
    // {
    //   id: 3,
    //   degree: 'Full Stack Web Development Bootcamp',
    //   school: 'Code Academy Online',
    //   period: '2021',
    //   description: 'Intensive 12-week program covering modern web technologies. Built 5+ production projects.',
    //   achievements: ['Certificate of Completion', '100% Attendance', 'Job-Ready Skills']
    // }
  ]

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">EDUCATION</h2>
        
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item text-left">
              <div className="timeline-marker"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{edu.degree}</h3>
                    <p className="company-name">{edu.school}</p>
                  </div>
                  <span className="period">{edu.period}</span>
                </div>
                
                <p className="description">{edu.description}</p>
                
                {/* <div className="tags">
                  {edu.achievements.map((achievement, idx) => (
                    <span key={idx} className="tag">{achievement}</span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
