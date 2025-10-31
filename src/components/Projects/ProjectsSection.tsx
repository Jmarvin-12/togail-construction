/* eslint-disable prefer-const */
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";

type Project = {
  id: number;
  slug: string;
  title: string;
  img: string;
  location?: string;
};

const PROJECTS: Project[] = [
  {id:1, slug: "oak-hardwood-living", title: "Oak Hardwood — Living Room", img: "/projects/p1.png", location: "Boston, MA" },
  {id:2, slug: "marble-bathroom",     title: "Marble Tile — Bathroom",    img: "/projects/p2.png", location: "Cambridge, MA" },
  {id:3, slug: "vinyl-kitchen",       title: "Vinyl — Kitchen Remodel",   img: "/projects/p3.png", location: "Somerville, MA" },
  {id:4, slug: "carpet-stair-runner", title: "Carpet Stair Runner",       img: "/projects/p4.png", location: "Medford, MA" },
  {id:5, slug: "pattern-entrance",    title: "Pattern Tile — Entrance",   img: "/projects/p5.png", location: "Quincy, MA" },
  {id:6, slug: "office-laminate",     title: "Laminate — Office",         img: "/projects/p6.png", location: "Everett, MA" },
];

export default function ProjectsSection() {
    let i_stiffness = 400;
    let i_damping = 130;
    
  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="projects-heading" className={styles.title}>Our Projects</h2>
          <p className={styles.subtitle}>Selected work across flooring, tiling, and carpeting.</p>
        </header>

        <ul className={styles.grid}>
            
          {PROJECTS.map((p, index) => (
            <motion.div 
                key={index}
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                type: "spring",
                stiffness: i_stiffness = i_stiffness+150,
                damping: i_damping = i_damping+50,
                delay: index * 0.3,
                }}
            >
            <li key={p.slug} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.img}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <div className={styles.meta}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    {p.location && <p className={styles.loc}>{p.location}</p>}
                    <Link href={`/projects#${p.slug}`} className={styles.viewBtn}>View Project</Link>
                  </div>
                </div>
              </div>
            </li>
            </motion.div>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <Link href="/quote" className={styles.quoteBtn}>Request a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}
