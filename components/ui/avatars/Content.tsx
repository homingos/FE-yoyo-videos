import React from "react";
import Card from "./Card";
import NoAvatars from "./No-avatars";
import useAvatars from "@/app/(protected)/avatars/use-avatars";
import { Skeleton } from "@/components/Skeleton";

const Content = () => {
  const { data: avatars, loading, error } = useAvatars();

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16 w-full h-screen">
        {Array.from({ length: 6 }).map((_item, index) => {
          return <Skeleton key={index} />
        })}
      </div>
    );
  }

  if(error) {
    return <NoAvatars error />;
  }

  if (!avatars || avatars.length === 0) {
    return <NoAvatars />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center px-6 mt-2 mb-16 w-full">
      {avatars.map((avatarData: any, index: number) => (
        <Card key={`${avatarData?._id} + ${index}`} avatarData={avatarData} />
      ))}
    </div>
  );
};

export default Content;
