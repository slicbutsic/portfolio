import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Icon */}
      <div
        className='bg-white w-16 h-16 rounded-full ml-12 mt-8 flex items-center justify-center cursor-pointer'
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon className='h-5' icon={faBars} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-96`}
      >
        <div className='text-black p-4'>
          {/* Close Button */}
          <div className='flex justify-start mt-8 ml-12'>
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon className='text-black h-8' icon={faTimes} />
            </button>
          </div>

          <ul>
            <li className='mb-8 mt-32 flex justify-center text-black text-4xl font-thin tracking-widest transform transition-transform duration-700 hover:scale-[1.2]'><a href='#'>Home</a></li>
            <li className='mb-8 flex justify-center text-black text-4xl font-thin tracking-widest transform transition-transform duration-700 hover:scale-[1.2]'><a href='#'>Projects</a></li>
            <li className='mb-8 flex justify-center text-black text-4xl font-thin tracking-widest transform transition-transform duration-700 hover:scale-[1.2]'><a href='#'>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};
