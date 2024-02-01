"use client";

import Intro from "@/components/ui/welcome/intro";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { handleGuestLogin } from "@/lib/api/auth";
import useCookies from "@/lib/hooks/use-cookies";

export default function WelcomePageClient() {
  const [yoyoCookie, setYoyoCookie] = useCookies("__yoyo_videos", {
    device_id: "",
    user: "",
  });

  useEffect(() => {
    const generateDeviceId = async () => {
      const deviceId = nanoid();
      if (!yoyoCookie.device_id) {
        const res = await handleGuestLogin(deviceId);
        setYoyoCookie({
          device_id: deviceId,
          user: res,
        });
      }
    };
    generateDeviceId();
  }, []);
  
  return (
    <div className="flex h-screen flex-col items-center">
      <AnimatePresence mode="wait">
        <Intro key="intro" />
      </AnimatePresence>
    </div>
  );
}
