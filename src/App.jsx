import { useState } from "react";
import TopHeader from "./components/header/TopHeader";
import BtnHeader from "./components/header/BtnHeader";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtnHeader />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
