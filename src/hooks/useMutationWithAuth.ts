import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

type UseMutationWithAuthProps = {
  url: string;
  method?: "POST" | "PUT" | "DELETE";
  body?: any;
  useMutationOptions?: UseMutationOptions;
};

function useMutationWithAuth<T = any>({
  url,
  method = "POST",
  body,
  useMutationOptions,
}: UseMutationWithAuthProps) {
  const { data: session } = useSession();
  const query = useMutation({
    mutationFn: async () => {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session!.user.jwt}`,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const content = await response.text();
      try {
        return (await JSON.parse(content)) as T;
      } catch {}
      return content as unknown as T;
    },
    ...useMutationOptions,
  });
  return query;
}

export default useMutationWithAuth;
