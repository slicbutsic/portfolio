import React from 'react';
import CVImage from '../../images/LucasCVImage.png';
import './about.css';

export const About = () => {

  const handleImageClick = () => {
    // Needs to be fixed to open in a new tab
    window.location.href = '/resume';
  };

  return (
    <div id="about" className="aboutContainer"> {/* Adicionado o ID 'about' aqui */}
      <div className="flex justify-center items-center h-screen px-10">
        {/* CV Section */}
        <div className="ml-56 mr-28">
          <img
            className="CV rounded hover:scale-110 duration-700 ease-in-out transform cursor-pointer"
            src={CVImage}
            alt="Lucas Siviglia's Resume Preview"
            onClick={handleImageClick}
          />
        </div>
        {/* Text Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg backgroundBoxAbout">
          <div className="max-w-lg text-center">
            <h2 className="text-white text-3xl font-thin tracking-widest mb-4 text-left aboutMe">
              About me
            </h2>
            <p className="text-white font-thin tracking-widest text-left aboutMeText">
              My background in Marketing and Business has equipped me with a strong
              foundation in strategic thinking and project management.
              <br />
              <br />
              In early 2023,
              I decided to pivot to a career in software development, driven by a
              passion for problem-solving and a keen interest in programming.
              <br />
              <br />
              To support myself during this transition, I took on a hospitality job,
              where I developed resilience, adaptability, and a strong work ethic.
              <br />
              <br />
              This blend of marketing and hospitality experience has given me a
              strong ability to overcome challenges and adapt to new environments.
              <br />
              <br />
              Since then, I have dedicated myself to upskilling in software development,
              tackling technical challenges with enthusiasm and commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
