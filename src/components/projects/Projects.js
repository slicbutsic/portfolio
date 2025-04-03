import React from 'react';
import './projects.css';

import { projects } from './projects-object';

export const Projects = () => {
  return (
    <>
      <div id='projects' className="projectsContainer">
        <h2 className="projectHeading text-white text-3xl font-thin tracking-widest mb-8 text-center">Projects</h2>
        <div className="box-projects grid gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="relative py-2 px-3 projectCard rounded-lg overflow-visible bg-[rgba(51, 51, 51)]"
              >
                <div className="text-white pb-0 pt-2 px-4 flex-col items-start">
                  {project.newProject && (
                    <span className="new-label">
                      Just Dropped
                      {/* Under Update */}
                    </span>
                  )}

                  {project.inProgress && (
                    <span className="in-progress-label">
                      In Progress 🔥
                    </span>
                  )}
                </div>
                <div className="overflow-visible py-2">
                  <img className="rounded-md" src={project.image} alt={project.name} width={300} />
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-large text-white text-center">{project.name}</h4>
                  <p className="text-white font-thin tracking-widest">{project.description}</p>
                  <div className="flex justify-center items-center mt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition duration-200 mr-4"
                    >
                      {/* github svg */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6 transition duration-200 hover:fill-gray-600"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.57c.4.074.55-.174.55-.386 0-.192-.007-.7-.01-1.372-2.03.43-2.46-.98-2.46-.98-.332-.84-.81-1.06-.81-1.06-.66-.45.05-.44.05-.44.732.052 1.13.752 1.13.752.652 1.11 1.71.79 2.12.604.065-.472.25-.79.45-.97-1.82-.21-3.73-.91-3.73-4.04 0-.89.318-1.62.84-2.2-.085-.21-.36-1.06.078-2.21 0 0 .69-.22 2.26.84A7.935 7.935 0 0 1 8 2.877a7.93 7.93 0 0 1 2.07.284c1.57-1.06 2.26-.84 2.26-.84.43 1.15.164 2 .08 2.21.522.58.84 1.31.84 2.2 0 3.16-1.91 3.83-3.73 4.04.26.22.49.66.49 1.33 0 .96-.01 1.74-.01 1.98 0 .213.15.465.56.386A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    {!project.inProgress && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center gap-2 bg-white text-[#4831d4] font-thin tracking-widest p-1 px-4 rounded overflow-hidden cursor-pointer visitButton"
                    >
                      {"Visit"}
                      <span className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-gray-500 to-white transition-all duration-300 ease-in-out"></span>
                    </a>
                  )}
                  </div>
                </div>
                {/* framework stamp start */}
                <div className="absolute bottom-[-6px] right-[-6px]">
                  {project.frameworkAlt === 'Ruby on Rails' && (
                    <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <img
                        src={project.frameworkLogo}
                        alt={project.frameworkAlt}
                        width="50" />
                    </div>
                  )}
                  {project.frameworkAlt !== 'Ruby on Rails' && (
                    <img
                      src={project.frameworkLogo}
                      alt={project.frameworkAlt}
                      width="50"
                      className="rounded-full" />
                  )}
                </div>
                {/* framework stamp end */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
