import React from "react";

const Certificates = () => {
  const certList = [
    {
      name: "정보처리기사",
      org: "한국산업인력공단",
      date: "2022.11.25",
    },
    {
      name: "SQLD (SQL 개발자)",
      org: "한국데이터산업진흥원",
      date: "2024.06.21",
    },
  ];

  return (
    <section
      id="certificates"
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg my-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        📝 자격증
      </h2>
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        {certList.map((cert, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between"
          >
            <span className="font-medium">{cert.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {cert.org} | {cert.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
