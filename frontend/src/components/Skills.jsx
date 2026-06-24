const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'LangChain', learning: true },
      { name: 'LangGraph', learning: true },
      { name: 'OpenAI API', learning: true },
      { name: 'Ollama · Phi-4', learning: true },
      { name: 'RAG · ChromaDB', learning: true },
      { name: 'Whisper STT', learning: true },
      { name: 'ElevenLabs TTS', learning: true },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'FastAPI' },
      { name: 'SQLite', learning: true },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'CS Foundation',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms · DAA' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'Linear Algebra' },
      { name: 'Automata Theory' },
    ],
  },
  {
    title: 'Tooling',
    skills: [
      { name: 'Git', learning: true },
      { name: 'Render · Railway', learning: true },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-eyebrow">02 — Skills</p>
        <h2 className="section-title">What I Work With</h2>
        <p className="section-sub">
          Core tools I know well, plus what I'm actively building with.{' '}
          <span style={{ color: 'var(--blue2)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>↗ = learning</span>
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="skill-group reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag${skill.learning ? ' learning' : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
