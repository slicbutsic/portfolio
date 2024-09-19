import React from 'react';
import projectOne from '../../images/projectOne.png';
import projectTwo from '../../images/projectTwo.png';
import './projects.css';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


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
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg shadow-md bg-transparent border border-gray-300 flex flex-col items-center"
          >
            <div className="text-white text-lg mb-4 text-center">
              <h3 className="text-xl font-semibold">{project.name}</h3> {/* Project name above the image */}
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 w-full flex justify-center">
              <img
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-auto h-full object-contain"
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

      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      </Card>


    </div>





  );
};
