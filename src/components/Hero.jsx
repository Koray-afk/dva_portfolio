import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to opportunities
          </div>

          <h1 className="hero__name">
            Hi, I'm <span className="gradient-text">Abhiman Singh</span>
          </h1>

          <div className="hero__typewriter">
            <span className="hero__role">Data Analyst</span>
            <span className="hero__divider"> · </span>
            <span className="hero__role hero__role--2">Python &amp; SQL</span>
            <span className="hero__divider"> · </span>
            <span className="hero__role hero__role--3">Power BI</span>
          </div>

          <p className="hero__bio">
            Aspiring Data Analyst with hands-on experience in <strong>exploratory data analysis</strong>,
            statistical modelling, and data visualization using <strong>Python</strong> and <strong>Power BI</strong>.
            Strong foundation in SQL — 75th+ percentile on LeetCode.
          </p>

          <div className="hero__meta">
            <span className="hero__meta-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              abhiman.sinngh2024@nst.rishihood.edu.in
            </span>
            <span className="hero__meta-item">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              9125633331
            </span>
          </div>

          <div className="hero__actions">
            <a href="#projects" id="hero-view-work-btn" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) }}>
              View My Work
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="mailto:abhiman.sinngh2024@nst.rishihood.edu.in" id="hero-contact-btn" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://linkedin.com/in/abhimansingh" id="hero-linkedin" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/abhimansingh" id="hero-github" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://leetcode.com/abhimansingh" id="hero-leetcode" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LeetCode">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrap animate-float">
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                <span className="hero__avatar-initials">AS</span>
              </div>
              <div className="hero__avatar-ring hero__avatar-ring--1" />
              <div className="hero__avatar-ring hero__avatar-ring--2" />
            </div>
            <div className="hero__stat hero__stat--1">
              <span className="hero__stat-num">8.9</span>
              <span className="hero__stat-label">CGPA</span>
            </div>
            <div className="hero__stat hero__stat--2">
              <span className="hero__stat-num">100+</span>
              <span className="hero__stat-label">LeetCode</span>
            </div>
            <div className="hero__stat hero__stat--3">
              <span className="hero__stat-num">2+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}
