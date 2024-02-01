export const handleGuestLogin = async (deviceId: string) => {
  const res = await fetch(`${"https://yoyo.dev.flamapp.com/thanos"}/v1/auth/guest`, {
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
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });

  return res.data;
};
