/**
 * Root Layout
 *
 * This file defines the global layout for the Togail Construction website.
 * It wraps all pages with a consistent structure, including the Navbar and Footer components.
 *
 * Metadata:
 * - Title: Togail Construction
 * - Description: Professional flooring solutions in Boston.
 *
 * Usage:
 * This file is automatically used by Next.js as the root layout for the app.
 *
 * Child Components:
 * - Navbar: Renders the navigation bar.
 * - Footer: Renders the footer.
 *
 * Styles:
 * - Global styles are imported from `globals.css`.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

export const metadata = {
  title: "Togail Construction",
  description: "Professional flooring solutions in Boston.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
