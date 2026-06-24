import { useState, useEffect } from "react";

const STRINGS = [
  "Building AI products end to end",
  "Brute force first, optimise later",
  "2nd year AIML · PES University", 
  "One step at a time → then ship it",
  "I get behind problems until they break",
  "I think different, not just harder"
];
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [string, setString] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        if (!isDeleting) {
          if (prevIndex < STRINGS[string].trim().length) {
            setIsTyping(true);
            return prevIndex + 1;
          } else {
            setIsTyping(false);
            setTimeout(() => {
              setIsDeleting(true);
              setIsTyping(true);
            }, 1000);
            return prevIndex;
          }
        } else {
          if (prevIndex > 0) {
            return prevIndex - 1;
          } else {
            setIsDeleting(false);
            setString(prev => (prev + 1) % STRINGS.length);
            return 0;
          }
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [string, isDeleting]);

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-inner">
        <div className="hero-tag">
          Available for internships · Dec 2026
        </div>

        <h1 className="hero-name">
          <span className="nick">heddy</span>
          Hemanth <span className="highlight">Reddy</span>
        </h1>

        <div className="hero-terminal">
          <span className="prefix">$ </span>
          <span className="typed">{STRINGS[string].slice(0, index)}</span>
          <span className={`cursor ${isTyping ? "cursor-blink" : "cursor-pause"}`} />
        </div>

        <p className="hero-sub">
          2nd-year AIML student at PES University building AI products end to end —
          RAG pipelines, local language models, and autonomous agents.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects ↓
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch →
          </a>
        </div>
      </div>

      <div className="hero-scroll">SCROLL</div>
    </section>
  );
}