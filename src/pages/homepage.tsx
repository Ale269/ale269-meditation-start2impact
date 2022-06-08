import React, { useEffect, useRef } from "react";
import { element } from "../module/audioImage";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const HomePage: React.FC = () => {
  let navigate = useNavigate();
  let logoAnimation = useRef<HTMLImageElement>(null);
  let buttonAnimation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stopAnimation = localStorage.getItem("homeAnimation");
    if (stopAnimation !== null) {
      return;
    }
    gsap.from(logoAnimation.current, {
      duration: 2,
      opacity: 0,
    });

    gsap.from(buttonAnimation.current, {
      duration: 0.5,
      delay: 1,
      opacity: 0,
    });

    localStorage.setItem("homeAnimation", "true");
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
            src={element.homePageBackground}
            alt="meditation"
          />
        </div>
      </div>
      <div className="wave">
        <img src={element.wave} alt="background"></img>
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
            navigate("/sound");
          }}
        >
          Start now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
