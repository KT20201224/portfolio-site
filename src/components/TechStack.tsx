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
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        🛠 기술 스택 & 사용 언어
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 사용 언어 섹션 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            📌 사용 언어
          </h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>🔹 JavaScript</li>
            <li>🔹 TypeScript</li>
            <li>🔹 Python</li>
            <li>🔹 Solidity</li>
          </ul>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🚀 기술 스택
          </h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>🔹 React.js</li>
            <li>🔹 Next.js</li>
            <li>🔹 Tailwind CSS</li>
            <li>🔹 Node.js</li>
            <li>🔹 Hardhat (Solidity 개발)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
