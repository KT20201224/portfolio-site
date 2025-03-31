import React from "react";
import profileImage from "../assets/profile.png";

const Home = () => {
  return (
    <section id="home" className="text-center">
      {/* 프로필 이미지 */}
      <img
        src={profileImage}
        alt="프로필 이미지"
        className="w-32 h-32 rounded-full mx-auto shadow-lg"
      />

      {/* 자기소개 */}
      <h1 className="text-3xl font-bold mt-4">
        안녕하세요! 저는 김경태입니다. 🚀
      </h1>
      <p className="text-gray-600 mt-2">
        풀스택 개발과 블록체인 기술에 관심이 많은 예비 개발자입니다.
      </p>

      {/* 연락처 (GitHub, 이메일, 블로그) */}
      <div className="mt-4 space-x-4">
        <a
          href="https://github.com/KT20201224"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          href="mailto:rudxo0525@gmail.com"
          className="text-blue-500 hover:underline"
        >
          이메일
        </a>
        <span>|</span>
        <a
          href="https://lets-post-it.tistory.com" // 👉 여기에 본인의 블로그 URL 넣기
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          블로그
        </a>
      </div>
    </section>
  );
};

export default Home;
