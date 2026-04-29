import './About.css'

const facts = [
  { icon: '🎯', label: 'Focus', value: 'Data Analysis & Visualization' },
  { icon: '🎓', label: 'Education', value: 'BTech AI — Nschood University' },
  { icon: '⚡', label: 'Stack', value: 'Python · Power BI · SQL' },
  { icon: '📬', label: 'Email', value: 'abhiman.singh209@ms.christhood.edu.in' },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="orb orb-2" style={{ opacity: 0.5 }} />
      <div className="container">
        <p className="section-label">Who I Am</p>
        <div className="about__grid">
          <div className="about__text">
            <h2 className="section-title">
              Turning Data into <span className="gradient-text">Decisions</span>
            </h2>
            <p className="about__para">
              I'm an aspiring Data Analyst with hands-on experience in <strong>exploratory data analysis</strong>,
              statistical modelling, and data visualization using Python and Power BI. I'm proficient in
              deriving actionable insights from complex datasets to support data-driven decision making.
            </p>
            <p className="about__para">
              I have a strong foundation in SQL (75th+ percentile on LeetCode) and am skilled in
              the full project lifecycle — from scoping and data sourcing to analysis and presentation of
              data pipelines and business systems.
            </p>
            <p className="about__para">
              Currently pursuing a BTech in Artificial Intelligence, I'm passionate about open source
              contribution, AI/ML trends, and transforming raw data into compelling, actionable narratives.
            </p>
            <div className="about__cta-row">
              <a href="mailto:abhiman.singh209@ms.christhood.edu.in" id="about-contact-btn" className="btn btn-primary">
                Let's Connect
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#projects" id="about-projects-btn" className="btn btn-outline" onClick={e=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>
                See Projects
              </a>
            </div>
          </div>

          <div className="about__facts">
            {facts.map(f => (
              <div key={f.label} className="about__fact card">
                <span className="about__fact-icon">{f.icon}</span>
                <div>
                  <p className="about__fact-label">{f.label}</p>
                  <p className="about__fact-value">{f.value}</p>
                </div>
              </div>
            ))}
            <div className="about__experience card">
              <div className="about__exp-row">
                <div className="about__exp-item">
                  <span className="about__exp-num gradient-text">8.9</span>
                  <span className="about__exp-label">CGPA</span>
                </div>
                <div className="about__exp-divider" />
                <div className="about__exp-item">
                  <span className="about__exp-num gradient-text">100+</span>
                  <span className="about__exp-label">LeetCode</span>
                </div>
                <div className="about__exp-divider" />
                <div className="about__exp-item">
                  <span className="about__exp-num gradient-text">75th+</span>
                  <span className="about__exp-label">SQL %ile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
