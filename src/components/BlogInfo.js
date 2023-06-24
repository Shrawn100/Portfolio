import PNavBar from "./ProjectsNavBar";
import img1 from "../imgs/blog.png";
import img2 from "../imgs/blog2.png";
import img3 from "../imgs/blog3.png";
import "./BlogInfo.css";

function BlogInfo() {
  return (
    <>
      <PNavBar></PNavBar>
      <h1 className="project-info-title">
        Blog <span>API</span>
      </h1>
      <div className="project-links-container">
        <div className="project-link">
          <h2>Server Side Code</h2>
          <a
            className="project-links"
            href="https://github.com/Shrawn100/BlogAPI"
          >
            View Code
          </a>
        </div>
        <div className="project-link">
          <h2>User View</h2>
          <a
            className="project-links"
            href="https://github.com/Shrawn100/BlogUserView"
          >
            View Code
          </a>
          <a
            className="project-links"
            href="https://shrawn100.github.io/BlogUserView"
          >
            See Live
          </a>
        </div>
        <div className="project-link">
          <h2>Author View</h2>
          <a
            className="project-links"
            href="https://github.com/Shrawn100/BlogAuthorView"
          >
            View Code
          </a>
          <a
            className="project-links"
            href="https://shrawn100.github.io/BlogAuthorView"
          >
            See Live
          </a>
        </div>
      </div>
      <div className="project-about-paragraph">
        <h2 className="project-info-subheading">Project OverView</h2>
        <p>
          The BlogApi project, which was part of the Odin Project, involved
          building a blog application from scratch. Throughout the project, I
          gained valuable experience in integrating server-side code with a
          React front-end by utilizing HTTP requests through Axios. This
          endeavor significantly enhanced my understanding of Express, MongoDB,
          and further honed my React and CSS skills. Additionally, I delved into
          the realm of authorization using JSON Web Tokens (JWT) to secure
          routes and protect sensitive information.
        </p>
        <h2 className="project-info-subheading">Learning Experience</h2>
        <p>
          During the development process, I encountered several challenges and
          acquired new knowledge. One notable hurdle involved storing image URLs
          for the blog posts. Initially, I noticed that the string would change
          when retrieved from the database, rendering the image display
          dysfunctional. Upon investigation, I discovered that special
          characters, such as apostrophes, were converted into HTML entities
          (e.g., #&27;). To resolve this issue, I employed the 'He' library to
          decode the data before passing it into the database, ensuring proper
          display of image URLs.
        </p>
        <h2 className="project-info-subheading">Technical Details</h2>
        <p>
          The BlogApi project was built using a combination of MongoDB, Express,
          React, Node.js, and CSS. The project comprises three separate
          repositories, each serving a distinct purpose. The first repository
          contains the server-side code responsible for handling requests. The
          second repository focuses on the user view, allowing users to browse
          published blogs and leave comments. Lastly, the third repository
          encompasses the author's view, which enables authenticated authors to
          perform CRUD operations on their blogs, including creation, editing,
          deletion, and reading.
        </p>
        <h2 className="project-info-subheading">User Experience</h2>
        <p>
          The author's view prioritizes functionality and features a minimalist
          design, emphasizing a straightforward and efficient user experience.
          On the other hand, the user view is tailored to provide a visually
          appealing experience for users, enhancing their enjoyment while
          navigating the blog content.
        </p>
      </div>

      <h2 className="project-img-title">
        Project <span>Images</span>
      </h2>
      <div className="project-img-container">
        <img src={img2} alt="Blog cards"></img>
        <img src={img1} alt="Girl smiling"></img>
        <img src={img3} alt="Blog"></img>
      </div>
    </>
  );
}
export default BlogInfo;
