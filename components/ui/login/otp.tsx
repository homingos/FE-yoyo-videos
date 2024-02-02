"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MaxWidthWrapper } from "../max-width-wrapper";
import OtpInput from "@/components/OtpInput";
import { signIn } from "next-auth/react";
import { validateInput } from "@/lib/functions";
import { sendOtp } from "@/lib/api/auth";
import { toast } from "sonner";

export default function OTPScreen() {
  const [otp, setOtp] = useState<string>("");
  const [otpTimer, setOtpTimer] = useState<number>(30);
  const [otpError, setOtpError] = useState<boolean>(false);
  const [otpDisabled, setOtpDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const phone: any = searchParams?.get("phone");

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (otpTimer > 0) {
        setOtpTimer(otpTimer - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [otpTimer]);

  useEffect(() => {
    const validation = validateInput(otp, "^([0-9]{6,6})$");
    if (validation) {
      setOtpDisabled(false);
    } else {
      setOtpDisabled(true);
    }
  }, [otp]);

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      await sendOtp(phone);
      setOtpTimer(30);
    } catch (err: any) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  const handleSubmitOtp = async () => {
    setLoading(true);

    const res = await signIn("credentials", {
      phone: phone,
      otp: otp,
      redirect: false,
    });
    console.log(res);

    if (res?.ok) {
      router.replace("/home");
    } else {
      await setOtpError(true);
    }
    setLoading(false);
  };

  return (
    <div
      className={`h-screen w-screen object-cover transition-all duration-1000 px-8`}
    >
      <MaxWidthWrapper className="h-full flex flex-col items-center justify-center gap-8">
        <OtpInput
          value={otp}
          onChange={async (x: any) => {
            await setOtpError(false);
            await setOtp(x);
          }}
          valueLength={6}
          error={otpError}
        />
        <p className="text-white">
          Didn’t get the OTP?{" "}
          {otpTimer === 0 ? (
            <span
              className="text-primary"
              onClick={handleResendOTP}
              role="button"
              tabIndex={0}
            >
              Resend code
            </span>
          ) : (
            <span className="text-gray-600">Resend OTP in {otpTimer}s</span>
          )}
        </p>
        <button
          type="submit"
          onClick={handleSubmitOtp}
          disabled={otpDisabled}
          className={`py-3 ${
            otpDisabled ? "bg-[#13B31C]/50" : "bg-[#13B31C]"
          } w-1/2`}
        >
          <p className="flex items-center justify-center gap-2 font-primaryBoldItalic uppercase text-white">
            {loading ? "Verifying..." : "VERIFY"}
          </p>
        </button>
      </MaxWidthWrapper>
    </div>
  );
}
