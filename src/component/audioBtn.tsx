import react, { useState, useRef, useMemo, useEffect } from "react";

interface SRC {
  audio: string;
  image: string;
  number: number;
}

interface Props {
  srcState: SRC;
  setSrcState: React.Dispatch<React.SetStateAction<SRC>>;
  srcArray: SRC[];
}

const AudioBtn: React.FC<Props> = ({ srcState, setSrcState, srcArray }) => {
  // audio variable for controll
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const isInitialStart = useRef<boolean>(true);

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

  const setMemory = (num: number) => {
    switch (num) {
      case 0:
        return "nebula";
      case 1:
        return "atlantis";
      case 2:
        return "spaceWalking";
      case 3:
        return "island";
      case 4:
        return "garden";
      default:
        return "nebula";
    }
  };

  // imediatly start reproducing on song change if play is active
  useEffect(() => {
    console.log(isInitialStart);
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
    <>
      {AudioComponent}
      <button
        onClick={() => {
          setSrcState((state: any) => {
            let num = state.number - 1;
            if (state.number === 0) {
              num = 4;
            }

            return {
              audio: srcArray[num].audio,
              image: srcArray[num].image,
              number: srcArray[num].number,
            };
          });

          if (srcState.number === 0) {
            localStorage.setItem("choosenSong", "garden");
            return;
          }

          localStorage.setItem("choosenSong", setMemory(srcState.number - 1));
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
          setSrcState((state: any) => {
            let num = state.number + 1;
            if (state.number === 4) {
              num = 0;
            }
            return {
              audio: srcArray[num].audio,
              image: srcArray[num].image,
              number: srcArray[num].number,
            };
          });

          if (srcState.number === 4) {
            localStorage.setItem("choosenSong", "nebula");
            return;
          }

          localStorage.setItem("choosenSong", setMemory(srcState.number + 1));
        }}
      >
        previus
      </button>
    </>
  );
};

export default AudioBtn;
