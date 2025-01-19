import React, { useEffect, useRef } from "react";
import mandresy from "../assets/mandresy.jpg";
import "../styles/Home.css";

function Home() {
  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleViewWork = () => {
    window.open("https://github.com/Mandresy11", "_blank");
  };

  return (
    <section id="home" className="hero">
      <div className="container home-content">
        <div className="home-text">
          <h1
            ref={(el) => (textRefs.current[0] = el)}
            className="animate-on-scroll"
          >
            Hello, I'm Mandresy Rakotonanahary
          </h1>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="animate-on-scroll"
          >
            Web and Mobile Developer
          </p>
          <button
            ref={(el) => (textRefs.current[2] = el)}
            className="animate-on-scroll"
            onClick={handleViewWork}
          >
            View My Work
          </button>
        </div>
        <div
          ref={(el) => (textRefs.current[3] = el)}
          className="home-image animate-on-scroll"
        >
          <img
            src={mandresy}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;