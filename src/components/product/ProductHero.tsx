"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductHero.module.css";

interface ProductHeroProps {
  onPreOrderClick: () => void;
  onWatchKeynote: () => void;
}

interface FinishOption {
  id: string;
  name: string;
  colorHex: string;
  glowColor: string;
  desc: string;
}

const FINISHES: FinishOption[] = [
  {
    id: "natural",
    name: "Natural Titanium",
    colorHex: "#cbd5e1",
    glowColor: "rgba(203, 213, 225, 0.4)",
    desc: "Refined aerospace grade 5 metallic finish with satin micro-brushing",
  },
  {
    id: "obsidian",
    name: "Cosmic Obsidian",
    colorHex: "#1e2230",
    glowColor: "rgba(56, 189, 248, 0.35)",
    desc: "Deep light-absorbing stealth black with diamond-like carbon PVD",
  },
  {
    id: "nebula",
    name: "Nebula Violet",
    colorHex: "#7c3aed",
    glowColor: "rgba(168, 85, 247, 0.45)",
    desc: "Dual-tone cosmic violet with iridescent metallic vapor diffusion",
  },
];

export default function ProductHero({ onPreOrderClick, onWatchKeynote }: ProductHeroProps) {
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(FINISHES[0]);

  return (
    <section id="overview" className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.heroBackgroundGlow}></div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badge} id="hero-badge-titanium">
          <span className={styles.badgeDot}></span>
          <span>Grade 5 Aerospace Titanium &bull; 3nm AI Silicon</span>
        </div>

        <h1 id="hero-title" className={styles.heroTitle}>
          <span className={styles.titaniumText}>Titanium Strength.</span>{" "}
          <br />
          <span className={styles.gradientText}>Infinite Intelligence.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Forged with aerospace-grade precision. Powered by the groundbreaking
          3nm Neural Bionic engine, an astronomical 200MP Quad Periscope optic
          array, and an edge-to-edge 144Hz Quantum AMOLED display.
        </p>

        <div className={styles.ctaGroup}>
          <button
            id="hero-btn-preorder"
            onClick={onPreOrderClick}
            className={styles.btnPrimary}
            aria-label="Pre-order Apoxyy Phantom Ultra from $1,199"
          >
            <span>Pre-Order from $1,199</span>
            <svg
              width="18"
              height="18"
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

          <button
            id="hero-btn-keynote"
            onClick={onWatchKeynote}
            className={styles.btnSecondary}
            aria-label="Watch the 3-minute Keynote demo"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Watch Keynote (3 min)</span>
          </button>
        </div>

        {/* Product Visual Frame */}
        <div className={styles.visualShowcase}>
          <div
            className={`${styles.imageFrame} floating-hero`}
            id="hero-product-frame"
            style={{
              boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px ${selectedFinish.glowColor}`,
            }}
          >
            <Image
              src="/images/hero-phone.jpg"
              alt="Apoxyy Phantom Ultra Flagship Smartphone in Titanium finish"
              width={600}
              height={600}
              priority
              className={styles.productImg}
            />
          </div>

          {/* Interactive Color Switcher Bar */}
          <div className={styles.colorPickerBar} id="hero-color-picker">
            <span className={styles.colorLabel}>Finish:</span>
            <div className={styles.swatches} role="radiogroup" aria-label="Phone finishes">
              {FINISHES.map((finish) => (
                <button
                  key={finish.id}
                  id={`swatch-btn-${finish.id}`}
                  role="radio"
                  aria-checked={selectedFinish.id === finish.id}
                  className={`${styles.swatchBtn} ${
                    selectedFinish.id === finish.id ? styles.swatchActive : ""
                  }`}
                  style={{ backgroundColor: finish.colorHex }}
                  onClick={() => setSelectedFinish(finish)}
                  aria-label={`Select ${finish.name}`}
                  title={finish.name}
                />
              ))}
            </div>
            <span className={styles.finishNameBadge}>{selectedFinish.name}</span>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className={styles.highlightsBar} id="hero-highlights">
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>
            <div className={styles.highlightValue}>200MP Quad</div>
            <div className={styles.highlightLabel}>Periscope 10x Optical &bull; 100x Space Zoom</div>
          </div>

          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
              </svg>
            </div>
            <div className={styles.highlightValue}>3nm Neural Core</div>
            <div className={styles.highlightLabel}>65 TOPS On-Device AI Intelligence</div>
          </div>

          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div className={styles.highlightValue}>6.8″ 144Hz OLED</div>
            <div className={styles.highlightLabel}>3,200 Nits Peak LTPO 4.0 ProMotion</div>
          </div>

          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="6" width="18" height="12" rx="2" />
                <line x1="23" y1="11" x2="23" y2="13" />
              </svg>
            </div>
            <div className={styles.highlightValue}>6,200 mAh</div>
            <div className={styles.highlightLabel}>120W HyperCharge (0-80% in 14 min)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
