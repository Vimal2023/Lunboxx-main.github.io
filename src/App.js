import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Waiting from "./Components/Waiting";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products.js";
import Categories from "./pages/Categories";

import "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Waiting />
            <Footer />
          </div>
        } />
        <Route path="/cart" element={<><h1>Cart</h1></>} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;