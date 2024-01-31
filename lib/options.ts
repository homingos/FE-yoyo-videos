/* eslint-disable no-param-reassign */
import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NEXT_PUBLIC_NODE_ENV === 'dev',
  session: {
    strategy: 'jwt',
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_JWT_SECRET,
  // },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        phone: { label: 'Phone', type: 'number' },
        otp: { label: 'OTP', type: 'password' },
      },
      async authorize(credentials) {
        console.log('xxx', credentials);

        let user: User; 
        // if (credentials?.password && credentials?.email) {
        //   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_V2}/workspace/user/login`, {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       password: credentials?.password,
        //       email: credentials?.email
        //     }),
        //   });

        //   const data = await res.json();

        //   console.log(data);

          user = {
            id: '123',
            name: '123',
          };

        //   if (!user) throw new Error('Invalid Credentials!');

       

        return user;

        // return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token }) => {
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
