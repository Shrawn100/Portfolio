import "./Navbar.css";

import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <nav className="navbar-container">
      {isVisible ? <Sidebar handleClick={handleVisible}></Sidebar> : ""}

      <a className="navbar-heading navbar-link" href="#home-section">
        S.C
      </a>

      <button onClick={handleVisible} className="hamburger">
        &#9776;
      </button>
      <div className="navbar-btns-container">
        <a className="navbar-link" href="#about-section">
          About Me
        </a>

        <a className="navbar-link" href="#projects-section">
          Projects
        </a>

        <a className="navbar-link" href="#contact-section">
          Contact
        </a>
      </div>
    </nav>
  );
}
