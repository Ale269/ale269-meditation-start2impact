import react, { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSong } from "../features/settingSlice";
import TimerComponent from "./timerComponent";

interface SRC {
  audio: string;
  image: string;
  name: string;
  key: number;
}

interface Props {
  srcState: SRC;
  setSrcState: React.Dispatch<React.SetStateAction<SRC>>;
  srcArray: SRC[];
  time: number;
}

const AudioTimeBtn: React.FC<Props> = ({
  srcState,
  setSrcState,
  srcArray,
  time,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [timeIsOver, setTimeIsOver] = useState<Boolean>(false);

  // audio variable for controll
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const isInitialStart = useRef<boolean>(true);

  // audio component
  const audio = useRef<HTMLAudioElement>(null);
  const AudioComponent = useMemo(() => {
    return (
      <div className="selected-item-content">
        <audio ref={audio} src={srcState.audio} loop></audio>
        <img src={srcState.image} alt="song cover"></img>
        <h3 className="title">{srcState.name}</h3>
      </div>
    );
  }, [srcState.audio]);

  // function
  const PlayOrPause = () => {
    if (timeIsOver === true) {
      return;
    }

    const currentValue = isPlaying;
    setIsPlaying(!isPlaying);

    if (!currentValue) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
  };

  const changeState = (direction: string) => {
    if (timeIsOver === true) {
      return;
    }
    setSrcState((state: SRC) => {
      let num: number = 0;
      switch (direction) {
        case "previus":
          num = state.key - 1;
          if (state.key === 0) {
            num = srcArray.length - 1;
          }
          break;
        case "subsequent":
          num = state.key + 1;
          if (state.key === srcArray.length - 1) {
            num = 0;
          }
          break;
        default:
          break;
      }

      return {
        audio: srcArray[num].audio,
        image: srcArray[num].image,
        name: srcArray[num].name,
        key: srcArray[num].key,
      };
    });

    // set local storage and dispatch action based on direction
    switch (direction) {
      case "previus":
        if (srcState.key === 0) {
          dispatch(setSong(srcArray.length - 1));
          localStorage.setItem("choosenSong", (srcArray.length - 1).toString());
          return;
        }
        localStorage.setItem("choosenSong", (srcState.key - 1).toString());
        dispatch(setSong(srcState.key - 1));
        break;
      case "subsequent":
        if (srcState.key === srcArray.length - 1) {
          localStorage.setItem("choosenSong", "0");
          dispatch(setSong(0));
          return;
        }

        localStorage.setItem("choosenSong", (srcState.key + 1).toString());
        dispatch(setSong(srcState.key + 1));
        break;
      default:
        break;
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

  return (
    <div className="audio-btn-container">
      {AudioComponent}
      <div className="audio-player-content">
        <TimerComponent
          time={time}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audio={audio}
          setTimeIsOver={setTimeIsOver}
        />
        <div className="btn-container">
          <div className="player-btn">
            <button
              onClick={() => {
                changeState("previus");
              }}
            >
              <i className="fa-solid fa-backward"></i>
            </button>
            {isPlaying ? (
              <button
                onClick={() => {
                  PlayOrPause();
                }}
              >
                <i className="fa-solid fa-pause"></i>
              </button>
            ) : (
              <button
                onClick={() => {
                  PlayOrPause();
                }}
              >
                <i className="fa-solid fa-play"></i>
              </button>
            )}
            <button
              onClick={() => {
                changeState("subsequent");
              }}
            >
              <i className="fa-solid fa-forward"></i>
            </button>
          </div>
          <div className="change-btn">
            <button
              onClick={() => {
                navigate("/timer");
              }}
            >
              Change time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioTimeBtn;
