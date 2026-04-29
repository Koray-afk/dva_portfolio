import { education, achievements } from '../data'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="orb orb-2" style={{ opacity: 0.4 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">
          Education &amp; <span className="gradient-text">Achievements</span>
        </h2>

        <div className="edu__grid">
          {/* Education Timeline */}
          <div className="edu__timeline">
            <h3 className="edu__col-title">Education</h3>
            <div className="edu__items">
              {education.map((item, i) => (
                <div key={item.id} className="edu__item card" id={`edu-${item.id}`}>
                  <div className="edu__item-icon" style={{ background: `${item.color}20`, border: `1px solid ${item.color}44` }}>
                    {item.icon}
                  </div>
                  <div className="edu__item-body">
                    <div className="edu__item-header">
                      <div>
                        <h4 className="edu__degree">{item.degree}</h4>
                        {item.field && <p className="edu__field">{item.field}</p>}
                      </div>
                      <span className="edu__period">{item.period}</span>
                    </div>
                    <p className="edu__institution">{item.institution}</p>
                    <span className="edu__score" style={{ color: item.color }}>{item.score}</span>
                  </div>
                  {i < education.length - 1 && <div className="edu__connector" />}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="edu__achievements">
            <h3 className="edu__col-title">Achievements</h3>
            <div className="edu__ach-items">
              {achievements.map(a => (
                <div key={a.title} className="edu__ach-card card">
                  <span className="edu__ach-icon">{a.icon}</span>
                  <div>
                    <h4 className="edu__ach-title">{a.title}</h4>
                    <p className="edu__ach-desc">{a.desc}</p>
                  </div>
                </div>
              ))}

              {/* Additional Info */}
              <div className="edu__extra card">
                <h4 className="edu__extra-title">Additional</h4>
                <div className="edu__extra-row">
                  <div className="edu__extra-item">
                    <p className="edu__extra-label">Languages</p>
                    <p className="edu__extra-val">English (Professional) · Hindi (Native)</p>
                  </div>
                  <div className="edu__extra-item">
                    <p className="edu__extra-label">Interests</p>
                    <p className="edu__extra-val">Data Storytelling · Sports · Analytics · AI/ML · Open Source</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
