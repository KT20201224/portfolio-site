import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import MenuTournament from "./components/MenuTournamet";
import ClickGame from "./components/ClickGame";

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
        <ClickGame />
        <MenuTournament />
      </main>
      <Footer />
    </div>
  );
}

export default App;
