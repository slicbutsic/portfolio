import './Projects.css'
import projectOne from '../images/projectOne.png';
import projectTwo from '../images/projectTwo.png';

export const Projects = () => {
  return (
    <>
    <h4 className="text-white projects">Projects 🚀</h4>
    <div className='flex' >
      <div class="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
        <img class="projectPhotoOne rounded-md" src={projectOne} alt="Pokemon Cards"/>
      </div>
      <div class="max-w-sm border rounded p-3 hover:cursor-pointer m-4">
        <img class="projectPhotoOne rounded-md" src={projectTwo} alt="Pokemon Cards"/>
      </div>
    </div>
  </>
  )
}
