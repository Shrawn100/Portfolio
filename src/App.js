import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BlogInfo from "./components/BlogInfo";
import ShopInfo from "./components/ShopInfo";
import MemberInfo from "./components/MemberInfo";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
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
