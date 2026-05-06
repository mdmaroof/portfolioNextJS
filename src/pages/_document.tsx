import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      style={{
        backgroundColor: "#030712",
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.2), transparent 30%), radial-gradient(circle at 100% 10%, rgba(99, 102, 241, 0.22), transparent 32%), radial-gradient(circle at 50% 100%, rgba(236, 72, 153, 0.15), transparent 34%), linear-gradient(180deg, #020617 0%, #0b1120 55%, #020617 100%)",
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#030712" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
