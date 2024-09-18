import avatar from '../images/avatar.png'
import './Me.css'

export const Me = () => {
  return (
    <>
      <div className='flex items-center justify-between nameAndJobPrimaryDiv'>
        <div className='nameAndJob'>
          <h1 className='text-white text-3xl font-thin tracking-widest'>LUCAS SIVIGLIA</h1>
          <h2 className='text-white text-3xl font-thin tracking-widest mt-5'>Junior Full Stack Web Developer</h2>
        </div>
        <div>
          <img className='avatar rounded-full' src={avatar} alt="Lucas Siviglia's Avatar" />
        </div>
      </div>
  </>
  )
}
