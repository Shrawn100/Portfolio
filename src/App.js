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
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </BrowserRouter>
  );
}

export default App;
