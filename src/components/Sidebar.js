import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar({ handleClick }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-filler"></div>
      <aside className="sidebar">
        <div className="sidebar-heading-container">
          <Link className="navbar-heading-link" to="/Portfolio/">
            <button onClick={handleClick} className="sidebar-heading">
              Shrawn Chhetri
            </button>
          </Link>
          <button onClick={handleClick} className="close-sidebar">
            X
          </button>
        </div>

        <div className="sidebar-btns-container">
          <Link className="sidebar-link" to="/Portfolio/About">
            <button onClick={handleClick} className="navbar-btns sidebar-btns">
              About Me
            </button>
          </Link>
          <Link to="/Portfolio/Projects">
            <button onClick={handleClick} className="navbar-btns sidebar-btns">
              Projects
            </button>
          </Link>
          <Link to="/Portfolio/Contact">
            <button onClick={handleClick} className="navbar-btns sidebar-btns">
              Contact
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
}
