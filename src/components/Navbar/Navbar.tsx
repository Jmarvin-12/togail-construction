"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <nav aria-label="Primary" className={styles.left}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
        </nav>

        <Link
          href="/"
          aria-label="Togail Construction"
          className={styles.logoDock}
        >
          <div className={styles.logoCard}>
            <Image
              src="/FullLogo.jpg"
              alt="Togail Construction — Flooring & Tiling"
              fill
              priority
              className={styles.logoImg}
            />
          </div>
        </Link>

        <div className={styles.right}>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/quote" className={styles.cta}>
            Get a Quote
          </Link>
        </div>

        <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Icono “menu” (3 líneas) */}
        <svg
          className={`${styles.icon} ${styles.iconMenu}`}
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Icono “close” (X) */}
        <svg
          className={`${styles.icon} ${styles.iconClose}`}
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path
            d="M6 6l12 12M18 6l-12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

        <Link
          href="/quote"
          className={styles.ctaMobile}
          aria-label="Get a Quote (mobile)"
        >
          Get a Quote
        </Link>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`${styles.mobile} ${open ? styles.open : ""}`}
      >
        <nav className={styles.mobileNav}>
          <Link
            href="/"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/quote"
            className={styles.mobileCTA}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>

    </header>
  );
}
