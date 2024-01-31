import type { DefaultSession } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      name: string;
    } & DefaultSession;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    name: string;
  }
}
