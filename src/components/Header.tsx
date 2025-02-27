import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <a href="#home" className="text-2xl font-bold text-gray-800">
          MyPortfolio 🚀
        </a>

        {/* 네비게이션 메뉴 */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#techstack"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#toypart"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Toy Part
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
