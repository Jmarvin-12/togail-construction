"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function HeroSection() {
    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        // Trigger animation on component mount
        setPlayAnimation(true);
    }, []);

    const handleGoToTop = () => {
        // Logic to scroll to top and re-trigger animation
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPlayAnimation(false);
        setTimeout(() => setPlayAnimation(true), 500); // Re-trigger animation
    };

    return (
        <>
            <button
                onClick={handleGoToTop}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "#38a169", // Tailwind green-500
                    color: "white",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                ↑
            </button>

            <section className={styles.hero}>
                {/* Background Overlay */}
                <div className={styles.overlay}></div>

                {/* Hero Content */}
                <div className={`${styles.content} ${playAnimation ? styles.emergeEffect : ""}`}>
                    {/* Title */}
                    <h2 className={styles.headline}>
                        Transforming Spaces with Premium Flooring Solutions.
                    </h2>
                    <p className={styles.subheadline}>
                        Your vision. Our expertise. Discover unmatched quality today.
                    </p>

                    {/* Buttons */}
                    <div className={styles.buttons}>
                        <a href="/services" className={styles.buttonPrimary}>
                            Explore Services
                        </a>
                        <a href="/quote" className={styles.buttonSecondary}>
                            Request a Free Quote
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
