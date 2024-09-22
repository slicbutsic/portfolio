import React from 'react';
import './about.css';

export const About = () => {
  return (
    <div id="about" className="flex justify-center items-center aboutContainer">
      <div className="bg-white p-4 rounded-lg shadow-lg backgroundBoxAbout">
        <div className="text-center aboutMeText">
          <h2 className="text-white text-3xl font-thin tracking-widest mb-4 text-center aboutMe">
            About
          </h2>
          <p className="text-white font-thin tracking-widest ">
            My background in Marketing and Business has equipped me with a strong
            foundation in strategic thinking and project management.
            <br /><br />
            In early 2023, I decided to pivot to a career in software development, driven by a
            passion for problem-solving and a keen interest in programming.
            <br /><br />
            To support myself during this transition, I took on a hospitality job,
            where I developed resilience, adaptability, and a strong work ethic.
            <br /><br />
            This blend of marketing and hospitality experience has given me a
            strong ability to overcome challenges and adapt to new environments.
            <br /><br />
            Since then, I have dedicated myself to upskilling in software development,
            tackling technical challenges with enthusiasm and commitment.
          </p>
          <br />
          <a
            href='/CV.pdf'
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 bg-white text-[#4831d4] font-thin tracking-widest p-1 px-4 rounded overflow-hidden cursor-pointer downloadCV">
            Download CV
            <span className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-gray-500 to-white transition-all duration-300 ease-in-out"></span>
          </a>

          <div className='skillIcons flex justify-center flex-wrap gap-2'>
            <img alt="React" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <img alt="Tailwind" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <img alt="js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img alt="Ruby" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg" />
            <img alt="Ruby on Rails" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg" />
            <img alt="SQL" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <img alt="SQLite" width="40px" className="filter invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain-wordmark.svg" />
            <img alt="PostgreSQL" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <img alt="CSS" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <img alt="Sass" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
            <img alt="Bootstrap" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
            <img alt="Heroku" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg" />
            <img alt="HTML" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
