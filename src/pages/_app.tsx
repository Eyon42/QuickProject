import { type AppType } from "next/dist/shared/lib/utils";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import CustomApolloProvider from "@/components/providers/CustomApolloProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { dongle } from "@/fonts";
import "../styles/globals.css";

const queryClient = new QueryClient();

const App: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${dongle.variable} font-sans`}>
      <style jsx global>{`
        html {
          font-family: ${dongle.style.fontFamily};
        }
      `}</style>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <CustomApolloProvider>
            <Component {...pageProps} />
          </CustomApolloProvider>
        </QueryClientProvider>
      </SessionProvider>
    </div>
  );
};

export default appWithTranslation(App);
