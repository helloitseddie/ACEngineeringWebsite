import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTopOnNav from "./components/ScrollToTopOnNav"; 

import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Products from "./pages/products";
import Clients from "./pages/clients";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";

const AllRoutes = () => {
  return (
    <>
      <ScrollToTopOnNav />
      <Routes>
        {/* All home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
