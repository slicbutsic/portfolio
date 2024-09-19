import React from 'react';
import projectOne from '../../images/projectOne.png';
import projectTwo from '../../images/projectTwo.png';
import './projects.css';

// Array of projects with image and description
const projects = [
  {
    image: projectOne,
    description: 'This is a description for Project One',
  },
  {
    image: projectTwo,
    description: 'This is a description for Project Two',
  }
];

// Projects component
export const Projects = () => {
  return (
    <div className='projectsContainer'>
      <h2 className="text-white text-5xl font-thin tracking-widest mb-4 projectH2">Projects</h2>
      <div className="projectContainer">
        <div className="projectGrid">
          {projects.map((project, index) => (
            <div key={index} className="projectCard">
              <img className="projectImage" src={project.image} alt={`Project ${index + 1}`} />
              <div className="projectText">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
