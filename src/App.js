import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BlogInfo from "./components/BlogInfo";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogInfo />} />
        <Route path="/blog" element={<BlogInfo />} />
        <Route path="/blog" element={<BlogInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
