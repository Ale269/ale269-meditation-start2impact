import spaceWalkingAudio from "../audio/spacewalking.mp3";
import eternalGardenAudio from "../audio/eternal-garden.mp3";
import islandAudio from "../audio/migrant-island.mp3";
import atlantisAudio from "../audio/atlantis.mp3";
import nebulaAudio from "../audio/drifting-nebula.mp3";
import waveImg from "../img/wave-haikei.svg";
import wave2Img from "../img/wave-haikei2.svg";
import wave3Img from "../img/wave-haikei3.svg";
import homePageBackgroundImg from "../img/sfondo.svg";

import spaceWalkingImage from "../img/spacewalking.jpg";
import eternalGardenImage from "../img/eternal-garden.jpg";
import islandImage from "../img/migrating-island.jpg";
import atlantisImage from "../img/atlantis.jpg";
import nebulaImage from "../img/drifting-nebula.jpg";

export const element = {
  homePageBackground: homePageBackgroundImg,
  wave: waveImg,
  wave2: wave2Img,
  wave3: wave3Img,
  spaceWalking: {
    audio: spaceWalkingAudio,
    image: spaceWalkingImage,
  },
  eternalGarden: {
    audio: eternalGardenAudio,
    image: eternalGardenImage,
  },
  island: {
    audio: islandAudio,
    image: islandImage,
  },
  atlantis: {
    audio: atlantisAudio,
    image: atlantisImage,
  },
  nebula: {
    audio: nebulaAudio,
    image: nebulaImage,
  },
};
