import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="container">
        <div className="navbar-body">
          <BrowserRouter>
            <Routes>
              <Route
                index
                element={
                  <>
                    <Navbar />
                    <Body />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Body />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Navbar />
                    <About />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/services"
                element={
                  <>
                    <Navbar />
                    <Services />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Navbar />
                    <Contact />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}
