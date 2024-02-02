"use client";

import Icon from "@/components/icons";
import Content from "@/components/ui/dashboard/Content";
import VideoContent from "@/components/ui/dashboard/VideoContent";
import { getVideos } from "@/lib/api/http";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const VideosClient = () => {
  const [videos, setVideos] = useState<any>(null);
  const [show, setShow] = useState(true);

  const session = useSession();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 5000);
  //   }, []);

  useEffect(() => {
    const api = async () => {
      const res = await getVideos(session);
      console.log("res", res);
      setVideos(res);
      return res;
    };
    api();
  }, [session]);

  console.log(videos);

  return (
    <div className="z-20 flex h-screen flex-col items-start gap-4 py-4 overflow-scroll w-full">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <p className="font-extrabold text-xl text-white mt-8 px-6">My Videos</p>
      {/* Render Videos */}
      <VideoContent videos={videos} />
      {/* <VideoContent videos={[]} /> */}
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
    </div>
  );
};

export default VideosClient;
