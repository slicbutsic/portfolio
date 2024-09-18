// import emailjs from 'emailjs-com';

// export const SendEmail = () => {
//   const sendMail = (e) => {
//     e.preventDefault();
//     let parms = {
//       name: document.getElementById('name').value,
//       email: document.getElementById('email').value,
//       subject: document.getElementById('subject').value,
//       message: document.getElementById('message').value
//     }

//     emailjs.send(
//       "service_bqs8yqk",
//       "template_7s3c345",
//        parms,
//        "XUK5BRG_j0xwXeFNMArdJ"
//       )
//       .then((result) => {
//         alert("Email sent successfully!");
//         console.log(result.text);
//       }, (error) => {
//         alert("Failed to send the email.");
//         console.log(error.text);
//       });
//   }

//   return (
//    <>
//       <section id='contact' class='container'>
//         <h2 className="text-white">Contact Me</h2>
//         <form onSubmit={sendMail} >
//           <div class='form-group'>
//             <label className="text-white" for='name'>Name</label>
//             <input type='text' id='name' name='name' required/>
//           </div>
//           <div class='form-group'>
//             <label className="text-white" for='email'>Email</label>
//             <input type='email' id='email' name='email' required/>
//           </div>
//           <div class='form-group'>
//             <label className="text-white" for='subject'>subject</label>
//             <input type='text' id='subject' name='subject' required></input>
//           </div>
//           <div class='form-group'>
//             <label className="text-white" for='message'>Message</label>
//             <textarea id='message' name='message' rows='4' required></textarea>
//           </div>
//           <button className="text-white" type='submit'>Send</button>
//         </form>
//       </section>
//    </>
//   )
// }

import { useEffect } from 'react';
import emailjs from 'emailjs-com';

export const SendEmail = () => {
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
    <>
      <section id='contact' className='container'>
        <h2 className="text-white">Contact Me</h2>
        <form onSubmit={sendMail}>
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
          <button className="text-white" type='submit'>Send</button>
        </form>
      </section>
    </>
  );
};
