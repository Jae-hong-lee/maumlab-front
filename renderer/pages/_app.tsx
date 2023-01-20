import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
