import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "프로젝트 1",
      description: "설명이 들어갈 자리입니다.",
      link: "#",
    },
    {
      title: "프로젝트 2",
      description: "설명이 들어갈 자리입니다.",
      link: "#",
    },
    {
      title: "프로젝트 3",
      description: "설명이 들어갈 자리입니다.",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>📌 프로젝트 목록</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              자세히 보기
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
