import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/components/Footer";
const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Colabs - Making space for transformative innovation.",
  description: "We design, build and run collaborative spaces where bio-led science, technology and people can thrive.",
};

const matterSQ = localFont({
  src: [
    {
      path: "../assets/fonts/matterSQ-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/matterSQ-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/matterSQ-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/matterSQ-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/matterSQ-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/matterSQ-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={matterSQ.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
