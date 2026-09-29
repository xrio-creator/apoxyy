"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ColorStudio.module.css";

interface FinishItem {
  id: string;
  name: string;
  craft: string;
  colorHex: string;
  description: string;
}

const FINISH_LIST: FinishItem[] = [
  {
    id: "natural-titanium",
    name: "Natural Titanium",
    craft: "Precision Micro-Brushed Finish",
    colorHex: "#cbd5e1",
    description:
      "Celebrates the raw, unadorned beauty of Grade 5 titanium. Each frame undergoes 14 hours of continuous orbital diamond-lapping for a tactile satin touch.",
  },
  {
    id: "cosmic-obsidian",
    name: "Cosmic Obsidian",
    craft: "Diamond-Like Carbon (DLC) PVD",
    colorHex: "#11131a",
    description:
      "A deep, light-absorbing stealth black. Infused with diamond-like carbon in a high-vacuum chamber, creating an ultra-resilient scratch-resistant shield.",
  },
  {
    id: "nebula-violet",
    name: "Nebula Violet",
    craft: "Iridescent Vapor Deposition",
    colorHex: "#6d28d9",
    description:
      "An ethereal dual-tone finish inspired by deep stellar nebulas. Shifts subtly from dark titanium violet to rich electric magenta under direct ambient lighting.",
  },
];

export default function ColorStudio() {
  const [activeFinish, setActiveFinish] = useState(FINISH_LIST[0]);

  return (
    <section id="colors" className={styles.colorSection} aria-labelledby="colors-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Forged In Metal</div>
          <h2 id="colors-heading" className={styles.title}>
            Three Titanium Masterpieces.{" "}
            <span className={styles.titleHighlight}>Zero Imperfections.</span>
          </h2>
          <p className={styles.subtitle}>
            Aerospace-grade Grade 5 titanium boasts the highest strength-to-weight
            ratio of any metal alloy. Precision-engineered to be both remarkably light
            and impervious to drops and wear.
          </p>
        </div>

        {/* Lineup Showcase Image */}
        <div className={styles.lineupImageWrapper}>
          <Image
            src="/images/colors-lineup.jpg"
            alt="Three Apoxyy Phantom Ultra titanium smartphones lined up in Natural Titanium, Obsidian Black, and Nebula Violet finishes"
            width={900}
            height={900}
            className={styles.lineupImg}
          />
        </div>

        {/* Interactive Finishes Grid */}
        <div className={styles.finishesGrid} role="listbox" aria-label="Available smartphone finishes">
          {FINISH_LIST.map((finish) => (
            <div
              key={finish.id}
              id={`finish-card-${finish.id}`}
              role="option"
              aria-selected={activeFinish.id === finish.id}
              className={`${styles.finishCard} ${
                activeFinish.id === finish.id ? styles.finishActive : ""
              }`}
              onClick={() => setActiveFinish(finish)}
            >
              <div
                className={styles.swatchCircle}
                style={{ backgroundColor: finish.colorHex }}
              ></div>
              <h3 className={styles.finishName}>{finish.name}</h3>
              <div className={styles.finishCraft}>{finish.craft}</div>
              <p className={styles.finishDesc}>{finish.description}</p>
            </div>
          ))}
        </div>

        {/* Materials Craftsmanship Strip */}
        <div className={styles.materialsRow}>
          <div className={styles.materialItem}>
            <div className={styles.materialIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className={styles.materialTitle}>Ceramic Shield 3.0</div>
              <div className={styles.materialDesc}>
                Dual nanoscale ceramic crystals embedded into the glass matrix for 4× better drop protection.
              </div>
            </div>
          </div>

          <div className={styles.materialItem}>
            <div className={styles.materialIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <div className={styles.materialTitle}>100% Recycled Titanium</div>
              <div className={styles.materialDesc}>
                Sustainable aerospace metallurgy manufactured with 100% clean renewable solar energy.
              </div>
            </div>
          </div>

          <div className={styles.materialItem}>
            <div className={styles.materialIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div>
              <div className={styles.materialTitle}>IP68 Submersion Proof</div>
              <div className={styles.materialDesc}>
                Complete hermetic sealing withstands water immersion up to 6 meters for 30 consecutive minutes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
