import React, { useState } from "react";

const ToyPart = () => {
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [score, setScore] = useState(0);

  // 요소의 랜덤 위치를 설정하는 함수
  const moveTarget = () => {
    const newX = Math.floor(Math.random() * 100) + 50; // X 좌표 범위
    const newY = Math.floor(Math.random() * 100) + 50; // Y 좌표 범위
    setPosition({ x: newX, y: newY });
  };

  // 클릭할 때 점수 증가 및 요소 이동
  const handleClick = () => {
    setScore(score + 1);
    moveTarget();
  };

  return (
    <section
      id="toypart"
      className="max-w-3xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg text-center relative"
    >
      <h2 className="text-2xl font-bold">🎯 클릭 게임</h2>
      <p className="text-gray-600 mb-4">요소를 클릭하여 점수를 얻으세요!</p>
      <p className="text-lg font-semibold">점수: {score}</p>

      {/* 클릭할 요소 */}
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
    </section>
  );
};

export default ToyPart;
