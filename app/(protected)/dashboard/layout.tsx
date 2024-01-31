import { ReactNode } from "react";
import AuthProvider from "@/lib/providers/AuthProvider";

export const dynamic = "force-static";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen w-full">
        {children}
      </div>
    </AuthProvider>
  );
}
