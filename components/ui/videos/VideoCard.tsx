import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { OpenVideo } from "./OpenVideo";
import { Button } from "../button";
import Icon from "@/components/icons";
import { toast } from "sonner";
import { createUserVideo } from "@/lib/api/http";
import Spinner from "@/components/Spinner";

const VideoCard = ({ videoData, mutate }: { videoData: any; mutate: any }) => {
  const videoRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRetryVideo = async () => {
    setLoading(true);
    await createUserVideo(videoData?.template_id, videoData?.avatar_id)
      .catch((err: any) => {
        toast.error("Error creating video");
        console.log(err);
      })
      .finally(async () => {
        await mutate();
        setLoading(false);
      });
  };

  return (
    <div
      className={cn(
        "relative inline-flex rounded-2xl overflow-hidden w-full h-72 bg-[#0a0a0a] group"
      )}
    >
      {videoData.status === "FAILED" && (
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <p className="text-red-500 font-bold text-center ">Failed</p>
              <Button variant="outline" onClick={handleRetryVideo}>
                <Icon icon="refresh" />
              </Button>
            </>
          )}
        </div>
      )}
      {videoData.status === "PROCESSED" && (
        <div className=" inline-flex items-center justify-center rounded-2xl overflow-hidden h-full w-full bg-[#0a0a0a]">
          <OpenVideo videoRef={videoRef} videoData={videoData} />
        </div>
      )}
      {videoData.status !== "PROCESSED" && videoData.status !== "FAILED" && (
        <div className="text-white text-center w-full flex items-center justify-center">
          Generating Video...
        </div>
      )}
    </div>
  );
};

export default VideoCard;
