import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {SiZalo} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ze79qok', 'template_dr8kmar', form.current, 'rm89BNber-pDU3Z_y')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>trantatviet2003@gmail.com</h5>
            <a href="mailto:trantatviet2003@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>tatviet.tran.7</h5>
            <a href="http://m.me/tatviet.tran.7">Send a Message</a>
          </article>
          <article className="contact__option">
            <SiZalo className='contact__option-icon'/>
            <h4>Zalo</h4>
            <h5>+84979235038</h5>
            <a href="https://chat.zalo.me">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact