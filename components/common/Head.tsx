import React from "react";
import Head from "next/head";

export default function indexPage() {
  <>
    <Head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/x-icon" href="/ico-logo.png" />

      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="user-scalable=no,width=device-width,initial-scale=1"
      />
      <meta name="description" content="Vuhee's portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="portfolio" />
      <meta property="og:description" content="Vuhee's portfolio" />
      <meta property="og:image" content="/imgs/background.jpg" />
      <meta property="og:url" content="https://protfolio-vuhee.vercel.app/" />

      <title>portfolio</title>
    </Head>
  </>;
}

indexPage.defaultProps = {};
