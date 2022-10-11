import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import rmLogoColor from "../photos/rmLogoColor.png";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function NavBar() {
  const [height, width] = useWindowSize();
  const Navigate = useNavigate();

  const [menuIsClicked, setMenuIsClicked] = useState([false]);

  console.log(height, width);

  const NavBarLogo = (
    <div className="navbar-logo">
      <img
        src={rmLogoColor}
        alt="Red Morrow Official Logo"
        className="navbar-rm-logo-img"
        onClick={() => Navigate("/")}
      />
    </div>
  );

  const desktopMenu = (
    <div className="footer-links">
      <div className="footer-link-items">
        <h2>INSTIGATOR</h2>
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
        <h2>SOCIALS</h2>
        <Link to="/#">Instagram</Link>
        <Link to="/#">Facebook</Link>
        <Link to="/#">YouTube</Link>
        <Link to="/#">Twitter</Link>
      </div>
    </div>
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
        {menuIsClicked === true ? desktopMenu : <></>}
      </div>
    </div>
  );

  const mobileNavBar = (
    <div className="navbar-container">
      <div className="navbar-left">{NavBarLogo}</div>
      <div className="navbar-right">
        <div className="navbar-music">
          <button className="navbar-button" onClick={() => Navigate("/music")}>
            Music
          </button>
        </div>
        <div className="navbar-menu">
          <button className="navbar-button">Menu</button>
        </div>
      </div>
    </div>
  );

  return width > 768 ? desktopNavBar : mobileNavBar;
}

export default NavBar;
