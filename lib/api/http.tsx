import axios from "axios";

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

export const getAvatars = async (session: any) => {
  const page = 0;
  const page_size = 1000;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/user-profile/avatar?page_no=${page}&page_size=${page_size}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${session?.data?.user?.access_token}`,
        "device-id": session?.data?.user?.device_id,
      },
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return 'Api gave an error'
    }
  });

  return res.data;

};
