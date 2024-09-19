import { useState, useEffect } from 'react';
import './projects.css';
import projectOne from '../../images/projectOne.png';
import projectTwo from '../../images/projectTwo.png';


export const Projects = () => {
  const [showProjects, setShowProjects] = useState(false); // State to control visibility
  const [moveDiagonal, setMoveDiagonal] = useState(false); // State to control diagonal movement
  const [moveBack, setMoveBack] = useState(false); // State to control return movement

  // Timer reference
  let timer;

  const toggleProjects = () => {
    if (!showProjects) {
      // Show projects and start movement
      setShowProjects(true);
      setMoveDiagonal(true);

      // Clear existing timer if any
      if (timer) {
        clearTimeout(timer);
      }

      // Set a timer to return the rocket and hide projects after 30 seconds
      timer = setTimeout(() => {
        setMoveDiagonal(false); // Stop diagonal movement
        setMoveBack(true); // Start return movement
        setTimeout(() => {
          setMoveBack(false); // Stop return movement
          setShowProjects(false); // Hide projects
        }, 500); // Duration of the return animation
      }, 2000); // 30 seconds
    } else {
      setMoveDiagonal(false); // Stop diagonal movement
      setMoveBack(true); // Start return movement
      setTimeout(() => {
        setMoveBack(false); // Stop return movement
        setShowProjects(false); // Hide projects
      }, 500); // Duration of the return animation
    }
  };

  // Effect to clean up timer if component unmounts
  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const projects = [projectOne, projectTwo];

  return (
    <>
      <div className='divProjects'>
        <h4
          className={`text-white projects hover:cursor-pointer
            ${moveDiagonal ? 'move-diagonal' : ''}
            ${moveBack ? 'move-back' : ''}`}
          onClick={toggleProjects}
        >
           🚀
        </h4>
        {showProjects && ( // Conditionally render this part
          <div className='projectBoxes'>
            {projects.map((project, index) => (
              <div key={index} className="max-w-sm border p-3 rounded-md hover transition-transform duration-700 hover:scale-[1.2]">
                <img className="projectPhotoOne rounded-md" src={project} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
