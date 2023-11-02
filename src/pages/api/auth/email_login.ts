import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "./strapi_signIn";

export const EmailPasswordProvider = CredentialsProvider({
  id: "email-password",
  name: "Sign in with Email",
  credentials: {
    email: { label: "Email", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    /**
     * This function is used to define if the user is authenticated or not.
     * If authenticated, the function should return an object contains the user data.
     * If not, the function should return `null`.
     */
    if (credentials == null) return null;
    /**
     * credentials is defined in the config above.
     * We can expect it contains two properties: `email` and `password`
     */
    try {
      // console.log("Fetching user");
      const { user, jwt } = await signIn({
        email: credentials.email,
        password: credentials.password,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...user,
        jwt,
      } as any;
    } catch (error) {
      // Sign In Fail
      return null;
    }
  },
});
