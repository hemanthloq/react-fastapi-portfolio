export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-eyebrow">01 — About</p>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-sub">
          Building things that think.
        </p>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm <strong>Hemanth Reddy</strong>, a 2nd-year B.Tech student specialising in
              AI &amp; ML at <span className="accent">PES University, Bangalore</span>. I focus on
              building <strong>AI products end to end</strong> — RAG pipelines, local language
              models, and autonomous agents.
            </p>
            <p>
              My interest isn't in surface-level AI demos. I care about systems that
              are <strong>efficient, deployable, and actually useful</strong> — whether that means
              running a model locally with Ollama or wiring up a multi-step LangGraph agent.
            </p>
            <p>
              Outside of AI, I enjoy working on the <strong>full stack</strong> — FastAPI backends,
              React frontends, and everything in between. I believe good software is invisible:
              it just works.
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">7</div>
                <div className="stat-label">AI projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">∞</div>
                <div className="stat-label">Problems to solve</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">1</div>
                <div className="stat-label">Goal — AGI era engineer</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">2028</div>
                <div className="stat-label">Graduating</div>
              </div>

              <div className="education-card">
                <div className="edu-label">Education</div>
                <div className="edu-name">PES University, Bangalore</div>
                <div className="edu-sub">B.Tech — Artificial Intelligence &amp; Machine Learning · 2024–2028</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
