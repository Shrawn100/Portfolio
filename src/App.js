import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
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
