import { Background } from "@/components/ui/background";
import Content from "@/components/ui/dashboard/Content";
// import Options from "@/components/ui/dashboard/options";
// import { signOut } from "next-auth/react";
import React from "react";

const DashBoardClient = () => {
  // const handleLogout = async () => {
  //   await signOut({
  //     callbackUrl: `${window.location.origin}/login`,
  //   });
  // };

  return (
     <div className="z-20 flex h-screen flex-col items-start gap-4 py-4 overflow-scroll">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <p className="font-extrabold text-xl text-white mt-8 px-6">Explore</p>
      <Content />
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
    </div>
  );
};

export default DashBoardClient;
