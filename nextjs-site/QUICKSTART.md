# Quick Start Guide

## Get Started in 3 Steps

### 1. Navigate to the project
```bash
cd /workspace/nextjs-site
```

### 2. Install dependencies (if not already installed)
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The site will be available at **http://localhost:3000**

## What You'll See

A single-page website with:
- **Hero** — "Uptempo Enterprises" brand introduction
- **Products** — Growbie, GoTime, and TheSavvyChefs.com
- **How We Build** — Mission statement
- **About** — Company description
- **Footer** — Contact information

## Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

The production server will run at **http://localhost:3000**

## Project Details

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Custom CSS (no Tailwind for content)
- **Assets:** 6 SVG files in `/public/assets/`
- **Pages:** Single page (static generation)

## File Locations

- Main page: `app/page.tsx`
- Styles: `app/globals.css`
- Layout/Metadata: `app/layout.tsx`
- Assets: `public/assets/*.svg`

## Need Help?

- Check `README.md` for full documentation
- Check `IMPLEMENTATION.md` for technical details
- Email: uptempoenterprises@gmail.com

---

**Ready to view?** Run `npm run dev` and open http://localhost:3000 🚀
