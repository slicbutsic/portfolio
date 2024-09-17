import avatar from '../images/avatar.png'
import './Me.css'

export const Me = () => {
  return (

    <>
    <div className='flex items-start justify-start h-screen'>

      {/* <div className='absolute right-0 top-1/3 transform -translate-y-1/2 mr-36'>
        <div className='bg-white rounded-full w-50 h-50 flex items-center justify-center'>
          <img src={avatar} alt="Avatar of Lucas Siviglia" className='w-48 h-52 rounded-full' />
        </div>
      </div> */}




      {/* <div className='absolute top-1/3 left-56 transform -translate-y-1/2'>
        <div className='text-white text-3xl font-thin tracking-widest'>LUCAS SIVIGLIA</div>
        <div className='text-white text-3xl font-thin tracking-widest mt-5'>Junior Full Stack Web Developer</div>
      </div>
    </div> */}


<div className='nameAndJob'>
        <div className='text-white text-3xl font-thin tracking-widest'>LUCAS SIVIGLIA</div>
        <div className='text-white text-3xl font-thin tracking-widest mt-5'>Junior Full Stack Web Developer</div>
      </div>
    </div>



  </>
  )
}
