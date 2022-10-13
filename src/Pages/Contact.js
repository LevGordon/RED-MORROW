import React from "react";

function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-text-box">
        <h2> You can contact us in two ways:</h2>

      </div>
      <div className="contact-two-blocks">
        <div className="contact-gmail-block">
          <img src="../photos/gmail-logo.png" alt="Contact Red Morrow Gmail"/>
          <p>redmorrowband@gmail.com</p>
        </div>
        <div className="contact-insta-block">
          <img src="../photos/insta-logo.png" alt="Contact Red Morrow Instagram"/>
          <a href="https://www.instagram.com/redmorrowband/">@redmorrowband</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
