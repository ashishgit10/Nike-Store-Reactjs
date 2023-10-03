import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Detail from "./Components/Detail";
import React from "react";
import { GlobalStyle } from "./GlobalStyle";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
