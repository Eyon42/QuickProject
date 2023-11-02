import { env } from "@/env.mjs";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useSession } from "next-auth/react";
import { type ReactNode, useEffect } from "react";

const httpLink = new HttpLink({
  uri: env.NEXT_PUBLIC_STRAPI_URL + "/graphql",
});
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: { headers: Record<string, string> }) => ({
    headers: {
      ...headers,
      Authorization: localStorage.getItem("authHeader") || null,
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function CustomApolloProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      localStorage.setItem("authHeader", "");
    }
  }, [status]);

  useEffect(() => {
    if (session) {
      localStorage.setItem("authHeader", `Bearer ${session.user.jwt}`);
    }
  }, [session]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
