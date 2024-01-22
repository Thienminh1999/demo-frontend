"use client";
import { TanstackProvider } from "@/config/TanstackProvider";
import { theme } from "@/config/theme";
import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              {/* <Header /> */}
              {children}
              {/* <Footer /> */}
            </ConfigProvider>
          </AntdRegistry>
        </TanstackProvider>
      </body>
    </html>
  );
}
