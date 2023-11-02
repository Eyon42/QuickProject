import Head from "next/head";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { metadata } from "@/metadata";

type BareLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  mainClassName?: string;
};

function BareLayout({ children, className, ...props }: BareLayoutProps) {
  return (
    <>
      <Head>
        <title>{metadata.name}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "flex min-h-screen flex-col items-center justify-center bg-background1" +
          (className || "")
        }
        {...props}
      >
        <main>{children}</main>
      </div>
    </>
  );
}

export default BareLayout;
