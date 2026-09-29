"use client";

import { useState } from "react";
import styles from "./KeynoteModal.module.css";

interface KeynoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAPTERS = [
  { id: "intro", title: "00:00 • The Titanium Vision", desc: "Forging Grade 5 aerospace chassis with zero deadweight" },
  { id: "optics", title: "00:45 • 200MP Periscope Array", desc: "Folded glass optics & 100x Quantum Space Zoom" },
  { id: "silicon", title: "01:30 • 3nm Neural Bionic", desc: "65 TOPS AI intelligence & vapor chamber thermals" },
  { id: "display", title: "02:15 • 144Hz Quantum OLED", desc: "3,200 nits peak outdoor brightness & micro-bezels" },
];

export default function KeynoteModal({ isOpen, onClose }: KeynoteModalProps) {
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="keynote-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalCard} id="keynote-modal-container">
        <div className={styles.videoHeader}>
          <div className={styles.videoTitle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span id="keynote-modal-title">Apoxyy Phantom Ultra — Global Keynote Reveal</span>
          </div>
          <button id="btn-close-keynote" className={styles.closeBtn} onClick={onClose} aria-label="Close keynote video">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.playerStage}>
          <button
            id="btn-keynote-play"
            className={styles.playerCenterPlay}
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause Keynote" : "Play Keynote"}
          >
            {isPlaying ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "4px" }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          <div className={styles.stageOverlayText}>
            <div className={styles.stageOverlayTitle}>{activeChapter.title}</div>
            <div className={styles.stageOverlaySub}>{activeChapter.desc}</div>
          </div>
        </div>

        <div className={styles.chaptersBar}>
          {CHAPTERS.map((chap) => (
            <button
              key={chap.id}
              id={`chapter-${chap.id}`}
              className={`${styles.chapterBtn} ${activeChapter.id === chap.id ? styles.chapterActive : ""}`}
              onClick={() => setActiveChapter(chap)}
            >
              {chap.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
