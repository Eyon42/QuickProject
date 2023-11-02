/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";
import { getCurrentURL } from "@/lib/utils";
import { getCsrfToken } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "./strapi_signIn";
import { client } from "@/apollo/server";
import { gql } from "@/__generated__";

const userDataQuery = gql(`query userWalletPassword($walletAddress: String!) {
    usersPermissionsUsers(filters: {walletAddress: {eq: $walletAddress}}) {
        data {
            id
            attributes {
                email
                user_wallet_password {
                    data {
                        id
                        attributes {
                            password
                        }
                    }
                }
            }
        }
    }
}
`);

const registerUser =
  gql(`mutation CreateWalletUser($wallet: String!, $email: String!, $password: String!) {
    createUsersPermissionsUser(
        data: {username: $wallet, email: $email, confirmed: true, password: $password, walletAddress: $wallet role: "1"}
    ) {
        data {
            id
        }
    }
}
`);

const saveWalletPassword =
  gql(`mutation saveWalletPassword($userId: Id!, $password: String!) {
    createUserWalletPassword(data: {user: $userId, password: $password}) {
        data {
            id
        }
    }
}
`);

function generatePassword() {
  return (
    Math.random().toString(36).slice(-8) +
    Math.random().toString(36).slice(-8) +
    Math.random().toString(36).slice(-8)
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const WalletProvider = (req: NextApiRequest, res: NextApiResponse) => {
  return CredentialsProvider({
    id: "wallet",
    name: "Wallet",
    credentials: {
      message: {
        label: "Message",
        type: "text",
        placeholder: "0x0",
      },
      signature: {
        label: "Signature",
        type: "text",
        placeholder: "0x0",
      },
    },
    async authorize(credentials) {
      console.log(credentials);
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
        const message = new SiweMessage(
          JSON.parse(credentials?.message || "{}")
        );
        console.log({ message });
        const nextAuthUrl = new URL(getCurrentURL());
        console.info({
          message: "login attempt",
          currentUrl: nextAuthUrl,
          signatureUrl: message.domain,
        });
        if (message.domain !== nextAuthUrl.host) {
          console.log("Invalid Host");
          console.log(message.domain, "!=", nextAuthUrl.host);
          return null;
        }

        // https://github.com/nextauthjs/next-auth/issues/7166
        const csrfToken = await getCsrfToken({ req: { headers: req.headers } });

        if (message.nonce !== csrfToken) {
          console.log("Invalid Nonce");
          return null;
        }
        await message.verify({ signature: credentials?.signature || "" });

        const storedUser = await client.query({
          query: userDataQuery,
          variables: {
            walletAddress: message.address,
          },
          fetchPolicy: "no-cache",
        });

        let email: string;
        let password: string;
        let newUser = false;
        console.log({ storedUser });
        console.log(storedUser.data?.usersPermissionsUsers?.data);
        if (!storedUser.data?.usersPermissionsUsers?.data?.length) {
          console.log("User not found");
          // Handle sign up
          email = message.address + "@siwa.app";
          password = generatePassword();
          newUser = true;
          const signUpResult = await client.mutate({
            mutation: registerUser,
            variables: {
              wallet: message.address,
              email,
              password,
            },
          });
          if (signUpResult.errors?.length) {
            console.log("Error signing up");
            console.log(signUpResult.errors);
            return null;
          }
          const userId = signUpResult.data?.createUsersPermissionsUser?.data
            ?.id as string;
          if (!userId) {
            console.log("No user id");
            return null;
          }
          console.log("Saving user password");
          console.log({ userId, password });
          const savePasswordResult = await client
            .mutate({
              mutation: saveWalletPassword,
              variables: {
                userId,
                password,
              },
            })
            .catch((e) => {
              console.log("Error saving password");
              console.error(e);
              console.log(JSON.stringify(e));
              return null;
            });

          console.log("Query ran");
          console.log(savePasswordResult?.errors);
          if (savePasswordResult?.errors?.length) {
            console.log("Error saving password");
            console.log(JSON.stringify(savePasswordResult.errors));
            return null;
          }
        } else {
          console.log("User found");
          const userData =
            storedUser.data?.usersPermissionsUsers?.data[0]!.attributes;
          email = userData?.email || "";
          password =
            userData?.user_wallet_password?.data?.attributes?.password || "";

          if (!password) {
            console.log("User not using wallet login");
            return null;
          }
        }

        console.log("Signing user in to strapi");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { user, jwt } = await signIn({
          email,
          password,
        });

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        return {
          ...user,
          jwt,
          newUser,
        } as any;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
  });
};
