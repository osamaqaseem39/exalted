import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import SiteBrandsBar from "@/components/SiteBrandsBar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exalted Coding & Packing Solutions",
  description: "Industrial coding, inspection, detection, and packaging equipment",
  icons: {
    icon: "/images/exalted-logo.png",
    apple: "/images/exalted-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteBrandsBar />
        <Footer />
      </body>
    </html>
  );
}
