import React from "react";
import { useParams, Link } from "react-router-dom";
import emogramImage from "../assets/emogram.png";

const projectDetails = {
  emogram: {
    title: "Emogram - 감정 기반 기억 저장소",
    description: "감정을 기록하고 시각화하는 웹/앱 감정 다이어리 서비스입니다.",
    stack: [
      "Spring Boot",
      "React",
      "Flutter",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Three.js",
      "Tailwind CSS",
    ],
    features: [
      "하루 동안의 감정을 병에 담아 시각적으로 표현",
      "감정 구슬을 3D로 자유롭게 탐색하고 정렬 가능",
      "MongoDB에 감정 기록 저장, Redis로 감정 유형 캐싱",
      "감정별 타임라인 구성 및 반응형 디자인 적용",
      "모바일/웹 동시 대응: Flutter 앱, React 웹 UI",
    ],
    goal: "사용자의 감정을 단순히 기록하는 것을 넘어, 기억으로 저장하고 다시 들여다보게 하는 정서적 아카이브를 구현하고자 했습니다.",
    learnings:
      "데이터 설계와 캐시 처리, 3D 시각화, 멀티 플랫폼 대응 방식에 대한 실전 감각을 키울 수 있었습니다. 감정이라는 추상적인 개념을 UI/UX로 풀어내는 과정을 경험했습니다.",
    image: `${process.env.PUBLIC_URL}/images/emogram.png`,
    github: "https://github.com/KT20201224/emogram",
    demo: "https://kt20201224.github.io/portfolio-site/",
  },
  auction: {
    title: "실시간 경매 웹서비스",
    description: "실시간으로 경매에 참여하고 입찰할 수 있는 경매 플랫폼입니다.",
    stack: [
      "Spring Boot",
      "JWT",
      "WebSocket",
      "MySQL",
      "Thymeleaf",
      "HTML/CSS",
    ],
    features: [
      "JWT 기반 로그인 및 사용자 인증",
      "사용자 포인트 충전 및 포인트로 입찰",
      "실시간 입찰 기능",
      "입찰 로그 저장 및 최고 입찰자 표시",
      "관리자 페이지를 통한 경매 등록 및 관리",
    ],
    goal: "실시간 웹 통신과 사용자 간 경쟁 기능을 구현하여 실제 서비스에 가까운 플랫폼을 설계하고자 했습니다.",
    learnings:
      "데이터 처리, JWT 인증 흐름, 포인트 시스템 구현 경험을 통해 웹 애플리케이션 아키텍처에 대한 이해도를 높였습니다.",
    image: `${process.env.PUBLIC_URL}/images/auction.png`,
    github: "https://github.com/KT20201224/auction",
    demo: "", // 배포 URL이 있다면 추가 가능
  },
  rasingSteve: {
    title: "RasingSteve",
    description: "마인크래프트 포지를 활용한 마인크래프트 모드 개발입니다.",
    stack: ["Java"],
    features: ["커스텀 블록 구현", "커스텀 아이템 구현", "커스텀 엔티티 구현"],
    goal: "게임 제작 프로세스를 경험하고, 사용자 경험을 고려한 기능 구현에 도전했습니다.",
    learnings: "게임 개발 과정을 배우고, 자바 코딩 실력 향상",
    image: `${process.env.PUBLIC_URL}/images/rasingsteve.png`,
    github: "https://github.com/KT20201224/RasingSteve",
    demo: "",
  },

  // 다른 프로젝트들도 같은 형식으로 확장 가능
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-red-300 dark:border-red-700 rounded-lg shadow-lg text-center">
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
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {project.description}
      </p>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg mt-2 shadow-md"
      />

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          🛠 기술 스택
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {project.stack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          ✨ 주요 기능
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          🎯 개발 목적
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{project.goal}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          📈 배운 점
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{project.learnings}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {/* <a
          href={project.demo}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 배포 링크
        </a> */}
        <a
          href={project.github}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 GitHub 저장소
        </a>
      </div>

      <Link
        to="/projects"
        className="mt-8 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        🔙 프로젝트 목록으로 돌아가기
      </Link>
    </section>
  );
};

export default ProjectDetail;
