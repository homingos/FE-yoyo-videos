import Icon from "@/components/icons";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import React from "react";

const NoVideos = () => {
  return (
    <div className="rounded-lg flex flex-col gap-4  items-center p-10 text-stone-500">
      <Clapperboard className="font-thin" size={150} />
      <p className="font-bold text-xl text-white/70 mb-4">
        No Videos Available
      </p>
      <button>
        <Icon icon={"home"} size={"18"} />
        <Link href="/home">Go To Home</Link>
      </button>
    </div>
  );
};

export default NoVideos;
