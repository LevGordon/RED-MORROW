import React from "react";
import { Link } from "react-router-dom";
import rmLogoColor from "../photos/rmLogoColor.png";

function Footer() {
  const footerElement = (
    <div className="footer-container">
      <section className="footer-subcription">
        <div className="subscribe-wrap">
          <p className="footer-subscription-heading">
            Sign up to the Red Morrow newsletter!
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                type="email"
                name="email"
                placeholder="Your Email Here"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-items">
          <h2 className="footer-instigator">INSTIGATOR</h2>
          <Link to="/instigator-of-unexpected-change">
            Instigator of Unexpected Change
          </Link>
          <Link to="/instigator-of-unexpected-change/documentary">
            Documentary
          </Link>
          <Link to="/#">Mourn the Living music video</Link>
          <Link to="/#">3D Modelled lyric videos</Link>
        </div>
        <div className="footer-link-items">
          <h2>MEDIA</h2>
          <Link to="/music">Music</Link>
          <Link to="/photo-gallery">Photos</Link>
          <Link to="/video-gallery">Videos</Link>
          <Link to="/art">Art</Link>
        </div>
        <div className="footer-link-items">
          <h2>ABOUT</h2>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/shop">Merch Shop</Link>
        </div>
        <div className="footer-link-items">
          <h2>SOCIALS</h2>
          <Link to="/#">Instagram</Link>
          <Link to="/#">Facebook</Link>
          <Link to="/#">YouTube</Link>
          <Link to="/#">Twitch</Link>
        </div>
      </div>
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/">
              <img
                src={rmLogoColor}
                alt="Red Morrow Official Logo"
                className="footer-rm-logo-img"
              />
            </Link>
          </div>
          <div>
            <small className="website-rights">Red Morrow © 2022</small>
          </div>  
        </div>
    </div>
  );

  return footerElement;
}

export default Footer;
