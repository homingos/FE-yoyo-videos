import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { OpenVideo } from "./OpenVideo";
import Spinner from "@/components/Spinner";

const VideoCard = ({ videoData }: { videoData: any }) => {
  const videoRef = useRef<any>(null);

  return (
    <div
      className={cn(
        "relative inline-flex rounded-2xl overflow-hidden w-full h-72 bg-[#0a0a0a] group"
      )}
    >
      {videoData.status === "PROCESSED" ? (
        <div className=" inline-flex items-center justify-center rounded-2xl overflow-hidden h-full w-full bg-[#0a0a0a]">
          <OpenVideo videoRef={videoRef} videoData={videoData} />
        </div>
      ) : (
        <div className="text-primary text-center w-full flex flex-col gap-3 items-center justify-center">
          <Spinner spinnerClassName="text-primary" />
          <p>generating</p>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
