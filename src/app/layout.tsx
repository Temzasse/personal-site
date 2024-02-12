import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { ReactNode } from "react";
import "./index.css";

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
        <GridDecoration />
        <Navbar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}

const Main = styled("main", {
  base: {
    position: "relative",
    width: "100%",
    maxWidth: "1056px",
    minHeight: "100%",
    margin: "0px auto",
    padding: "$lg",
    paddingTop: "30vh",

    "&::before": {
      content: "''",
      position: "absolute",
      top: "30vh",
      left: "0px",
      bottom: "0px",
      width: "1px",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      "@media (max-width: 1056px)": {
        display: "none",
      },
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "30vh",
      bottom: "0px",
      right: "0px",
      width: "1px",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      "@media (max-width: 1056px)": {
        display: "none",
      },
    },
  },
});

const GridDecoration = styled("div", {
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "40vh",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(16, 185, 129, 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
    backgroundPosition: "center top -1px",
    WebkitMaskImage: "linear-gradient(0deg,#0000,#000)",
    maskImage: "linear-gradient(0deg,#0000,#000)",
    pointerEvents: "none",
  },
});
