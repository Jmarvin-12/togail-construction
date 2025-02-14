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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Hero from '@components/Hero/Hero';
import AboutUs from "@/components/AboutUs/AboutUs";

export const metadata = {
    title: 'Togail Construction',
    description: 'Professional flooring solutions in Boston.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <Hero />
                <AboutUs />
                {children}
                <Footer />
            </body>
        </html>
    )
};

