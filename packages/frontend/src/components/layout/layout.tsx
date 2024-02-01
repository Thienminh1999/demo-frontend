"use client";
import { TanstackProvider } from "@/config/TanstackProvider";
import { theme } from "@/config/theme";
import Sitebar from "./Sitebar/Sitebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <TanstackProvider>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <div className='layout-homepage'>
                <Sitebar />
                <div className="content-container">
                   {children}
                </div>
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </TanstackProvider>
      </body>
    </html>
  );
}
