"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function HeroSection() {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => setPlayAnimation(true), []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPlayAnimation(false);
    setTimeout(() => setPlayAnimation(true), 500);
  };

  return (
    <>
      <button onClick={handleGoToTop} className={styles.toTop}>↑</button>

      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={`${styles.content} ${playAnimation ? styles.emergeEffect : ""}`}>
          <h2 className={styles.headline}>
            Transforming Spaces with Premium Flooring Solutions.
          </h2>
          <p className={styles.subheadline}>
            Your vision. Our expertise. Discover unmatched quality today.
          </p>

          <div className={styles.buttons}>
            <a href="/services" className={styles.buttonPrimary}>Explore Services</a>
            <a href="/quote" className={styles.buttonSecondary}>Request a Free Quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
