import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() {
  const elementRefs = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2
          ref={(el) => (elementRefs.current[0] = el)}
          className="section-title animate-on-scroll"
        >
          About Me
        </h2>
        <div
          ref={(el) => (elementRefs.current[1] = el)}
          className="card animate-on-scroll"
        >
          <p>
          I've been interested in computers since I was a child. This passion has driven me ever since I first came into contact with a computer, constantly pushing me to explore and understand the technologies that shape our world.Passionate about new challenges, especially in the web world 


          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
