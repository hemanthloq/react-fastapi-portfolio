export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-eyebrow">04 — Contact</p>
        <h2 className="section-title">Let's connect</h2>
        <p className="section-sub">
          Open to internship opportunities, collaborations, and interesting conversations.
        </p>

        <div className="contact-grid" style={{ marginTop: '3rem' }}>

          <div className="contact-links reveal">
            <a
              href="https://github.com/hemanthloq"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cl-icon">🐙</div>
              <div>
                <span className="cl-label">GitHub</span>
                <span className="cl-val">github.com/hemanthloq</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/r-hemanth-reddy-a1bb323b6"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cl-icon">💼</div>
              <div>
                <span className="cl-label">LinkedIn</span>
                <span className="cl-val">linkedin.com/in/r-hemanth-reddy-a1bb323b6</span>
              </div>
            </a>

            <a
              href="mailto:avihemanth22@gmail.com"
              className="contact-link"
            >
              <div className="cl-icon">✉️</div>
              <div>
                <span className="cl-label">Email</span>
                <span className="cl-val">avihemanth22@gmail.com</span>
              </div>
            </a>

            <a
              href="http://localhost:8000/resume"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cl-icon">📄</div>
              <div>
                <span className="cl-label">Machine-readable resume (Agent JSON)</span>
                <span className="cl-val">resume-agent.json</span>
              </div>
            </a>
          </div>

          <div className="resume-card reveal" style={{ transitionDelay: '0.1s' }}>
            <h3>Available for Internships</h3>
            <p>
              Currently in 2nd year at PES University. Open to AI/ML engineering internships,
              research positions, and full-stack development roles starting from the next break.
            </p>
            <div className="resume-actions">
              <a
                href="http://localhost:8000/resume"
                className="resume-btn primary"
                target="_blank"
                rel="noreferrer"
              >
                ↓ Download Resume (JSON)
              </a>
              <button
                className="resume-btn secondary"
                onClick={() => alert('PDF resume coming soon! Check back in a few weeks.')}
              >
                ↓ Download Resume (PDF)
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
