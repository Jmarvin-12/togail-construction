"use client";

import Link from "next/link";
import styles from "./ServicesStripes.module.css";
import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";

type Item = { slug: string; title: string; desc: string; icon: JSX.Element };

function IconFloor() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon}>
      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
    </svg>
  );
}
function IconTile() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon}>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}
function IconCarpet() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon}>
      <path d="M4 6h16v12H4zM3 6h2V4H3v2zm16 0h2V4h-2v2zM3 20h2v-2H3v2zm16 0h2v-2h-2v2z" />
    </svg>
  );
}
function IconRepair() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon}>
      <path d="M21 7l-4.5 4.5-2-2L19 5zM3 17.3l7.5-7.5 2 2L5 19.3H3z" />
    </svg>
  );
}

const ITEMS: Item[] = [
  {
    slug: "flooring",
    title: "Flooring",
    desc: "Hardwood, vinyl, laminate, engineered — clean cuts and tight tolerances.",
    icon: <IconFloor />,
  },
  {
    slug: "tiling",
    title: "Tiling",
    desc: "Bathrooms, kitchens, backsplashes, and patterns with aligned grout lines.",
    icon: <IconTile />,
  },
  {
    slug: "carpeting",
    title: "Carpeting",
    desc: "Residential and commercial. Invisible seams, proper tension, clean edges.",
    icon: <IconCarpet />,
  },
  {
    slug: "repairs",
    title: "Repairs",
    desc: "Patching, regrouting, leveling, transitions, and finishing details.",
    icon: <IconRepair />,
  },
];

export default function ServicesStripes() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="services-stripes">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="services-stripes" className={styles.title}>
            Services
          </h2>
          <p className={styles.subtitle}>
            Ejecución limpia, detalles consistentes, plazos reales.
          </p>
        </header>

        <ul className={styles.list}>
          <>
            {scrolled ? (
              <>
                {ITEMS.map((it, i) => (
                  <div key={i}>
                    {i % 2 == 0 ? (
                      <motion.li
                        key={i}
                        className={`${styles.item} ${
                            i % 2 ? styles.alt : ""
                          }`}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          type: "spring",
                          stiffness: 175,
                          damping: 150,
                        }}
                      >
                          <div className={styles.tile}>
                            <div className={styles.iconWrap}>{it.icon}</div>
                            <div className={styles.body}>
                              <h3 className={styles.h3}>{it.title}</h3>
                              <p className={styles.p}>{it.desc}</p>
                              <div className={styles.actions}>
                                <Link
                                  href={`/services#${it.slug}`}
                                  className={styles.primary}
                                >
                                  Learn more
                                </Link>
                              </div>
                            </div>
                          </div>
                      </motion.li>
                    ) : (
                      <motion.li
                        key={i}
                        className={`${styles.item} ${
                            i % 2 ? styles.alt : ""
                          }`}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          type: "spring",
                          stiffness: 175,
                          damping: 150,
                        }}
                      >
                          <div className={styles.tile}>
                            <div className={styles.iconWrap}>{it.icon}</div>
                            <div className={styles.body}>
                              <h3 className={styles.h3}>{it.title}</h3>
                              <p className={styles.p}>{it.desc}</p>
                              <div className={styles.actions}>
                                <Link
                                  href={`/services#${it.slug}`}
                                  className={styles.primary}
                                >
                                  Learn more
                                </Link>
                              </div>
                            </div>
                          </div>
                      </motion.li>
                    )}
                  </div>
                ))}
              </>
            ) : null}
          </>
        </ul>

        <div className={styles.moreRow}>
          <Link href="/services" className={styles.more}>
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
