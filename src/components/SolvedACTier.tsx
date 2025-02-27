import React, { useEffect, useState } from "react";

// 티어 번호에 해당하는 이미지 URL (Solved.ac 티어)
const tierImages = [
  "https://static.solved.ac/tier/0.svg", // Unrated
  "https://static.solved.ac/tier/1.svg", // Bronze V
  "https://static.solved.ac/tier/2.svg",
  "https://static.solved.ac/tier/3.svg",
  "https://static.solved.ac/tier/4.svg",
  "https://static.solved.ac/tier/5.svg", // Bronze I
  "https://static.solved.ac/tier/6.svg", // Silver V
  "https://static.solved.ac/tier/7.svg",
  "https://static.solved.ac/tier/8.svg",
  "https://static.solved.ac/tier/9.svg",
  "https://static.solved.ac/tier/10.svg", // Silver I
  "https://static.solved.ac/tier/11.svg", // Gold V
  "https://static.solved.ac/tier/12.svg",
  "https://static.solved.ac/tier/13.svg",
  "https://static.solved.ac/tier/14.svg",
  "https://static.solved.ac/tier/15.svg", // Gold I
  "https://static.solved.ac/tier/16.svg", // Platinum V
  "https://static.solved.ac/tier/17.svg",
  "https://static.solved.ac/tier/18.svg",
  "https://static.solved.ac/tier/19.svg",
  "https://static.solved.ac/tier/20.svg", // Platinum I
  "https://static.solved.ac/tier/21.svg", // Diamond V
  "https://static.solved.ac/tier/22.svg",
  "https://static.solved.ac/tier/23.svg",
  "https://static.solved.ac/tier/24.svg",
  "https://static.solved.ac/tier/25.svg", // Diamond I
  "https://static.solved.ac/tier/26.svg", // Ruby V
  "https://static.solved.ac/tier/27.svg",
  "https://static.solved.ac/tier/28.svg",
  "https://static.solved.ac/tier/29.svg",
  "https://static.solved.ac/tier/30.svg", // Ruby I
];

const SolvedACTier = ({ handle }: { handle: string }) => {
  const [tier, setTier] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://solved.ac/api/v3/user/show?handle=${handle}`)
      .then((response) => {
        if (!response.ok) throw new Error("백준 아이디를 찾을 수 없습니다.");
        return response.json();
      })
      .then((data) => {
        setTier(data.tier);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [handle]);

  return (
    <div>
      <h2>💡 Solved.ac 티어</h2>
      {loading && <p>불러오는 중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && tier !== null && (
        <div>
          <p>백준 ID: {handle}</p>
          <img src={tierImages[tier]} alt={`티어 ${tier}`} width="100" />
        </div>
      )}
    </div>
  );
};

export default SolvedACTier;
