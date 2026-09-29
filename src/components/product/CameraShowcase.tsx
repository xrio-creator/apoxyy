"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CameraShowcase.module.css";

interface CameraMode {
  id: string;
  name: string;
  resolution: string;
  iso: string;
  shutter: string;
  fps: string;
  featureDesc: string;
}

const MODES: CameraMode[] = [
  {
    id: "pro200",
    name: "200MP Ultra Pro",
    resolution: "200MP RAW (16384 × 12288)",
    iso: "ISO 64",
    shutter: "1/4000s",
    fps: "14-bit DNG",
    featureDesc: "Full-sensor quantum readout capturing microscopic textures and dynamic range.",
  },
  {
    id: "periscope",
    name: "10x Periscope Optical",
    resolution: "50MP Telephoto",
    iso: "ISO 125",
    shutter: "1/1000s",
    fps: "Dual OIS",
    featureDesc: "Folded glass prism prism delivering true optical clarity from 240mm focal equivalent.",
  },
  {
    id: "night",
    name: "Night Vision Quantum AI",
    resolution: "Night Neural Fusion",
    iso: "ISO 3200",
    shutter: "1/15s Handheld",
    fps: "Zero Noise AI",
    featureDesc: "Multi-exposure neural stacking illuminating pitch-black scenes with natural color tone.",
  },
  {
    id: "cinematic",
    name: "8K Dolby Cinematic",
    resolution: "8K HDR (7680 × 4320)",
    iso: "ISO 200",
    shutter: "1/48s 180°",
    fps: "24 / 60 fps",
    featureDesc: "Hollywood-grade 10-bit Log recording with real-time computational depth of field.",
  },
];

const ZOOM_LEVELS = [
  { label: "0.5x", focal: "13mm", aperture: "f/2.2", desc: "Ultra-Wide 123°" },
  { label: "1x", focal: "24mm", aperture: "f/1.8", desc: "Wide 200MP Primary" },
  { label: "2x", focal: "48mm", aperture: "f/1.8", desc: "Lossless In-Sensor" },
  { label: "5x", focal: "120mm", aperture: "f/2.8", desc: "Portrait Telephoto" },
  { label: "10x", focal: "240mm", aperture: "f/3.4", desc: "True Optical Periscope" },
  { label: "100x", focal: "2400mm", aperture: "f/3.4 AI", desc: "Quantum Space Zoom" },
];

export default function CameraShowcase() {
  const [selectedMode, setSelectedMode] = useState<CameraMode>(MODES[0]);
  const [selectedZoom, setSelectedZoom] = useState(ZOOM_LEVELS[1]);

  return (
    <section id="camera" className={styles.cameraSection} aria-labelledby="camera-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Optics Revolution</div>
          <h2 id="camera-heading" className={styles.title}>
            The 200MP Quantum{" "}
            <span className={styles.titleHighlight}>Periscope Array</span>
          </h2>
          <p className={styles.subtitle}>
            Crafted with sapphire crystal optical coatings, a folded glass
            periscope prism, and sub-pixel laser autofocus. Experience unmatched
            astrophotography, cinematic portraiture, and 100x Space Zoom.
          </p>
        </div>

        <div className={styles.showcaseGrid}>
          {/* Hardware Macro Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/camera-macro.jpg"
              alt="Extreme macro of Apoxyy Phantom Ultra triple camera array with titanium housing"
              width={600}
              height={600}
              className={styles.cameraImg}
            />
            <div className={styles.overlayBadge}>
              <span>Sapphire Crystal &bull; Titanium Ring &bull; 8K Ultra</span>
            </div>
          </div>

          {/* Interactive Pro Viewfinder HUD */}
          <div className={styles.viewfinderCard} id="camera-viewfinder-card">
            {/* Mode Tabs */}
            <div className={styles.modeTabs} role="tablist" aria-label="Camera shooting modes">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  id={`btn-mode-${mode.id}`}
                  role="tab"
                  aria-selected={selectedMode.id === mode.id}
                  className={`${styles.modeTabBtn} ${
                    selectedMode.id === mode.id ? styles.modeTabActive : ""
                  }`}
                  onClick={() => setSelectedMode(mode)}
                >
                  {mode.name}
                </button>
              ))}
            </div>

            {/* Viewfinder HUD */}
            <div className={styles.hudScreen}>
              <div className={styles.hudTop}>
                <span>{selectedMode.resolution}</span>
                <span style={{ color: "#38bdf8" }}>{selectedMode.fps}</span>
              </div>

              <div className={styles.hudCenter}>
                <div className={styles.reticle}>
                  <div className={styles.reticleDot}></div>
                </div>
                <div className={styles.focusStatus}>
                  Laser AF Lock &bull; {selectedZoom.focal} ({selectedZoom.aperture})
                </div>
              </div>

              <div className={styles.hudBottom}>
                <span>{selectedMode.iso}</span>
                <span>{selectedMode.shutter}</span>
                <span style={{ color: "#f59e0b" }}>EV +0.0</span>
              </div>
            </div>

            {/* Zoom Controls */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span>Focal Length Selector:</span>
                <strong style={{ color: "#38bdf8" }}>{selectedZoom.desc}</strong>
              </div>
              <div className={styles.zoomControls} role="radiogroup" aria-label="Focal zoom buttons">
                {ZOOM_LEVELS.map((zoom) => (
                  <button
                    key={zoom.label}
                    id={`btn-zoom-${zoom.label.replace(".", "")}`}
                    role="radio"
                    aria-checked={selectedZoom.label === zoom.label}
                    className={`${styles.zoomBtn} ${
                      selectedZoom.label === zoom.label ? styles.zoomBtnActive : ""
                    }`}
                    onClick={() => setSelectedZoom(zoom)}
                  >
                    {zoom.label}
                  </button>
                ))}
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              <strong style={{ color: "var(--text-primary)" }}>{selectedMode.name}: </strong>
              {selectedMode.featureDesc}
            </p>
          </div>
        </div>

        {/* 4 Lenses Breakdown Grid */}
        <div className={styles.lensesGrid} id="camera-lenses-grid">
          <div className={styles.lensCard}>
            <div className={styles.lensTag}>Primary Camera</div>
            <div className={styles.lensTitle}>200MP Quantum Sensor</div>
            <div className={styles.lensSpecs}>1/1.14″ &bull; f/1.8 &bull; 24mm &bull; OIS</div>
            <div className={styles.lensDesc}>
              16-in-1 pixel binning producing 2.24μm ultra-pixels for incredible
              night low-light shots and cinema-grade dynamic range.
            </div>
          </div>

          <div className={styles.lensCard}>
            <div className={styles.lensTag}>Periscope Telephoto</div>
            <div className={styles.lensTitle}>50MP 10x Optical Zoom</div>
            <div className={styles.lensSpecs}>1/2.51″ &bull; f/3.4 &bull; 240mm &bull; Dual OIS</div>
            <div className={styles.lensDesc}>
              Folded 5-element optical prism delivering pristine lossless zoom up
              to 10x, expandable to 100x Quantum Space Zoom with AI super-resolution.
            </div>
          </div>

          <div className={styles.lensCard}>
            <div className={styles.lensTag}>Ultra-Wide & Macro</div>
            <div className={styles.lensTitle}>50MP Ultra-Wide 123°</div>
            <div className={styles.lensSpecs}>1/2.76″ &bull; f/2.2 &bull; 13mm &bull; 2.5cm Macro</div>
            <div className={styles.lensDesc}>
              Ultra-wide panoramic field of view with freeform optical glass to
              eliminate corner distortion, plus 2.5cm macro photography.
            </div>
          </div>

          <div className={styles.lensCard}>
            <div className={styles.lensTag}>Depth & Tracking</div>
            <div className={styles.lensTitle}>3D LiDAR & Laser AF</div>
            <div className={styles.lensSpecs}>Sub-millimeter &bull; 60fps Depth Map</div>
            <div className={styles.lensDesc}>
              Instant zero-latency focusing in complete darkness, augmented
              reality spatial positioning, and natural cinematic bokeh isolation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
