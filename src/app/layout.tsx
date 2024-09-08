import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Di Nguyen",
  description: "A Portfolio about Me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-50 bg-purple-200 flex flex-col min-h-screen max-w-screen-2xl mx-auto`}
      >
        <Header />
        {children}
        <Footer />
        {/* <SpeedInsights />
        <Analytics/> */}
      </body>
    </html>
  );
}