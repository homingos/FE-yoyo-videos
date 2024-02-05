"use client";

import { sendOtp } from "@/lib/api/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { MaxWidthWrapper } from "../max-width-wrapper";
import LoginForm, { phoneSchema } from "./loginForm";

export default function PhoneScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleGetOTP = async (values: z.infer<typeof phoneSchema>) => {
    try {
      setIsLoading(true);
      await sendOtp(values.phone);
      router.replace(`/login?phone=${values.phone}`);
    } catch (err: any) {
      // TODO: add failed toast
      toast.error(err.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={`h-screen w-screen object-cover transition-all duration-1000 px-8`}
    >
      <MaxWidthWrapper className="mx-auto w-full max-w-screen-lg px-2.5 lg:px-20 h-full flex flex-col items-center justify-center gap-6">
        <LoginForm onSubmit={handleGetOTP} isLoading={isLoading} />
      </MaxWidthWrapper>
    </div>
  );
}
