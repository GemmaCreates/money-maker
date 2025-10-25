# GA4 Troubleshooting Guide

## Issue: GA4 Tag Not Detected

### What We Did:
1. ✅ Added GA4 tracking code to `docs/index.html`
2. ✅ Committed and pushed to GitHub
3. ✅ Triggered rebuild with empty commit
4. ⏳ Waiting for GitHub Pages to deploy

### Wait Time:
GitHub Pages typically takes **1-3 minutes** to rebuild and deploy changes.

### How to Verify:

#### Option 1: Check the Live HTML
```bash
curl -s https://www.uptempoenterprises.com | grep "gtag"
```
If you see the gtag code, the deployment is complete!

#### Option 2: Hard Refresh Your Browser
1. Visit: https://www.uptempoenterprises.com
2. Do a hard refresh:
   - **Mac**: `Cmd + Shift + R`
   - **Windows**: `Ctrl + Shift + R`
3. Open browser console (F12)
4. Type: `gtag`
5. If you see a function, GA4 is loaded!

#### Option 3: Check GA4 Realtime
1. Go to [Google Analytics Realtime](https://analytics.google.com/analytics/web/#/p/realtime)
2. Visit your site in another tab
3. Within 30 seconds, you should appear as an active user

### If Still Not Working After 5 Minutes:

#### Check GitHub Pages Settings:
1. Go to: https://github.com/GemmaCreates/money-maker/settings/pages
2. Verify:
   - Source: "Deploy from a branch"
   - Branch: `main` / `docs` folder
   - Custom domain: `www.uptempoenterprises.com`

#### Check GitHub Actions:
1. Go to: https://github.com/GemmaCreates/money-maker/actions
2. Look for "pages build and deployment"
3. Check if the latest run succeeded

#### Manual Verification:
```bash
# Check what's actually on the server
curl -s https://www.uptempoenterprises.com | head -n 30

# Should show the Google tag around line 13-20
```

### Alternative: Test Locally First
```bash
cd /Users/gemma/Development/cursor/money-maker
npx http-server docs -p 8080
```
Then visit `http://localhost:8080` and check if GA4 tracks locally.

### Current Status:
- **Local file**: ✅ Has GA4 code (G-1F18NH46WN)
- **Git commit**: ✅ Pushed to GitHub
- **Live site**: ⏳ Waiting for deployment (triggered at ~13:35)

### Next Check:
Wait until **13:38** (3 minutes from push), then run:
```bash
curl -s https://www.uptempoenterprises.com | grep -A 5 "Google tag"
```

