import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

type UseQueryWithAuthProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  key?: string;
  useQueryOptions?: UseQueryOptions;
};

function useQueryWithAuth<T = any>({
  url,
  method = "GET",
  key,
  useQueryOptions,
}: UseQueryWithAuthProps) {
  const { data: session } = useSession();
  const query = useQuery({
    queryKey: [url, method, session?.user.id || "", key || ""],
    queryFn: async () => {
      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${session!.user.jwt}`,
        },
      });
      const data = (await response.json()) as T;
      return data;
    },
    enabled: !!session?.user.id,
    ...useQueryOptions,
  });
  return query;
}

export default useQueryWithAuth;
