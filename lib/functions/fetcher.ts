'use server';

import { getServerSession } from "next-auth";
import { options } from "../options";

interface SWRError extends Error {
  status: number;
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const session = await getServerSession(options);

  const res = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user?.access_token}`,
      "device-id": session?.user?.device_id as string,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    const err = new Error(error) as SWRError;
    err.status = res.status;
    throw err;
  }

  const data = await res.json();

  return data.data;
}
