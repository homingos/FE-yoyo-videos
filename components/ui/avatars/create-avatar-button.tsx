'use client';

import Icon from '@/components/icons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const CreateAvatarButton = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  return (
    <>
      <Link
        href={"/avatars/create"}
        className="fixed bottom-6 right-6 p-2 rounded-full z-50 bg-primary shadow-md"
      >
        <div className="absolute animate-ping rounded-full h-10 w-10 bg-primary z-40"></div>
        <Icon icon="plus" className="h-10 w-10" />
      </Link>
      <div
        className={`${
          !show ? "-mr-10 opacity-0" : "mr-0 opacity-100"
        } fixed right-[6rem] z-50 bottom-7 rounded-lg bg-white px-4 py-2 font-bold shadow-sm transition-all duration-300 after:absolute after:left-[100%] after:top-[50%] after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-white after:content-['']`}
      >
        Create New Avatar
      </div>
    </>
  );
}

export default CreateAvatarButton