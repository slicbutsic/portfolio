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
            In early 2023, I decided to pivot to a career in software development,<br />
            driven by an interest in problem-solving and a keen curiosity in programming.
            <br /><br />
            My background in Marketing and Business has equipped me with a strong foundation
            in strategic thinking and project management, allowing me <br />to approach software
            development with a unique perspective.
            <br /><br />
            Throughout this transition, I have faced challenges that have <br /> helped me grow,
            fostering resilience and adaptability.
            <br /><br />
            Since then, I have dedicated myself to advancing my skills
            in <br /> software development, tackling technical challenges head-on.
            <br /><br />
            I am excited to make meaningful contributions to the tech <br /> community and create innovative solutions.</p>
          <br />
          <a
            href='https://slicbutsic.github.io/portfolio/CV.pdf'
            download
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 bg-white text-[#4831d4] font-thin tracking-widest p-1 px-4 rounded overflow-hidden cursor-pointer downloadCV">
            Download CV
            <span className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-gray-500 to-white transition-all duration-300 ease-in-out"></span>
          </a>

          <div className='skillIcons flex justify-center flex-wrap gap-2'>
            <img alt="Next.js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            <img alt="TypeScript" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <img alt="js" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img alt="React" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <img alt="Tailwind" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <img alt="Ruby" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg" />
            <img alt="Ruby on Rails" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg" />
            <img alt="SQL" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <img alt="SQLite" width="40px" className="filter invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain-wordmark.svg" />
            <img alt="PostgreSQL" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <img alt="CSS" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <img alt="Sass" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
            <img alt="Bootstrap" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
            <img alt="Heroku" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg" />
            <img alt="Vercel" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" />
            <img alt="HTML" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
