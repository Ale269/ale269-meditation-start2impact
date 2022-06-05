import song1 from "../audio/fisrtsong.mp3";
import song2 from "../audio/Drifting at 432 Hz - Unicorn Heads.mp3";
import React, { useState, useRef, useEffect } from "react";

const Audio: React.FC = () => {
  const [songSrc, setSongSrc] = useState<string>(song1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const firstRender = useRef<boolean>(true);

  const handleSong = () => {
    const currentValue = isPlaying;
    setIsPlaying(!isPlaying);

    if (!currentValue) {
      if (audioPlayer.current === null) {
        return;
      }
      audioPlayer.current.play();
    } else {
      if (audioPlayer.current === null) {
        return;
      }
      audioPlayer.current.pause();
    }
  };

  const changeSong = () => {
    if (audioPlayer.current === null) {
      return;
    }
    setSongSrc(song2);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (audioPlayer.current === null) {
      return;
    }
    //audioPlayer.current.play();     CHANGE THIS LINE
  }, [songSrc]);

  return (
    <div className="App">
      <audio ref={audioPlayer} src={songSrc} loop></audio>
      <button
        onClick={() => {
          handleSong();
        }}
      >
        {isPlaying ? "Pause" : "play"}
      </button>
      <button
        onClick={() => {
          changeSong();
          setIsPlaying(true);
        }}
      >
        Change Song
      </button>
    </div>
  );
};

export default Audio;
