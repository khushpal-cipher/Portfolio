import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Khushpal Singh Chouhan — Developer Portfolio",
  description:
    "CS undergrad at Ajeenkya DY Patil University, Pune, specialising in AI. Building computer vision pipelines, AI-backed APIs, and full-stack apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
