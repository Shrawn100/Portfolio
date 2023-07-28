import "./Sidebar.css";
export default function Sidebar({ handleClick }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-filler"></div>
      <aside className="sidebar">
        <div className="sidebar-heading-container">
          <a
            href="#home-section"
            onClick={handleClick}
            className="sidebar-heading"
          >
            Shrawn C
          </a>
          <button onClick={handleClick} className="close-sidebar">
            X
          </button>
        </div>
        <div className="sidebar-links-container">
          <a
            href="#about-section"
            onClick={handleClick}
            className="navbar-btns sidebar-btns"
          >
            About Me
          </a>
          <a
            href="#projects-section"
            onClick={handleClick}
            className="navbar-btns sidebar-btns"
          >
            Projects
          </a>
          <a
            href="#contact-section"
            onClick={handleClick}
            className="navbar-btns sidebar-btns"
          >
            Contact
          </a>
        </div>
      </aside>
    </div>
  );
}
