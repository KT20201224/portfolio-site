import React from "react";

const TechStack = () => {
  const techList = [
    { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-600" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-200 text-blue-700" },
    { name: "Tailwind CSS", icon: "🎨", color: "bg-teal-100 text-teal-600" },
    { name: "Spring Boot", icon: "🌱", color: "bg-green-100 text-green-600" },
    { name: "Solidity", icon: "🔗", color: "bg-gray-100 text-gray-600" },
  ];

  return (
    <section id="techstack">
      <h2 className="text-2xl font-bold text-center mb-6">🛠 기술 스택</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {techList.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg shadow-md ${tech.color} transition-transform transform hover:scale-105`}
          >
            <span className="text-4xl">{tech.icon}</span>
            <p className="mt-2 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
