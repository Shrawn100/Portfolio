import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar({ handleClick }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-filler"></div>
      <aside className="sidebar">
        <div className="sidebar-heading-container">
          <Link className="navbar-heading-link" to="">
            <button onClick={handleClick} className="sidebar-heading">
              Shrawn Chhetri
            </button>
          </Link>
          <button onClick={handleClick} className="close-sidebar">
            X
          </button>
        </div>

        <div className="sidebar-btns-container">
          <Link className="sidebar-link" to="About">
            <button onClick={handleClick} className="navbar-btns sidebar-btns">
              About Me
            </button>
          </Link>
          <Link to="/Projects">
            <button onClick={handleClick} className="navbar-btns sidebar-btns">
              Projects
            </button>
          </Link>
          <Link to="/Contact">
            <button onClick={handleClick} className="navbar-btns sidebar-btns">
              Contact
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
}
