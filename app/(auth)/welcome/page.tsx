// import { constructMetadata } from "@dub/utils";
import { Suspense } from "react";
import WelcomePageClient from "./page-client";

export const runtime = "nodejs";

export default async function WelcomePage() {
  return (
    <Suspense>
      <WelcomePageClient />
    </Suspense>
  );
}
