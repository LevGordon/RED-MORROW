import React from 'react'
import { Link } from 'react-router-dom';
import rmLogoColor from "../photos/rmLogoColor.png";

function Footer() {

  const footerElement = (
    <div className="footer-container">
      <section className="footer-subcription">
        <div className="subscribe-wrap">
          <p className="footer-subscription-heading">
            Sign up for the Red Morrow newsletter, to receive news about our latest developments
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                type="email"
                name="email"
                placeholder="Your Email Here"
              />
              <button >Subscribe!</button>
            </form>
          </div>
        </div>
      </section>
      <div className="footer-links">
          <div className="footer-link-items">
            <h2>INSTIGATOR</h2>
            <Link to="/sign-up">Instigator of unexpected change</Link>
            <Link to="/">Documentary</Link>
          </div>
          <div className="footer-link-items">
            <h2>MEDIA</h2>
            <Link to="/">Music</Link>
            <Link to="/">Photos</Link>
            <Link to="/">Videos</Link>
            <Link to="/">Art</Link>
          </div>
          <div className="footer-link-items">
            <h2>ABOUT</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Merch Shop</Link>
          </div>
          <div className="footer-link-items">
            <h2>SOCIALS</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">Twitter</Link>
          </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to="/" className="social-logo">
                <img
            src={rmLogoColor}
            alt="Red Morrow Official Logo"
            className="navbar-rm-logo-img"
          />
                </Link>
            </div>
            <small className="website-rights">Red Morrow © 2022</small>
            <div className="social-icons">
                <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
                    <i className="fab fa-facebook-f" />
                </Link>
                <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            </div>
        </div>
      </section>
    </div>
  );



  return (
    <div>
        <h1> FOOTER </h1>
        {footerElement}
        
    </div>
  )
}

export default Footer