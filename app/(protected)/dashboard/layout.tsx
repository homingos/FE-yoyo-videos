import { ReactNode } from "react";
import AuthProvider from "@/lib/providers/AuthProvider";
import { Background } from "@/components/ui/background";

export const dynamic = "force-static";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <div className="flex h-screen w-screen justify-center overflow-hidden">
        <Background />
        {children}
      </div>
    </AuthProvider>
  );
}
