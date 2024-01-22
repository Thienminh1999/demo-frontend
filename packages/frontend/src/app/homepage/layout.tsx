import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import React from "react";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
