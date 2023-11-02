import { env } from "@/env.mjs";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: env.NEXT_PUBLIC_STRAPI_URL + "/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${env.STRAPI_KEY}`,
  },
});
