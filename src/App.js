import React from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Work from "./components/work";
import Hire from "./components/Hire";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Home">
        <Home />
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Service">
        <Service />
      </div>
      <div className="Works">
        <Work />
      </div>
      <div className="Skills">
        <Skills />
      </div>
      <div className="Testimonials">
        <Testimonials />
      </div>
      <div className="Hire">
        <Hire />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
