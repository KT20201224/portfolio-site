import React from "react";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        🛠 기술 스택
      </h2>

      <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
        {/* 각 기술 항목을 카드 형태로 정렬 */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🖥️ Frontend
          </h3>
          <p>React, Tailwind CSS</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            💻 Backend
          </h3>
          <p>Spring Boot, MySQL</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            📊 Data Analysis
          </h3>
          <p>Python (Pandas, Numpy), R (ggplot2, dplyr)</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            ☁️ etc
          </h3>
          <p>Firebase, AWS, Git</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
