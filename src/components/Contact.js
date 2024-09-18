import './Contact.css';
// import { SendEmail } from './SendEmail';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';


export const Contact = () => {



  useEffect(() => {
    // Initialize EmailJS using environment variable for public key
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  const sendMail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const parms = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    emailjs.send("service_bqs8yqk", "template_7s3c345", parms)
      .then((result) => {
        alert("Email sent successfully!");
        console.log(result.text);
      }, (error) => {
        alert("Failed to send the email.");
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
    {/* Contact Information */}
    <div className='text-white text-5xl font-thin tracking-widest getInTouch'>
      <h1 className='textGetInTouch'>Get in Touch</h1>
      <div className='email'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
        </svg>
        <p className='emailAnswer'>siviglialucas@gmail.com</p>
      </div>
      {/* Phone */}
      <div className='phone'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <p className='phoneAnswer'>0 406 345 709</p>
      </div>
      {/* Location */}
      <div className='location'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p className='locationAnswer'>Australia</p>
      </div>
    </div>

    {/* Contact Form */}
    <section id='contact' className='container'>
      <h2 className="text-white text-xl font-thin tracking-widest ">Send me a message!</h2>
      <form className='formContact' onSubmit={sendMail}>
        <div className='form-group'>
          <label className="text-white" htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className='form-group'>
          <label className="text-white" htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label className="text-white" htmlFor='subject'>Subject</label>
          <input type='text' id='subject' name='subject' required />
        </div>
        <div className='form-group'>
          <label className="text-white" htmlFor='message'>Message</label>
          <textarea id='message' name='message' rows='4' required></textarea>
        </div>
        <button className="font-thin tracking-widest shootMessage" type='submit'>
          SHOOT
          <svg width="42" height="12" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg">
            <path className="bow-arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
          </svg>
        </button>
      </form>
    </section>
  </div>
  )
}
