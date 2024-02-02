"use client";

import Icon from "@/components/icons";
import { createUserVideo } from "@/lib/api/http";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomeClient = ({ templates }: any) => {
  const item = templates[0];
  const [play, setPlay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter();
  
  const handleCreatevideo = async () => {
    setLoading(true)
    await createUserVideo(item?._id)
    .then((res: any) => setLoading(false))
    .catch((err: any) => console.log(err))

    router.push('/home/create');
  }

  return (
    <div className="relative z-20 flex h-screen w-full flex-col items-start gap-4 overflow-hidden">
      <div className="bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 z-40 h-24 w-full"></div>
      <Link
        href={"/avatars"}
        className="fixed top-10 left-4 p-3 bg-primary rounded-full z-40 text-black cursor-pointer hover:scale-110"
      >
        <Icon icon={"avatar"} size={25} />
      </Link>
      <Link
        href={"/videos"}
        className="fixed top-10 right-4 p-3 bg-primary rounded-full z-40 text-black cursor-pointer hover:scale-110"
      >
        <Icon icon={"video"} size={25} />
      </Link>
      <div className="absolute left-0 top-0 h-full w-full z-30">
        <Image
          fill
          className="object-fit saturate-50 duration-300 ease-in-out z-30"
          src={item?.thumbnail_url}
          alt={"hello"}
        />
      </div>
      {play && (
        <video
          autoPlay
          loop
          className="object-cover h-full w-full z-30 duration-300 ease-in-out"
        >
          <source src={item?.preview_url} type="video/mp4" />
        </video>
      )}
      <div className="absolute z-30 bg-gradient-to-b from-transparent via-black/60 to-black/80 h-48 w-full bottom-0 left-0"></div>
      <div className="fixed bottom-2 left-0 flex flex-col p-4 gap-2 z-30 w-full">
        <span className="text-white text-xl font-bold mb-4 flex w-full justify-between items-center">
          {item?.display_name}
          <span
            className="h-max bg-primary rounded-full text-black cursor-pointer"
            onClick={() => setPlay(!play)}
          >
            {play ? (
              <Icon icon={"pause"} size={30} />
            ) : (
              <Icon icon={"play"} size={30} />
            )}
          </span>
        </span>
        {/* <span className="flex gap-2 font-semibold text-sm text-white items-center mb-6">
          <Icon icon={"bar"} size={"18"} />
          {item?.display_name} theme song
        </span> */}
        <Button
          onClick={handleCreatevideo}
          type="button"
          disabled={loading}
        >
          <Icon icon={"create"} size={"18"} />
          {!loading ? 'Create' : 'creating video...'}
        </Button>
        {/* <span className="flex gap-2 text-sm items-center w-full justify-center text-white">
          Scroll to see next <Icon icon={"doubleUp"} />
        </span> */}
      </div>
    </div>
  );
};

export default HomeClient;
