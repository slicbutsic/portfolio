import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {

  return (
    <>
      <div className='bg-white w-16 h-16 rounded-full ml-12 mt-8 flex items-center justify-center'>
        <FontAwesomeIcon className='h-5' icon={faBars} />
      </div>
    </>
  )
}
