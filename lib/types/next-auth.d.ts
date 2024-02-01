import type { DefaultSession } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      user_profile_id: string,
      access_token: string,
      refresh_token: string,
      ftu: boolean
    } & DefaultSession;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user_profile_id: string,
    access_token: string,
    refresh_token: string,
    ftu: boolean
  }
}
