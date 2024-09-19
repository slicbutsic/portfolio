import React from 'react';
import StarfieldAnimation from 'react-starfield';
import './space.css';
// import { Hero } from '../hero/Hero';
// import { Projects } from '../projects/Projects';


export const Space = () => {
  return (
    <div className="starfield-container">
      <StarfieldAnimation
        // numParticles={1000}
        // depth={1500}
        // speed={0.8}
        // lineWidth={1.2}
        // starRadius={0.7}
      />
      {/* <Projects /> */}

    </div>
  );
};
