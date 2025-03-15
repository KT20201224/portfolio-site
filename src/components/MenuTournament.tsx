import { useState } from "react";
import { motion } from "framer-motion";

const MENU_LIST = [
  "치킨",
  "피자",
  "떡볶이",
  "햄버거",
  "초밥",
  "스테이크",
  "삼겹살",
  "라면",
];

const shuffleArray = (array: string[]) =>
  [...array].sort(() => Math.random() - 0.5);

const MenuTournament = () => {
  const [menu, setMenu] = useState(shuffleArray(MENU_LIST));
  const [roundIndex, setRoundIndex] = useState(0);
  const [nextRound, setNextRound] = useState<string[]>([]);

  const handleSelect = (selected: string) => {
    const updatedNextRound = [...nextRound, selected];

    if (roundIndex + 2 >= menu.length) {
      if (updatedNextRound.length === 1) {
        setMenu([updatedNextRound[0]]);
      } else {
        setMenu(updatedNextRound);
        setNextRound([]);
        setRoundIndex(0);
      }
    } else {
      setNextRound(updatedNextRound);
      setRoundIndex(roundIndex + 2);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        🍽️ 저녁 메뉴 골든벨 🔔
      </h2>

      {menu.length > 1 ? (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {menu.length === 2 ? "🏆 결승전" : `🔥 ${menu.length}강`}
          </h3>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSelect(menu[roundIndex])}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              {menu[roundIndex]}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSelect(menu[roundIndex + 1])}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              {menu[roundIndex + 1]}
            </motion.button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mt-6 text-xl font-bold text-green-500"
        >
          🎉 오늘 저녁은 <span className="text-red-500">{menu[0]}</span>! 🎊
        </motion.div>
      )}

      <button
        onClick={() => {
          setMenu(shuffleArray(MENU_LIST));
          setNextRound([]);
          setRoundIndex(0);
        }}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        🔄 다시하기
      </button>
    </div>
  );
};

export default MenuTournament;
