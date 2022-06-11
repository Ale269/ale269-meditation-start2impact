import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { element } from "../module/audioImage";
import AudioTimeBtn from "../component/audioTimeBtn";

interface SRC {
  audio: string;
  image: string;
  name: string;
  key: number;
}

const AudioPage: React.FC = () => {
  // variable for audio controll
  let settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

  const srcArray: SRC[] = [];
  element.audioArray.forEach((element) => {
    srcArray.push(element);
  });

  // time variable
  const time: number = settings.time;

  const [srcState, setSrcState] = useState<SRC>(
    element.audioArray[settings.song]
  );

  return (
    <>
      <div className="wave-sound">
        <img src={element.wave4} alt="background"></img>
      </div>
      <section className="audio-page-section">
        <h1>Audio player</h1>
        <div className="audio-player-container">
          <AudioTimeBtn
            srcState={srcState}
            setSrcState={setSrcState}
            srcArray={srcArray}
            time={time}
          />
        </div>
      </section>
    </>
  );
};

export default AudioPage;
