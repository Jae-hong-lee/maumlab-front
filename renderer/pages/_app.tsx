/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
// import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nextron</title>
        <meta
          name="description"
          content="nextron을 이용한 채팅프로그램을 구현"
        />
        <meta
          name="keywords"
          content="TypeScript, react, nextron.js, firebase,  git"
        />
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
