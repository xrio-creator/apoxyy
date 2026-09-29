"use client";

import { useState } from "react";
import styles from "./PreOrderConfigurator.module.css";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_OPTIONS = [
  { id: "256gb", size: "256GB", ram: "12GB RAM", price: 1199 },
  { id: "512gb", size: "512GB", ram: "16GB RAM", price: 1349 },
  { id: "1tb", size: "1TB", ram: "24GB RAM", price: 1599 },
];

const FINISH_OPTIONS = [
  { id: "natural", name: "Natural Titanium", hex: "#cbd5e1" },
  { id: "obsidian", name: "Cosmic Obsidian", hex: "#11131a" },
  { id: "nebula", name: "Nebula Violet", hex: "#6d28d9" },
];

export default function PreOrderConfigurator({ isOpen, onClose }: PreOrderModalProps) {
  const [selectedFinish, setSelectedFinish] = useState(FINISH_OPTIONS[0]);
  const [selectedStorage, setSelectedStorage] = useState(STORAGE_OPTIONS[0]);
  const [hasTradeIn, setHasTradeIn] = useState(true);
  const [paymentPlan, setPaymentPlan] = useState<"full" | "finance">("full");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const tradeInDiscount = hasTradeIn ? 250 : 0;
  const finalPrice = selectedStorage.price - tradeInDiscount;
  const monthlyPayment = (finalPrice / 24).toFixed(2);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className={styles.modalBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-preorder-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modalCard} id="preorder-modal-container">
        <div className={styles.modalHeader}>
          <h2 id="modal-preorder-title" className={styles.modalTitle}>
            Pre-Order Apoxyy Phantom Ultra
          </h2>
          <button
            id="btn-close-modal"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {isSubmitted ? (
          <div className={styles.successScreen} id="preorder-success-screen">
            <div className={styles.successIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "white" }}>
              Reservation Confirmed!
            </h3>
            <div className={styles.successOrderNumber}>Order #APX-98421</div>
            <p style={{ color: "var(--text-secondary)", maxWidth: "460px", lineHeight: 1.6 }}>
              Congratulations! Your <strong>{selectedStorage.size}</strong> Apoxyy
              Phantom Ultra in <strong>{selectedFinish.name}</strong> has been
              reserved. A confirmation email with priority tracking details will be
              sent to your inbox.
            </p>
            <div
              style={{
                background: "rgba(99, 102, 241, 0.15)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                padding: "0.75rem 1.25rem",
                borderRadius: "var(--radius-md)",
                color: "#c4b5fd",
                fontSize: "0.9rem",
              }}
            >
              🎁 Free Launch Gift: Apoxyy AeroPods Pro ($199 Value) is bundled with your delivery.
            </div>
            <button
              id="btn-success-close"
              className={styles.confirmBtn}
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              style={{ maxWidth: "260px", marginTop: "1rem" }}
            >
              Done
            </button>
          </div>
        ) : (
          <div className={styles.modalBody}>
            {/* Configuration Form */}
            <div>
              {/* Finish Selection */}
              <div className={styles.sectionGroup}>
                <div className={styles.sectionLabel}>1. Select Your Titanium Finish</div>
                <div className={styles.optionsGrid} role="radiogroup" aria-label="Finishes">
                  {FINISH_OPTIONS.map((finish) => (
                    <div
                      key={finish.id}
                      id={`modal-finish-${finish.id}`}
                      role="radio"
                      aria-checked={selectedFinish.id === finish.id}
                      className={`${styles.optionCard} ${
                        selectedFinish.id === finish.id ? styles.optionActive : ""
                      }`}
                      onClick={() => setSelectedFinish(finish)}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: finish.hex,
                          margin: "0 auto 0.4rem",
                          border: "1px solid rgba(255,255,255,0.3)",
                        }}
                      />
                      <div className={styles.optionTitle}>{finish.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage Selection */}
              <div className={styles.sectionGroup}>
                <div className={styles.sectionLabel}>2. Select Capacity & Memory</div>
                <div className={styles.optionsGrid} role="radiogroup" aria-label="Storage options">
                  {STORAGE_OPTIONS.map((storage) => (
                    <div
                      key={storage.id}
                      id={`modal-storage-${storage.id}`}
                      role="radio"
                      aria-checked={selectedStorage.id === storage.id}
                      className={`${styles.optionCard} ${
                        selectedStorage.id === storage.id ? styles.optionActive : ""
                      }`}
                      onClick={() => setSelectedStorage(storage)}
                    >
                      <div className={styles.optionTitle}>{storage.size}</div>
                      <div className={styles.optionSub}>{storage.ram}</div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#38bdf8",
                          fontWeight: 600,
                          marginTop: "0.25rem",
                        }}
                      >
                        ${storage.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade-In Toggle */}
              <div
                className={styles.tradeInBox}
                onClick={() => setHasTradeIn(!hasTradeIn)}
                id="modal-tradein-toggle"
              >
                <input
                  type="checkbox"
                  checked={hasTradeIn}
                  onChange={(e) => setHasTradeIn(e.target.checked)}
                  className={styles.tradeInCheckbox}
                  id="tradein-checkbox"
                />
                <div>
                  <label htmlFor="tradein-checkbox" style={{ fontWeight: 700, color: "#34d399", display: "block" }}>
                    Apply Instant $250 Trade-In Credit
                  </label>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    Trade in any eligible smartphone in working condition.
                  </span>
                </div>
              </div>

              {/* Payment Plan */}
              <div className={styles.sectionGroup}>
                <div className={styles.sectionLabel}>3. Payment Plan</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div
                    className={`${styles.optionCard} ${paymentPlan === "full" ? styles.optionActive : ""}`}
                    onClick={() => setPaymentPlan("full")}
                    id="plan-full"
                  >
                    <div className={styles.optionTitle}>One-Time Payment</div>
                    <div className={styles.optionSub}>${finalPrice} upfront</div>
                  </div>
                  <div
                    className={`${styles.optionCard} ${paymentPlan === "finance" ? styles.optionActive : ""}`}
                    onClick={() => setPaymentPlan("finance")}
                    id="plan-finance"
                  >
                    <div className={styles.optionTitle}>0% APR Financing</div>
                    <div className={styles.optionSub}>${monthlyPayment}/mo for 24 mos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary & Checkout */}
            <div className={styles.summaryBox}>
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.25rem", color: "white" }}>
                  Order Summary
                </h3>

                <div className={styles.summaryRow}>
                  <span>Apoxyy Phantom Ultra</span>
                  <span style={{ color: "white" }}>{selectedFinish.name}</span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Storage & RAM</span>
                  <span style={{ color: "white" }}>{selectedStorage.size} ({selectedStorage.ram})</span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Base Price</span>
                  <span style={{ color: "white" }}>${selectedStorage.price}</span>
                </div>

                {hasTradeIn && (
                  <div className={styles.summaryRow} style={{ color: "#34d399" }}>
                    <span>Instant Trade-In Credit</span>
                    <span>-$250</span>
                  </div>
                )}

                <div className={styles.summaryRow}>
                  <span>Priority Global Shipping</span>
                  <span style={{ color: "#34d399", fontWeight: 600 }}>FREE</span>
                </div>

                <div className={styles.freebieBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                  <span>Included Free: Apoxyy AeroPods Pro ($199)</span>
                </div>
              </div>

              <div>
                <div className={styles.summaryTotalRow}>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Total Due Today</div>
                    <div className={styles.totalPrice}>
                      {paymentPlan === "full" ? `$${finalPrice}` : `$${monthlyPayment}`}
                    </div>
                  </div>
                  {paymentPlan === "finance" && (
                    <div className={styles.monthlyRate}>24 monthly payments at 0% APR</div>
                  )}
                </div>

                <button
                  id="btn-confirm-preorder"
                  className={styles.confirmBtn}
                  onClick={handleOrderSubmit}
                  style={{ marginTop: "1.25rem" }}
                >
                  <span>Reserve Pre-Order</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
                  Zero risk &bull; No charge until shipment &bull; Free 30-day returns
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
