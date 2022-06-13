import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { element } from "../module/audioImage";
import AudioTimeBtn from "../components/audioTimeBtn";
import { gsap } from "gsap";

interface SRC {
  audio: string;
  image: string;
  name: string;
  key: number;
}

const AudioPage: React.FC = () => {
  // variable for audio controll
  let settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

  const srcArray: SRC[] = [];
  element.audioArray.forEach((element) => {
    srcArray.push(element);
  });

  // time variable
  const time: number = settings.time;

  const [srcState, setSrcState] = useState<SRC>(
    element.audioArray[settings.song]
  );

  // animation
  const waveAnimation = useRef<HTMLDivElement>(null);
  const h1Animation = useRef<HTMLHeadingElement>(null);
  const playerAnimation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stopAnimation = localStorage.getItem("audioPageAnimation");
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

    gsap.from(playerAnimation.current, {
      duration: 1,
      y: "100%",
      delay: 1,
      opacity: 0,
    });

    localStorage.setItem("audioPageAnimation", "true");
  }, []);

  return (
    <>
      <div ref={waveAnimation} className="wave-audiosound">
        <img src={element.wave4} alt="background"></img>
      </div>
      <section className="audio-page-section">
        <h1 ref={h1Animation}>Audio player</h1>
        <div ref={playerAnimation} className="audio-player-container">
          <AudioTimeBtn
            srcState={srcState}
            setSrcState={setSrcState}
            srcArray={srcArray}
            time={time}
          />
        </div>
      </section>
    </>
  );
};

export default AudioPage;
