import React from "react";
import { useParams, Link } from "react-router-dom";

const projectDetails = {
  portfolio: {
    title: "포트폴리오 웹사이트",
    description:
      "React와 Tailwind를 사용하여 제작한 개인 포트폴리오 사이트입니다.",
    content:
      "이 프로젝트에서는 최신 React 기술과 Tailwind CSS를 활용하여 반응형 웹사이트를 개발하였습니다.",
    image: "/images/portfolio.png",
  },
  blockchain: {
    title: "블록체인 스마트 컨트랙트",
    description:
      "Solidity를 사용하여 이더리움 네트워크에 배포한 프로젝트입니다.",
    content:
      "블록체인을 활용하여 보안성을 강화하고, 스마트 컨트랙트를 통해 자동화된 거래 시스템을 구축하였습니다.",
    image: "/images/blockchain.png",
  },
  game: {
    title: "게임 개발 프로젝트",
    description: "메이플스토리 월드 툴을 활용하여 만든 간단한 게임입니다.",
    content:
      "Lua와 C#을 활용하여 게임의 로직을 구현하였으며, 다양한 캐릭터와 스킬 시스템을 개발하였습니다.",
    image: "/images/game.png",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-500">
          ❌ 프로젝트를 찾을 수 없습니다.
        </h2>
        <Link
          to="/projects"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          🔙 프로젝트 목록으로 돌아가기
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {project.description}
      </p>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg mt-4 shadow-md"
      />

      <p className="text-gray-700 dark:text-gray-200 mt-4">{project.content}</p>

      <Link
        to="/projects"
        className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        🔙 프로젝트 목록으로 돌아가기
      </Link>
    </section>
  );
};

export default ProjectDetail;
