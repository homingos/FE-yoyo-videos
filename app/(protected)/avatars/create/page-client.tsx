"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import FlamLoading from "@/components/ui/flam-loading";
import { selectAvaturnAvatar } from "@/lib/api/avaturn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import cookies from "js-cookie";

import { AvaturnSDK } from "@avaturn/sdk";

function AvaturnClient() {
  const [link, setLink] = useState(null) as any;

   const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(
     null
   );
   const [sdk] = useState<AvaturnSDK>(new AvaturnSDK());

   const router = useRouter();

   const { data: session } = useSession();

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

    if (!containerRef) return;

    sdk
      .init(containerRef, {
        url: link,
        iframeClassName: "sdk-iframe w-full h-full",
      })
      .then(() => {
        sdk.on("export", async (data) => {
          try {
            (await selectAvaturnAvatar(session, data.url, data.gender, data.avatarId)) as any;
            cookies.set(
              "__avatar",
              JSON.stringify({
                id: data.avatarId,
                gender: data.gender,
                url: data.url,
              })
            );
            toast.success("Wohooo Avatar Created !!");
            router.replace("/home");
          } catch (error) {
            toast.error("Something went wrong while creating avatar !!");
            sdk.destroy();
            router.replace("/avatars");
          }
        });
      })
      .catch(() => {
        toast.error("Something went wrong while creating avatar !!");
        sdk.destroy();
        router.replace("/avatars");
      });

    return () => {
      sdk.destroy();
    };
  }, [link, sdk, containerRef, session]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      {link ? (
        <div ref={setContainerRef} className="sdk__scene w-screen h-screen" />
      ) : (
        <FlamLoading />
      )}
    </div>
  );
}

export default AvaturnClient;
