"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsSection.module.css";

type Project = {
  slug: string;
  title: string;
  img: string;
  location?: string;
};

const PROJECTS: Project[] = [
  { slug: "oak-hardwood-living", title: "Oak Hardwood — Living Room", img: "/projects/p1.png", location: "Boston, MA" },
  { slug: "marble-bathroom",     title: "Marble Tile — Bathroom",    img: "/projects/p2.png", location: "Cambridge, MA" },
  { slug: "vinyl-kitchen",       title: "Vinyl — Kitchen Remodel",   img: "/projects/p3.png", location: "Somerville, MA" },
  { slug: "carpet-stair-runner", title: "Carpet Stair Runner",       img: "/projects/p4.png", location: "Medford, MA" },
  { slug: "pattern-entrance",    title: "Pattern Tile — Entrance",   img: "/projects/p5.png", location: "Quincy, MA" },
  { slug: "office-laminate",     title: "Laminate — Office",         img: "/projects/p6.png", location: "Everett, MA" },
];

export default function ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="projects-heading" className={styles.title}>Our Projects</h2>
          <p className={styles.subtitle}>Selected work across flooring, tiling, and carpeting.</p>
        </header>

        <ul className={styles.grid}>
          {PROJECTS.map((p) => (
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
          ))}
        </ul>

        <div className={styles.ctaRow}>
          <Link href="/quote" className={styles.quoteBtn}>Request a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}
