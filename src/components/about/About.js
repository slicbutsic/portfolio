import avatar from '../../images/avatar.png';
import './about.css';

export const About = () => {
  return (

    <>
    <div className="flex justify-between items-center h-screen px-10 bgbg">
      {/* Avatar Section */}
      <div className="flex-shrink-0">
        <img className="avatar rounded-full w-60 h-60" src={avatar} alt="Lucas Siviglia's Avatar" />
      </div>

      {/* Text Section */}
      <div className="max-w-lg">
        <h2 className="text-white text-3xl font-thin tracking-widest">
          About me
        </h2>
        <p className="text-white text-2xl font-thin tracking-widest">
          I'm a passionate junior full-stack software developer with a background in business and marketing. I found myself increasingly drawn to technology and recently graduated from a coding bootcamp, where I discovered a genuine passion for web development.
          <br /><br />
          My marketing background provides me with a strong foundation in creativity, user understanding, and data analysis, which supports my growth and effectiveness as a web developer.
        </p>
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <img alt="React" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      <img alt="Tailwind" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
      <img alt="JavaScript" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
      <img alt="Ruby" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg" />
      <img alt="Ruby on Rails" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg" />
      <img alt="SQL" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
      <img alt="SQLite" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" />
      <img alt="PostgreSQL" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
      <img alt="CSS" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
      <img alt="Sass" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
      <img alt="Bootstrap" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
      <img alt="HTML" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    </div>

    <div className="background-container">
      {/* Add your content here */}
    </div>



    </>




  );
};
