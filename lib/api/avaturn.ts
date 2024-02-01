export const selectAvaturnAvatar = async (session: any, url: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/user-profile/avatar/avaturn`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.access_token}`,
        "device-id": session?.user?.device_id as string,
      },
      method: "PUT",
      body: JSON.stringify({
        avatar_url: url,
        avatar_meta: {
          source: "avaturn",
        },
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
