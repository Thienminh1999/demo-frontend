import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { TanstackProvider } from "@/config/TanstackProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { ConfigProvider } from "antd";
import { theme } from "@/config/theme";
import { usePortStore } from "@/store/usePortStore";
import Head from "next/head";
import { useEffect, useState } from "react";
import i18n from "@/locales/core/i18n";

function App({ Component, pageProps }: AppProps) {
  const { locale } = usePortStore();
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    i18n.initialize(locale).then(() => {
      setInitDone(true);
    });
  }, []);

  return (
    <>
      {initDone && (
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
      )}
    </>
  );
}

export default App;
