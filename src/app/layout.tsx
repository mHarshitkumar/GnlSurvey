import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Annual Labour & Cost Survey",
  description: "Working data survey screen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
