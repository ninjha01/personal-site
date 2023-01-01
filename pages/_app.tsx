import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useAnalyticsInstance } from "../hooks/useAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  useAnalyticsInstance();
  return (
    <>
      <Script
        data-goatcounter={"https://nishantjha.goatcounter.com/count"}
        data-goatcounter-settings='{"allow_local": false}'
        src="//gc.zgo.at/count.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
