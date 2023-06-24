import PNavBar from "./ProjectsNavBar";
import img1 from "../imgs/members.png";
import img2 from "../imgs/member2.png";
import img3 from "../imgs/member3.png";
import "./BlogInfo.css";

function ShopInfo() {
  return (
    <>
      <PNavBar></PNavBar>
      <h1 className="project-info-title">
        Members <span>Only</span>
      </h1>
      <div className="project-links-container">
        <div className="project-link">
          <h2>View the project live/code</h2>
          <a
            className="project-links"
            href="https://github.com/Shrawn100/MembersOnly"
          >
            View Code
          </a>
          <a
            className="project-links"
            href="https://membersonly-production-2f0d.up.railway.app/"
          >
            See Live
          </a>
        </div>
      </div>
      <div className="project-about-paragraph">
        <h2 className="project-info-subheading">Project OverView</h2>
        <p>
          The Members Only project was primarily developed to gain a
          comprehensive understanding of authorization and verification
          processes using the Passport middleware. Additionally, the project
          aimed to implement dynamic content display based on user login status
          and enhance security by encrypting passwords using the bcrypt
          middleware. As a third significant endeavor with Express, this project
          served as a valuable learning experience, expanding my knowledge of
          handling GET/POST requests, data sanitization, validation, and date
          formatting using the Luxon library.
        </p>
        <h2 className="project-info-subheading">Learning Experience</h2>
        <p>
          Throughout the development process, I encountered various learning
          opportunities. I deepened my knowledge of authorization and
          verification mechanisms through the utilization of Passport
          middleware, gaining insights into user authentication and access
          control. Moreover, I got familiar with displaying dynamic content
          based on the user's login status, allowing for a personalized
          experience. The implementation of bcrypt middleware enhanced the
          security of the application by encrypting passwords, ensuring data
          protection. Additionally, I familiarized myself with handling GET and
          POST requests effectively, along with the critical aspects of data
          sanitization and validation. Lastly, I explored the Luxon library and
          its capabilities in formatting dates within the application.
        </p>
        <h2 className="project-info-subheading">Technical Details</h2>
        <p>
          The Members Only project utilized Pug (formerly known as Jade) as the
          templating engine for generating HTML, Express as the web application
          framework, MongoDB as the database, and CSS for minimal styling. While
          the project retains mobile view compatibility, the lack of a dedicated
          mobile view option in Google Dev Tools (typically used with React)
          limited the fine-tuning of the mobile experience. However, the primary
          focus of this project was to solidify my understanding of backend
          operations rather than implementing extensive styling.
        </p>
        <h2 className="project-info-subheading">Summary</h2>
        <p>
          The Members Only project played a vital role in broadening my
          understanding of backend development. By delving into concepts such as
          authorization, dynamic content display, password encryption, and data
          validation, I gained valuable insights and honed my skills. While
          minimalistic in design, the project provided a solid foundation for
          backend development principles, serving as a stepping stone for future
          endeavors.
        </p>
      </div>

      <h2 className="project-img-title">
        Project <span>Images</span>
      </h2>
      <div className="project-img-container">
        <img src={img2} alt="Login form"></img>
        <img src={img1} alt="Message board"></img>
        <img src={img3} alt="Message form"></img>
      </div>
    </>
  );
}
export default ShopInfo;
