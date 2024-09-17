import React from 'react';
import StarfieldAnimation from 'react-starfield';
import './Starfield.css';
import { Me } from './Me';
import { Projects } from './Projects';

export const Starfield = () => {
  return (
    <div className="starfield-container">
      <StarfieldAnimation
        numParticles={1000}
        depth={1500}
        speed={0.8}
        lineWidth={1.2}
        starRadius={0.7}
      />
      <Me />
      <Projects />

    </div>
  );
};
