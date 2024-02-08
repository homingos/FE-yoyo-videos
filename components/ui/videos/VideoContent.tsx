"use client";

import useVideos from "@/app/(protected)/videos/use-videos";
import VideoCard from "./VideoCard";
import NoVideos from "./NoVideos";
import { Skeleton } from "@/components/Skeleton";

const VideoContent = () => {
  const { data: videos, loading, mutate } = useVideos();

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16 w-full h-screen">
        {Array.from({ length: 6 }).map((_item, index) => {
          return <Skeleton key={index} />
        })}
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return <NoVideos />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16 w-full">
      {videos && videos?.map((videoData: any, index: number) => (
        <VideoCard key={`${videoData?._id} + ${index}`} videoData={videoData} mutate={mutate} />
      ))}
    </div>
  );
};

export default VideoContent;
