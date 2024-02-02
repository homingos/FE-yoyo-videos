import { notFound } from 'next/navigation';
import React from 'react'
import AvaturnClient from './page-client';
import { getServerSession } from 'next-auth';
import { options } from '@/lib/options';

async function createAvaturnSession(user_id: string) {
  const session = await fetch(`https://api.avaturn.me/api/v1/sessions/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AVATURN_KEY}`,
    },
    body: JSON.stringify({
      user_id,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return session;
}

async function createAvaturnAuth() {
  const session = await fetch(`https://api.avaturn.me/api/v1/users/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AVATURN_KEY}`,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });

  return session;
}

const Page = async () => {
  const session = await getServerSession(options);

  const { id } = await createAvaturnAuth();

  const res = await createAvaturnSession(id);

  console.log('xxx', session);

  if(!res?.url) {
    notFound();
  }

  return <AvaturnClient link={res.url} />;
}

export default Page