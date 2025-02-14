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

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false); // Tracks when Navbar should apply transparency
    const [scrollScale, setScrollScale] = useState(1); // Tracks logo scaling dynamically
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        // Ensure this code runs only on the client
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);

            const handleScroll = () => {
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;

                // Adjust scale value dynamically: Shrink when scrolling, regain size earlier
                const threshold = viewportHeight * 0.2; // Regain size at 20% of viewport height
                const scaleValue = scrollY > threshold ? Math.max(0.7, 1 - (scrollY - threshold) / 300) : 1;

                setScrollScale(scaleValue); // Smoothly adjust logo scaling
                setIsScrolled(scrollY > 50); // Apply transparency effects
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
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
                    <ul className={styles.navLinks}>
                        <li><a href="/"
                                className={`${styles.navLink} ${
                                    window.location.pathname === "/" ? styles.active : ""
                            }`}>Home</a></li>
                        <li><a href="/about" className={`${styles.navLink} ${
                                    window.location.pathname === "/" ? styles.active : ""
                            }`}>About</a></li>
                        <li><Services></Services></li>
                        <li><a href="/contact" className={`${styles.navLink} ${
                                    window.location.pathname === "/" ? styles.active : ""
                            }`}>Contact</a></li>
                    </ul>
                    <a href="/quote" className={styles.ctaButton}>Get a Quote</a>
                </div>
            </nav>
        </>
    );
}