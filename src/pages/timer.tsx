import React, { useState, useRef, useEffect } from "react";
import wave3 from "../img/wave-haikei3.svg";
import { useDispatch } from "react-redux";
import { setTimer } from "../features/settingSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Timer: React.FC = () => {
  let navigate = useNavigate();
  const [counterTimer, setCounterTimer] = useState<number>(1);
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

  const waveAnimation = useRef<HTMLDivElement>(null);
  const h1Animation = useRef<HTMLHeadingElement>(null);
  const timerAnimation = useRef<HTMLDivElement>(null);
  const submitAnimationBtn = useRef<HTMLButtonElement>(null);

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
  }, []);

  return (
    <>
      <div ref={waveAnimation} className="wave-timer">
        <img src={wave3} alt="background"></img>
      </div>
      <section className="timer-section">
        <h1 ref={h1Animation}>Set the timer</h1>
        <div ref={timerAnimation} className="timer-container">
          <div className="increase-btn">
            <button
              onClick={() => {
                setCounterTimer((state) => {
                  return state + 1;
                });
              }}
            >
              +
            </button>
            <button
              className="btn-factor-ten"
              onClick={() => {
                setCounterTimer((state) => {
                  return state + 10;
                });
              }}
            >
              +10
            </button>
          </div>
          <div className="number">
            <h3>{counterTimer}</h3>
            <h4>minutes</h4>
          </div>
          <div className="decrease-btn">
            <button
              onClick={() => {
                setCounterTimer((state) => {
                  if (state > 0) {
                    return state - 1;
                  } else {
                    return state;
                  }
                });
              }}
            >
              -
            </button>
            <button
              className="btn-factor-ten"
              onClick={() => {
                setCounterTimer((state) => {
                  if (state > 10) {
                    return state - 10;
                  } else if (state < 10 && state > 0) {
                    return 0;
                  } else {
                    return state;
                  }
                });
              }}
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
            navigate("/audio");
            console.log(settings);
          }}
        >
          Start
        </button>
      </section>
    </>
  );
};

export default Timer;
