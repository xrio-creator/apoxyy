"use client";

import Link from "next/link";
import styles from "./ProductNavbar.module.css";

interface ProductNavbarProps {
  onPreOrderClick: () => void;
}

export default function ProductNavbar({ onPreOrderClick }: ProductNavbarProps) {
  return (
    <>
      {/* Announcement Bar */}
      <aside className={styles.topBanner} aria-label="Special offer banner">
        <span>Pre-Order Special: Receive Free Apoxyy AeroPods Pro ($199 value) + $200 Instant Trade-in Credit</span>
        <span className={styles.topBannerHighlight}>Limited Launch Edition</span>
      </aside>

      {/* Main Navbar */}
      <header className={styles.navWrapper}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" id="nav-brand-product" className={styles.brand}>
            <div className={styles.brandLogo}>
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
            <span>APOXYY</span>
            <span className={styles.modelBadge}>Phantom Ultra</span>
          </Link>

          <nav aria-label="Product sections">
            <ul className={styles.navLinks}>
              <li>
                <a href="#overview" id="nav-item-overview" className={styles.navLink}>
                  Overview
                </a>
              </li>
              <li>
                <a href="#camera" id="nav-item-camera" className={styles.navLink}>
                  200MP Camera
                </a>
              </li>
              <li>
                <a href="#silicon" id="nav-item-silicon" className={styles.navLink}>
                  3nm Silicon
                </a>
              </li>
              <li>
                <a href="#colors" id="nav-item-colors" className={styles.navLink}>
                  Finishes
                </a>
              </li>
              <li>
                <a href="#specs" id="nav-item-specs" className={styles.navLink}>
                  Tech Specs
                </a>
              </li>
              <li>
                <a href="#reviews" id="nav-item-reviews" className={styles.navLink}>
                  Reviews
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.rightSection}>
            <div className={styles.priceTag}>
              From <strong>$1,199</strong> or $49.95/mo
            </div>
            <button
              id="nav-preorder-cta"
              onClick={onPreOrderClick}
              className={styles.preorderBtn}
              aria-label="Pre-order Apoxyy Phantom Ultra"
            >
              <span>Pre-Order</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
