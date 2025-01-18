import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Projects.css";
import tetris from "../assets/tetris.png";
import databeast from "../assets/databeast.png";
import dashboard from "../assets/dashboard.png";
import docteur from "../assets/docteur.png";

function Projects() {
  const elementRefs = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Tetris game that gave me a good understanding of how Python and especially Pygame work.",
      image: tetris,
      technologies: ["python", "pygame"],
      githubLink: "https://github.com/Mandresy11/Tetris"
    },
    {
      id: 2,
      title: "Project 2",
      description: "A React Native project that creates a 'swipe' app that allows users to scroll through cards of cute animals, with the ability to swipe right to 'like' or left to 'pass'.",
      image: databeast,
      technologies: ["react-native", "expo"],
      githubLink: "https://github.com/kireisnacks/DATABEAST"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Create an admin dashboard with React just for fun",
      image: dashboard,
      technologies: ["React", "bootstrap"],
      githubLink: "https://github.com/Mandresy11/FoodsAdmin"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Create an admin dashboard with React just for fun",
      image: docteur,
      technologies: ["React-native", "nodejs", "express", "mongodb"],
      githubLink: "https://github.com/Mandresy11/Docteurs"
    },
  ];

  const openGitHubLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2
          ref={(el) => (elementRefs.current[0] = el)}
          className="section-title animate-on-scroll"
        >
          My Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (elementRefs.current[index + 1] = el)}
              className="project-card animate-on-scroll"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-project" 
                    onClick={() => openGitHubLink(project.githubLink)}
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
