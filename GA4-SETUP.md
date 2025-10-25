# GA4 Setup Instructions

## Quick Setup (5 minutes)

### 1. Get Your GA4 Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. If you don't have a GA4 property yet:
   - Click "Admin" (gear icon in bottom left)
   - Click "Create Property"
   - Enter property name: "Uptempo Enterprises"
   - Set timezone and currency
   - Click "Next" → "Create"
   - Choose "Web" as platform
   - Enter website URL: `uptempoenterprises.com`
   - Enter stream name: "Uptempo Website"
   - Click "Create stream"
4. Copy your **Measurement ID** (starts with `G-`, e.g., `G-ABC123XYZ`)

### 2. Update Your Website
1. Open `/Users/gemma/Development/cursor/money-maker/docs/index.html`
2. Find both instances of `G-XXXXXXXXXX` (lines 14 and 19)
3. Replace with your actual Measurement ID
4. Save the file

### 3. Deploy & Verify
1. Push your changes to GitHub (if using GitHub Pages)
2. Wait 1-2 minutes for deployment
3. Visit your live site: `uptempoenterprises.com`
4. In GA4, go to **Reports** → **Realtime**
5. You should see yourself as an active user within 30 seconds!

## Testing Locally (Optional)
If you want to test before deploying:
```bash
# Serve the docs folder locally
cd /Users/gemma/Development/cursor/money-maker
npx http-server docs -p 8080
```
Then visit `http://localhost:8080` and check GA4 Realtime.

## What GA4 Will Track
- **Pageviews** - Every time someone visits
- **Session duration** - How long they stay
- **Traffic sources** - Where visitors come from
- **Device/browser info** - What they're using
- **Geographic location** - Where they're located

## Next Steps
Once verified, you can:
- Set up custom events (button clicks, form submissions)
- Create conversion goals
- Set up email reports
- Add more team members to the property

