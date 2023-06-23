import "./Projects.css";
export default function Projects() {
  return (
    <div id="projects-section" className="projects">
      <h1 className="projects-heading">
        My <span>Projects</span>
      </h1>

      <div className="projects-container">
        <div className="projects-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react logo"
          />
          <div className="card-info">
            <h2 className="card-title">
              Insta<span>Clone</span>
            </h2>
            <div className="project-links">
              <a href="url">View Demo</a>
              <a href="url">View Code</a>
            </div>
            <div className="card-techstack">HTML CSS JS React Firebase</div>
            <p className="card-desc">
              An Instagram clone created using primarily React and Firebase.This
              application contains Google Authentication and CRUD Features
              allowing you to interact with other users in real-time.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <div className="card-info odd">
            <h2 className="card-title">
              Online<span>Shop</span>
            </h2>
            <div className="project-links">
              <a href="url">View Demo</a>
              <a href="url">View Code</a>
            </div>
            <div className="card-techstack">HTML CSS JS React </div>
            <p className="card-desc">
              An Instagram clone created using primarily React and Firebase.This
              application contains Google Authentication and CRUD Features
              allowing you to interact with other users in real-time.
            </p>
          </div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react logo"
          />
        </div>
        <div className="projects-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react logo"
          />
          <div className="card-info odd">
            <h2 className="card-title">
              {" "}
              Find<span>Us</span>
            </h2>
            <div className="project-links">
              <a href="url">View Demo</a>
              <a href="url">View Code</a>
            </div>
            <div className="card-techstack">HTML CSS JS React Firebase</div>
            <p className="card-desc">
              An Instagram clone created using primarily React and Firebase.This
              application contains Google Authentication and CRUD Features
              allowing you to interact with other users in real-time.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <div className="card-info odd">
            <h2 className="card-title">
              Memory<span>Card</span>
            </h2>
            <div className="project-links">
              <a href="url">View Demo</a>
              <a href="url">View Code</a>
            </div>
            <div className="card-techstack">HTML CSS JS React</div>
            <p className="card-desc">
              An Instagram clone created using primarily React and Firebase.This
              application contains Google Authentication and CRUD Features
              allowing you to interact with other users in real-time.
            </p>
          </div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react logo"
          />
        </div>
        <div className="projects-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react logo"
          />
          <div className="card-info">
            <h2 className="card-title">
              Battle<span>Ships</span>
            </h2>
            <div className="project-links">
              <a href="url">View Demo</a>
              <a href="url">View Code</a>
            </div>
            <div className="card-techstack">HTML CSS JS React Jest</div>
            <p className="card-desc">
              An Instagram clone created using primarily React and Firebase.This
              application contains Google Authentication and CRUD Features
              allowing you to interact with other users in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
