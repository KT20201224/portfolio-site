import { useEffect, useState } from "react";

const DarkModeToggle = () => {
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
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10 
                 p-3 bg-gray-800 dark:bg-yellow-300 text-white dark:text-black 
                 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
