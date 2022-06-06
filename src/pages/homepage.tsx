import React from "react";
import Sfondo from "../img/sfondo.svg";
import wave from "../img/wave-haikei.svg";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  let navigate = useNavigate();
  return (
    <section className="home-section">
      <div className="header-container">
        <div className="hero-container">
          <h1>Breathe</h1>
          <h3>Indulge in meditation</h3>
          <img className="hero-image" src={Sfondo} alt="meditation" />
        </div>
      </div>
      <div className="wave">
        <img src={wave} alt="background"></img>
      </div>
      <div className="use-container">
        <h2>Let's Relax</h2>
        <p>This application is designed to help you relax</p>
        <p>
          <span>Set </span>the timer, <span>choose</span> a melody and{" "}
          <span>start</span> a meditation session
        </p>
        <button
          onClick={() => {
            navigate("/soundPage");
          }}
        >
          Start now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
