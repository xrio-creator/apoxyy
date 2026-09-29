# Apoxyy — Next.js Application Engine

A modern, high-performance web application built with **Next.js 16**, **React 19**, **Turbopack**, and **TypeScript**.

## 🚀 Highlights

- **Next.js 16.3 (App Router)**: File-system routing with nested layouts, streaming responses, and server-side optimization.
- **React 19**: Full support for React 19 Server Components, Server Actions, and client boundaries.
- **Turbopack**: Incremental Rust-based bundler providing sub-50ms Hot Module Replacement (HMR).
- **TypeScript & ESLint**: End-to-end static type safety with strict compiler configuration.
- **Vanilla CSS Architecture**: Design token system in `src/app/globals.css` and scoped CSS modules with zero runtime overhead.
- **Interactive Showcase & Lab**: Built-in developer playground with live reactive state counter, file architecture inspector, and runtime diagnostics.

## 🛠️ Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Start Production Server
```bash
npm run start
```

## 📁 Project Structure

```
apoxyy/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global design system tokens & utilities
│   │   ├── layout.tsx            # Top-level HTML shell & metadata
│   │   └── page.tsx              # Main homepage view
│   └── components/
│       ├── Navbar.tsx            # Navigation header with live status
│       ├── Hero.tsx              # Hero banner with terminal copy box & stats
│       ├── FeatureCards.tsx      # Engine architecture pillars
│       ├── InteractivePlayground.tsx # Live React 19 interactive demo
│       ├── QuickStart.tsx        # Developer onboarding workflow
│       └── Footer.tsx            # Semantic footer with navigation links
├── public/                       # Static public assets (SVGs, icons)
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Scripts and dependencies
```
