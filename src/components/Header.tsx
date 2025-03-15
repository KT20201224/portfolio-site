import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          MyPortfolio 🚀
        </a>

        {/* 네비게이션 메뉴 */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#techstack"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Tech Stack
            </a>
          </li>
        </ul>

        {/* 다크 모드 토글 버튼 */}
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
