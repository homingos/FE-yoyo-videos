import { Suspense } from "react";
import LoginPageClient from "./page-client";

export const runtime = "nodejs";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginPageClient />
    </Suspense>
  );
}
