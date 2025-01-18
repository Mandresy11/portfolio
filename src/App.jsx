import React from "react";
import "./App.css";
import "./styles/animations.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-content">
          <h1>Portfolio</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <main>
        <Home />
        <About />
        <Projects />
        <Stack/>
        <Contact />
      </main>
    </>
  );
}

export default App;
