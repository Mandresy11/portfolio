import React from 'react';
import "../styles/Stack.css";
import vscode from "../assets/vscode.png";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaPhp, 
  FaDatabase, 
  FaGit, 
  FaCode,

} from 'react-icons/fa';
import { SiMongodb, SiMysql,  SiTailwindcss } from 'react-icons/si';

const Stack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: FaCode,
      items: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' }
      ]
    },
    {
      category: 'Backend',
      icon: FaCode,
      items: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' }
      ]
    },
    {
      category: 'Database',
      icon: FaDatabase,
      items: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
      ]
    },
    {
      category: 'Tools',
      icon: FaCode,
      items: [
        { name: 'VS Code', icon: undefined, color: '#007ACC' },
        { name: 'Git', icon: FaGit, color: '#F05032' }
      ]
    }
  ];

  return (
    <div className="tech-stack-container">
      <h2 className="section-title animate-on-scroll  ">Technologies & Skills</h2>
      
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.category} className="tech-card">
            <div className="card-header">
              <tech.icon className="category-icon" />
              <h3 className="category-title">{tech.category}</h3>
            </div>
            <div className="tech-items">
              {tech.items.map((item) => (
                <div key={item.name} className="tech-item">
                  <div className="icon-container">
                    {(item.icon == undefined) ? <img src={vscode} alt="vscode" className="tech-icon" /> : <item.icon size={40} color={item.color} className="tech-icon" />}
                  </div>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;