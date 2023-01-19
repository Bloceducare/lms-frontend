import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../store";
import Footer from "@components/footer";
import SiteWrapper from "@components/siteWrapper";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Head>
          {/* <meta name="csrf-token" content="{{ csrf_token() }}" /> */}
        </Head>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}

        {/* <Component {...pageProps} /> */}
        {/* <Footer /> */}
        {/* <SiteWrapper>
        </SiteWrapper> */}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
