import Content from "@/components/ui/dashboard/Content";
import Options from "@/components/ui/dashboard/options";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

const DashBoardClient = () => {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: `${window.location.origin}/login`,
    });
  };

  return (
    <div className="bg-[#1A1D25] h-full w-full py-6 flex flex-col gap-4">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
      <p className="font-extrabold text-xl text-white mt-8 px-6">Explore</p>
      <Options />
      <Content />
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default DashBoardClient;
