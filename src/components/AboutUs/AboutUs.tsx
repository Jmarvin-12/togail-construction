// "use client";

// import Image from "next/image";
// import styles from "./AboutUs.module.css";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function AboutUsSection() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {scrolled ? (
//         <motion.div
//           initial={{ x: -300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -300, opacity: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 200,
//             damping: 150,
//             delay: 0.3,
//           }}
//         >
//           <section className={styles.aboutSection}>
//             {/* Contenido */}
//             <div className={styles.aboutContent}>
//               <h2 className={styles.aboutTitle}>ABOUT US</h2>
//               <p className={styles.aboutText}>
//                 Togail Construction is a trusted handyman and construction
//                 services company proudly serving Boston and the surrounding
//                 communities. With a name that means “to build” in Irish, our
//                 roots run deep in craftsmanship, integrity, and attention to
//                 detail. Whether it’s a small home repair, a custom renovation,
//                 or a full-scale remodel, we bring a thoughtful, skilled approach
//                 to every project.
//               </p>
//               <a href="/about" className={styles.readMoreButton}>
//                 Learn More
//               </a>
//             </div>

//             {/* Imagen */}
//             <div className={styles.aboutImage}>
//               <Image
//                 src="/about-us.jpg"
//                 alt="Team working on a remodeling project"
//                 width={800}
//                 height={600}
//                 priority
//                 className={styles.aboutImgEl}
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           </section>
//         </motion.div>
//       ) : null}
//     </>
//   );
// }

"use client";

import Image from "next/image";
import styles from "./AboutUs.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const feats = [
  "Licensed & insured crew",
  "Flooring • Tiling • Carpeting",
  "24–48h quote turnaround",
  "Warranty on labor",
];

export default function AboutUsSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.aboutSection} aria-labelledby="about-heading">
      {/* Accent column (pure CSS) */}
      <div className={styles.accent} aria-hidden />

      {/* Content */}
      <motion.div
        className={styles.aboutContent}
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{once:true, amount:0.2}}
        transition={{ type: "spring", stiffness: 150, damping: 140}}
      >
        <h2 id="about-heading" className={styles.aboutTitle}>ABOUT US</h2>

        <p className={styles.aboutLead}>
          Togail Construction delivers clean, reliable workmanship across flooring, tiling, and
          carpeting in Greater Boston. “Togail” means “to build” in Irish—our focus is craft,
          schedule discipline, and predictable outcomes.
        </p>

        <p className={styles.aboutText}>
          Whether it’s a precise hardwood installation, a patterned bathroom tile, a carpet stair
          runner, or a full multi-room remodel, we execute with tight tolerances, dust control, and
          a documented hand-off. Clear quotes. Clean sites. No surprises.
        </p>

        {/* Feature badges */}
        <ul className={styles.badges}>
          {feats.map((f) => (
            <li key={f} className={styles.badge}>
              <svg viewBox="0 0 20 20" className={styles.badgeIcon} aria-hidden="true">
                <path d="M8.5 13.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="/about" className={styles.primary}>Learn more</a>
          <a href="/quote" className={styles.secondary}>Get a quote</a>
        </div>
      </motion.div>

      {/* Image side */}
      <motion.div
        className={styles.aboutImage}
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{once:true, amount:0.2}}
        transition={{ type: "spring", stiffness: 150, damping: 140,}}
      >
        <div className={styles.imgCard}>
          <Image
            src="/about-us.jpg"
            alt="Flooring and tiling crew finishing a residential project"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.aboutImgEl}
          />
          <div className={styles.imgOverlay} aria-hidden />
          <div className={styles.kpis}>
            <div className={styles.kpi}>
              <span className={styles.kpiNum}>12+</span>
              <span className={styles.kpiLabel}>years</span>
            </div>
            <div className={styles.kpi}>
              <span className={styles.kpiNum}>280+</span>
              <span className={styles.kpiLabel}>projects</span>
            </div>
            <div className={styles.kpi}>
              <span className={styles.kpiNum}>4.9/5</span>
              <span className={styles.kpiLabel}>rating</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

