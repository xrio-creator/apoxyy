import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navWrapper}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" id="nav-brand-link" className={styles.brand}>
          <div className={styles.brandIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className={styles.brandName}>Apoxyy</span>
        </Link>

        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#features" id="nav-link-features" className={styles.navLink}>
                Features
              </a>
            </li>
            <li>
              <a href="#playground" id="nav-link-playground" className={styles.navLink}>
                Interactive Demo
              </a>
            </li>
            <li>
              <a href="#architecture" id="nav-link-architecture" className={styles.navLink}>
                Architecture
              </a>
            </li>
            <li>
              <a href="#quickstart" id="nav-link-quickstart" className={styles.navLink}>
                Quick Start
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.statusPill} id="nav-status-indicator">
            <span className={styles.statusDot}></span>
            <span>Next.js 16.3 Active</span>
          </div>

          <a
            href="https://nextjs.org/docs"
            id="nav-docs-cta"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Docs
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
