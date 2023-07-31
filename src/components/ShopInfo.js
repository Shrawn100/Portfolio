import PNavBar from "./ProjectsNavBar";
import img1 from "../imgs/vintage.png";
import img2 from "../imgs/vintage2.png";
import img3 from "../imgs/vintage3.png";
import "./ProjectsInfo.css";

function ShopInfo() {
  return (
    <>
      <PNavBar></PNavBar>
      <h1 className="project-info-title">
        Vintage <span>Shop</span>
      </h1>
      <div className="project-links-container">
        <div className="project-link">
          <h2>View the project live/code</h2>
          <a
            className="project-links"
            href="https://github.com/Shrawn100/InventoryApp"
          >
            View Code
          </a>
          <a
            className="project-links"
            href="https://inventoryapp-production-5222.up.railway.app/catalog"
          >
            See Live
          </a>
        </div>
      </div>
      <div className="project-about-paragraph">
        <h2 className="project-info-subheading project-overview">
          Project OverView
        </h2>
        <p>
          The Shop Project marked my second encounter with the Express
          framework, this time utilizing the skeleton generator and the Pug
          (formerly known as Jade) templating engine. Building upon the
          knowledge gained from following the MDN Web Docs Express library
          tutorial, I embarked on developing this project from scratch.
        </p>
        <h2 className="project-info-subheading">Learning Experience</h2>
        <p>
          Throughout the project, I acquired valuable insights and solidified my
          understanding of several key concepts. I learned how to design API
          endpoints following RESTful API principles, enabling the creation of
          GET and POST requests and the seamless transfer of data between
          controllers and the views folder. Embracing the Model-View-Controller
          (MVC) architecture, I successfully implemented this structure within
          the project. Moreover, my understanding of MongoDB was further
          enhanced as I learned to create Schema Models and query the database
          within the JavaScript files. Previously, I had only interacted with
          MongoDB through the command line during a MongoDB introduction course
          from Mongo University.
        </p>
        <h2 className="project-info-subheading">Challenges Faced</h2>
        <p>
          The project presented some challenges along the way. One of the
          significant difficulties was establishing a connection with the
          MongoDB database using Mongoose. Despite having the correct
          credentials, I had to create a new user and grant access to the
          database, eventually utilizing the new user's credentials in the
          MongoDB URI.
        </p>
        <p>
          Another notable challenge involved implementing a search filter with
          an autocomplete feature. Although I had learned the concept during a
          MongoDB course, translating that knowledge into the actual JavaScript
          file proved to be challenging. Combining the search filter with other
          filtering methods, such as price range and category, further
          intensified the difficulty. However, after extensive research and
          experimentation, I successfully implemented the desired functionality.
        </p>
        <p>
          Implementing the cart feature posed another challenge. I aimed to
          ensure that the user's cart persisted even after making new GET
          requests (as the page would reload). To achieve this, I utilized
          Express session middleware. However, configuring the express-session
          middleware proved problematic initially. Many tutorials suggested
          storing the session in a database to prevent memory leaks. However,
          when implementing this method, multiple sessions were created with
          each page change or GET request. As a solution, I removed the storage
          to the database component, and the feature began working as expected.
        </p>

        <h2 className="project-info-subheading">Technical Details</h2>
        <p>
          The Shop Project was built using MongoDB, Pug, Express, and CSS. These
          technologies allowed for efficient database management, dynamic and
          interactive views, and seamless server-side operations.
        </p>
        <h2 className="project-info-subheading">Conclusion</h2>
        <p className="last-paragraph">
          The Shop Project served as an invaluable learning experience,
          solidifying my understanding of Express and Pug while delving into the
          intricacies of working with MongoDB. By tackling challenges such as
          establishing database connections, implementing search filters, and
          creating a functional cart feature, I expanded my knowledge and gained
          practical experience. This project further enriched my skill set and
          paved the way for future development endeavors.
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
export default ShopInfo;
