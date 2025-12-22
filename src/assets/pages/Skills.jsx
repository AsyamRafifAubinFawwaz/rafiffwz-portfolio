import React from 'react'
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaPhp,
  FaCode 
} from 'react-icons/fa'

import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiLaravel,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiMysql,
  SiPostman,
 
} from "react-icons/si";

export const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React.js', icon: FaReact, color: '#61DBFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML5', icon: FaHtml5, color: '#e34c26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
    ],
    backend: [
      // { name: 'Node.js', icon: FaNode, color: '#68a063' },
      { name: 'Laravel', icon: SiLaravel, color: '#ff2d20' },
      // { name: 'Python', icon: FaPython, color: '#3776ab' },
      // { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'Fast API', icon: SiFastapi, color: '#009688' },
      // { name: 'Django', icon: SiDjango, color: '#092e20' },
      { name: 'SQL', icon: SiMysql, color: '#00758f' },
      { name: 'PHP', icon: FaPhp, color: '#777bb4' },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, color: '#f1502f' },
      { name: 'Github', icon: FaGithub, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c42' },
      { name: 'VS Code', icon: FaCode, color: '#007acc' },
    ]
  }

  const SkillCard = ({ name, Icon, color }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300">
      <Icon size={20} color={color} />
      <span className="text-sm font-medium text-gray-100">{name}</span>
    </div>
  )

  const SkillSection = ({ title, skills }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-sky-400 text-xl">{'</>'}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="border border-slate-700 rounded-xl p-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <SkillCard
              key={idx}
              name={skill.name}
              Icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          SKILLS
        </h2>

        <SkillSection title="Frontend" skills={skillsData.frontend} />
        <SkillSection title="Backend" skills={skillsData.backend} />
        <SkillSection title="Tools" skills={skillsData.tools} />
      </div>
    </section>
  )
}
export default Skills;