"use client";

// About Us Section Component
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUsSection() {
    return (
        <section className={styles.aboutSection}>
            {/* Left Content */}
            <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>ABOUT US</h2>
                <p className={styles.aboutText}>
                    At Togail Construction, we transform your vision into reality with premium
                    flooring solutions. Our team is dedicated to delivering unmatched quality
                    and expertise tailored to your needs.
                </p>
                <a href="/about" className={styles.readMoreButton}>READ MORE</a>
            </div>

            {/* Right Image */}
            <div className={styles.aboutImage}>
                <Image
                    src="/about-us.jpg"
                    alt="Premium Flooring Example"
                    width={500}
                    height={400}
                    priority
                />
            </div>
        </section>
    );
}
