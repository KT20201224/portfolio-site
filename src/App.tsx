import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import MenuTournament from "./components/MenuTournament";
import ClickGame from "./components/ClickGame";
import ProjectDetail from "./components/ProjectDetail";
import ProgrammingLang from "./components/ProgrammingLang";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-16">
        <Routes>
          {/* ✅ "/"로 접근하면 Home 페이지로 리디렉트 */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* ✅ 홈 화면 구성 */}
          <Route
            path="/home"
            element={
              <>
                <Home />
                <ProgrammingLang />
                <TechStack />
                <Projects />
                <ClickGame />
                <MenuTournament />
              </>
            }
          />

          {/* ✅ 프로젝트 상세 페이지 */}
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* ✅ 잘못된 경로 접근 시 홈으로 이동 */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
