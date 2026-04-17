import Section from "../components/Section";
import '../App.css';

export default function Projects() {
  return (
    <Section id="projects" className="projects">
      <h1>Projects</h1>

      <ul className="grid-list">
        <li>
          <a href="https://github.com/silvamike1710-oss/TriviaFam.git">
            Kahoot Clone - a clone made with javascript and a node server
          </a>
          <img src="/images/kahoot-start.png" alt="kahoot" />
        </li>

        <li>
          <a href="https://github.com/silvamike1710-oss/MicroFront.git">
            Micro Frontend - a micro front end with 3 partitions
          </a>
          <img src="/images/mfe.jpeg" alt="mfe" />
        </li>
           <li>
          <a href="https://github.com/silvamike1710-oss/BolosDaSalette.git">
            Bolos da Salette - a freelance website i made with html, css and js
          </a>
          <img src="/images/mfe.jpeg" alt="mfe" />
        </li>
      </ul>
    </Section>
  );
}