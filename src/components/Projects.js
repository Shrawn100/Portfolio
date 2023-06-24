import "./Projects.css";
import bloghub from "../imgs/blog.png";
import vintage from "../imgs/vintage.png";
import members from "../imgs/members.png";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div id="projects-section" className="projects">
      <h1 className="projects-heading">
        My <span>Projects</span>
      </h1>

      <div className="projects-container">
        <div className="projects-card">
          <img src={bloghub} alt="Beach" />
          <div className="card-info">
            <h2 className="card-title">
              Blog<span>API</span>
            </h2>
            <Link to="/blog" className="project-links">
              Learn more
            </Link>
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
            <Link to="/shop" className="project-links">
              Learn more
            </Link>
            <div className="card-techstack">MongoDB Express Pug/Jade CSS</div>
            <p className="card-desc">
              A visually appealing online store that utilises a mongoDB database
              and has working search and sort filters. It follows the MVC design
              principle.
            </p>
          </div>
          <img src={vintage} alt="people modelling" />
        </div>
        <div className="projects-card">
          <img src={members} alt="message board" />
          <div className="card-info odd">
            <h2 className="card-title">
              {" "}
              Members<span>Only</span>
            </h2>
            <Link to="/member" className="project-links">
              Learn more
            </Link>
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
