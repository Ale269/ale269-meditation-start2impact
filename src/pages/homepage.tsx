import React, { useEffect, useRef } from "react";
import Sfondo from "../img/sfondo.svg";
import wave from "../img/wave-haikei.svg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const HomePage: React.FC = () => {
  let navigate = useNavigate();
  let logoAnimation = useRef<HTMLImageElement>(null);
  let buttonAnimation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(logoAnimation.current, {
      duration: 1,
      y: "-30%",
      opacity: 0,
    });

    gsap.from(buttonAnimation.current, {
      duration: 1,
      delay: 1,
      opacity: 0,
    });
  }, []);

  return (
    <section className="home-section">
      <div className="header-container">
        <div className="hero-container">
          <h1>Breathe</h1>
          <h3>Indulge in meditation</h3>
          <img
            ref={logoAnimation}
            className="hero-image"
            src={Sfondo}
            alt="meditation"
          />
        </div>
      </div>
      <div className="wave">
        <img src={wave} alt="background"></img>
      </div>
      <div ref={buttonAnimation} className="use-container">
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
