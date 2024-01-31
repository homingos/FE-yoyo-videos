// import { constructMetadata } from "@dub/utils";
import LoginPageClient from "./page-client";

export const runtime = "nodejs";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <LoginPageClient />
    </div>
  );
}
