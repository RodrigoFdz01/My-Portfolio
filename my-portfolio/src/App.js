import React from "react";

import Home from "./components/Home/Home";
//import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
//import ArrowUp from "./ArrowUp/ArrowUp";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
