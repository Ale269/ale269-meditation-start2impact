import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { element } from "../module/audioImage";

const AudioPage: React.FC = () => {
  const settings = useSelector((state: RootState) => {
    return state.settings.value;
  });

  const [audioSrc, setAudioSrc] = useState<string>(element.spaceWalking.audio);

  useEffect(() => {
    console.log("run");

    setAudioSrc(() => {
      if (settings.song === "") {
        return element.spaceWalking.audio;
      }
      switch (settings.song) {
        case "nebula":
          return element.nebula.audio;
        case "atlantis":
          return element.atlantis.audio;
        case "spaceWalking":
          return element.spaceWalking.audio;
        case "island":
          return element.island.audio;
        case "garden":
          return element.eternalGarden.audio;
      }
    });
  }, [settings.song]);

  const audio = useRef<HTMLAudioElement>(null);

  console.log(audioSrc);

  return (
    <div className="Audio-test">
      <audio ref={audio} src={audioSrc}></audio>
      <button
        onClick={() => {
          audio.current?.play();
        }}
      >
        oooo
      </button>
    </div>
  );
};

export default AudioPage;
