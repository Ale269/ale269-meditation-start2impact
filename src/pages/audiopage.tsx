import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setSong } from "../features/settingSlice";
import { element } from "../module/audioImage";

interface SRC {
  audio: string;
  image: string;
  number: number;
}

const AudioPage: React.FC = () => {
  const settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

  console.log(settings);

  const srcArray: SRC[] = [
    { audio: element.nebula.audio, image: element.nebula.image, number: 0 },
    { audio: element.atlantis.audio, image: element.atlantis.image, number: 1 },
    {
      audio: element.spaceWalking.audio,
      image: element.spaceWalking.image,
      number: 2,
    },
    { audio: element.island.audio, image: element.island.image, number: 3 },
    {
      audio: element.eternalGarden.audio,
      image: element.eternalGarden.image,
      number: 4,
    },
  ];

  const [srcState, setSrcState] = useState<SRC>({
    audio: srcArray[0].audio!,
    image: srcArray[0].image!,
    number: srcArray[0].number!,
  });

  useEffect(() => {
    setSrcState(() => {
      switch (settings.song) {
        case "nebula":
          return {
            audio: srcArray[0].audio,
            image: srcArray[0].image,
            number: srcArray[0].number,
          };
        case "atlantis":
          return {
            audio: srcArray[1].audio,
            image: srcArray[1].image,
            number: srcArray[1].number,
          };
        case "spaceWalking":
          return {
            audio: srcArray[2].audio,
            image: srcArray[2].image,
            number: srcArray[2].number,
          };
        case "island":
          return {
            audio: srcArray[3].audio,
            image: srcArray[3].image,
            number: srcArray[4].number,
          };
        case "garden":
          return {
            audio: srcArray[4].audio,
            image: srcArray[4].image,
            number: srcArray[4].number,
          };

        default:
          return {
            audio: srcArray[4].audio,
            image: srcArray[4].image,
            number: srcArray[4].number,
          };
      }
    });
  }, [settings.song]);

  const audio = useRef<HTMLAudioElement>(null);

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

  return (
    <div className="Audio-test">
      <audio ref={audio} src={srcState.audio} loop></audio>
      <img src={srcState.image} alt="song cover"></img>

      <button
        onClick={() => {
          setSrcState((state) => {
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

      <button
        onClick={() => {
          audio.current?.play();
        }}
      >
        oooo
      </button>
      <button
        onClick={() => {
          setSrcState((state) => {
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
    </div>
  );
};

export default AudioPage;
