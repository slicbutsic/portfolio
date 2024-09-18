import { useState } from 'react';
import './Projects.css'
import projectOne from '../images/projectOne.png';
import projectTwo from '../images/projectTwo.png';

export const Projects = () => {
  const [showProjects, setShowProjects] = useState(false); // State to control visibility
  const [moveDiagonal, setMoveDiagonal] = useState(false); // State to control diagonal movement

  const toggleProjects = () => {
    setShowProjects(!showProjects); // Toggle visibility on click
    setMoveDiagonal(!moveDiagonal); // Toggle diagonal movement on click
  };

  return (
    <>
      <div className='divProjects'>
        <h4
          className={` text-white projects hover:cursor-pointer ${moveDiagonal ? 'move-diagonal' : ''}`}
          onClick={toggleProjects}
        >
          🚀
        </h4>
        {showProjects && ( // Conditionally render this part
          <div className='flex'>
            <div className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
              <img className="projectPhotoOne rounded-md hover transition-transform duration-700 hover:scale-[1.2]" src={projectOne} alt="Project One" />
            </div>
            <div className="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
              <img className="projectPhotoOne rounded-md hover transition-transform duration-700 hover:scale-[1.2]" src={projectTwo} alt="Project Two" />
            </div>
          </div>
        )}
      </div>


    </>
  );
};
