import React from "react";
import { Link } from "react-router-dom";

const projectList = [
  {
    id: "portfolio",
    title: "포트폴리오 웹사이트",
    description: "React와 Tailwind를 사용하여 제작한 개인 포트폴리오 사이트",
    link: "/projects/portfolio",
  },
  {
    id: "blockchain",
    title: "블록체인 스마트 컨트랙트",
    description: "Solidity를 사용하여 이더리움 네트워크에 배포한 프로젝트",
    link: "/projects/blockchain",
  },
  {
    id: "game",
    title: "게임 개발 프로젝트",
    description: "메이플스토리 월드 툴을 활용하여 만든 간단한 게임",
    link: "/projects/game",
  },
];

const Projects = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        📌 프로젝트 목록
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            <Link
              to={project.link}
              className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              자세히 보기 →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
