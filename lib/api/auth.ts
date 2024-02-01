import cookies from "js-cookie";

export const handleGuestLogin = async (deviceId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/auth/guest`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_id: deviceId,
        country: "IN",
        device: {
          platform: "string",
          fcm_token: "string",
        },
        utm: {},
      }),
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
  return res.data;
};

export const sendOtp = async (number: string) => {
  const yoyo_videos = cookies.get("__yoyo_videos") as string;

  const { device_id, user } = JSON.parse(yoyo_videos);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/oauth/send-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.access_token}`,
        "device-id": device_id,
      },
      body: JSON.stringify({
        phone_number: number,
        country_code: 91,
      }),
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((errorResponse) => {
        throw new Error(errorResponse.message || "Unknown error occurred");
      });
    }
  });

  return res.data;
};
