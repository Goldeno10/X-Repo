import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Inter, Roboto } from "next/font/google";
// import localFont from "next/font/local";
import AuthProvider from "./auth/provider";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

// const poppins = localFont({
//   src: "/fonts/poppins.woff2",
//   variable: "--font-poppins",
// });

export const metadata: Metadata = {
  // used for SEO
  title: "Study Hub",
  description:
    "Explore, share, and discuss educational materials in a space built for learners like you. Dive into new knowledge and connect through collaboration!",
  openGraph: {
    // used for SEO when shared on social media
    title: "Study Hub",
    description:
      "Explore, share, and discuss educational materials in a space built for learners like you. Dive into new knowledge and connect through collaboration!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <AuthProvider>
        <body className={`${inter.className} scrollbar-hide`}>
          <NavBar />
          <main className="pt-15 scrollbar-hide">{children}</main>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
