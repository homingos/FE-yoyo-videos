"use client";

import { useEffect, useState } from "react";
import Button from "../../button";
import { useRouter, useSearchParams } from "next/navigation";
import { MaxWidthWrapper } from "../max-width-wrapper";
import OtpInput from "@/components/OtpInput";
import { signIn } from "next-auth/react";
import { validateInput } from "@/lib/functions";
import { Screens } from "./types";

export default function OTPScreen({ initalized, setInitialized }: Screens) {
  const [otp, setOtp] = useState<string>("");
  const [otpTimer, setOtpTimer] = useState<number>(30);
  const [otpError, setOtpError] = useState<boolean>(false);
  const [otpDisabled, setOtpDisabled] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  const phone = searchParams?.get("phone");

  useEffect(() => {
    if(!initalized) {
      router.push("/login")
    };
  }, []);

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

  const handleSignIn = async () => {
    await signIn("credentials", {
      phone: phone,
      otp: otp,
      callbackUrl: "/dashboard",
    });
  };

  const handleResendOTP = () => {
    setOtpTimer(30);
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
        <Button
          type="submit"
          onClick={handleSignIn}
          disabled={otpDisabled}
          className={`py-3 ${
            otpDisabled ? "bg-[#13B31C]/50" : "bg-[#13B31C]"
          } w-1/2`}
        >
          <p className="flex items-center justify-center gap-2 font-primaryBoldItalic uppercase text-white">
            VERIFY
          </p>
        </Button>
      </MaxWidthWrapper>
    </div>
  );
}
