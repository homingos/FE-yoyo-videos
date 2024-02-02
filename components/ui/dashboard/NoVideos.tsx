import Icon from "@/components/icons";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const NoVideos = () => {
  return (
    <div className="rounded-lg flex flex-col gap-4  items-center p-10 text-stone-500">
      <Clapperboard className="font-thin" size={150} />
      <p className="font-bold text-xl text-white/70 mb-4">
        No Videos Available
      </p>
      <Button>
        <Icon icon={"home"} size={"18"} />
        <Link href="/home">Go To Home</Link>
      </Button>
    </div>
  );
};

export default NoVideos;
