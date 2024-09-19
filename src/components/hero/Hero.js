import './hero.css'

import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import github from '../../images/github.png';


export const Hero = () => {
  return (
    <>
      <div className='heroContainer'>
        <div className='logos'>
          <a className='urlLink' href="https://www.linkedin.com/in/siviglialucas/" target="_blank" rel="noopener noreferrer">
            <img className='linkedinLogo' src={linkedin} alt="LinkedIn" />
          </a>
          <a className='urlLink' href="https://github.com/slicbutsic" target="_blank" rel="noopener noreferrer">
            <img className='githubLogo urlLink' src={github} alt="GitHub" />
          </a>
          <a className='urlLink' href="https://www.instagram.com/siviglialucas/" target="_blank" rel="noopener noreferrer">
            <img className='instaLogo' src={instagram} alt="Instagram" />
          </a>
        </div>




        <div className='flex items-center justify-between nameAndJobPrimaryDiv'>
          <div className='nameAndJob'>
            <h1 className='text-white text-3xl font-thin tracking-widest'>LUCAS SIVIGLIA</h1>
            <h2 className='text-white text-3xl font-thin tracking-widest mt-5'>Junior Full Stack Web Developer</h2>
          </div>
        </div>
      </div>
  </>
  )
}
