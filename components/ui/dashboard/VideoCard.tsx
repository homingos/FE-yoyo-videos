import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdPause, MdPlayArrow } from "react-icons/md";

const VideoCard = ({ videoData }: { videoData: any }) => {
  const videoRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    if (videoRef?.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={cn(
        "relative inline-flex rounded-2xl overflow-hidden w-full h-72 bg-[#0a0a0a] group"
      )}
    >
      {videoData.status === "PROCESSED" ? (
        <div className=" inline-flex items-center justify-center rounded-2xl overflow-hidden h-full w-full bg-[#0a0a0a]">
          <div
            className="group-hover:visible invisible absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-4xl text-white"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
          </div>
          <video
            ref={videoRef}
            playsInline
            src={videoData?.video_url}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="text-white text-center w-full flex items-center justify-center">
          Generating Video...
        </div>
      )}
    </div>
  );
};

export default VideoCard;
