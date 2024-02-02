import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout/layout";
import { TanstackProvider } from "@/config/TanstackProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { theme } from "@/config/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <TanstackProvider>
      <AntdRegistry>
        <ConfigProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ConfigProvider>
      </AntdRegistry>
    </TanstackProvider>
  );
}

export default appWithTranslation(App);
