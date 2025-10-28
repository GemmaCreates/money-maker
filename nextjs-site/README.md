# Uptempo Enterprises — Next.js Website

A modern, single-page website built with Next.js 15, TypeScript, and custom CSS.

## Overview

This is the Next.js implementation (Option B) of the Uptempo Enterprises website. It features:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Custom CSS** (no Tailwind used for styling)
- **Optimized Images** using Next.js Image component
- **SEO Optimized** with comprehensive metadata
- **Accessible** with WCAG AA compliance
- **Responsive** design for mobile and desktop

## Project Structure

```
nextjs-site/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with all sections
│   └── globals.css      # Global styles
├── public/
│   └── assets/          # SVG assets
│       ├── hero-placeholder.svg
│       ├── growbie-ui-mock.svg
│       ├── gotime-ui-mock.svg
│       ├── savvychefs-grid.svg
│       ├── og-image.svg
│       └── favicon.svg
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Sections

The website includes the following sections in order:

1. **Hero** — Brand introduction with tagline
2. **Products** — Three product showcases (Growbie, GoTime, TheSavvyChefs.com)
3. **How We Build** — Single-line mission statement
4. **About** — Company description
5. **Footer** — Contact information

## Design System

- **Colors:**
  - Background: `#F7F7F8`
  - Text: `#222222`
  - Accent: `#3A7BD5`
  - Border: `#E5E5E7`

- **Typography:**
  - Font: Inter (with system font fallback)
  - H1: 48-56px
  - H2: 28-32px
  - Body: 16-18px
  - Line height: 1.5-1.6

- **Layout:**
  - Max width: 1200px
  - Section spacing: 80-100px
  - Mobile-first responsive design

## Features

- ✅ Static generation for optimal performance
- ✅ Semantic HTML for accessibility
- ✅ Keyboard navigation support
- ✅ Focus outlines for interactive elements
- ✅ Descriptive alt text for all images
- ✅ Open Graph and Twitter Card metadata
- ✅ Favicon configured
- ✅ No external dependencies for styling
- ✅ No CTAs, pricing, or legal sections (as specified)

## Contact

- **Email:** uptempoenterprises@gmail.com
- **Domain:** uptempoenterprises.com

## License

© Uptempo Enterprises. All rights reserved.
