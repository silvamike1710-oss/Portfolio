import { useEffect, useRef } from "react";
import '../App.css';

export default function Conveyor() {
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

  const loopImages = [...images, ...images];

  useEffect(() => {
    const belt = beltRef.current;
    let position = 0;

    function animate() {
      position -= 1;

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
          <img key={i} src={src} className="item" alt="tech" />
        ))}
      </div>
    </div>
  );
}