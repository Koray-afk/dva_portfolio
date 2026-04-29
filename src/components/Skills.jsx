import { useState } from 'react'
import { skills } from '../data'
import './Skills.css'

const categories = ['All', 'Languages', 'Libraries', 'Analytics', 'Visualization', 'Databases', 'Tools']

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="skills section">
      <div className="orb orb-1" style={{ opacity: 0.4 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">
          Skills &amp; <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="skills__sub">My technical toolkit for end-to-end data analysis and visualization</p>

        <div className="skills__filters" role="group" aria-label="Filter skills by category">
          {categories.map(c => (
            <button
              key={c}
              id={`skills-filter-${c.toLowerCase()}`}
              className={`skills__filter ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {filtered.map((skill, i) => (
            <div key={skill.name} className="skills__card card" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="skills__card-top">
                <span className="skills__icon">{skill.icon}</span>
                <div className="skills__info">
                  <p className="skills__name">{skill.name}</p>
                  <p className="skills__cat">{skill.category}</p>
                </div>
                <span className="skills__level">{skill.level}%</span>
              </div>
              <div className="skills__bar-track">
                <div className="skills__bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="skills__soft">
          <p className="skills__soft-title">Soft Skills</p>
          <div className="skills__soft-tags">
            {['Data Storytelling', 'Pattern Recognition', 'Problem-Solving', 'Team Collaboration', 'Analytical Thinking'].map(s => (
              <span key={s} className="skills__soft-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
