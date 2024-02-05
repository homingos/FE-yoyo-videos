"use client";

import Icon from "@/components/icons";
import VideoContent from "@/components/ui/videos/VideoContent";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useVideos from "./use-videos";
import Spinner from "@/components/Spinner";

const VideosClient = () => {
  const { loading, mutate } = useVideos();
  
  return (
    <div className="z-20 flex h-screen flex-col items-start gap-4 py-4 overflow-scroll w-full">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <span className="flex items-center font-extrabold text-xl text-white mt-8 px-6 justify-between w-full">
        <span className="flex items-center gap-4">
          <Link href="/home" replace>
            <Icon icon="back" size={24} />
          </Link>{" "}
          My Videos
        </span>
        <Button
          className="font-extrabold items-center"
          disabled={loading}
          onClick={async () => {
            await mutate();
          }}
        >
          {loading ? <Spinner spinnerClassName="text-white h-4 w-4 p-0" /> : <Icon icon={'refresh'} className={'text-black'} size={16} />}
        </Button>
      </span>
      <VideoContent />
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-10"></div>
    </div>
  );
};

export default VideosClient;
