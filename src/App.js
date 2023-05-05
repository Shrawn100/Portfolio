import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Projects" element={<Projects></Projects>} />
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
