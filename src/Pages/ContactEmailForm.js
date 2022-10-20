import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        SERVICE,
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

  const emailSentMessage = (
    <div className="contact-email-was-sent">
        <h3>Your email was sent!</h3>
    </div>
  )


  const contactForm = (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="contact-label-input-stack">
        <label>Your Name</label>
        <input type="text" name="user_name" />
      </div>
      <div className="contact-label-input-stack">
        <label>Your Email</label>
        <input type="email" name="user_email" />
      </div>
      <div className="contact-label-input-stack">
        <label>Enter Message</label>
        <textarea name="message" />
      </div>
      <div>
      <button type="submit" onClick={() => setTimeout(() => setEmailSent(true), 1000)} className="contact-form-send-button">Send</button>
      </div>
    </form>
  );

  return emailSent ? emailSentMessage : contactForm;
};

export default ContactUs;