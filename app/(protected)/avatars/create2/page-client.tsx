"use client";

import { useEffect } from "react";

import { selectAvaturnAvatar } from "@/lib/api/avaturn";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

function AvaturnClient({ link }: { link : string}) {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
  });

  useEffect(() => {
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
            (await selectAvaturnAvatar(session, json.data.url)) as any;
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
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      <iframe
        src={link}
        title="test"
        id="frame"
        className="h-full w-full"
        allow="camera *; microphone *; clipboard-write"
      ></iframe>
    </div>
  );
}

export default AvaturnClient;
