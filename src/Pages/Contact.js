import React from "react";
import gmailLogo from '../photos/gmail-logo.png'
import instaLogo from '../photos/insta-logo.png'
import ContactUs from "./ContactEmailForm";

function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-text-box">
        <h2> You can contact us in two ways:</h2>

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
      <div className="contact-appreciation-text">
        <h4>We appreciate all messages! Say anything you want, ask anything you want!</h4>
      </div>
      <ContactUs />
    </div>
  );
}

export default Contact;
