/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 중요! 'class'로 설정해야 버튼으로 변경 가능
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Tailwind 적용 대상
  theme: {
    extend: {},
  },
  plugins: [],
};
