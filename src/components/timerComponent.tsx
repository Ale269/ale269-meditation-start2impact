import React, { useState, useEffect, useRef } from "react";

interface TIMER {
  minutes: number;
  seconds: number;
}

interface PROPS {
  time: number;
  isPlaying: Boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<Boolean>>;
  audio: React.RefObject<HTMLAudioElement>;
  setTimeIsOver: React.Dispatch<React.SetStateAction<Boolean>>;
}

const TimerComponent: React.FC<PROPS> = ({
  time,
  isPlaying,
  setIsPlaying,
  audio,
  setTimeIsOver,
}) => {
  // timer variable for controll
  const [timer, setTimer] = useState<TIMER>({ minutes: time, seconds: 0 });
  const timerIntervall = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isPlaying) {
      timerIntervall.current = setInterval(() => {
        setTimer((oldState) => {
          if (oldState.seconds === 0) {
            return {
              minutes: oldState.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              minutes: oldState.minutes,
              seconds: oldState.seconds - 1,
            };
          }
        });
      }, 1000);
    } else {
      clearInterval(timerIntervall.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (timer.minutes === 0 && timer.seconds === 0) {
      setIsPlaying(false);
      audio.current?.pause();
      setTimeIsOver(true);
      document.querySelector(".player-btn")?.classList.add("inactive");
    }
  }, [timer]);

  return (
    <div className="time-stamp">
      <h3>
        {timer.minutes >= 10 ? timer.minutes : "0" + timer.minutes} :{" "}
        {timer.seconds >= 10 ? timer.seconds : "0" + timer.seconds}
      </h3>
    </div>
  );
};

export default TimerComponent;
