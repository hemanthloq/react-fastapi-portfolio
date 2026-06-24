
import React, { useState, useEffect } from 'react';

const diffClass = { easy: 'diff-easy', mid: 'diff-mid', hard: 'diff-hard' };
const diffLabel = { easy: 'Easy', mid: 'Medium', hard: 'Hard' };

export default function Projects() {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/projects")
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-eyebrow">03 — Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-sub">
          A mix of live work and things cooking in the background.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card${project.status === 'soon' ? ' coming' : ''}`}
            >
              <span className={`proj-diff ${diffClass[project.difficulty]}`}>
                {diffLabel[project.difficulty]}
              </span>

              <div className={`project-status ${project.status === 'live' ? 'status-live' : 'status-soon'}`}>
                {project.status === 'live' ? 'Live' : 'Coming Soon'}
              </div>

              <div className="project-icon">{project.icon}</div>
              <div className="project-name">{project.name}</div>
              <p className="project-desc">{project.desc}</p>

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-chip">{tech}</span>
                ))}
              </div>

              {project.link ? (
                <a href={project.link} className="project-link live" target="_blank" rel="noreferrer">
                  View Project ↗
                </a>
              ) : (
                <span className="project-link">In progress…</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
