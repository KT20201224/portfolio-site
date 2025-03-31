import React from "react";

const SolvedACTier = () => {
  const bojId = "olly123";
  return (
    <section
      id="solvedtier"
      className="max-w-3xl mx-auto p-6 my-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Solved.ac 티어
      </h2>

      <div className="flex flex-col items-center space-y-2">
        {/* solved.ac 티어 뱃지 */}
        <img
          src={`https://mazassumnida.wtf/api/generate_badge?boj=${bojId}`}
          alt={`${bojId}'s solved.ac tier`}
          className="w-120 max-w-full"
        />

        {/* solved.ac 프로필 링크 */}
        <a
          href={`https://solved.ac/profile/${bojId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          solved.ac 프로필 보기 →
        </a>
      </div>
    </section>
  );
};

export default SolvedACTier;
