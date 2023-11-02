import type { NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import type { User } from "next-auth";
import { EmailPasswordProvider } from "./email_login";
import { WalletProvider } from "./wallet_login";
import { oauthProviders } from "./oauthProviders";
import { env } from "@/env.mjs";
import type { PluginUsersPermissionsUser } from "@cms/types/generated/contentTypes";

export function getAuthOptions(req: NextApiRequest, res: NextApiResponse) {
  return {
    providers: [
      EmailPasswordProvider,
      WalletProvider(req, res),
      ...oauthProviders,
    ],
    // database: process.env.NEXT_PUBLIC_DATABASE_URL,
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/auth/signIn",
    },
    callbacks: {
      session: ({ session, token }) => {
        // console.log({ callback: "session", session, token });
        session.user = token.user as User;
        session.user.jwt = session.user.jwt ?? token.jwt;
        if (!session.user) {
          throw new Error("No user");
        }
        return session;
      },
      jwt: async ({ token, user, account }) => {
        const isSignIn = user ? true : false;
        if (isSignIn) {
          if (account?.type === "oauth") {
            const response = await fetch(
              `${env.NEXT_PUBLIC_STRAPI_URL}/api/auth/${
                account.provider
              }/callback?access_token=${account?.access_token || ""}`
            );
            const data = (await response.json()) as {
              jwt: string;
              user: PluginUsersPermissionsUser;
            };
            if (!response.ok) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              const error = (data as any)?.error as {
                status: number;
                name: string;
                message: string;
                details: any;
              };
              throw new Error(
                JSON.stringify({
                  error,
                  status: response.status,
                  statusText: response.statusText,
                })
              );
            }
            token.jwt = data.jwt;
            token.user = data.user;
          } else {
            // Credentals login
            token.user = user;
          }
        }
        return token;
      },
    },
  } as NextAuthOptions;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await NextAuth(req, res, getAuthOptions(req, res));
}
