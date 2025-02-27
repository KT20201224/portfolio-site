import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "포트폴리오 웹사이트",
      description: "React와 Tailwind를 사용하여 제작한 개인 포트폴리오 사이트",
      link: "#",
    },
    {
      title: "블록체인 스마트 컨트랙트",
      description: "Solidity를 사용하여 이더리움 네트워크에 배포한 프로젝트",
      link: "#",
    },
    {
      title: "게임 개발 프로젝트",
      description: "메이플스토리 월드 툴을 활용하여 만든 간단한 게임",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-2xl font-bold text-center mb-6">📌 프로젝트 목록</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-3 text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              자세히 보기 →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
