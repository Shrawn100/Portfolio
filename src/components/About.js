import "./About.css";
export default function About() {
  return (
    <div id="about-section" className="about-container">
      <h1 className="about-heading">
        I'm
        <br /> <span>Shrawn Chhetri</span>
      </h1>
      <div className="about-paragraph">
        <p>
          As a self-taught developer, I strive to always push the boundaries of
          my knowledge.
        </p>
        <p>Producing high-quality web applications is my passion.</p>
        <p>
          I aim to create applications that make smooth and satisfying user
          experiences.
        </p>
      </div>

      <div className="skills-tools ">
        <h2 className="skills-tools-heading">
          Skills <span>& Tools</span>
        </h2>
        <h3 className="skill-stack-title">- Front-end -</h3>
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="typescript logo"
            />
            TypeScript
          </div>
        </div>
        <h3 className="skill-stack-title">- Back-end -</h3>
        <div className="skills-container">
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="nodeJS logo"
            />
            NodeJS
          </div>
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="mongo DB logo"
            />
            MongoDB
          </div>
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="express logo"
            />
            Express
          </div>
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
              alt="Solidity logo"
            />
            Solidity
          </div>
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              alt="firebase logo"
            />
            Firebase
          </div>
        </div>
        <h3 className="skill-stack-title">- Tools -</h3>
        <div className="skills-container">
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git logo"
            />
            Git
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="jest logo"
            />
            Jest
          </div>
          <div className="skills-img-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
              alt="webpack logo"
            />
            Webpack
          </div>
        </div>
      </div>
    </div>
  );
}
