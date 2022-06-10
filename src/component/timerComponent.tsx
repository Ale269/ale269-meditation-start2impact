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
}

const TimerComponent: React.FC<PROPS> = ({
  time,
  isPlaying,
  setIsPlaying,
  audio,
}) => {
  // timer variable for controll
  const [timer, setTimer] = useState<TIMER>({ minutes: time, seconds: 0 });
  const timerIntervall = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (isPlaying) {
      timerIntervall.current = setInterval(() => {
        setTimer((oldState) => {
          if (oldState.seconds === 0 && oldState.minutes === 0) {
            audio.current?.pause();
            clearInterval(timerIntervall.current);
            setIsPlaying(false);
            return { ...oldState };
          } else if (oldState.seconds === 0) {
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

  return (
    <div>
      <h3>{timer.minutes >= 10 ? timer.minutes : "0" + timer.minutes}</h3>
      <h3>{timer.seconds >= 10 ? timer.seconds : "0" + timer.seconds}</h3>
    </div>
  );
};

export default TimerComponent;
