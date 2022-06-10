import react, { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSong } from "../features/settingSlice";

interface SRC {
  audio: string;
  image: string;
  key: number;
}

interface Props {
  srcState: SRC;
  setSrcState: React.Dispatch<React.SetStateAction<SRC>>;
  srcArray: SRC[];
  time: number;
}

interface TIMER {
  minutes: number;
  seconds: number;
}

const AudioTimeBtn: React.FC<Props> = ({
  srcState,
  setSrcState,
  srcArray,
  time,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // audio variable for controll
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const isInitialStart = useRef<boolean>(true);

  // timer variable for controll
  const [timer, setTimer] = useState<TIMER>({ minutes: time, seconds: 0 });
  const timerIntervall = useRef<ReturnType<typeof setInterval>>();

  // audio component
  const audio = useRef<HTMLAudioElement>(null);
  const AudioComponent = useMemo(() => {
    return (
      <>
        <audio ref={audio} src={srcState.audio} loop></audio>
        <img src={srcState.image} alt="song cover"></img>
      </>
    );
  }, [srcState.audio]);

  // function
  const PlayOrPause = () => {
    const currentValue = isPlaying;
    setIsPlaying(!isPlaying);

    if (!currentValue) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
  };

  // imediatly start reproducing on song change if play is active
  useEffect(() => {
    if (isInitialStart.current) {
      isInitialStart.current = false;
      return;
    }

    const currentValue = isPlaying;
    if (currentValue) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
  }, [srcState]);

  // countDown logic
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
    <>
      {AudioComponent}
      <h3>{timer.minutes >= 10 ? timer.minutes : "0" + timer.minutes}</h3>
      <h3>{timer.seconds >= 10 ? timer.seconds : "0" + timer.seconds}</h3>
      <button
        onClick={() => {
          setSrcState((state: SRC) => {
            let num = state.key - 1;
            if (state.key === 0) {
              num = srcArray.length - 1;
            }

            return {
              audio: srcArray[num].audio,
              image: srcArray[num].image,
              key: srcArray[num].key,
            };
          });

          if (srcState.key === 0) {
            dispatch(setSong(srcArray.length - 1));
            localStorage.setItem(
              "choosenSong",
              (srcArray.length - 1).toString()
            );
            return;
          }

          localStorage.setItem("choosenSong", (srcState.key - 1).toString());
          dispatch(setSong(srcState.key - 1));
        }}
      >
        previus
      </button>
      {isPlaying ? (
        <button
          onClick={() => {
            PlayOrPause();
          }}
        >
          pause
        </button>
      ) : (
        <button
          onClick={() => {
            PlayOrPause();
          }}
        >
          play
        </button>
      )}
      <button
        onClick={() => {
          setSrcState((state) => {
            let num = state.key + 1;
            if (state.key === srcArray.length - 1) {
              num = 0;
            }
            return {
              audio: srcArray[num].audio,
              image: srcArray[num].image,
              key: srcArray[num].key,
            };
          });

          if (srcState.key === srcArray.length - 1) {
            localStorage.setItem("choosenSong", "0");
            dispatch(setSong(0));
            return;
          }

          localStorage.setItem("choosenSong", (srcState.key + 1).toString());
          dispatch(setSong(srcState.key + 1));
        }}
      >
        dopo
      </button>
      <button
        onClick={() => {
          navigate("/timer");
        }}
      >
        Change time
      </button>
    </>
  );
};

export default AudioTimeBtn;
