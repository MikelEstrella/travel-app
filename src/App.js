import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tour from "./components/Tours";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
    </div>
  );
};

export default App;
