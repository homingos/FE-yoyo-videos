"use client";

import { useEffect, useRef, useState } from "react";

import axios from "axios";

function AvaturnClient() {
  const [link, setLink] = useState(null) as any;

  const frameRef = useRef(null) as any;

  const handleSessionCreation = async (id: string) => {
    const session = await axios.post(
      `https://api.avaturn.me/api/v1/sessions/new`,
      {
        user_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AVATURN_KEY}`,
        },
      }
    );

    console.log(session);

    if (session?.status === 200) {
      setLink(session.data.url);
    } else {
      console.log("error");
    }
  };

  const handleCreation = async () => {
    if (!localStorage.getItem("avaturnId")) {
      const res = await axios.post(
        `https://api.avaturn.me/api/v1/users/new`,
        {},
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AVATURN_KEY}`,
          },
        }
      );

      if (res?.status === 200) {
        localStorage.setItem("avaturnId", res.data.id);
        await handleSessionCreation(res.data.id);
      } else {
        console.log("Unable to create avatar");
      }
    } else {
      handleSessionCreation(localStorage.getItem("avaturnId") as any);
    }
  };

  useEffect(() => {
    if (!link) {
      (async () => {
        await handleCreation();
      })();
    }

    const frame = frameRef.current as any;

    if (frame) {
      frame.src = link;
    }

    function subscribe(event: any) {
      let json;
      try {
        json = JSON.parse(event.data);
      } catch (error) {
        console.log("Error parsing the event data.");
        return;
      }

      console.log("xx", json);

      if (json.source !== "avaturn") {
        return;
      }

      // Get avatar GLB URL
      if (json.eventName === "v2.avatar.exported") {
        console.log("URL", json.data);
        console.log("URL", json.data.url);
      }
    }

    window.addEventListener("message", subscribe);
    document.addEventListener("message", subscribe);

    return () => {
      window.removeEventListener("message", subscribe);
      document.removeEventListener("message", subscribe);
    };
  }, [link]);

  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      {link ? (
        <iframe
          ref={frameRef}
          title="test"
          id="frame"
          className="h-full w-full"
          allow="camera *; microphone *; clipboard-write"
        ></iframe>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default AvaturnClient;
