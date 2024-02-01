// import { constructMetadata } from "@dub/utils";
import WelcomePageClient from "./page-client";

export const runtime = "nodejs";

export default async function WelcomePage() {
  return <WelcomePageClient />;
}
