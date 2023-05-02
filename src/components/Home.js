import Navbar from "./Navbar";
import "./Home.css";
import img from "../imgs/istockphoto-947663966-612x612.png";
export default function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <main className="home-container">
        <div>
          <h1 className="home-heading">Shrawn Chhetri</h1>
          <h2 className="home-desc">
            Web <span>Developer</span>
          </h2>
          <button className="get-to-know-btn">Get To Know Me</button>
        </div>
        <img className="home-img" src={img} alt="computerscreen" />
      </main>
    </div>
  );
}
