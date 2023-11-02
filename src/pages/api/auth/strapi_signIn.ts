import { env } from "@/env.mjs";
import type { PluginUsersPermissionsUser } from "@cms/types/generated/contentTypes";

export async function signIn({ email, password }: Record<string, string>) {
  const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier: email, password }),
  });
  return (await res.json()) as {
    jwt: string;
    user: PluginUsersPermissionsUser["attributes"] & { id: string };
  };
}
