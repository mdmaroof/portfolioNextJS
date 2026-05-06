import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#030712" />
      </Head>
      <body style={{ backgroundColor: "#030712" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
