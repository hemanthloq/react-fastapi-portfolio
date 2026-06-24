export default function Navbar() {
  return (
    <nav>
      <span className="nav-logo">hemanth.reddy</span>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" className="nav-cta">Contact</a></li>
      </ul>
    </nav>
  );
}
