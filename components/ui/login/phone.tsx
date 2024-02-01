'use client';

import { Dispatch, useEffect, useState } from "react";
import Button from "../../button";
import { useRouter } from "next/navigation";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { validateInput } from "@/lib/functions";
import { sendOtp } from "@/lib/api/auth";
import { toast } from 'sonner';

export default function PhoneScreen() {
  const [phone, setPhone] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const validation = validateInput(
      phone,
      "^[(]?[0-9]{3}[)]?[0-9]{3}[-s.]?[0-9]{4}$"
    );
    if (validation) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [phone]);

  const handleGetOTP = async () => {
    try {
      await sendOtp(phone);
      router.push(`/login?phone=${phone}`);
    } catch (err: any) {
      // TODO: add failed toast
      toast.error("hello bhaiya galat OTP");
    }
  };

  return (
    <div
      className={`h-screen w-screen object-cover transition-all duration-1000 px-8`}
    >
      <MaxWidthWrapper className="h-full flex flex-col items-center justify-center gap-8">
        <div className="flex w-full gap-4 rounded-lg border-2 border-[#ffffff4d] bg-gray-800 py-3 px-6 font-semibold text-white">
          <p className="text-white">+91</p>
          <input
            type="text"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
            placeholder="Enter your phone number"
            maxLength={10}
            autoFocus
          />
        </div>
        <Button
          onClick={handleGetOTP}
          disabled={submitDisabled}
          className={`py-3 ${
            submitDisabled ? "bg-[#13B31C]/50" : "bg-[#13B31C]"
          } w-1/2`}
        >
          <p className="flex items-center justify-center gap-2 font-primaryBoldItalic uppercase text-white">
            GET OTP
          </p>
        </Button>
      </MaxWidthWrapper>
    </div>
  );
}
