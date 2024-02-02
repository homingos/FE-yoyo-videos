"use server";

import axios from "axios";
import { getServerSession } from "next-auth";
import { options } from "../options";
import { cookies } from "next/headers";

export const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

async function handleAPI(recdConfig: any) {
  const config: any = recdConfig;
  try {
    console.log("hello");
    config.headers.common.Authorization = `Bearer 123`;
    config.headers.common["device-id"] = "123";
    return config;
  } catch (err) {
    return config;
  }
}

http.interceptors.request.use(
  async (recdConfig) => {
    return handleAPI(recdConfig);
  },
  (error: Error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
  }
);

export const getAvatars = async () => {
  const page = 0;
  const page_size = 1000;

  const session = await getServerSession(options);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/user-profile/avatar?page_no=${page}&page_size=${page_size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.access_token}`,
        "device-id": session?.user?.device_id as string,
      },
      cache: "no-store",
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });

  return res.data;
};

export const getTemplates = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/templates/all`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "api-key": "4c6e5d06-0d8e-4026-9a61-fc3d75fda1b0",
      },
      cache: "no-store",
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });

  return res.data;
};

export const getVideos = async () => {
  const session = await getServerSession(options);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/user-videos/user/all`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.access_token}`,
        "device-id": session?.user?.device_id as string,
      },
      cache: "no-store",
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });

  return res.data;
};

export const createUserVideo = async (template_id: string) => {
  const session = await getServerSession(options);

  const cookieData: any = cookies().get('__avatar')?.value;

  const avatar_id = JSON.parse(cookieData)?.id

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/user-videos/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.access_token}`,
        "device-id": session?.user?.device_id as string,
      },
      body : JSON.stringify({
        template_id,
        "user_profile_id": session?.user?.user_profile_id,
        avatar_id
      }),
      cache: "no-store",
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });

  return res.data;
}
