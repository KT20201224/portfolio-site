import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  // localStorage에서 다크 모드 상태 불러오기
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-white bg-gray-800 dark:bg-yellow-300 dark:text-black rounded-md transition"
    >
      {darkMode ? "☀️ 라이트 모드" : "🌙 다크 모드"}
    </button>
  );
};

export default DarkModeToggle;
