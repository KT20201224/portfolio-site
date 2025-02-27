import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ToyPart from "./components/ToyPart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Projects />
        <TechStack />
      </main>
      <ToyPart />
      <Footer />
    </div>
  );
}

export default App;
