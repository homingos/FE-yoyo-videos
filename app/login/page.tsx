/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/button";
import Heading from "@/app/components/heading";
// import { useMessage } from '@/lib/hooks';
// import useEvents from '@/lib/hooks/useEvents';
// import EventList from '@/lib/utils/eventList';
import Image from "next/image";
// import { useRouter } from 'next/router';
import { FaWhatsapp } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import OtpInput from "../components/OtpInput";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [screen, setScreen] = useState("PHONE_NUMBER"); // OTP / NAME / PHONE_NUMBER
  const [sentOtp, setSentOtp] = useState(false);

  const [otp, setOtp] = useState("");
  const [otpTimer, setOtpTimer] = useState(30);
  const [otpDisabled, setOtpDisabled] = useState(true);
  const [otpError, setOtpError] = useState(false);

  const handleSignIn = async () => {
    await signIn("credentials", {
      callbackUrl: "/dashboard",
    });
  };

  // useEffect(() => {
  //   (async () => {
  //     if (screen === 'PHONE_NUMBER') {
  //       sendEvent(EventList.ONBOARDING.LOGIN_PAGE, {});
  //     }

  //     if (screen === 'OTP') {
  //       await sendEvent(EventList.ONBOARDING.ENTER_OTP_PAGE, {});
  //     }

  //     if (screen === 'NAME') {
  //       await sendEvent(EventList.ONBOARDING.ENTER_NAME, {});
  //     }

  //   })();
  // }, [screen]);

  useEffect(() => {
    if (sentOtp) {
      setTimeout(() => {
        if (otpTimer > 0) {
          setOtpTimer(otpTimer - 1);
        }
      }, 1000);
    }
  }, [otpTimer, sentOtp]);

  const validateInput = (phone: string, regexString: string) => {
    // eslint-disable-next-line prefer-regex-literals
    const regex = new RegExp(regexString);
    const res = regex.test(phone);

    if (res) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const validation = validateInput(
      phoneNumber,
      "^[(]?[0-9]{3}[)]?[0-9]{3}[-s.]?[0-9]{4}$"
    );
    if (validation) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    const validation = validateInput(otp, "^([0-9]{6,6})$");
    if (validation) {
      setOtpDisabled(false);
    } else {
      setOtpDisabled(true);
    }
  }, [otp]);

  const handleSubmitPhoneNumber = async () => {
    // await sendEvent(EventList.ONBOARDING.SEND_OTP, {});
    // try {
    //   const res = await sendOtp(phoneNumber);
    //   if (res.success) {
    setScreen("OTP");
    //     setOtpTimer(30);
    setSentOtp(true);
    //   } else {
    //     throw new Error('Your request is processing. Please wait for 30 seconds.');
    //   }
    // } catch (err: any) {
    //   toast.error(err.message);
    // }
  };

  const handleResendOtp = async () => {
    // try {
    //   const res = await sendOtp(phoneNumber);
    //   if (res.success) {
    //     setOtpTimer(30);
    //     await sendEvent(EventList.ONBOARDING.RESEND_OTP, {});
    //     toast.success('The OTP has been re-sent to your number!');
    //   } else {
    //     throw new Error('Your request is processing. Please wait for 30 seconds.');
    //   }
    // } catch (err: any) {
    //   toast.error(err.message);
    // }
  };

  const handleSubmitOtp = async () => {
    // await sendEvent(EventList.ONBOARDING.VERIFY_OTP, {});
    // try {
    //   const res = await verifyOtp(otp);
    //   if (res.success) {
    //     await sendEvent(EventList.ONBOARDING.SIGNIN_SUCCESS, {});
    //     sendDataToUnity('USER_ID', localStorage.getItem('guestId') as any);
    //     if (localStorage.getItem('isLoggedIn')) {
    //       sendDataToUnity('GUEST_ID', localStorage.getItem('oldGuestId') as any);
    //     }
    //     sendDataToUnity('AUTH_TOKEN', localStorage.getItem('authToken') as any);
    //     sendDataToUnity('IS_GUEST', localStorage.getItem('isLoggedIn') ? 'false' : 'true');
    //     setScreen('NAME');
    //     return;
    //   }
    //   await setOtpError(true);
    //   await sendEvent(EventList.ONBOARDING.SIGNIN_FAIL, {});
    // } catch (err: any) {
    //   toast.error(err.message);
    // }
  };

  // const handleRoute = () => {
  //   !localStorage.getItem('avatarId')
  //     ? !router.pathname.includes('onboarding') && router.replace('/onboarding') // onboarding
  //     : router.replace('/home');
  // };

  // const handleUpdateUsername = async () => {
  //   await sendEvent(EventList.ONBOARDING.CONFIRM_NAME, {});
  //   try {
  //     const res: any = await updateUserDetails({name});
  //     if (res?.success) {
  //       toast.success('Name updated successfully');
  //       await sendEvent(EventList.ONBOARDING.NAMING_SUCCESSFUL, {});
  //       await handleRoute();
  //       return;
  //     }
  //     await sendEvent(EventList.ONBOARDING.NAMING_FAILED, {});
  //     throw new Error('Unable to update your name !');
  //   } catch (err: any) {
  //     toast.error(err.message);
  //   }
  // };

  return (
    <div className="flex h-screen flex-col bg-black px-8 text-center">
      <Image
        className="absolute top-0 left-0 w-full"
        src="https://yoyo-assets.flamapp.com/flam/app/vuplex/images/login_text.webp"
        alt=""
        objectFit="cover"
        layout="fill"
      />
      {/* <span
      onClick={() => {
        sendEvent(EventList.ONBOARDING.SKIP_LOGIN, {});
        localStorage.getItem('avatarId') ? router.push('/home') : router.push('/onboarding');
      }}
      className="absolute top-8 right-8 z-20 text-xl text-neon"
    >
      Skip
    </span> */}
      <div className="absolute bottom-12 left-0 w-full px-8">
        <div className="fixed inset-0 mb-4 h-96 w-full scale-110 top-1/4">
          <Image
            objectFit="contain"
            src="https://yoyo-assets.flamapp.com/flam/app/vuplex/images/login_image.webp"
            layout="fill"
            alt=""
          ></Image>
        </div>
        {screen === "PHONE_NUMBER" && (
          <div className="mt-8 flex flex-col gap-4 items-center">
            <Heading size="sm" italic={true}>
              ENTER PHONE NUMBER
            </Heading>
            <div className="flex gap-4 rounded-lg border-2 border-[#ffffff4d] bg-gray-800 py-3 px-6 font-semibold text-white w-1/2">
              <p className="text-white">+91</p>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e: any) => setPhoneNumber(e.target.value)}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Enter your phone number"
                maxLength={10}
                autoFocus
              />
            </div>

            <Button
              onClick={handleSubmitPhoneNumber}
              disabled={submitDisabled}
              className={`py-3 ${submitDisabled ? 'bg-[#13B31C]/50' : 'bg-[#13B31C]'} w-1/2`}
            >
              <p className="flex items-center justify-center gap-2 font-primaryBoldItalic uppercase text-white">
                GET OTP
              </p>
            </Button>
          </div>
        )}
        {screen === "OTP" && (
          <div className="flex flex-col items-center rounded-xl">
            <div className="w-max px-4">
              <div className="mt-8 flex w-full flex-col gap-5 items-center">
                <div className="flex items-center w-full relative justify-center">
                  <MdNavigateNext
                    onClick={async () => {
                      // await sendEvent(EventList.ONBOARDING.BACK, {});
                      await setOtp("");
                      await setScreen("PHONE_NUMBER");
                    }}
                    className="absolute left-2 rotate-180 text-3xl text-white cursor-pointer rounded-full bg-gray-600/80 p-1"
                  />
                  <Heading size="sm" italic={true}>
                    ENTER OTP
                  </Heading>
                </div>
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
                      onClick={handleResendOtp}
                      role="button"
                      tabIndex={0}
                    >
                      Resend code
                    </span>
                  ) : (
                    <span className="text-gray-600">
                      Resend OTP in {otpTimer}s
                    </span>
                  )}
                </p>
                <Button
                  type="submit"
                  // onClick={handleSubmitOtp}
                  onClick={handleSignIn}
                  disabled={otpDisabled}
                  className={`py-3 ${otpDisabled ? 'bg-[#13B31C]/50' : 'bg-[#13B31C]'} w-1/2`}
                >
                  <p className="flex items-center justify-center gap-2 font-primaryBoldItalic uppercase text-white">
                    VERIFY
                  </p>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
