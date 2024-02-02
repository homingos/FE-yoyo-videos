import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Card = ({ avatarData }: any) => {
  const [url, setUrl] = useState<string>("");
  const [urlFetching, setUrlFetching] = useState<boolean>(true);

  return (
    <div
      className={cn(
        "relative inline-flex rounded-2xl overflow-hidden w-full h-72 p-[2px] bg-[#0a0a0a]"
      )}
    >
      <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-yellow-500",
          url
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            : "bg-yellow-500 opacity-30 animate-pulse"
        )}
      />
      <div className="relative inline-flex items-center justify-center rounded-2xl overflow-hidden h-full w-full bg-[#0a0a0a]">
        {!urlFetching && url !== "" && (
          <Image
            src={avatarData?.profile_picture?.default}
            alt="card"
            className={cn(
              "object-cover h-full w-full duration-300 ease-in-out"
            )}
            onLoad={() => setUrlFetching(false)}
            fill
          />
        )}
        {!url && <p className="text-white">loading...</p>}
      </div>
      {url && (
        <div className="absolute z-20 bg-gradient-to-b from-transparent via-black/80 to-black/60 h-24 w-full bottom-0 left-0"></div>
      )}
    </div>
  );
};

export default Card;
