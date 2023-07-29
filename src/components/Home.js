import "./Home.css";
import img from "../imgs/istockphoto-947663966-612x612.png";
import Icon from "@mdi/react";
import { mdiArrowRightBold } from "@mdi/js";
export default function Home() {
  return (
    <main id="home-section" className="home-container">
      <div className="home-container-infos">
        <h1 className="home-heading">Shrawn Chhetri</h1>
        <h2 className="home-desc">
          Web <span>Developer</span>
        </h2>

        <div className="home-container-links">
          <a href="#about-section" className="get-to-know-btn">
            Know More
            <Icon
              className="right-arrow-icon"
              path={mdiArrowRightBold}
              size={1.1}
            />
          </a>

          <a href="https://github.com/Shrawn100" className="github-btn-link">
            <i className="devicon-github-original "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shrawn-chhetri-a6bb4a280/"
            className="linkedin-btn-link"
          >
            <i class="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
      <img className="home-img" src={img} alt="computerscreen" />
    </main>
  );
}

// Need to fix the layout..
//Are all of these div containers even necessary???
/* 

Change the favicon logo from react to something else. It looks really unprofessional

Reduce the size of the get to know btn
make the get to know btn and github btn on the same row.
also include a linked in btn to that row.
Change the font, it looks real freaking ugly.
Also change the positioning of the fonts padding, it is sooo bad. make it have more padding.
The font-size changes are so awkward.
If it is required, you can try generating a new picture for home page. Maybe an ai generated one of my selfie?

But yes, I need to work on a lot of the things heref

*/
