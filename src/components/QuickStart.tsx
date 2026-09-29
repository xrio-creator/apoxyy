import styles from "./QuickStart.module.css";

interface Step {
  num: string;
  title: string;
  desc: string;
  command: string;
}

const STEPS: Step[] = [
  {
    num: "1",
    title: "Launch Local Development Engine",
    desc: "Start Next.js in Turbopack development mode with lightning-quick hot module replacement.",
    command: "npm run dev",
  },
  {
    num: "2",
    title: "Add a New Page Route",
    desc: "Create a directory under src/app/ (e.g. src/app/dashboard/page.tsx) to automatically register a new URL route.",
    command: "mkdir -p src/app/dashboard && touch src/app/dashboard/page.tsx",
  },
  {
    num: "3",
    title: "Implement API Endpoints (Route Handlers)",
    desc: "Create src/app/api/hello/route.ts to serve performant JSON endpoints without requiring a separate backend server.",
    command: "export async function GET() { return Response.json({ status: 'ok' }); }",
  },
  {
    num: "4",
    title: "Compile Production Distribution",
    desc: "Generate optimized static HTML, optimized assets, and minified production bundles.",
    command: "npm run build",
  },
];

export default function QuickStart() {
  return (
    <section id="quickstart" className={styles.quickstartSection} aria-labelledby="quickstart-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>Developer Workflow</div>
          <h2 id="quickstart-heading" className={styles.title}>
            Get Started in Minutes
          </h2>
          <p className={styles.subtitle}>
            Your project is ready to go. Follow these quick steps to build your
            components and expand your Next.js application.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                <div className={styles.codeBox}>
                  <code>{step.command}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
