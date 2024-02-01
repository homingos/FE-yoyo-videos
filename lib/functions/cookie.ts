"use server";

import { cookies } from "next/headers";

export async function setDeviceId() {
  cookies().set("deviceId", "lee");
}