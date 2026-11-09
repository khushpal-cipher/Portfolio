import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

// Self-hosted: Vercel's Turbopack build failed fetching Unbounded from Google Fonts (OFL licence).
const unbounded = localFont({
  src: "./fonts/unbounded-latin.woff2",
  variable: "--font-unbounded",
  weight: "200 900",
});

export const metadata = {
  title: "Khushpal Singh Chouhan — Developer Portfolio",
  description:
    "CS undergrad at Ajeenkya DY Patil University, Pune, specialising in AI. Building computer vision pipelines, AI-backed APIs, and full-stack apps.",
};

export const viewport = {
  themeColor: "#F2F2EE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${unbounded.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
