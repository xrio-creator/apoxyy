import styles from "./ProductReviews.module.css";

const REVIEWS = [
  {
    quote:
      "The 200MP periscope array changes mobile photography forever. The 10x optical zoom is pure glass wizardry, outclassing every current flagship on the market.",
    author: "Dieter Bohn",
    outlet: "The Verge • 9.8/10",
  },
  {
    quote:
      "Grade 5 aerospace titanium combined with the 3nm Neural Bionic silicon makes this feel less like a phone and more like a pocket quantum supercomputer.",
    author: "Lauren Goode",
    outlet: "Wired • Editor's Choice",
  },
  {
    quote:
      "Unbelievable 3,200 nit display clarity under blistering direct sun, and the 6,200 mAh silicon battery simply refuses to die after a grueling 2-day heavy workflow.",
    author: "David Ruddock",
    outlet: "TechRadar • 5 Stars",
  },
];

export default function ProductReviews() {
  return (
    <section id="reviews" className={styles.reviewsSection} aria-labelledby="reviews-heading">
      <div className="container" style={{ textAlign: "center" }}>
        <div className={styles.header}>
          <div className={styles.tag}>Critical Acclaim</div>
          <h2 id="reviews-heading" className={styles.title}>
            Lauded by Tech Critics Worldwide
          </h2>
          <p className={styles.subtitle}>
            Industry leaders have put the Apoxyy Phantom Ultra through the most
            demanding benchmarks and real-world trials.
          </p>
        </div>

        <div className={styles.scoreBanner}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span style={{ fontWeight: 700, color: "white", fontSize: "1.05rem" }}>
            4.95 / 5.0 Average Rating
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            (Over 2,400 Verified Global Press & Early Tester Units)
          </span>
        </div>

        <div className={styles.reviewsGrid}>
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className={styles.reviewCard}>
              <div className={styles.quoteText}>&ldquo;{rev.quote}&rdquo;</div>
              <div className={styles.reviewerMeta}>
                <span className={styles.reviewerName}>{rev.author}</span>
                <span className={styles.reviewerOutlet}>{rev.outlet}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
