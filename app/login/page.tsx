'use client';

import { signIn } from 'next-auth/react'
import React, { useEffect } from 'react';
import Button from '@/app/components/button';
import Heading from '@/app/components/heading';
// import { useMessage } from '@/lib/hooks';
// import useEvents from '@/lib/hooks/useEvents';
// import EventList from '@/lib/utils/eventList';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';

  // const router = useRouter();

  // const { sendDataToUnity } = useMessage();
  // const { sendEvent } = useEvents();

  // useEffect(() => {
  //   sendEvent(EventList.ONBOARDING.LOGIN_PAGE, {});
  // }, []);



const page = () => {

  const handleSignIn = async () => {
    await signIn('credentials', {
      callbackUrl: '/dashboard'
    });
  }

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
        <div className="relative mb-4 h-96 w-full scale-110">
          <Image
            objectFit="contain"
            src="https://yoyo-assets.flamapp.com/flam/app/vuplex/images/login_image.webp"
            layout="fill"
            alt=""
          ></Image>
        </div>
        <Heading size="md" italic={true}>
          WELCOME, FLAMSTERS!
        </Heading>
        <div className="mt-8 flex flex-col gap-3">
          <Button
            onClick={() => {
              // sendEvent(EventList.ONBOARDING.WHATSAPP_LOGIN, {});
              // sendDataToUnity('OPEN_URL', 'https://flamapp.authlink.me?redirectUri=flam://login');
              handleSignIn()
            }}
            style="neon-hollow"
          >
            <p className="flex items-center justify-center gap-2 font-primaryBoldItalic uppercase">
              <FaWhatsapp className="text-2xl" />
              Sign-in with whatsapp
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page