import Section from "../components/Section";
import '../App.css';

export default function Skills() {
  return (
    <Section id="skills" className="skills">
      <h1>Skills</h1>

      <h3>Frontend</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React</li>
      </ul>

      <h3>Backend</h3>
      <ul>
        <li>Python</li>
        <li>APIs</li>
      </ul>
    </Section>
  );
}