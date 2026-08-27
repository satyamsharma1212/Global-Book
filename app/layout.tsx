import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Global Book Publishing | Handwriting Work",
    template: "%s | Global Book Publishing",
  },
  description:
    "Global Book Publishing — information and registration for handwriting assignments completed on A4-size pages.",
  keywords: [
    "Global Book Publishing",
    "handwriting work",
    "A4 handwriting assignment",
    "book publishing",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}