import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "神岛实验室",
  description: "神奇代码岛实验室!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
