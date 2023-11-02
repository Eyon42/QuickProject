import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/env.mjs";
import Google from "next-auth/providers/google";

export const oauthProviders = [
  GoogleProvider({
    clientId: env.GOOGLE_ID,
    clientSecret: env.GOOGLE_SECRET,
  }),
  GitHubProvider({
    clientId: env.GITHUB_ID,
    clientSecret: env.GITHUB_SECRET,
  }),
];
