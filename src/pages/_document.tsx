import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      style={{
        backgroundColor: "#090811",
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(155, 124, 255, 0.15), transparent 32%), radial-gradient(circle at 100% 10%, rgba(255, 142, 122, 0.1), transparent 34%), #090811",
      }}
    >
      <Head>
        <meta name="theme-color" content="#090811" />
        <meta
          name="description"
          content="Mohd Maroof — Senior Frontend Developer with 6+ years of experience building scalable web and mobile applications using React, Next.js, and React Native."
        />
        <meta
          property="og:title"
          content="Mohd Maroof | Senior Frontend Developer"
        />
        <meta
          property="og:description"
          content="Senior Frontend Developer with 6+ years of experience building scalable web and mobile applications using React, Next.js, and React Native."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mohd Maroof | Senior Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Senior Frontend Developer with 6+ years of experience building scalable web and mobile applications."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
