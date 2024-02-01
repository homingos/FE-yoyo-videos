import Content from "@/components/ui/dashboard/Content";
import React from "react";

const AvatarSelectClient = () => {
  return (
     <div className="z-20 flex h-screen flex-col items-start gap-4 py-4 overflow-scroll">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <p className="font-extrabold text-xl text-white mt-8 px-6">My Avatars</p>
      <Content />
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
    </div>
  );
};

export default AvatarSelectClient;