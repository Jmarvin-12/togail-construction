"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesSection.module.css";

type Service = {
  slug: string;
  title: string;
  desc: string;
  img: string;
};

const SERVICES: Service[] = [
  {
    slug: "flooring",
    title: "Flooring",
    desc: "Hardwood, vinyl, laminate, engineered—precision installation built to last.",
    img: "/services/flooring.jpg",
  },
  {
    slug: "tiling",
    title: "Tiling",
    desc: "Bathrooms, kitchens, backsplashes, and custom patterns with clean lines.",
    img: "/services/tiling.jpg",
  },
  {
    slug: "carpeting",
    title: "Carpeting",
    desc: "Comfort, insulation, and durable materials for residential and commercial.",
    img: "/services/carpeting.jpg",
  },
  {
    slug: "repairs",
    title: "Repairs & Maintenance",
    desc: "Spot repairs, regrouting, refinishing—extend the life of your surfaces.",
    img: "/services/repairs.jpg",
  },
  
];

export default function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="services-heading" className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Flooring, tiling, and carpeting solutions built with craftsmanship and reliability.
          </p>
        </header>

        <ul className={styles.grid}>
          {SERVICES.map((s) => (
            <li key={s.slug} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.img}
                  priority={s.slug === "flooring"}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.actions}>
                  <Link href={`/services#${s.slug}`} className={styles.linkPrimary}>
                    Learn More
                  </Link>
                  <Link href="/quote" className={styles.linkSecondary}>
                    Get a Quote
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.ctaRow}>
          <Link href="/services" className={styles.viewAll}>View All Services</Link>
        </div>
      </div>
    </section>
  );
}
