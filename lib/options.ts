/* eslint-disable no-param-reassign */
import { UserMinus } from "lucide-react";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NEXT_PUBLIC_NODE_ENV === "dev",
  session: {
    strategy: "jwt",
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_JWT_SECRET,
  // },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone: { label: "Phone", type: "number" },
        otp: { label: "OTP", type: "number" },
      },
      async authorize(credentials) {
        const cookieData = cookies().get("__yoyo_videos")?.value as string;

        const { user: guest, device_id } = JSON.parse(cookieData);

        let user: User;

        if (credentials?.otp && credentials?.phone) {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}thanos/v1/oauth/verify-otp`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${guest?.access_token}`,
                "device-id": device_id,
              },
              body: JSON.stringify({
                otp: credentials?.otp,
              }),
            }
          ).then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          });

          const user = { ...res.data, device_id }

          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
  },
};
