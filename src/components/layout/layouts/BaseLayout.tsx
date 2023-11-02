import Head from "next/head";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { metadata } from "@/metadata";

function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.name}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-background1">
        <Header />
        <main className="flex flex-col justify-center">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default BaseLayout;
