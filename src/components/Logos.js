import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';
import './Logos.css';

export const Logos = () => {
  return (
    <div className='logos' >
      <img className='instaLogo' src={instagram} alt="" />
      <img className='linkedinLogo' src={linkedin} alt="" />
      <img className='githubLogo' src={github} alt="" />
    </div>
  )
}
