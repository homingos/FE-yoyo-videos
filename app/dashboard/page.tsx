"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Page() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: `${window.location.origin}/login`,
    });
  }

  return (
    <>
        <p>Protected Page</p>
        <Link href={'/1'} className="text-[64px] underline">1</Link>
        <br />
        <br />
        <br />
        <br />
        <button onClick={handleLogout}>Logout</button>
    </>
  );
}
