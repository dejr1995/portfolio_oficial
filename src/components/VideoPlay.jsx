import React, { useEffect, useRef, useState } from "react";

const VideoPlay = ({ videoSrc }) => {
  const videoRef = useRef(null);

  const [isPaused, setIsPaused] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    videoRef.current.pause();
  }, []);

  return (
    <div
      className={`${isPaused ? "paused" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="video-background absolute top-0 left-0 w-full h-full object-cover z-[-1] transition duration-300 ease-filter"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default VideoPlay;


