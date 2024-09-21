import './contact.css';
import { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const formRef = useRef(null); 

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  const sendMail = (e) => {
    e.preventDefault();

    const parms = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    emailjs.send("service_bqs8yqk", "template_7s3c345", parms)
      .then((result) => {
        toast.success("Email sent successfully!");
        console.log(result.text);
        formRef.current.reset();
      }, (error) => {
        toast.error("Failed to send the email.");
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <div className='text-white text-5xl font-thin tracking-widest getInTouch'>
        <h1 className='textGetInTouch'>Get in Touch</h1>
        {/* Contact Information... */}
      </div>
      <section id='contact' className='container'>
        <h2 className="text-white text-xl font-thin tracking-widest ">Send me a message!</h2>
        <form className='formContact' onSubmit={sendMail} ref={formRef}> {/* Attach the ref to the form */}
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
      <ToastContainer />
    </div>
  );
}
