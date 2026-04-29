import { useEffect } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" id="project-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box card" id={`modal-${project.id}`}>
        <button className="modal-close" id="modal-close-btn" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="modal-header" style={{ borderBottom: `2px solid ${project.color}` }}>
          <div className="modal-emoji" style={{ background: `${project.color}22`, border: `1px solid ${project.color}55` }}>
            {project.emoji}
          </div>
          <div>
            <p className="modal-category" style={{ color: project.color }}>{project.category}</p>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p className="modal-desc">{project.longDesc}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Key Metrics</h3>
            <div className="modal-metrics">
              {project.metrics.map(m => (
                <div key={m} className="modal-metric">
                  <span className="modal-metric-icon">✦</span>
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Tech Stack</h3>
            <div className="modal-tags">
              {project.tags.map(t => (
                <span key={t} className="proj-card__tag modal-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <a href={project.github} id={`modal-gh-${project.id}`} target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </a>
            <button className="btn btn-outline" id={`modal-close-2-${project.id}`} onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
