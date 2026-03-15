import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Batbayar Altanbagana | Software Engineer Portfolio",
  description:
    "Portfolio of Batbayar Altanbagana, software engineer experienced in Django, React, PostgreSQL, Node.js, and cloud technologies.",
  keywords: [
    "Software Engineer",
    "Portfolio",
    "React",
    "Django",
    "PostgreSQL",
    "Node.js",
    "AWS",
    "Projects",
    "Resume",
  ],
  authors: [{ name: "Batbayar Altanbagana" }],
  openGraph: {
    title: "Batbayar Altanbagana | Software Engineer Portfolio",
    description:
      "Projects, experience, and technical work in backend and full-stack development.",
    url: "https://batbyr.com",
    siteName: "Batbayar Altanbagana Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <Navbar />
          <main className="mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
