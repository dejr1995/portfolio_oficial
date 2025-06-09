import React, { useEffect, useRef, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowDownRight } from "react-icons/bs";

const ProjectVideo = ({
  videoSrc,
  title,
  item1,
  item2,
  item3,
  item4,
  item5,
  myOpen,
  myGitHub,
}) => {
  const videoRef = useRef(null);

  const [isPaused, setIsPaused] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  }, []);

  return (
    <div
      className="group overflow-hidden rounded-lg h-full relative mb-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className={`${
          isPaused ? "filter grayscale" : ""
        } absolute top-0 left-0 w-full h-full object-cover z-[-1] transition duration-300`}
        autoPlay
        muted
        loop
      />
      <div className="absolute group-hover:bg-black/40 transition duration-300 w-full h-full"></div>
      <div className="absolute rounded-lg inset-0 flex translate-y-[62%] flex-col justify-end items-start transition-all duration-500 group-hover:translate-y-0">
        <div className="flex flex-col items-center justify-start w-[345px]">
          <h3 className="self-start text-xl font-bold text-white p-2">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 m-2">
            {item1 && (
              <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
                {item1}
              </div>
            )}
            {item2 && (
              <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
                {item2}
              </div>
            )}
            {item3 && (
              <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
                {item3}
              </div>
            )}
            {item4 && (
              <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
                {item4}
              </div>
            )}
            {item5 && (
              <div className="border-2 border-white rounded-full text-white text-sm capitalize px-4 h-5 flex items-center">
                {item5}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex translate-x-[62%] flex-col items-center justify-center transition-all duration-500 group-hover:translate-x-0">
        <div className="self-end flex flex-col h-full items-center justify-between p-6">
          {myOpen && (
            <a href={myOpen}>
              <div className="text-white flex items-center cursor-pointer">
                <BsBoxArrowDownRight size={20} />
              </div>
            </a>
          )}
          {myGitHub && (
            <a href={myGitHub}>
              <div className="text-white flex items-center cursor-pointer">
                <AiOutlineGithub size={25} />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;
