import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Detail from "./Components/Detail";
import Cart from "../src/Cart";
import ErrorPage from "./Components/ErrorPage";
import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import "./index.css"
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
