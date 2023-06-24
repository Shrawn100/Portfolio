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
              Blog<span>API</span>
            </h2>
            <div className="project-links">
              <a href="url">Learn more</a>
            </div>
            <div className="card-techstack">
              MongoDB Express React Nodejs CSS
            </div>
            <p className="card-desc">
              A 3 part blog project (Serverside code, User view, Author view)
              that utilises RESTful API design structure, responsive design and
              allows CRUD operations.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <div className="card-info odd">
            <h2 className="card-title">
              Vintage<span>Shop</span>
            </h2>
            <div className="project-links">
              <a href="url">Learn more</a>
            </div>
            <div className="card-techstack">MongoDB Express Pug/Jade CSS</div>
            <p className="card-desc">
              A visually appealing online store that utilises a mongoDB database
              and has working search and sort filters. It follows the MVC design
              principle.
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
              Members<span>Only</span>
            </h2>
            <div className="project-links">
              <a href="url">Learn more</a>
            </div>
            <div className="card-techstack">MongoDB Express Pug/Jade CSS </div>
            <p className="card-desc">
              A message board application that utilises the passport middleware
              to authenticate users. Displays dynamic content depending on
              log-in status and provides password encryption for added security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
