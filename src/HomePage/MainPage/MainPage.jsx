import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <main className="main-content">
        <h1>
          Bütün <span className="main-highlight">kurslar</span> bir yerdə!
        </h1>
        <p className="main-p">
          Platformamız oflayn IT kurslarını rahat və sürətli şəkildə tapmağa,
          həmçinin <span id="break">məlumatlı qərarlar verməyə kömək edir</span>
        </p>
        <button className="start-btn">İndi başla</button>
      </main>
    </>
  );
};

export default MainPage;
