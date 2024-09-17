import React from 'react';
import StarfieldAnimation from 'react-starfield';
import './Starfield.css';
export const Starfield = () => {
  return (
    <div className="starfield-container">
      <StarfieldAnimation
        // numParticles={1000}
        // depth={1500}
        // // speed={0.8}
        // // lineWidth={1.2}
        // starRadius={0.7}
      />
    </div>
  );
};
