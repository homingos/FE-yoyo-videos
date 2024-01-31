"use client";

import { Background } from "@/components/ui/background";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PhoneScreen from "@/components/ui/login/phone";
import OTPScreen from "@/components/ui/login/otp";
import { useState } from "react";

export default function LoginPageClient() {
  const [initalized, setInitialized] = useState<boolean>(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log(initalized);

  return (
    <div className="flex h-screen flex-col items-center">
      <Background />
      <AnimatePresence mode="wait">
        {!searchParams?.get("phone") && (
          <PhoneScreen
            initalized={initalized}
            setInitialized={setInitialized}
          />
        )}
        {searchParams?.get("phone") && (
          <>
            <button
              className="group fixed left-10 top-10 z-[99] rounded-full p-2 transition-all hover:bg-gray-100"
              onClick={() => router.back()}
            >
              <ArrowLeft
                size={20}
                className="text-gray-500 group-hover:text-gray-700 group-active:scale-90"
              />
            </button>
            <OTPScreen
              initalized={initalized}
              setInitialized={setInitialized}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
