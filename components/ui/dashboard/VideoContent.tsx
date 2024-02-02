import NoVideos from "./NoVideos";
import VideoCard from "./VideoCard";

const VideoContent = ({ videos }: { videos: any }) => {
  if (!videos || videos.length === 0) {
    return (
      <div className="h-full w-full flex items-center text-white justify-center">
        <NoVideos />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16 w-full">
      {videos.map((videoData: any, index: number) => (
        <VideoCard key={`${videoData?._id} + ${index}`} videoData={videoData} />
      ))}
    </div>
  );
};

export default VideoContent;
