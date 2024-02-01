import axios from "axios";

export const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

async function handleAPI(recdConfig: any) {
  const config: any = recdConfig;
  try {
    console.log('hello')
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
