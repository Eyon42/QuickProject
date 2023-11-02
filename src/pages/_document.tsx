import { Html, Head, Main, NextScript } from "next/document";
import { metadata } from "@/metadata";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Dongle:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
          rel="stylesheet"
        />{" "}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
          rel="stylesheet"
        /> */}
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.name} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={metadata.domain} />
        <meta property="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.name} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <link rel="icon" href="/images/favicon.png" />
      <body className={"text-white "}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
