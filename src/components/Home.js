import "./Home.css";
import img from "../imgs/istockphoto-947663966-612x612.png";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowRightBold } from "@mdi/js";
export default function Home() {
  return (
    <div id="home-section" className="home">
      <main className="home-container">
        <div>
          <h1 className="home-heading">SHRAWN CHHETRI</h1>
          <h2 className="home-desc">
            Web <span>Developer</span>
          </h2>
          <a href="#about-section" className="get-to-know-btn">
            Get To Know More
            <Icon path={mdiArrowRightBold} size={1.1} />
          </a>
        </div>
        <img className="home-img" src={img} alt="computerscreen" />
      </main>
    </div>
  );
}
