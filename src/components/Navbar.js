import "./Navbar.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [home, setHome] = useState(true);

  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  function handleVisible() {
    setIsVisible(!isVisible);
  }
  function handleHomeClick() {
    setHome(true);
    setAbout(false);
    setProjects(false);
    setContact(false);
  }
  function handleAboutClick() {
    setHome(false);
    setAbout(true);
    setProjects(false);
    setContact(false);
  }
  function handleProjectsClick() {
    setHome(false);
    setAbout(false);
    setProjects(true);
    setContact(false);
  }
  function handleContactClick() {
    setHome(false);
    setAbout(false);
    setProjects(false);
    setContact(true);
  }
  return (
    <nav className="navbar-container">
      {isVisible ? <Sidebar handleClick={handleVisible}></Sidebar> : ""}
      <Link className="navbar-heading-link" to="/Portfolio/">
        <h1
          onClick={handleHomeClick}
          className={home ? "navbar-heading hovered" : "navbar-heading"}
        >
          S.C
        </h1>
      </Link>
      <button onClick={handleVisible} className="hamburger">
        &#9776;
      </button>
      <div className="navbar-btns-container">
        <Link to="/Portfolio/About">
          <button
            onClick={handleAboutClick}
            className={about ? "navbar-btns hovered" : "navbar-btns"}
          >
            About Me
          </button>
        </Link>
        <Link to="/Portfolio/Projects">
          <button
            onClick={handleProjectsClick}
            className={projects ? "navbar-btns hovered" : "navbar-btns"}
          >
            Projects
          </button>
        </Link>
        <Link to="/Portfolio/Contact">
          <button
            onClick={handleContactClick}
            className={contact ? "navbar-btns hovered" : "navbar-btns"}
          >
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
