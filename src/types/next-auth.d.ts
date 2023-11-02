import type { PluginUsersPermissionsUser } from "@cms/types/generated/contentTypes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: SessionUser;
  }
  type User = SessionUser;
}

type SessionUser = {
  id: number;
  jwt: string;
  blocked: boolean;
  confirmed: true;
  createdAt: string;
  email: string;
  membership_expires: string | null;
  newUser: boolean;
  onboarded: boolean;
  provider: string;
  updatedAt: string;
  username: string;
  walletAddress: string;
  walletLogin: boolean;
};
