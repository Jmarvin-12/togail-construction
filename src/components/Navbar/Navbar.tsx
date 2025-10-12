/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/**
 * Navbar Component
 *
 * This component renders the navigation bar for the Togail Construction website.
 * It includes the company logo and navigation links to other sections of the site.
 *
 * Props: None
 *
 * Styles: This component uses the `Navbar.module.css` file for its styles.
 *
 * Tailwind Classes Applied via CSS Modules:
 * - navbar: Styles the navigation bar container.
 * - container: Aligns the logo and navigation links in a responsive layout.
 * - logo: Styles the company logo.
 * - navLinks: Aligns the navigation links in a horizontal row.
 * - navLink: Adds hover effects to the links.
 * 
 * Usage:
 * ```tsx
 * <Navbar />
 * ```
 */
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Services from '../ServicesItems/Services';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const currentPath = usePathname();

    // const [isScrolled, setIsScrolled] = useState(false); // Tracks when Navbar should apply transparency
    // const [scrollScale, setScrollScale] = useState(1); // Tracks logo scaling dynamically
    // const [currentPath, setCurrentPath] = useState("");
    const [isScrolled, setIsScrolled] = useState(false); // transparencia/blur al hacer scroll
    const [scrollScale, setScrollScale] = useState(1);   // escala dinámica del logo

    useEffect(() => {
        // Ensure this code runs only on the client
        if (typeof window !== "undefined") {

            const handleScroll = () => {
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;

                // Adjust scale value dynamically: Shrink when scrolling, regain size earlier
                const threshold = viewportHeight * 0.2; // Regain size at 20% of viewport height
                const scaleValue = scrollY > threshold ? Math.max(0.7, 1 - (scrollY - threshold) / 300) : 1;

                setScrollScale(scaleValue); // Smoothly adjust logo scaling
                setIsScrolled(scrollY > 50); // Apply transparency effects
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleScroll);
            };
        }
    }, []);    

    return (
        <>

            <nav
                className={`${styles.navbar} ${
                    scrollScale ? styles.navbarScrolled : ""
                }`}
            >
                <div className={styles.container}>
                    {/* Logo */}
                    <div
                    className={`${styles.logoWrapper} ${
                        scrollScale < 1 ? styles.logoSmall : ""
                    }`}
                    style={{
                        transform: `translate(-50%, 0) scale(${scrollScale})`,
                    }}
                >
                    <Image
                        src="/FullLogo.jpg"
                        alt="Togail Construction Logo"
                        width={200}
                        height={100}
                        priority
                        className={styles.logoImage}
                    />
                </div>

                    {/* Navigation Links */}
                        <li>
                            <Link
                                href="/"
                                className={`${styles.navLink} ${
                                    currentPath === "/" ? styles.active : ""
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about" 
                                className={`${styles.navLink} ${
                                    currentPath === "/about" ? styles.active : ""
                                }`}
                            >
                                About
                            </Link>
                        </li>

                        <li><Services></Services></li>

                        <li>
                            <Link
                                href="/contact"
                                className={`${styles.navLink} ${
                                    currentPath === "/contact" ? styles.active : "" 
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                    <a href="/quote" className={styles.ctaButton}>Get a Quote</a>
                </div>
            </nav>
        </>
    );
}