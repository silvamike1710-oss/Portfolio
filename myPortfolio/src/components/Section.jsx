import Navbar from "./Navbar";
import '../App.css';

export default function Section({ id, children, className }) {
  return (
    <section id={id} className={`section ${className}`}>
      <Navbar />
      <div className="content">{children}</div>
    </section>
  );
}