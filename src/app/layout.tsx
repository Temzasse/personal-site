import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teemu Taskula's blog",
  description:
    "Personal blog of Teemu Taskula. I write about web development, TypeScript, React, and more."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
