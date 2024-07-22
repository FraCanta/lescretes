import { useState } from "react";
import { motion } from "framer-motion";
const VideoPlayer = ({ video, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const togglePlay = () => {
    const videoEl = document.getElementById("videoPlayer2");
    if (!isPlaying && isFirstPlay) {
      videoEl.currentTime = 0; // Riavvolge il video all'inizio solo al primo play
      setIsFirstPlay(false);
    }
    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full aspect-video">
      <video
        id="videoPlayer2"
        className="object-cover w-full h-full rounded-lg"
        onClick={togglePlay}
        muted={isMuted}
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FAB02C] rounded-full p-6 lg:p-8"
          onClick={togglePlay}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white transition-opacity opacity-75 cursor-pointer lg:h-16 lg:w-16 hover:opacity-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.75 17A.75.75 0 0 1 5 16.25V3.75a.75.75 0 0 1 1.266-.57l10 6a.75.75 0 0 1 0 1.14l-10 6A.75.75 0 0 1 5.75 17z"
            />
          </svg>
          {/* <p className="text-lg font-bold text-white">PLAY</p> */}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
