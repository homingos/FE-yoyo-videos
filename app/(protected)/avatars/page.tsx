import React from "react";
import AvatarSelectClient from "./page-client";
import { getAvatars } from "@/lib/api/http";

export default async function Page() {
  // const avatars = await getAvatars();
  // console.log('avatars', avatars)

  return <AvatarSelectClient />;
}
