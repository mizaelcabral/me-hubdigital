import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.css";

// custom icons
import "public/icons/glyphter/css/xpovio.css";

// main scss
import "@/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ME Hubdigital — Engenharia Web, IA & Automação</title>
        <meta
          name="description"
          content="Engenharia web de alto impacto, agentes autônomos de IA, plataformas SaaS e soluções completas para acelerar operações corporativas."
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
