"use client";

import Intro from "@/components/ui/welcome/intro";
import { AnimatePresence } from "framer-motion";

export default function WelcomePageClient() {
  return (
    <div className="flex h-screen flex-col items-center">
      <AnimatePresence mode="wait">
        <Intro key="intro" />
      </AnimatePresence>
    </div>
  );
}
