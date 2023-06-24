import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BlogInfo from "./components/BlogInfo";
import ShopInfo from "./components/ShopInfo";
import MemberInfo from "./components/MembersOnly";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogInfo />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/member" element={<MemberInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
