"use client";

import { useEffect, useRef, useState } from "react";

import axios from "axios";
import FlamLoading from "@/components/ui/flam-loading";
import { selectAvaturnAvatar } from "@/lib/api/avaturn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function AvaturnClient() {
  const [link, setLink] = useState(null) as any;

  const { data: session } = useSession();

  const router = useRouter();

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

      if (json.source !== "avaturn") {
        return;
      }

      // Get avatar GLB URL
      if (json.eventName === "v2.avatar.exported") {
        (async () => {
         try {
           await selectAvaturnAvatar(session, json.data.url) as any;
           toast.success("Wohooo Avatar Created !!");
           router.replace("/home");
         } catch (error) {
          toast.error("Something went wrong!");
          router.replace("/avatars");
         }
        })();
      }
    }

    window.addEventListener("message", subscribe);
    document.addEventListener("message", subscribe);

    return () => {
      window.removeEventListener("message", subscribe);
      document.removeEventListener("message", subscribe);
    };
  }, [link, session]);

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
        <FlamLoading />
      )}
    </div>
  );
}

export default AvaturnClient;
