import React from "react";

const ProgrammingLang = () => {
  return (
    <section
      id="languages"
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        💻 사용 가능 언어
      </h2>

      <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
        {/* 각 언어를 카드 형태로 정렬 */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🟢 Java
          </h3>
          <p>주력, 백엔드 개발</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🟢 TypeScript
          </h3>
          <p>주력, 프론트엔드 개발</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🟡 Python
          </h3>
          <p>사용 경험 多</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🟡 C#
          </h3>
          <p>유니티 게임 개발 경험 多</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🟠 R
          </h3>
          <p>기본적인 데이터 분석 및 시각화 가능</p>
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            🟠 Solidity
          </h3>
          <p>이더리움 스마트 컨트랙트 개발</p>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLang;
