"use client";

import Image from "next/image";
import styles from "./AboutUs.module.css";

export default function AboutUsSection() {
  return (
    <section className={styles.aboutSection}>
      {/* Contenido */}
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>ABOUT US</h2>
        <p className={styles.aboutText}>
          Togail Construction is a trusted handyman and construction services
          company proudly serving Boston and the surrounding communities. With a
          name that means “to build” in Irish, our roots run deep in
          craftsmanship, integrity, and attention to detail. Whether it’s a
          small home repair, a custom renovation, or a full-scale remodel, we
          bring a thoughtful, skilled approach to every project.
        </p>
        <a href="/about" className={styles.readMoreButton}>Learn More</a>
      </div>

      {/* Imagen */}
      <div className={styles.aboutImage}>
        <Image
          src="/about-us.jpg"
          alt="Team working on a remodeling project"
          width={800}
          height={600}
          priority
          className={styles.aboutImgEl}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
