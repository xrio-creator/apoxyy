import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span>Apoxyy Next.js</span>
          </div>
          <p className={styles.brandDesc}>
            Built with React 19, Turbopack, App Router, and TypeScript. A modern
            baseline for web apps.
          </p>
        </div>

        <div className={styles.linkCols}>
          <div>
            <div className={styles.colTitle}>Resources</div>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                  id="footer-link-docs"
                >
                  Next.js Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                  id="footer-link-react"
                >
                  React 19 Reference
                </a>
              </li>
              <li>
                <a
                  href="https://turbo.build/pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                  id="footer-link-turbopack"
                >
                  Turbopack Architecture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Project Anatomy</div>
            <ul className={styles.linkList}>
              <li>
                <a href="#features" className={styles.linkItem} id="footer-link-features">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#playground" className={styles.linkItem} id="footer-link-playground">
                  Interactive Lab
                </a>
              </li>
              <li>
                <a href="#quickstart" className={styles.linkItem} id="footer-link-quickstart">
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <div>&copy; {new Date().getFullYear()} Apoxyy Next.js Project. Ready for development.</div>
        <div className={styles.badges}>
          <span className={styles.badgeItem}>Next.js v16.3</span>
          <span className={styles.badgeItem}>React v19.2</span>
          <span className={styles.badgeItem}>TypeScript v5</span>
        </div>
      </div>
    </footer>
  );
}
