import "./Navbar.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick() {
    setIsVisible(!isVisible);
  }
  return (
    <nav className="navbar-container">
      {isVisible ? <Sidebar handleClick={handleClick}></Sidebar> : ""}
      <Link className="navbar-heading-link" to="/">
        <h1 className="navbar-heading">S.C</h1>
      </Link>
      <button onClick={handleClick} className="hamburger">
        &#9776;
      </button>
      <div className="navbar-btns-container">
        <Link to="/About">
          <button className="navbar-btns">About Me</button>
        </Link>
        <Link to="/Projects">
          <button className="navbar-btns">Projects</button>
        </Link>
        <Link to="/Contact">
          <button className="navbar-btns">Contact</button>
        </Link>
      </div>
    </nav>
  );
}
