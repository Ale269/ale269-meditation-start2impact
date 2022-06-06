import React, { useState } from "react";
import wave3 from "../img/wave-haikei3.svg";
import { useDispatch } from "react-redux";
import { setTimer } from "../features/settingSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Timer: React.FC = () => {
  const [counterTimer, setCounterTimer] = useState<number>(1);
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => {
    return state.settings.value;
  });
  return (
    <>
      <div className="wave-timer">
        <img src={wave3} alt="background"></img>
      </div>
      <section className="timer-section">
        <div className="timer-container">
          <div className="number">
            <h3>{counterTimer}</h3>
            <h4>minutes</h4>
          </div>
          <div className="button-container">
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
                onClick={() => {
                  setCounterTimer((state) => {
                    return state + 10;
                  });
                }}
              >
                +10
              </button>
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
        </div>
        <button
          onClick={() => {
            dispatch(setTimer(counterTimer));
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
