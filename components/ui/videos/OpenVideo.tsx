"use client";

import Icon from "@/components/icons";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useUnity from "@/lib/hooks/use-unity";
import { useState } from "react";

export function OpenVideo({ videoRef, videoData }: any) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState<boolean>(true);

  const { sendDataToUnity } = useUnity();

  const handlePlayPause = () => {
    if (videoRef?.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleShare = () => {
    sendDataToUnity(
      "SHARE",
      JSON.stringify({
        subject: "Watch me light diyas with our PM Modiji at Ram Mandir!",
        text: "Watch me light diyas with our PM Modiji at Ram Mandir! check out this url : ",
        url: `${videoData?.video_url}`,
      })
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <video
          playsInline
          muted
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src={`${videoData?.video_url}#t=15`} type="video/mp4" />
        </video>
      </DialogTrigger>
      <DialogContent className="rounded-xl overflow-hidden p-0 w-4/5">
        <div
          className="absolute left-4 bottom-4 z-[100] cursor-pointer text-4xl text-white"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Icon icon={"pause"} size={30} />
          ) : (
            <Icon icon={"play"} size={30} />
          )}
        </div>
        <div
          className="absolute right-4 bottom-4 z-[100] cursor-pointer text-4xl text-white"
          onClick={() => setMuted(!muted)}
        >
          {muted ? (
            <Icon icon={"muted"} size={30} />
          ) : (
            <Icon icon={"unmute"} size={30} />
          )}
        </div>
        <div
          onClick={handleShare}
          className="absolute right-4 top-4 z-[100] cursor-pointer text-4xl text-white"
        >
          <Icon icon={"share"} size={30} />
        </div>
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted={muted}
          className="h-full w-full object-cover z-30"
          preload="metadata"
        >
          <source src={`${videoData?.video_url}#t=0.1`} type="video/mp4" />
        </video>
      </DialogContent>
    </Dialog>
  );
}
