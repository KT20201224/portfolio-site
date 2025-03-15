import React, { useState } from "react";

const ClickGame = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 150, y: 150 });

  // 게임 영역 크기
  const boxWidth = 300;
  const boxHeight = 200;

  // 요소의 랜덤 위치를 설정하는 함수 (게임 영역 안에서만 이동)
  const moveTarget = () => {
    const newX = Math.random() * (boxWidth - 50) + 25; // X 좌표 (박스 안)
    const newY = Math.random() * (boxHeight - 50) + 25; // Y 좌표 (박스 안)
    setPosition({ x: newX, y: newY });
  };

  // 클릭할 때 점수 증가 및 요소 이동
  const handleClick = () => {
    setScore(score + 1);
    moveTarget();
  };

  return (
    <section className="max-w-3xl mx-auto p-6 my-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        🎯 클릭 게임
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        요소를 클릭하여 점수를 얻으세요!
      </p>
      <p className="text-lg font-semibold text-gray-900 dark:text-white">
        점수: {score}
      </p>

      {/* 클릭 가능한 게임 영역 */}
      <div
        className="relative mx-auto mt-4 border-2 border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center"
        style={{ width: boxWidth, height: boxHeight }}
      >
        {/* 클릭할 타겟 요소 */}
        <div
          onClick={handleClick}
          className="absolute text-2xl cursor-pointer select-none"
          style={{
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
            transition: "top 0.2s ease, left 0.2s ease",
          }}
        >
          🎯
        </div>
      </div>
    </section>
  );
};

export default ClickGame;
