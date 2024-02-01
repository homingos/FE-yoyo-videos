'use client';

import Icon from "@/components/icons";
import CreateAvatarButton from "@/components/ui/avatars/create-avatar-button";
import Content from "@/components/ui/dashboard/Content";
import { getAvatars } from "@/lib/api/http";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AvatarSelectClient = () => {
  const [avatars, setAvatars] = useState<any>(null);
  const [show, setShow] = useState(true);

  const session = useSession();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const api = async () => {
      const res = await getAvatars(session);
      setAvatars(res);
      return res
    }
    api();
  },[session])

  return (
    <div className="relative z-20 flex h-screen flex-col items-start gap-4 py-4 overflow-scroll">
      <div className="fixed bg-gradient-to-t from-transparent via-transparent to-black/80 h-16 w-full top-0 left-0 z-40"></div>
      <p className="font-extrabold text-xl text-white mt-8 px-6">My Avatars</p>
      {avatars && <Content avatars={avatars} />}
      <CreateAvatarButton />
      <div className="fixed bg-gradient-to-b from-transparent via-black/60 to-black/60 h-16 w-full bottom-0 left-0 z-40"></div>
    </div>
  );
};

export default AvatarSelectClient;
