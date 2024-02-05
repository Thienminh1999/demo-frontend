"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";
import Layout from "@/components/layout/layout";
import { TanstackProvider } from "@/config/TanstackProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { ConfigProvider } from "antd";
import { theme } from "@/config/theme";
import { usePortStore } from "@/store/usePortStore";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const { locale } = usePortStore();
  useSyncLanguage(locale);

  return (
    <TanstackProvider>
      <AntdRegistry>
        <ConfigProvider theme={theme}>
          <Layout>
            <Head>
              <title>Demo Frontend</title>
              <meta name="description" content='This is a demo using frontend tech stack' />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ConfigProvider>
      </AntdRegistry>
    </TanstackProvider>
  );
}

export default appWithI18Next(App, ni18nConfig);
