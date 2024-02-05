import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequestWithAuth } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = await getToken({ req });
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    const isWelcomePage = req.nextUrl.pathname.startsWith("/welcome");

    const response = NextResponse.next();

    const deviceId = req.cookies.get("__yoyo_videos")?.value;

    if (!deviceId) {
      return NextResponse.redirect(new URL("/welcome", req.url));
    }

    if (isAuthPage || isWelcomePage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/home", req.url));
      }

      return null;
    }

    if (!isAuth && deviceId) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }

    return response;
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/home",
    "/home/(.*)",
    "/login",
    "/avatars",
    "/avatars/(.*)",
    "/videos",
    '/new/(.*)',
  ],
};
