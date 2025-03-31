import React from "react";
import { Link } from "react-router-dom";

const projectList = [
  {
    id: "emogram",
    title: "Emogram",
    description: "사람들의 감정에 대한 기억을 저장하는 기억저장소",
    link: "/projects/emogram",
  },
  {
    id: "auction",
    title: "실시간 경매 웹서비스",
    description: "실시간 경매 플랫폼",
    link: "/projects/auction",
  },
  {
    id: "rasingSteve",
    title: "RasingSteve",
    description: "마인크래프트 모드 개발 프로젝트",
    link: "/projects/rasingSteve",
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
