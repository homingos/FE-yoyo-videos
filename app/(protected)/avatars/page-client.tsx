"use client";

import Icon from "@/components/icons";
import CreateAvatarButton from "@/components/ui/avatars/create-avatar-button";
import Content from "@/components/ui/dashboard/Content";
import NoAvatars from "@/components/ui/home/No-avatars";
import { getAvatars } from "@/lib/api/http";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const AvatarSelectClient = () => {
  const [avatars, setAvatars] = useState<any[]>([]);

  useEffect(() => {
    const api = async () => {
      const res = await getAvatars();
      console.log("res", res);
      setAvatars(res);
      return res;
    };
    api();
  }, []);

  return (
    <div className="z-20 flex h-screen flex-col items-start gap-3 py-4 overflow-auto croll w-full">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <div className="flex gap-4 font-extrabold text-xl text-white mt-8 px-6 items-center">
        <Link href="">
          <Icon icon="back" size={24} />
        </Link>
        My Avatars
      </div>
      {avatars.length !== 0 && <Content avatars={avatars} />}
      {avatars.length === 0 && <NoAvatars />}
      <CreateAvatarButton />
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
    </div>
  );
};

export default AvatarSelectClient;
