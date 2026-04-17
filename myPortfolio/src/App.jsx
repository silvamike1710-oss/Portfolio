import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />

      <footer id="contact" className="contact">
        <ContactForm />

        <nav className="contact-links">
          <a href="https://linkedin.com">Linkedin</a>
          <a href="https://github.com">Github</a>
        </nav>
      </footer>
    </>
  );
}

export default App;