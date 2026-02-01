import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Batbayar Altanbagana | Software Engineer Portfolio",
  description: "Portfolio of Batbayar Altanbagana, software engineer experienced in Django, React, PostgreSQL, Node.js, and cloud technologies.",
  keywords: ["Software Engineer", "Portfolio", "React", "Django", "PostgreSQL", "Node.js", "AWS", "Projects", "Resume"],
  authors: [{ name: "Batbayar Altanbagana" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
