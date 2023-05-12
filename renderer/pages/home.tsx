import React from "react";
import Head from "next/head";
import LoginPage from "./login";
import { RecoilRoot } from "recoil";

function Home() {
  return (
    <RecoilRoot>
      <React.Fragment>
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

        <div>
          <LoginPage />
        </div>
      </React.Fragment>
    </RecoilRoot>
  );
}

export default Home;
