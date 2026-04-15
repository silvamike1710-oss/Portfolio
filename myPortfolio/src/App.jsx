import './App.css';
import { useEffect, useRef } from "react";

/* ---------------- Navbar ---------------- */
function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Michael A.</span>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

/* ---------------- Section Wrapper ---------------- */
function Section({ id, children, className }) {
  return (
    <section id={id} className={`section ${className}`}>
      <Navbar />
      <div className="content">{children}</div>
    </section>
  );
}

/* ---------------- Conveyor Component ---------------- */
function Conveyor() {
  const beltRef = useRef(null);

  const images = [
    "java.svg",
    "js.svg",
    "html.svg",
    "css.svg",
    "ruby.svg",
    "npm.svg",
    "php.svg",
    "angular.svg",
    "docker.svg"
  ];

  // duplicate for infinite loop
  const loopImages = [...images, ...images];

  useEffect(() => {
    const belt = beltRef.current;
    let position = 0;
    const speed = 1;

    function animate() {
      position -= speed;

      if (Math.abs(position) >= belt.scrollWidth / 2) {
        position = 0;
      }

      belt.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="belt-container">
      <div className="belt" ref={beltRef}>
        {loopImages.map((src, i) => (
          <img key={i} src={src} className="item" alt="" />
        ))}
      </div>
    </div>
  );
}

/* ---------------- App ---------------- */
function App() {
  return (
    <>
      <Section id="home" className="home">
        <h1 className="title">PORTFOLIO</h1>
        <p>A full stack developer's portfolio.</p>

        <Conveyor />
      </Section>

      <Section id="about" className="about">
        <h1>Hello, I'm Michael!</h1>
        <p>
          I’m a beginner full stack developer focused on building practical,
          user-centered web applications. I have experience working with both
          front-end and back-end technologies, and I’m continuously improving my
          skills in areas like JavaScript, APIs, and modern frameworks.
        </p>
      </Section>

      <Section id="skills" className="skills">
        <h1>Skills</h1>
        <ul>
          <h3>Frontend Development </h3>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Responsive Design (Flexbox, Grid)</li>
            <li>React (basic), DOM manipulation</li>
          <h3>Backend Development</h3>
            <li></li>Python
           <li>REST API development</li>
            <li>FastAPI (or Flask basics)</li>
            <li>Authentication & data handling</li>
         <h3>Databases </h3>
            <li>PostgreSQL</li>
            <li>Basic SQL (queries, joins, CRUD operations)</li>
          <h3>Tools & Technologies</h3>
            <li>Git & GitHub</li>
            <li>Docker (basic usage)</li>
            <li>Vite / Webpack</li>
            <li>Linux (basic commands)</li>
          <h3>Testing & Practices</h3>
           <li>Unit testing (pytest basics)</li> 
            <li>Clean code principles</li>
            <li>Debugging and problem solving</li>

        </ul>
      </Section>

      <Section id="projects" className="projects">
        <h1>Projects</h1>
        <ul>
          <li>Kahoot Clone</li>
          <li>3-part MFE</li>
          <li>To-Do lists</li>
        </ul>
      </Section>

      <Section id="contact" className="contact">
        <h1>Contact</h1>
        <ul>
          <li>Li: /michael-alexander17</li>
          <li>Git: /silvamike1710-oss</li>
          <li>G: silvamike1710@gmail.com</li>
        </ul>
      </Section>
    </>
  );
}

export default App;