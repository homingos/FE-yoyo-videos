"use client";

import { Dispatch, useEffect, useState } from "react";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { validateInput } from "@/lib/functions";
import { sendOtp } from "@/lib/api/auth";
import { toast } from "sonner";

export default function PhoneScreen() {
  const [phone, setPhone] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const validation = validateInput(phone, "^0?[3-9]\\d{9}$");
    if (validation) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [phone]);

  const handleGetOTP = async () => {
    try {
      setIsLoading(true);
      await sendOtp(phone);
      router.replace(`/login?phone=${phone}`);
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
      <MaxWidthWrapper className="h-full flex flex-col items-center justify-center gap-6">
        <div className="flex w-full gap-4 rounded-lg border-2 border-[#ffffff4d] bg-gray-800 py-3 px-6 font-semibold text-white">
          <p className="text-white">+91</p>
          <input
            type="text"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
            disabled={isLoading}
            placeholder="Enter your phone number"
            maxLength={11}
            autoFocus
            inputMode="numeric"
          />
        </div>
        <Button
          className="w-full"
          onClick={handleGetOTP}
          disabled={submitDisabled}
        >
          GET OTP
        </Button>
      </MaxWidthWrapper>
    </div>
  );
}
