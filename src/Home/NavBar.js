import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, a } from "react-spring";
import rmLogoColor from "../photos/rmLogoColor.png";
import useWindowSize from "../utils/useWindowSize";

function NavBar() {
  const [width] = useWindowSize();
  const Navigate = useNavigate();

  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const props = useSpring({
    height: menuIsClicked ? 220 : 0,
    opacity: menuIsClicked ? 1 : 0,
  })

  const NavBarLogo = (
    <div className="navbar-logo">
      <Link to="/" className="social-logo">
        <img
          src={rmLogoColor}
          alt="Red Morrow Official Logo"
          className="navbar-rm-logo-img"
          onClick={() => Navigate("/")}
        />
      </Link>
    </div>
  );

  const desktopMenu = (
    <a.div style={{ height: props.height, opacity: props.opacity}} className="navbar-menuClicked-container">
      <div className="footer-link-items">
        <h2>OUR ALBUM</h2>
        <Link to="/instigator-of-unexpected-change">
          Instigator of unexpected change
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
          <h2>BLOG</h2>
          <Link to="/blog">Search</Link>
          <Link to="/blog">Most recent</Link>
        </div>
      <div className="footer-link-items">
        <h2>SOCIALS</h2>
        <Link to="/#">Instagram</Link>
        <Link to="/#">Facebook</Link>
        <Link to="/#">YouTube</Link>
        <Link to="/#">Twitter</Link>
      </div>
    </a.div>
  );

  const desktopNavBar = (
    <div className="navbar-container">
      <div className="navbar-leftright-wrap">
        <div className="navbar-left">
          <div className="navbar-menu">
            <button
              className="navbar-button"
              onClick={() => setMenuIsClicked(!menuIsClicked)}
            >
              Menu
            </button>
          </div>
          {NavBarLogo}
        </div>
        <div className="navbar-right">
          <div className="navbar-music">
            <button
              className="navbar-button"
              onClick={() => Navigate("/music")}
            >
              {" "}
              Music
            </button>
          </div>
          <div className="navbar-merch">
            <button className="navbar-button" onClick={() => Navigate("/shop")}>
              Merch
            </button>
          </div>
          <div className="navbar-blog">
            <button
              className="navbar-button"
              onClick={() => Navigate("/blog")}
            >
              Blog
            </button>
          </div>
          <div className="navbar-contact">
            <button
              className="navbar-button"
              onClick={() => Navigate("/contact")}
            >
              Contact
            </button>
          </div>
          <div className="navbar-about-us">
            <button
              className="navbar-button"
              onClick={() => Navigate("/about")}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-menu-clicked">
        {desktopMenu}
      </div>
    </div>
  );

  const mobileNavBar = (
    <div className="navbar-container">
      <div className="navbar-leftright-wrap">
        <div className="navbar-left">
          {NavBarLogo}
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">
            <button className="navbar-button">Menu</button>
          </div>
        </div>
      </div>
    </div>
  );

  return width > 768 ? desktopNavBar : mobileNavBar;
}

export default NavBar;
