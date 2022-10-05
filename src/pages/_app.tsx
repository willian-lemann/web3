import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { MoralisProvider } from "react-moralis";
import { AuthProvider } from "../context/auth/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID as string}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL as string}
    >
      <AuthProvider>
        <Head>
          <title>Welcome to Metaverse</title>
        </Head>

        <Component {...pageProps} />
      </AuthProvider>
    </MoralisProvider>
  );
}

export default MyApp;
