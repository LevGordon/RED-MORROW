import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Textarea from 'react-expanding-textarea'
import { useSpring, a } from "react-spring";


const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE
const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY


const ContactUs = () => {
  const [emailSent, setEmailSent] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "SERVICEAAAAAA",
        TEMPLATE,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  const contactFormValidation = () => {
    

  }


  const { transform, opacity } = useSpring({
    opacity: 1,
    transform: `perspective(600px) rotateY(${emailSent ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const emailSentMessage = (
    <a.div style={{opacity, transform}} className="contact-email-was-sent">
        <h3 className="contact-success-h3">Your email was sent!</h3>
    </a.div>
  )

  const contactForm = (
    <div style={{opacity,
      transform,
      rotateY: '180deg',}} className="contact-form" >
      <form ref={form} onSubmit={sendEmail}>
      <div className="contact-label-input-stack">
        <label className="contact-label">Your Name</label>
        <input type="text" name="user_name" className="contact-input"/>
      </div>
      <div className="contact-label-input-stack">
        <label className="contact-label">Your Email</label>
        <input type="email" name="user_email" className="contact-input"/>
      </div>
      <div className="contact-label-input-stack">
        <label className="contact-label">Enter Message</label>
        <Textarea name="message" className="contact-textarea-message"/>
      </div>
      <div className="contact-form-button-div">
      <button type="submit" onClick={() => setTimeout(() => setEmailSent(true), 1000)} className="contact-form-send-button">Send</button>
      </div>
    </form>

    </div>
    
  );

  return emailSent ? emailSentMessage : contactForm;
};

export default ContactUs;
