"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsBrief.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Case = {
  slug: string;
  title: string;
  img: string; // PNG soportado por next/image
  location: string;
  meta: string; // e.g., "Hardwood • 3 days"
};

const ITEMS: Case[] = [
  {
    slug: "oak-hardwood-living",
    title: "Oak Hardwood — Living Room",
    img: "/projects/p1.png",
    location: "Boston, MA",
    meta: "Hardwood • 3 days",
  },
  {
    slug: "marble-bathroom",
    title: "Marble Tile — Bathroom",
    img: "/projects/p2.png",
    location: "Cambridge, MA",
    meta: "Marble tile • 2 days",
  },
  {
    slug: "vinyl-kitchen",
    title: "Vinyl — Kitchen Remodel",
    img: "/projects/p3.png",
    location: "Somerville, MA",
    meta: "Vinyl plank • 2 days",
  },
];

export default function ProjectsBrief() {
  const [scrolled, setScrolled] = useState(false);
  let stiff = 260;
  let damp = 150;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {scrolled ? (
        <section className={styles.section} aria-labelledby="projects-brief">
          <div className={styles.container}>
            <header className={styles.header}>
              <h2 id="projects-brief" className={styles.title}>
                Recent Projects
              </h2>
              <p className={styles.subtitle}>
                Compact highlights from Boston area jobs.
              </p>
            </header>

            {/* Mobile-first: lista vertical; Desktop: 3 columnas compactas */}
            <ul className={styles.list}>
                {ITEMS.map((p) => (
                  <motion.li
                    key={p.slug}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      type: "spring",
                      stiffness: stiff = stiff+200,
                      damping: damp = damp+100,
                      delay: 0.3,
                    }}
                  >
                      <Link
                        href={`/projects#${p.slug}`}
                        className={styles.card}
                      >
                        <div className={styles.thumb}>
                          <Image
                            src={p.img}
                            alt={p.title}
                            fill
                            sizes="(max-width: 768px) 120px, 160px"
                            className={styles.img}
                            loading="lazy"
                          />
                        </div>
                        <div className={styles.body}>
                          <h3 className={styles.h3}>{p.title}</h3>
                          <div className={styles.meta}>
                            <span className={styles.loc}>{p.location}</span>
                            <span className={styles.dot} aria-hidden="true">
                              •
                            </span>
                            <span className={styles.tag}>{p.meta}</span>
                          </div>
                          <span className={styles.link}>View project</span>
                        </div>
                      </Link>
                  </motion.li>
                ))}
            </ul>

            <div className={styles.ctaRow}>
              <Link href="/projects" className={styles.cta}>
                View all projects
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
