import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, a } from "react-spring";
import rmLogoColor from "../photos/rmLogoColor.png";
import useWindowSize from "../utils/useWindowSize";

function NavBar() {
  const [height, width] = useWindowSize(); // although never used, [height] is important for this to work.
  const Navigate = useNavigate();

  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const closeMenu = () => {
    setMenuIsClicked(false)
  }

  const deskNav = useSpring({
    height: menuIsClicked ? 220 : 0,
    opacity: menuIsClicked ? 1 : 0,
  })

  const mobNav = useSpring({
    height: menuIsClicked ? 500 : 0,
    opacity: menuIsClicked ? 1 : 0,
    // config: {duration: 600, mass: 5, friction: 100, }
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
    <a.div style={{ height: deskNav.height, opacity: deskNav.opacity}} className="navbar-menuClicked-container">
      <div className="navbar-link-items">
        <h2>OUR ALBUM</h2>
        <Link onClick={closeMenu} to="/instigator-of-unexpected-change">
          Instigator of unexpected change
        </Link>
        <Link onClick={closeMenu} to="/instigator-of-unexpected-change/documentary">
          Documentary
        </Link>
        <Link onClick={closeMenu} to="/#">Mourn the Living music video</Link>
        <Link onClick={closeMenu} to="/#">3D Modelled lyric videos</Link>
      </div>
      <div className="navbar-link-items">
        <h2>MEDIA</h2>
        <Link onClick={closeMenu} to="/music">Music</Link>
        <Link onClick={closeMenu} to="/photo-gallery">Photos</Link>
        <Link onClick={closeMenu} to="/video-gallery">Videos</Link>
        <Link onClick={closeMenu} to="/art">Art</Link>
      </div>
      <div className="navbar-link-items">
        <h2>ABOUT</h2>
        <Link onClick={closeMenu} to="/about">About Us</Link>
        <Link onClick={closeMenu} to="/contact">Contact</Link>
        <Link onClick={closeMenu} to="/shop">Merch Shop</Link>
      </div>
      <div className="navbar-link-items">
          <h2>BLOG</h2>
          <Link onClick={closeMenu} to="/blog">Search</Link>
          <Link onClick={closeMenu} to="/blog">Most recent</Link>
        </div>
      <div className="navbar-link-items">
        <h2>SOCIALS</h2>
        <Link to="/#">Instagram</Link>
        <Link to="/#">Facebook</Link>
        <Link to="/#">YouTube</Link>
        <Link to="/#">Twitter</Link>
      </div>
    </a.div>
  );

  const mobileMenu = (
    <a.div style={{ height: mobNav.height, opacity: mobNav.opacity}} className="navbar-mobile-menu-clicked-container">
      <div className="navbar-mobile-menu-line-break"></div>
      <div className="navbar-mobile-menu-section">
        <h2>OUR ALBUM</h2>
        <div className="navbar-mobile-menu-links">
        <Link onClick={closeMenu} to="/instigator-of-unexpected-change">
          Instigator of unexpected change
        </Link>
        <Link onClick={closeMenu} to="/instigator-of-unexpected-change/documentary">
          Documentary
        </Link>
        <Link onClick={closeMenu} to="/#">Mourn the Living music video</Link>
        <Link onClick={closeMenu} to="/#">3D Modelled lyric videos</Link>
        </div>
      </div>
      <div className="navbar-mobile-menu-section">
        <h2>MEDIA</h2>
        <div className="navbar-mobile-menu-links">
        <Link onClick={closeMenu} to="/music">Music</Link>
        <Link onClick={closeMenu} to="/photo-gallery">Photos</Link>
        <Link onClick={closeMenu} to="/video-gallery">Videos</Link>
        <Link onClick={closeMenu} to="/art">Art</Link>
      </div>
      </div>
      <div className="navbar-mobile-menu-section">
        <h2>ABOUT</h2>
        <div className="navbar-mobile-menu-links">
        <Link onClick={closeMenu} to="/about">About Us</Link>
        <Link onClick={closeMenu} to="/contact">Contact</Link>
        <Link onClick={closeMenu} to="/shop">Merch Shop</Link>
      </div>
      </div>
      <div className="navbar-mobile-menu-section">
          <h2>BLOG</h2>
          <div className="navbar-mobile-menu-links">
          <Link onClick={closeMenu} to="/blog">Search</Link>
          <Link onClick={closeMenu} to="/blog">Most recent</Link>
        </div>
        </div>
      <div className="navbar-mobile-menu-section">
        <h2>SOCIALS</h2>
        <div className="navbar-mobile-menu-links">
        <Link to="/#">Instagram</Link>
        <Link to="/#">Facebook</Link>
        <Link to="/#">YouTube</Link>
        <Link to="/#">Twitter</Link>
        </div>
      </div>
      <div className="navbar-mobile-menu-line-break"></div>
    </a.div>

  )

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
        {width > 768 && desktopMenu}
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
            <button className="navbar-button" onClick={() => setMenuIsClicked(!menuIsClicked)}>Menu</button>
          </div>
        </div>
      </div>
      {width < 768 && mobileMenu}
    </div>
  );

  return width > 768 ? desktopNavBar : mobileNavBar;
}

export default NavBar;
