import type { Metadata } from "next";
import { Figtree, Alexandria } from "next/font/google";
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}
