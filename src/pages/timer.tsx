import React, { useState, useRef, useEffect } from "react";
import { element } from "../module/audioImage";
import { useDispatch } from "react-redux";
import { setTimer } from "../features/settingSlice";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Timer: React.FC = () => {
  let navigate = useNavigate();

  // state for timer
  const [counterTimer, setCounterTimer] = useState<number>(1);
  const dispatch = useDispatch();

  // ref for animation
  const waveAnimation = useRef<HTMLDivElement>(null);
  const h1Animation = useRef<HTMLHeadingElement>(null);
  const timerAnimation = useRef<HTMLDivElement>(null);
  const submitAnimationBtn = useRef<HTMLButtonElement>(null);

  // animation logic
  useEffect(() => {
    const stopAnimation = localStorage.getItem("timerAnimation");
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

    gsap.from(timerAnimation.current, {
      duration: 1,
      delay: 1.2,
      opacity: 0,
    });

    gsap.from(submitAnimationBtn.current, {
      duration: 1,
      delay: 1.4,
      opacity: 0,
    });

    localStorage.setItem("timerAnimation", "true");
  }, []);

  //set timer logic
  const timerHandler = (action: string) => {
    setCounterTimer((state) => {
      switch (action) {
        case "increase":
          return state + 1;
        case "increase10":
          return state + 10;
        case "decrease":
          if (state > 1) {
            return state - 1;
          }
          return 1;
        case "decrease10":
          if (state > 10) {
            return state - 10;
          }
          return 1;
        default:
          return state;
      }
    });
    return;
  };

  return (
    <>
      <div ref={waveAnimation} className="wave-timer">
        <img src={element.wave3} alt="background"></img>
      </div>
      <section className="timer-section">
        <h1 ref={h1Animation}>Set the timer</h1>
        <div ref={timerAnimation} className="timer-container">
          <div className="increase-btn">
            <button onClick={() => timerHandler("increase")}>+</button>
            <button
              className="btn-factor-ten"
              onClick={() => timerHandler("increase10")}
            >
              +10
            </button>
          </div>
          <div className="number">
            <h3>{counterTimer}</h3>
            <h4>minutes</h4>
          </div>
          <div className="decrease-btn">
            <button onClick={() => timerHandler("decrease")}>-</button>
            <button
              className="btn-factor-ten"
              onClick={() => timerHandler("decrease10")}
            >
              -10
            </button>
          </div>
        </div>
        <button
          ref={submitAnimationBtn}
          className="timer-submit"
          onClick={() => {
            dispatch(setTimer(counterTimer));
            localStorage.setItem("choosenTime", counterTimer.toString());
            navigate("/audio");
          }}
        >
          Start
        </button>
      </section>
    </>
  );
};

export default Timer;
