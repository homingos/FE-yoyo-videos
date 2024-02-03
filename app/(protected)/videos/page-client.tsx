"use client";

import Icon from "@/components/icons";
import VideoContent from "@/components/ui/dashboard/VideoContent";
import { getVideos } from "@/lib/api/http";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const VideosClient = () => {
  const [videos, setVideos] = useState<any>(null);
  const [show, setShow] = useState(true);
  const router = useRouter();

  const session = useSession();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShow(false);
  //     }, 5000);
  //   }, []);

  useEffect(() => {
    const api = async () => {
      const res = await getVideos();
      setVideos(res);
      return res;
    };
    api();
  }, [session]);

  console.log(videos);

  return (
    <div className="z-20 flex h-screen flex-col items-start gap-4 py-4 overflow-scroll w-full">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <span className="flex gap-4 items-center font-extrabold text-xl text-white mt-8 px-6">
      <Icon icon={"back"} size={24} onClick={() => router.push('/home')} /> My Videos</span>
      {/* Render Videos */}
      <VideoContent videos={videos} />
      {/* <VideoContent videos={[]} /> */}
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
    </div>
  );
};

export default VideosClient;
