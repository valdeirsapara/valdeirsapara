import type { Metadata } from "next";
import { Figtree, Alexandria } from "next/font/google";
import "@/assets/css/globals.css";
import NavBar from "@/components/navBar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valdeir Sapara",
  description: "Valdeir Sapara's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${alexandria.variable} antialiased`}
      >
        <NavBar />
        <main id="content" tabIndex={-1} className="relative">
        {children}
        </main>
      </body>
    </html>
  );
}
