import styles from "./ProductFooter.module.css";

interface FooterProps {
  onPreOrderClick: () => void;
}

export default function ProductFooter({ onPreOrderClick }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* In The Box Strip */}
        <div className={styles.boxContentsSection}>
          <div className={styles.boxHeader}>
            <div>
              <h3 className={styles.boxTitle}>What&apos;s In The Box</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Every Apoxyy Phantom Ultra package includes full premium accessories.
              </p>
            </div>
            <button
              onClick={onPreOrderClick}
              style={{
                background: "var(--gradient-btn)",
                color: "white",
                padding: "0.6rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Pre-Order Now
            </button>
          </div>

          <div className={styles.boxGrid}>
            <div className={styles.boxItem}>
              <div className={styles.boxIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div>
                <div className={styles.boxItemTitle}>Phantom Ultra</div>
                <div className={styles.boxItemSub}>Grade 5 Titanium</div>
              </div>
            </div>

            <div className={styles.boxItem}>
              <div className={styles.boxIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <div className={styles.boxItemTitle}>120W GaN Charger</div>
                <div className={styles.boxItemSub}>Ultra-compact Fast Adapter</div>
              </div>
            </div>

            <div className={styles.boxItem}>
              <div className={styles.boxIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <div>
                <div className={styles.boxItemTitle}>Braided USB-C (2m)</div>
                <div className={styles.boxItemSub}>Titanium Reinforced Sheath</div>
              </div>
            </div>

            <div className={styles.boxItem}>
              <div className={styles.boxIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div>
                <div className={styles.boxItemTitle}>AeroPods Pro Free</div>
                <div className={styles.boxItemSub}>Launch Pre-Order Gift ($199)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className={styles.footerLinksGrid}>
          <div className={styles.brandCol}>
            <div className={styles.brandName}>
              <span>APOXYY</span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#38bdf8",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  background: "rgba(56, 189, 248, 0.12)",
                }}
              >
                Mobile Labs
              </span>
            </div>
            <p className={styles.brandDesc}>
              Forging the pinnacle of titanium hardware, optical excellence, and
              on-device neural machine intelligence.
            </p>
          </div>

          <div>
            <div className={styles.linkColTitle}>Explore Flagship</div>
            <ul className={styles.linkList}>
              <li><a href="#overview" className={styles.linkItem}>Titanium Design</a></li>
              <li><a href="#camera" className={styles.linkItem}>200MP Periscope Optics</a></li>
              <li><a href="#silicon" className={styles.linkItem}>3nm Neural Core</a></li>
              <li><a href="#display" className={styles.linkItem}>144Hz Quantum OLED</a></li>
              <li><a href="#colors" className={styles.linkItem}>Color Finishes</a></li>
            </ul>
          </div>

          <div>
            <div className={styles.linkColTitle}>Apoxyy Care & Support</div>
            <ul className={styles.linkList}>
              <li><a href="#specs" className={styles.linkItem}>Technical Documentation</a></li>
              <li><a href="#specs" className={styles.linkItem}>Warranty & Protection Plans</a></li>
              <li><a href="#overview" className={styles.linkItem}>Global Carrier Compatibility</a></li>
              <li><a href="#overview" className={styles.linkItem}>Trade-In Program FAQs</a></li>
            </ul>
          </div>

          <div>
            <div className={styles.linkColTitle}>Sustainability</div>
            <ul className={styles.linkList}>
              <li><a href="#colors" className={styles.linkItem}>100% Recycled Titanium</a></li>
              <li><a href="#colors" className={styles.linkItem}>Zero Plastic Packaging</a></li>
              <li><a href="#silicon" className={styles.linkItem}>Conflict-Free Silicon Supply</a></li>
              <li><a href="#silicon" className={styles.linkItem}>Renewable Energy Operations</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>&copy; {new Date().getFullYear()} Apoxyy Mobile Technologies Inc. All rights reserved.</div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ color: "var(--text-secondary)" }}>Designed in California & Tokyo</span>
            <span style={{ color: "#34d399" }}>• 2-Year Global Warranty Included</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
