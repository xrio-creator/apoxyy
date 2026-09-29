"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SiliconShowcase.module.css";

interface HardwareComponent {
  id: string;
  name: string;
  sub: string;
  badge: string;
  description: string;
}

const COMPONENTS: HardwareComponent[] = [
  {
    id: "neural-chip",
    name: "3nm Neural Bionic Silicon",
    sub: "65 TOPS On-Device AI Processing",
    badge: "3nm FinFET",
    description:
      "Engineered with a 12-core architecture (4 ultra-performance cores + 8 high-efficiency cores) capable of running 7B parameter AI models entirely on-device with zero cloud latency.",
  },
  {
    id: "vapor-chamber",
    name: "3,500mm² Dual Vapor Cooling",
    sub: "Superconducting Copper Wick Matrix",
    badge: "Thermal -12°C",
    description:
      "A dual-tier aerospace copper vapor chamber efficiently draws heat away from both the GPU and battery, sustaining maximum gaming framerates without thermal throttling.",
  },
  {
    id: "battery-cell",
    name: "6,200 mAh Silicon-Carbon Battery",
    sub: "Next-Gen Energy Density & 120W Charge",
    badge: "38hr Battery",
    description:
      "Formulated with an advanced silicon-carbon anode delivering 22% greater energy density in a slimmer profile, backed by 120W HyperCharge (0-80% in 14 minutes).",
  },
  {
    id: "memory-modem",
    name: "24GB LPDDR5X + Satellite Array",
    sub: "8533 Mbps Bandwidth & Wi-Fi 7",
    badge: "10 Gbps 5G",
    description:
      "Unrestricted multitasking memory combined with dual satellite connectivity for two-way emergency messaging and Wi-Fi 7 theoretical speeds up to 5.8 Gbps.",
  },
];

export default function SiliconShowcase() {
  const [activeComp, setActiveComp] = useState<HardwareComponent>(COMPONENTS[0]);

  return (
    <section id="silicon" className={styles.siliconSection} aria-labelledby="silicon-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Raw Architecture</div>
          <h2 id="silicon-heading" className={styles.title}>
            The 3nm Neural Core.{" "}
            <span className={styles.titleGradient}>Pure Power.</span>
          </h2>
          <p className={styles.subtitle}>
            Unleashing unprecedented computational velocity with zero compromises.
            Designed from the silicon up to process on-device generative AI,
            photorealistic ray-tracing graphics, and monumental all-day battery life.
          </p>
        </div>

        <div className={styles.mainGrid}>
          {/* Exploded Hardware Image */}
          <div className={styles.chipVisualWrapper}>
            <Image
              src="/images/chip-internals.jpg"
              alt="Transparent exploded view of Apoxyy smartphone motherboard with glowing 3nm AI neural processor"
              width={600}
              height={600}
              className={styles.chipImg}
            />
          </div>

          {/* Interactive Hardware Hotspot Dock */}
          <div className={styles.chipSpecsDock}>
            <div className={styles.hotspotsList} role="tablist" aria-label="Internal hardware components">
              {COMPONENTS.map((item) => (
                <button
                  key={item.id}
                  id={`btn-hotspot-${item.id}`}
                  role="tab"
                  aria-selected={activeComp.id === item.id}
                  className={`${styles.hotspotBtn} ${
                    activeComp.id === item.id ? styles.hotspotActive : ""
                  }`}
                  onClick={() => setActiveComp(item)}
                >
                  <div>
                    <div className={styles.hotspotTitle}>{item.name}</div>
                    <div className={styles.hotspotSub}>{item.sub}</div>
                  </div>
                  <span className={styles.hotspotBadge}>{item.badge}</span>
                </button>
              ))}
            </div>

            {/* Active Detail Box */}
            <div className={styles.detailBox} id="hotspot-detail-box">
              <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.4rem" }}>
                {activeComp.name}
              </strong>
              {activeComp.description}
            </div>

            {/* Benchmark Card */}
            <div className={styles.benchmarkCard} id="silicon-benchmarks">
              <div className={styles.benchHeader}>
                <span className={styles.benchTitle}>Hardware Benchmarks vs Previous Gen</span>
                <span style={{ fontSize: "0.8rem", color: "#38bdf8", fontFamily: "var(--font-mono)" }}>
                  Verified 3nm Test
                </span>
              </div>

              <div className={styles.benchItem}>
                <div className={styles.benchItemTop}>
                  <span>Hardware Ray-Tracing FPS</span>
                  <strong style={{ color: "var(--text-primary)" }}>+85% Faster</strong>
                </div>
                <div className={styles.benchBarBg}>
                  <div className={styles.benchBarFill} style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className={styles.benchItem}>
                <div className={styles.benchItemTop}>
                  <span>On-Device Generative AI Speed</span>
                  <strong style={{ color: "#c084fc" }}>+140% Faster</strong>
                </div>
                <div className={styles.benchBarBg}>
                  <div
                    className={styles.benchBarFill}
                    style={{
                      width: "95%",
                      background: "linear-gradient(90deg, #a855f7 0%, #38bdf8 100%)",
                    }}
                  ></div>
                </div>
              </div>

              <div className={styles.benchItem}>
                <div className={styles.benchItemTop}>
                  <span>Sustained Power Efficiency</span>
                  <strong style={{ color: "#34d399" }}>+42% Efficiency</strong>
                </div>
                <div className={styles.benchBarBg}>
                  <div
                    className={styles.benchBarFill}
                    style={{
                      width: "74%",
                      background: "linear-gradient(90deg, #10b981 0%, #06b6d4 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
