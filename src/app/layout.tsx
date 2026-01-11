import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, DM_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./index.css";
import { Navbar } from "../components/Navbar";
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

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teemutaskula.com"),
  title: "Teemu Taskula's blog",
  description:
    "Personal blog of Teemu Taskula. I write about web development, TypeScript, React, and more.",
  openGraph: {
    images: [{ url: "/api/og", width: 1200, height: 627 }],
  },
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
      <body
        className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable}`}
      >
        <GridDecoration />
        <Navbar />
        <Main>{children}</Main>
        <GrainEffect>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </GrainEffect>
        <Analytics />
        <SpeedInsights />
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
    borderTop: "2px solid",
    borderGlow: "$primary.1",
    paddingBottom: "100px",

    "&:has(.blog-post)": {
      maxWidth: "75ch",
    },

    mdDown: {
      paddingTop: "20vh",
    },

    // Left vertical line
    "&::before": {
      content: "''",
      position: "absolute",
      top: "30vh",
      left: "0px",
      bottom: "0px",
      width: "1px",
      background: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(16, 185, 129, 0.1) 10%,
        rgba(16, 185, 129, 0.1) 100%
      )`,
      "@media (max-width: 1056px)": {
        display: "none",
      },
    },
    // Right vertical line
    "&::after": {
      content: "''",
      position: "absolute",
      top: "30vh",
      bottom: "0px",
      right: "0px",
      width: "1px",
      background: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(16, 185, 129, 0.1) 10%,
        rgba(16, 185, 129, 0.1) 100%
      )`,
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
    WebkitMaskImage: "linear-gradient(0deg, #0000, #000)",
    maskImage: "linear-gradient(0deg, #0000, #000)",
    pointerEvents: "none",

    _before: {
      content: "''",
      position: "absolute",
      top: "-1px",
      left: "20%",
      right: "20%",
      height: "1px",
      boxShadow: "0px 0px 60px 10vh rgba(16, 185, 129, 0.05)",
    },
    _after: {
      content: "''",
      position: "absolute",
      top: "-1px",
      left: "35%",
      right: "35%",
      height: "1px",
      boxShadow: "0px 0px 80px 15vh rgba(16, 185, 129, 0.05)",
    },
  },
});

const GrainEffect = styled("svg", {
  base: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    width: "100vw",
    minHeight: "100vh",
    opacity: 0.2,
    pointerEvents: "none",
    transform: "translateY(0)",
    filter: "contrast(50%) brightness(50%)",
  },
});
