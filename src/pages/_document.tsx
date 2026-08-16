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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#030712" />
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

        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
