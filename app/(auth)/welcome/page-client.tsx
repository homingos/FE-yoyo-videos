"use client";

import { Background } from "@/app/components/ui/background";
import Intro from "@/app/components/ui/welcome/intro";
import { AnimatePresence } from "framer-motion";

export default function WelcomePageClient() {
  return (
    <div className="flex h-screen flex-col items-center">
      <Background />
      <AnimatePresence mode="wait">
        <Intro key="intro" />
      </AnimatePresence>
    </div>
  );
}
