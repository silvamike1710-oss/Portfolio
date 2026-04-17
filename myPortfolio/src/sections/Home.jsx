import Section from "../components/Section";
import Conveyor from "../components/Conveyor";
import '../App.css';

export default function Home() {
  return (
    <Section id="home" className="home">
      <h1 className="title">PORTFOLIO</h1>
      <p>A full stack developer's portfolio.</p>
      <Conveyor />
    </Section>
  );
}