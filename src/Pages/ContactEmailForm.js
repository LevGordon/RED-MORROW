import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v83gg4k",
        "template_8mc8yfr",
        form.current,
        "L957q1-JRrU8r6VO8"
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
      <button type="submit" className="contact-form-send-button">Send</button>
      </div>
    </form>
  );

  return contactForm
};

export default ContactUs;
