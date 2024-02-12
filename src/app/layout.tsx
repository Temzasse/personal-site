import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

import { Navbar } from "./Navbar";
import { styled } from "@/styled";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Teemu Taskula's blog",
  description:
    "Personal blog of Teemu Taskula. I write about web development, TypeScript, React, and more.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light-mode.svg",
        href: "/favicon-light-mode.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark-mode.svg",
        href: "/favicon-dark-mode.svg",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        <Navbar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}

const Main = styled("main", {
  base: {
    maxWidth: "1000px",
    margin: "0px auto",
    padding: "$md",
  },
});
