import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <>
      <div className="container">
        <div className="navbar-body" id={darkMode ? "darkMode" : ""}>
          <BrowserRouter>
            <Routes>
              <Route
                index
                element={
                  <>
                    <Navbar toggle={toggleMode} darkmode={darkMode} />
                    <Body />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Navbar toggle={toggleMode} darkmode={darkMode} />
                    <Body />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Navbar toggle={toggleMode} darkmode={darkMode} />
                    <About />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/services"
                element={
                  <>
                    <Navbar toggle={toggleMode} darkmode={darkMode} />
                    <Services />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Navbar toggle={toggleMode} darkmode={darkMode} />
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
