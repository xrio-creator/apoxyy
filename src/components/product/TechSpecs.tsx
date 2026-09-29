"use client";

import { useState } from "react";
import styles from "./TechSpecs.module.css";

interface SpecCategory {
  id: string;
  name: string;
  specs: { label: string; value: string }[];
}

const CATEGORIES: SpecCategory[] = [
  {
    id: "display",
    name: "Display & Glass",
    specs: [
      { label: "Screen Size & Type", value: "6.8-inch Quad Curved LTPO 4.0 Quantum AMOLED" },
      { label: "Resolution & Density", value: "3120 × 1440 QHD+ (516 pixels per inch)" },
      { label: "Refresh Rate", value: "Adaptive 1Hz to 144Hz ProMotion with 480Hz touch sampling" },
      { label: "Peak Brightness", value: "3,200 nits outdoor peak, 1,800 nits HBM, 1000 nits typical" },
      { label: "Color Reproduction", value: "10-bit color depth (1.07 billion colors), 100% DCI-P3, Dolby Vision" },
      { label: "Protective Glass", value: "Ceramic Shield 3.0 front crystal with oleophobic nano-barrier" },
    ],
  },
  {
    id: "optics",
    name: "Camera System",
    specs: [
      { label: "Primary Sensor", value: "200MP Quantum (1/1.14″, f/1.8, 24mm equivalent, OIS, 16-in-1 binning)" },
      { label: "Periscope Telephoto", value: "50MP 10x Optical Zoom (1/2.51″, f/3.4, 240mm, Dual OIS, 100x Space Zoom)" },
      { label: "Ultra-Wide & Macro", value: "50MP Ultra-Wide 123° FOV (1/2.76″, f/2.2, 13mm, 2.5cm Macro focus)" },
      { label: "Autofocus & Depth", value: "Sub-millimeter 3D LiDAR Scanner + Omni-directional Laser AF" },
      { label: "Front Camera", value: "48MP TrueDepth HDR with Phase Detection AF (f/2.0, 4K60 Dolby Vision)" },
      { label: "Video Capture", value: "8K at 30/60fps, 4K at 120fps, 10-bit Dolby Vision HDR, Log 2.0" },
    ],
  },
  {
    id: "silicon",
    name: "Silicon & Storage",
    specs: [
      { label: "Processor Chipset", value: "3nm Neural Bionic Architecture (12-Core CPU @ up to 4.3 GHz)" },
      { label: "AI Neural Engine", value: "65 TOPS on-device NPU for generative models and live voice synthesis" },
      { label: "Graphics (GPU)", value: "16-Core GPU with hardware-accelerated Ray Tracing & mesh shading" },
      { label: "RAM Memory", value: "12GB / 16GB / 24GB ultra-high-speed LPDDR5X (8533 Mbps)" },
      { label: "Internal Storage", value: "256GB / 512GB / 1TB UFS 4.1 Pro flash storage" },
      { label: "Thermal Cooling", value: "3,500mm² Dual-Tier superconducting copper vapor chamber" },
    ],
  },
  {
    id: "battery",
    name: "Battery & Power",
    specs: [
      { label: "Battery Capacity", value: "6,200 mAh Silicon-Carbon high-density anode battery" },
      { label: "Wired Fast Charging", value: "120W HyperCharge (0 to 80% charge in 14 minutes)" },
      { label: "Wireless Charging", value: "50W Wireless Magnetic Fast Charging (Qi2 certified)" },
      { label: "Reverse Charging", value: "15W Reverse Wireless PowerShare for earbuds and watches" },
      { label: "Battery Life Rating", value: "Up to 38 hours continuous video playback / 115 hours audio" },
    ],
  },
  {
    id: "chassis",
    name: "Build & Materials",
    specs: [
      { label: "Frame Material", value: "100% Recycled Aerospace Grade 5 Titanium band" },
      { label: "Water & Dust Rating", value: "IP68 certified (rated for up to 6 meters depth for 30 minutes)" },
      { label: "Dimensions", value: "162.3 mm (height) × 76.5 mm (width) × 8.2 mm (depth)" },
      { label: "Weight", value: "218 grams (7.69 ounces)" },
      { label: "Audio System", value: "Quad symmetrical stereo speakers with Dolby Atmos & Spatial Head Tracking" },
      { label: "Network Connectivity", value: "5G mmWave & Sub-6GHz, Wi-Fi 7 (802.11be), Bluetooth 5.4, Dual Satellite SOS" },
    ],
  },
];

export default function TechSpecs() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section id="specs" className={styles.specsSection} aria-labelledby="specs-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Full Specifications</div>
          <h2 id="specs-heading" className={styles.title}>
            Technical Specifications
          </h2>
          <p className={styles.subtitle}>
            Every millimeter and transistor engineered to deliver maximum speed,
            endurance, and visual perfection.
          </p>
        </div>

        {/* Categories Bar */}
        <div className={styles.categoriesBar} role="tablist" aria-label="Specification categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`tab-cat-${cat.id}`}
              role="tab"
              aria-selected={activeCategory.id === cat.id}
              className={`${styles.catBtn} ${activeCategory.id === cat.id ? styles.catActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Specs Table */}
        <div className={styles.specsTable} id="specs-data-table">
          {activeCategory.specs.map((spec, i) => (
            <div key={i} className={styles.specRow}>
              <div className={styles.specLabel}>{spec.label}</div>
              <div className={styles.specValue}>{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
