import { ReactNode } from "react";
import { Background } from "@/components/ui/background";

// export const dynamic = "force-static";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden">
      <Background />
      {children}
    </div>
  );
}
