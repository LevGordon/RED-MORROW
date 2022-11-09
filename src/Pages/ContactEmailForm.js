import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Textarea from "react-expanding-textarea";
import { useSpring, a } from "react-spring";

const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
  const [errorMessage, setErrorMessage] = useState();

  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE, TEMPLATE, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const contactFormValidation = (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !messageRef.current.value
    ) {
      setErrorMessage("Please fill out all of the fields above!");
    } else {
      setTimeout(() => {
        setEmailSent(true);
        sendEmail(e);
      }, 1000);
    }
  };

  const { transform } = useSpring({
    opacity: 1,
    transform: `perspective(600px) rotateY(${emailSent ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80, duration: 450 },
  });

  const emailSentMessage = (
    <a.div style={{ transform }} className="contact-email-was-sent">
      <h3 className="contact-success-h3">Your email was sent!</h3>
    </a.div>
  );

  const contactForm = (
    <div className="contact-form">
      <form ref={form} onSubmit={contactFormValidation}>
        <div className="contact-label-input-stack">
          <label className="contact-label">Your Name</label>
          <input
            ref={nameRef}
            type="text"
            name="user_name"
            className="contact-input"
          />
        </div>
        <div className="contact-label-input-stack">
          <label className="contact-label">Your Email</label>
          <input
            ref={emailRef}
            type="email"
            name="user_email"
            className="contact-input"
          />
        </div>
        <div className="contact-label-input-stack">
          <label className="contact-label">Enter Message</label>
          <Textarea
            ref={messageRef}
            name="message"
            className="contact-textarea-message"
          />
        </div>
        <div className="contact-form-button-div">
          <button type="submit" className="contact-form-send-button">
            Send
          </button>
        </div>
      </form>
      {errorMessage ? <h5 className="error-message">{errorMessage}</h5> : <></>}
    </div>
  );

  return emailSent ? emailSentMessage : contactForm;
};

export default ContactUs;
