import React, { useEffect, useRef } from "react";
import island from "../img/migrating-island.jpg";
import spaceWalking from "../img/spacewalking.jpg";
import nebula from "../img/drifting-nebula.jpg";
import atlantis from "../img/atlantis.jpg";
import garden from "../img/eternal-garden.jpg";
import wave2 from "../img/wave-haikei2.svg";
import { useDispatch } from "react-redux";
import { setSong } from "../features/settingSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const SoundPage: React.FC = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

  const waveAnimation = useRef<HTMLDivElement>(null);
  const h1Animation = useRef<HTMLHeadingElement>(null);
  const soundCardAnimation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(waveAnimation.current, {
      duration: 1,
      y: "-100%",
    });

    gsap.from(h1Animation.current, {
      duration: 1,
      delay: 1,
      opacity: 0,
    });

    gsap.from(".sound-item-container", {
      duration: 1,
      y: "100%",
      delay: 1,
      opacity: 0,
      stagger: 0.3,
    });
  }, []);
  return (
    <>
      <div ref={waveAnimation} className="wave-sound">
        <img src={wave2} alt="background"></img>
      </div>
      <section className="sound-section">
        <h1 ref={h1Animation}>Choose a sound</h1>
        <div ref={soundCardAnimation} className="sound-container">
          <div className="sound-item-container">
            <h3>Drifting Nebula</h3>
            <img src={nebula} alt="nebula"></img>
            <button
              onClick={() => {
                dispatch(setSong("nebula"));
                navigate("/timer");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Atlantis</h3>
            <img src={atlantis} alt="atlantis"></img>
            <button
              onClick={() => {
                dispatch(setSong("atlantis"));
                navigate("/timer");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Spacewalking</h3>
            <img src={spaceWalking} alt="space walking"></img>
            <button
              onClick={() => {
                dispatch(setSong("spaceWalking"));
                navigate("/timer");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Migrating island</h3>
            <img src={island} alt="migrating island"></img>
            <button
              onClick={() => {
                dispatch(setSong("island"));
                navigate("/timer");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Eternal Garden</h3>
            <img src={garden} alt="eternal garden"></img>
            <button
              onClick={() => {
                dispatch(setSong("garden"));
                navigate("/timer");
              }}
            >
              Select
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoundPage;
