import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
