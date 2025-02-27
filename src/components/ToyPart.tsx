import React, { useEffect, useState, useRef } from "react";

const ToyPart = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // 강아지 위치
  const [isInside, setIsInside] = useState(false); // 마우스가 박스 안에 있는지
  const [foodPosition, setFoodPosition] = useState({ x: 300, y: 200 }); // 먹이 위치
  const [isFoodEaten, setIsFoodEaten] = useState(false); // 먹이를 먹었는지 확인

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (boxRef.current) {
        const { left, top, width, height } =
          boxRef.current.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // 마우스가 박스 내부에 있는지 확인
        if (
          mouseX >= left &&
          mouseX <= left + width &&
          mouseY >= top &&
          mouseY <= top + height
        ) {
          setIsInside(true);
          setPosition({ x: mouseX - left, y: mouseY - top });

          // 강아지가 먹이에 가까워지면 먹이 제거
          const distance = Math.sqrt(
            Math.pow(position.x - foodPosition.x, 2) +
              Math.pow(position.y - foodPosition.y, 2)
          );

          if (distance < 20) {
            setIsFoodEaten(true); // 먹이를 없앰
          }
        } else {
          setIsInside(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position, foodPosition]); // position, foodPosition 변경 시 실행

  return (
    <div
      ref={boxRef}
      style={{
        width: "400px",
        height: "300px",
        border: "2px solid black",
        position: "relative",
        margin: "50px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* 먹이가 남아있다면 표시 */}
      {!isFoodEaten && (
        <div
          style={{
            position: "absolute",
            top: foodPosition.y,
            left: foodPosition.x,
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
          }}
        >
          🦴
        </div>
      )}

      {/* 강아지가 박스 안에 있을 때만 표시 */}
      {isInside && (
        <div
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            fontSize: "24px",
          }}
        >
          🐶
        </div>
      )}

      <p>이 박스 안에서 강아지를 움직여 먹이를 먹이세요!</p>
    </div>
  );
};

export default ToyPart;
