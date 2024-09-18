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
        } w-64`}
      >
        <div className='text-black p-4'>
          {/* Close Button */}
          <div className='flex justify-end'>
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon className='text-black h-5' icon={faTimes} />
            </button>
          </div>

          {/* Sidebar Content */}
          {/* <h1 className='text-lg font-bold mb-6'>Menu</h1> */}
          <ul>
            <li className='mb-4'><a href='#'>Home</a></li>
            <li className='mb-4'><a href='#'>About</a></li>
            <li className='mb-4'><a href='#'>Contact</a></li>
            <li className='mb-4'><a href='#'>Services</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};
