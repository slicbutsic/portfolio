import React from 'react';
import projectOne from '../../images/projectOne.png';
import projectTwo from '../../images/projectTwo.png';
import './projects.css';

// Array of projects with image, name, description, and URL
const projects = [
  {
    image: projectOne,
    name: 'GameCard Rentals',
    description: 'An Airbnb-inspired platform for renting Pokémon cards, featuring listings, search and filter options, booking management, and an interactive map.',
    url: 'https://pokemon-rental-c69de4a4ee1b.herokuapp.com'
  },
  {
    image: projectTwo,
    name: 'LearnWise',
    description: 'A platform that offers education solutions with payment integration through Stripe, featuring a chatbot with AI assistance and chatrooms within the courses.',
    url: 'https://www.learn-wise.live'
  }
];

// Projects component
export const Projects = () => {
  return (
    <div className="projectsContainer">
      <h2 className="projectHeading text-white text-5xl font-thin tracking-widest mb-8 text-center">Projects</h2>
      <div className="box-projects grid gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg shadow-md border border-gray-700 flex flex-col items-center bg-[rgba(24,24,27,0.9)]"

          >
            <div className="text-white text-lg mb-4 text-center">
              <h3 className="text-xl font-semibold">{project.name}</h3> {/* Project name above the image */}
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 w-full flex justify-center">
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-auto h-32 object-contain rounded-sm"
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="text-white text-lg mt-4 text-center">
              <p>{project.description}</p> {/* Project description */}
            </div>
          </a>
        ))}
      </div>




    </div>





  );
};
