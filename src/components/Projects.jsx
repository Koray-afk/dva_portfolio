import { useState } from 'react'
import { projects } from '../data'
import './Projects.css'

const categories = ['All', 'Python / EDA']

export default function Projects({ onOpenProject }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="projects section">
      <div className="orb orb-3" style={{ opacity: 0.5 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="projects__sub">
          Click any card to explore full project details
        </p>

        <div className="projects__filters">
          {categories.map(c => (
            <button
              key={c}
              id={`proj-filter-${c.replace(/[\s/()]/g, '-').toLowerCase()}`}
              className={`skills__filter ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} onClick={() => onOpenProject(proj)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, onClick }) {
  return (
    <div
      id={`proj-card-${project.id}`}
      className="proj-card card"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.08}s` }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div className="proj-card__top">
        <div className="proj-card__emoji" style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}>
          {project.emoji}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
          <span className="proj-card__category" style={{ color: project.color }}>{project.category}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{project.year}</span>
        </div>
      </div>

      <h3 className="proj-card__title">{project.title}</h3>
      <p className="proj-card__tagline">{project.tagline}</p>
      <p className="proj-card__desc">{project.description}</p>

      <div className="proj-card__metrics">
        {project.metrics.map(m => (
          <span key={m} className="proj-card__metric">{m}</span>
        ))}
      </div>

      <div className="proj-card__tags">
        {project.tags.slice(0, 4).map(t => (
          <span key={t} className="proj-card__tag">{t}</span>
        ))}
        {project.tags.length > 4 && <span className="proj-card__tag">+{project.tags.length - 4}</span>}
      </div>

      <div className="proj-card__footer">
        <span className="proj-card__cta">
          View Details
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </span>
        <div className="proj-card__links">
          <a href={project.github} id={`proj-gh-${project.id}`} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} aria-label="GitHub" className="proj-card__link">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      <div className="proj-card__accent" style={{ background: `linear-gradient(135deg, ${project.color}22, transparent)` }} />
    </div>
  )
}
