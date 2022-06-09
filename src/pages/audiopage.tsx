import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { element } from "../module/audioImage";
import AudioBtn from "../component/audioBtn";

interface SRC {
  audio: string;
  image: string;
  number: number;
}

const AudioPage: React.FC = () => {
  // variable for audio controll
  const settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

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

  const isFirstRender = useRef<Boolean>(true);

  const convertState = () => {
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
          number: srcArray[3].number,
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
  };

  const [srcState, setSrcState] = useState<SRC>(convertState());

  // logic switching
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setSrcState(() => {
      return convertState();
    });
  }, [settings.song]);

  return (
    <div className="Audio-test">
      <AudioBtn
        srcState={srcState}
        setSrcState={setSrcState}
        srcArray={srcArray}
      />
    </div>
  );
};

export default AudioPage;
