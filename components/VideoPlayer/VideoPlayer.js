import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VideoPlayer = ({ video, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

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

  const handleFullScreen = () => {
    const videoEl = document.getElementById("videoPlayer2");
    if (videoEl.requestFullscreen) {
      videoEl.requestFullscreen();
    } else if (videoEl.mozRequestFullScreen) {
      // Firefox
      videoEl.mozRequestFullScreen();
    } else if (videoEl.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      videoEl.webkitRequestFullscreen();
    } else if (videoEl.msRequestFullscreen) {
      // IE/Edge
      videoEl.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const videoEl = document.getElementById("videoPlayer2");

    const handleVideoEnd = () => {
      setIsPlaying(false);
      setIsFirstPlay(true); // Resetta lo stato per consentire di riavvolgere il video al primo play successivo
      videoEl.currentTime = 0; // Riavvolge il video all'inizio
    };

    const handleBuffering = () => {
      setIsBuffering(true);
    };

    const handlePlaying = () => {
      setIsBuffering(false);
    };

    videoEl.addEventListener("ended", handleVideoEnd);
    videoEl.addEventListener("waiting", handleBuffering);
    videoEl.addEventListener("playing", handlePlaying);

    return () => {
      videoEl.removeEventListener("ended", handleVideoEnd);
      videoEl.removeEventListener("waiting", handleBuffering);
      videoEl.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <div className="relative w-full h-full aspect-square lg:aspect-video">
      <video
        id="videoPlayer2"
        className="object-cover w-full h-full rounded-sm"
        onClick={togglePlay}
        muted={isMuted}
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && !isBuffering && (
        <div
          className="absolute p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2 lg:p-8"
          onClick={togglePlay}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer text-main lg:h-16 lg:w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.75 17A.75.75 0 0 1 5 16.25V3.75a.75.75 0 0 1 1.266-.57l10 6a.75.75 0 0 1 0 1.14l-10 6A.75.75 0 0 1 5.75 17z"
            />
          </svg>
        </div>
      )}
      {isBuffering && (
        <div className="absolute flex items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            className="w-8 h-8 text-main animate-spin lg:h-16 lg:w-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
      )}
      <div className="absolute right-0 flex items-center justify-end w-full px-4 lg:px-10 bottom-2 lg:bottom-6">
        <button
          onClick={handleFullScreen}
          className="flex items-center justify-center w-12 h-12 p-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
          >
            <path
              fill="#ffffff"
              d="M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75m12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75M2.75 2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1h2.5a.75.75 0 0 1 0 1.5ZM10 1.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
