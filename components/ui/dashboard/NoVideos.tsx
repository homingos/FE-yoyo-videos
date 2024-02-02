import Button from "@/components/button";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import React from "react";

const NoVideos = () => {
  return (
    <div className="rounded-lg flex flex-col gap-4  items-center p-10 text-stone-500">
      <Clapperboard className="text-5xl" size={150} />
      <p className="font-bold text-xl text-white">No Videos Available</p>
      <Button>
        <Link href="/home">Go To Home</Link>
      </Button>
    </div>
  );
};

export default NoVideos;
