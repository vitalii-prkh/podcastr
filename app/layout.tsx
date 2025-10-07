import React from "react";
import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";

const manrope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcast using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>{props.children}</body>
    </html>
  );
}

export default RootLayout;
