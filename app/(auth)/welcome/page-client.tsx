"use client";
import Cookies from "js-cookie";

import Intro from "@/components/ui/welcome/intro";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function WelcomePageClient() {
  useEffect(() => {
    Cookies.set("deviceId", "123");
  }, []);
  
  return (
    <div className="flex h-screen flex-col items-center">
      <AnimatePresence mode="wait">
        <Intro key="intro" />
      </AnimatePresence>
    </div>
  );
}
