import React from "react";
import gmailLogo from '../photos/gmail-logo.png'
import instaLogo from '../photos/insta-logo.png'
import ContactUs from "./ContactEmailForm";

function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-text-box">
        <h2> You can contact us through these:</h2>
      </div>
      <div className="contact-two-blocks">
        <div className="contact-gmail-block">
          <img src={gmailLogo} className="contact-image" alt="Contact Red Morrow Gmail"/>
          <p>redmorrowband@gmail.com</p>
        </div>
        <div className="contact-insta-block">
          <img src={instaLogo} className="contact-image" alt="Contact Red Morrow Instagram"/>
          <p>@redmorrowband</p>
        </div>
      </div>
      <div className="contact-text-box">
        <h2> Or send us a message directly through the site!</h2>
      </div>
      <ContactUs />
      <div className="contact-appreciation-text">
        <h3>We appreciate all messages! Say anything you want, ask anything you want!</h3>
      </div>
    </div>
  );
}

export default Contact;
