import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UpScalers Technology | Scaling Businesses Through Smart Tech",
  description: "Specializing in AI, Machine Learning, and Cloud Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is added to the <html> tag to prevent 
    // the error where the server and client themes initially mismatch.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          bg-[#f8fafc] dark:bg-[#0b0e17] transition-colors duration-500`}
      >
        <ThemeProvider>
          {/* Navbar is placed here so it persists globally. 
              The z-index and fixed positioning in the Navbar component 
              will ensure it stays on top of all page content.
          */}
          <Navbar />
          
          {/* Main content of your pages */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}