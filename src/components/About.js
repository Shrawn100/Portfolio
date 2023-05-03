import Navbar from "./Navbar";
import icon from "../imgs/character-icon.png";
import "./About.css";
export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="about-container">
        <img className="character-icon" src={icon} alt="charactor img"></img>
        <h1 className="about-heading">
          Hello!
          <br />
          I'm <span>Shrawn Chhetri</span>
        </h1>
        <div className="about-paragraph">
          <p>
            A self-taught web developer with a passion for creating visually
            appealing and responsive websites.
          </p>
          <p>
            As a developer, I am continuously drawn to the ever-evolving field
            of technology because of the limitless potential it presents. My
            passion for innovation drives me to seek out fresh challenges and
            opportunities for personal and professional growth.
          </p>
          <p>
            Producing high-quality and scalable web applications is my utmost
            priority, whether I am working independently or as part of a team. I
            aim to create applications that effectively fulfill the requirements
            of end-users and businesses.
          </p>
          <p>
            In my free time, I stay active by training for powerlifting and now
            recently boxing. I also enjoy reading books on a wide range of
            topics. I believe in maintaining a healthy work-life balance to keep
            my mind sharp and creative.{" "}
          </p>
          <p>
            I'm excited to contribute my skills and expertise to your web
            development projects and bring your ideas to life!
          </p>
        </div>
        <div className="skills-tools">
          <h2 className="skills-tools-heading">
            Skills <span>& Tools</span>
          </h2>
          <div className="skills-container">
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="html logo"
              />
              HTML
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="css logo"
              />
              CSS
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="javascript logo"
              />
              JavaScript
            </div>

            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="react logo"
              />
              React
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="firebase logo"
              />
              Firebase
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="webpack logo"
              />
              Webpack
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                alt="jest logo"
              />
              Jest
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="git logo"
              />
              Git
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="nodeJS logo"
              />
              NodeJS
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="linux logo"
              />
              Linux CLI
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                alt="npm logo"
              />
              NPM
            </div>
            <div className="skills-img-container">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="mongo DB logo"
              />
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
