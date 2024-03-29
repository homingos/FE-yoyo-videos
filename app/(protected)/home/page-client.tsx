"use client";

import Icon from "@/components/icons";
import { createUserVideo } from "@/lib/api/http";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import cookies from "js-cookie";
import { toast } from "sonner";

const HomeClient = ({ templates }: any) => {
  const item = templates[0];
  const [loading, setLoading] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(true);

  const router = useRouter();

  const handleCreatevideo = async () => {
    setLoading(true);

    const cookieData: any = cookies.get("__avatar") || null;

    const avatarData = JSON.parse(cookieData);

    if (!avatarData) {
      toast.error("Select a Avatar first");
      setLoading(false);
      router.replace("/avatars");
      return;
    }

    await createUserVideo(item?._id, avatarData?.id)
      .then((res: any) => {
        
        if (res?.status === 'PROCESSED') {
          toast.warning("Video available for selected avatar");
        }

        router.replace("/home/create");
      })
      .catch((err: any) => {
        toast.error("Error creating video");
      }).finally(() => {
        setLoading(false);
      });
  };

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
      <video
        autoPlay
        muted={muted}
        loop
        playsInline
        className="object-cover h-full w-full z-30 duration-300 ease-in-out"
        poster={item?.thumbnail_url}
        preload="metadata"
      >
        <source src={`${item?.preview_url}#t=0.2`} type="video/mp4" />
      </video>
      <div className="absolute z-30 bg-gradient-to-b from-transparent via-black/60 to-black/80 h-48 w-full bottom-0 left-0"></div>
      <div className="fixed bottom-2 left-0 flex flex-col p-4 gap-2 z-30 w-full">
        <div className="text-white text-xl font-bold mb-4 flex w-full justify-between items-center">
          {item?.display_name}
          <span
            className="h-max bg-primary rounded-full text-black cursor-pointer p-1"
            onClick={() => {
              setMuted(!muted);
            }}
          >
            {muted ? (
              <Icon icon={"muted"} size={18} />
            ) : (
              <Icon icon={"unmute"} size={18} />
            )}
          </span>
        </div>
        <Button
          onClick={handleCreatevideo}
          type="button"
          disabled={loading}
          className="gap-2"
        >
          <Icon icon={"create"} size={"18"} />
          {!loading ? "Create" : "creating video..."}
        </Button>
        {/* <span className="flex gap-2 text-sm items-center w-full justify-center text-white">
          Scroll to see next <Icon icon={"doubleUp"} />
        </span> */}
      </div>
    </div>
  );
};

export default HomeClient;
