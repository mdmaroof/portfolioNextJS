import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      dir="ltr"
      style={{
        backgroundColor: "#090811",
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(155, 124, 255, 0.15), transparent 32%), radial-gradient(circle at 100% 10%, rgba(255, 142, 122, 0.1), transparent 34%), #090811",
      }}
    >
      <Head>
        <meta name="theme-color" content="#090811" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Mohd Maroof" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
