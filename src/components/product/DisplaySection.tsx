"use client";

import { useState } from "react";
import styles from "./DisplaySection.module.css";

const REFRESH_MODES = [
  {
    hz: "1Hz",
    title: "Always-On Display",
    desc: "Ulta-low power consumption displaying clock, widgets, and live activities at 1 frame per second.",
    powerSaved: "92% Energy Saved",
  },
  {
    hz: "60Hz",
    title: "Cinematic Media",
    desc: "Perfect sync for 24fps film and 60fps streaming video without dropped frames.",
    powerSaved: "Optimized Battery",
  },
  {
    hz: "144Hz",
    title: "Ultra Gaming & ProMotion",
    desc: "Ultra-responsive touch sampling at 480Hz with millisecond motion smoothness for competitive mobile gaming.",
    powerSaved: "Peak Fluidity",
  },
];

export default function DisplaySection() {
  const [activeRefresh, setActiveRefresh] = useState(REFRESH_MODES[2]);

  return (
    <section id="display" className={styles.displaySection} aria-labelledby="display-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Quantum Visuals</div>
          <h2 id="display-heading" className={styles.title}>
            6.8″ Super Retina{" "}
            <span className={styles.titleHighlight}>144Hz Quantum OLED</span>
          </h2>
          <p className={styles.subtitle}>
            A breathtaking visual canvas with 3,200 nits peak outdoor brightness,
            LTPO 4.0 adaptive refresh rate, 10-bit color spectrum, and ultra-thin
            symmetrical 1.1mm micro-bezels.
          </p>
        </div>

        {/* Screen Mockup with Refresh Switcher */}
        <div className={styles.screenMockup}>
          <div className={styles.refreshRateSelector} role="radiogroup" aria-label="Refresh rate options">
            {REFRESH_MODES.map((mode) => (
              <button
                key={mode.hz}
                id={`btn-hz-${mode.hz}`}
                role="radio"
                aria-checked={activeRefresh.hz === mode.hz}
                className={`${styles.refreshBtn} ${
                  activeRefresh.hz === mode.hz ? styles.refreshBtnActive : ""
                }`}
                onClick={() => setActiveRefresh(mode)}
              >
                {mode.hz}
              </button>
            ))}
          </div>

          <div className={styles.mockupBezel}>
            <div className={styles.punchHole}></div>
            <div style={{ maxWidth: "560px", zIndex: 1 }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#38bdf8",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Adaptive LTPO 4.0 Engine: {activeRefresh.hz} Active
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>
                {activeRefresh.title}
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                {activeRefresh.desc}
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "0.35rem 0.85rem",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  color: "#f8fafc",
                }}
              >
                {activeRefresh.powerSaved}
              </div>
            </div>
          </div>
        </div>

        {/* Display Stats Grid */}
        <div className={styles.displayStatsGrid}>
          <div className={styles.displayStatCard}>
            <div className={styles.statNum}>3,200 Nits</div>
            <div className={styles.statLabel}>Peak Outdoor Sunlight Brightness</div>
          </div>

          <div className={styles.displayStatCard}>
            <div className={styles.statNum}>1-144 Hz</div>
            <div className={styles.statLabel}>Variable LTPO Dynamic Refresh Rate</div>
          </div>

          <div className={styles.displayStatCard}>
            <div className={styles.statNum}>1.07 Billion</div>
            <div className={styles.statLabel}>True 10-Bit Color Depth with Dolby Vision</div>
          </div>

          <div className={styles.displayStatCard}>
            <div className={styles.statNum}>1.1 mm</div>
            <div className={styles.statLabel}>Quad Symmetrical Micro-Bezels</div>
          </div>
        </div>
      </div>
    </section>
  );
}
