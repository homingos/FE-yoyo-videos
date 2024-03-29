import { ReactNode } from "react";
import { Background } from "../../components/ui/background";

export const runtime = "edge";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden">
      <Background />
      {children}
    </div>
  );
}
