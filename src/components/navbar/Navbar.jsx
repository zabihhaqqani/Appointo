import "./Navbar.css";
import ExternalLinkIcon from "../../assets/iconComponents/ExternalLinkIcon";
import DownArrow from "../../assets/iconComponents/DownArrow";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa-solid fa-${isOpen ? "x" : "bars"} fa-lg`}></i>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/" aria-label="Go to Home">
          Menu
          <DownArrow />
        </a>
        <a href="/" aria-label="Contact Us">
          Contact us
        </a>
        <button className="share-btn" aria-label="Share Link">
          <ExternalLinkIcon color=""/> Share Link
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
