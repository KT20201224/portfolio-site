import React from "react";

const TechStack = () => {
  const techList = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "Solidity", icon: "🔗" },
  ];

  return (
    <section id="techstack">
      <h2>🛠 기술 스택</h2>
      <ul>
        {techList.map((tech, index) => (
          <li key={index}>
            <span>{tech.icon}</span> {tech.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
