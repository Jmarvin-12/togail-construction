/**
 * Footer Component
 *
 * This component renders the footer for the Togail Construction website.
 * It includes copyright information and contact details.
 *
 * Props: None
 *
 * Styles: This component uses the `Footer.module.css` file for its styles.
 * Tailwind Classes Applied via CSS Modules:
 * - footer: Styles the footer container.
 * - container: Centers the footer content and text.
 *
 * Usage:
 * ```tsx
 * <Footer />
 * ```
 */

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/** Company Info */}

                <div className={styles.section}>

                    <h2 className={styles.title}>Togail Construction</h2>
                    <p className={styles.text}>
                        Premium flooring solutions crafted with precision and care.
                    </p>

                </div>

                {/** Quick Links */}
                <div className={styles.section}>
                    <h3 className={styles.subtitle}>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/" className={styles.link}/>Home</li>
                        <li><Link href="/about" className={styles.link}/>About</li>
                        <li><Link href="/services" className={styles.link}/>Services</li>
                        <li><Link href="/contact" className={styles.link}/>Contact</li>
                    </ul>
                </div>

                {/** Contact Info */}
                <div className={styles.section}>

                    <h3 className={styles.section}>Contact Us</h3>
                    <p className={styles.text}>Email: info@togailconstruction.com</p>
                    <p className={styles.text}>Phone: +1 234 567 890</p>
                    <p className={styles.text}>Address: Boston, MA</p>

                </div>

                {/* <p>&copy; 2025 Togail Construction. All Rights Reserved.</p> */}
            </div>

            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} Togail Construction. All Rights Reserved.
            </div>

        </footer>
    );
}