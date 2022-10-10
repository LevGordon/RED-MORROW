import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const Navigate = useNavigate()

  console.log(height, width)

  const NavBarLogo = (
    <div className="navbar-logo">
          <img
            src={rmLogoColor}
            alt="Red Morrow Official Logo"
            className="navbar-rm-logo-img"
            onClick={() => Navigate("/")}
          />
        </div>
  )


  const desktopNavBar = (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-menu">
          <button className="navbar-button">Menu</button>
        </div>
        {NavBarLogo}
      </div>
      <div className="navbar-right">
        <div className="navbar-music">
          <button className="navbar-button" onClick={() => Navigate("/music")}> Music</button>
        </div>
        <div className="navbar-merch">
          <button className="navbar-button" onClick={() => Navigate("/shop")}>Merch</button>
        </div>
        <div className="navbar-contact">
          <button className="navbar-button" onClick={() => Navigate("/contact")}>Contact</button>
        </div>
        <div className="navbar-about-us">
          <button className="navbar-button" onClick={() => Navigate("/about")}>About Us</button>
        </div>
      </div>
    </div>
  );

  const mobileNavBar = (
    <div className="navbar-container">
      <div className="navbar-left">
        {NavBarLogo}
      </div>
      <div className="navbar-right">
        <div className="navbar-music">
          <button className="navbar-button" onClick={() => Navigate("/music")}>Music</button>
        </div>
        <div className="navbar-menu">
          <button className="navbar-button">Menu</button>
        </div>
      </div>
    </div>
  )

  return width > 768 ? desktopNavBar : mobileNavBar;
}

export default NavBar;
