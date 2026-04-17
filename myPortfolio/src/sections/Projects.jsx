import Section from "../components/Section";
import '../App.css';

export default function Projects() {
  return (
    <Section id="projects" className="projects">
      <h1>Projects</h1>

      <ul className="grid-list">
        <li>
          <a href="https://github.com/silvamike1710-oss/TriviaFam.git">
            Kahoot Clone
          </a>
          <img src="/images/kahoot-start.png" alt="kahoot" />
        </li>

        <li>
          <a href="https://github.com/silvamike1710-oss/MicroFront.git">
            Micro Frontend
          </a>
          <img src="/images/mfe.jpeg" alt="mfe" />
        </li>
           <li>
          <a href="https://github.com/silvamike1710-oss/BolosDaSalette.git">
            Site freelance para bolos. 
          </a>
          <img src="/images/mfe.jpeg" alt="mfe" />
        </li>
      </ul>
    </Section>
  );
}