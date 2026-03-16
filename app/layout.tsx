import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kensho — See your true nature",
  description:
    "A local-first AI self-knowledge workspace. Journal, reflect, and discover patterns in your thinking. All data stays on your computer.",
  openGraph: {
    title: "Kensho — See your true nature",
    description:
      "A local-first AI self-knowledge workspace. Journal, reflect, and discover patterns in your thinking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
