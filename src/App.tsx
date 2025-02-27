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
      <main className="pt-16">
        {" "}
        {/* 헤더 높이만큼 패딩 추가 */}
        <Home />
        <Projects />
        <TechStack />
        <ToyPart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
