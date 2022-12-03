import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { EB_Garamond } from "@next/font/google";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={eb_garamond.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
