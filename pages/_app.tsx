import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Html, Head, Main, NextScript } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head></Head> */}
      <Component {...pageProps} />;
    </>
  );
}
