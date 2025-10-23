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
                    Togail Construction is a trusted handyman and construction services company
                    proudly serving Boston and the surroundings communities. With a name that 
                    means `to build` in irish, our roots run deep in craftsmanship, integrity,
                    and attention to detail. Whether it is a small home repair, a custom renovation
                    or a full-scale remodel, we bring a thoughtful, skilled approach to every project.

                    {/* #7a808c; */}
                </p>
                <a href="/about" className={styles.readMoreButton}>Learn More</a>
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
