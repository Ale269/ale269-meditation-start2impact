import distantStormAudio from "../audio/distant-storm.mp3";
import fireAudio from "../audio/FIre.mp3";
import horseEatingAudio from "../audio/horse-eating.mp3";
import lakeAudio from "../audio/lake.mp3";
import rainingDayAudio from "../audio/raining-day.mp3";
import swingingBoatAudio from "../audio/rumbling-boat.mp3";
import seaWaveAudio from "../audio/sea-wave.mp3";
import summerNightAudio from "../audio/summer-night.mp3";
import farmMorningAudio from "../audio/farm-morning.mp3";
import IntoTheJungleAudio from "../audio/into-the-jungle.mp3";
import forestAudio from "../audio/forest.mp3";
import snowWalkingAudio from "../audio/snow-walking.mp3";

import waveImg from "../img/wave-haikei.svg";
import wave2Img from "../img/wave-haikei2.svg";
import wave3Img from "../img/wave-haikei3.svg";
import homePageBackgroundImg from "../img/sfondo.svg";

import spaceWalkingImage from "../img/spacewalking.jpg";

export const element = {
  homePageBackground: homePageBackgroundImg,
  wave: waveImg,
  wave2: wave2Img,
  wave3: wave3Img,
  audioArray: [
    {
      audio: summerNightAudio,
      image: spaceWalkingImage,
      name: "Summer Night",
      key: 0,
    },
    {
      audio: seaWaveAudio,
      image: spaceWalkingImage,
      name: "Waving Sea",
      key: 1,
    },
    {
      audio: swingingBoatAudio,
      image: spaceWalkingImage,
      name: "Swinging Boat",
      key: 2,
    },
    {
      audio: rainingDayAudio,
      image: spaceWalkingImage,
      name: "Rainy Day",
      key: 3,
    },
    {
      audio: lakeAudio,
      image: spaceWalkingImage,
      name: "Lake Shore",
      key: 4,
    },

    {
      audio: horseEatingAudio,
      image: spaceWalkingImage,
      name: "Grazing Horse",
      key: 5,
    },

    {
      audio: fireAudio,
      image: spaceWalkingImage,
      name: "Crackling Fire",
      key: 6,
    },
    {
      audio: distantStormAudio,
      image: spaceWalkingImage,
      name: "A Distant Storm",
      key: 8,
    },
    {
      audio: farmMorningAudio,
      image: spaceWalkingImage,
      name: "Farm Morning",
      key: 9,
    },
    {
      audio: IntoTheJungleAudio,
      image: spaceWalkingImage,
      name: "Into The Jungle",
      key: 11,
    },
    {
      audio: forestAudio,
      image: spaceWalkingImage,
      name: "A windy Forest",
      key: 12,
    },
    {
      audio: snowWalkingAudio,
      image: spaceWalkingImage,
      name: "Walking In The Snow",
      key: 13,
    },
  ],
};
