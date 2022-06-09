import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { element } from "../module/audioImage";
import { setSong } from "../features/settingSlice";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const SoundPage: React.FC = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // ref for animation
  const waveAnimation = useRef<HTMLDivElement>(null);
  const h1Animation = useRef<HTMLHeadingElement>(null);
  const soundCardAnimation = useRef<HTMLDivElement>(null);

  // animation logic
  useEffect(() => {
    const stopAnimation = localStorage.getItem("soundAnimation");
    if (stopAnimation !== null) {
      return;
    }

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

    localStorage.setItem("soundAnimation", "true");
  }, []);

  // set sound and navigate
  const HandleClick = (sound: string) => {
    dispatch(setSong(sound));
    localStorage.setItem("choosenSong", sound);
    navigate("/timer");
  };

  return (
    <>
      <div ref={waveAnimation} className="wave-sound">
        <img src={element.wave2} alt="background"></img>
      </div>
      <section className="sound-section">
        <h1 ref={h1Animation}>Choose a sound</h1>
        <div ref={soundCardAnimation} className="sound-container">
          <div className="sound-item-container">
            <h3>Drifting Nebula</h3>
            <img src={element.nebula.image} alt="nebula"></img>
            <button
              onClick={() => {
                HandleClick("nebula");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Atlantis</h3>
            <img src={element.atlantis.image} alt="atlantis"></img>
            <button
              onClick={() => {
                HandleClick("atlantis");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Spacewalking</h3>
            <img src={element.spaceWalking.image} alt="space walking"></img>
            <button
              onClick={() => {
                HandleClick("spaceWalking");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Migrating island</h3>
            <img src={element.island.image} alt="migrating island"></img>
            <button
              onClick={() => {
                HandleClick("island");
              }}
            >
              Select
            </button>
          </div>
          <div className="sound-item-container">
            <h3>Eternal Garden</h3>
            <img src={element.eternalGarden.image} alt="eternal garden"></img>
            <button
              onClick={() => {
                HandleClick("garden");
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
