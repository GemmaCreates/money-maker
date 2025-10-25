# 🚀 Trading Journal Builder Setup Guide

## Quick Start (5 minutes)

### Step 1: Set Up Notion Integration
1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"+ New integration"**
3. Name it **"Trading Journal Builder"**
4. Select your workspace
5. Click **"Submit"**
6. Copy the **"Internal Integration Token"** (starts with `secret_`)

### Step 2: Create Parent Page in Notion
1. Open Notion and create a new page
2. Title it **"📱 My Trading Journal"**
3. **Share** the page with your integration:
   - Click "Share" → "Invite" 
   - Search for "Trading Journal Builder"
   - Click "Invite"
4. Copy the **page ID** from the URL (the long string after the last `/`)

### Step 3: Configure Environment
1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```
2. Edit `.env` and add your credentials:
   ```
   NOTION_API_KEY=secret_your_token_here
   NOTION_PAGE_ID=your_page_id_here
   ```

### Step 4: Install and Run
```bash
# Install dependencies
npm install

# Build your trading journal
npm run build
```

## What Gets Created

### 📊 Databases
- **📈 Trades** - Core trading log with mobile-optimized views
- **🎯 Trading Setups** - Strategy templates and performance tracking
- **📊 Performance Metrics** - Analytics and KPI tracking
- **🧠 Psychology Tracker** - Emotional state and discipline monitoring

### 📱 Mobile-First Features
- **Gallery views** for easy mobile browsing
- **Quick entry templates** for fast trade logging
- **Emoji indicators** for visual clarity on small screens
- **Simplified forms** optimized for thumb navigation

### 🧮 Auto-Calculations
- **P&L calculations** (dollar amounts and percentages)
- **Win rate tracking** per setup and overall
- **Performance metrics** (profit factor, avg win/loss)
- **Psychology correlations** (emotion vs performance)

## Sample Data Included

The builder automatically creates:
- 2 sample trading setups (Breakout, Support Bounce)
- 2 sample trades with realistic data
- All formulas and relationships configured
- Mobile-optimized views ready to use

## Mobile Optimization

### Views Created
1. **📱 Mobile Dashboard** - Gallery view with large cards
2. **📊 Today's Trades** - Filtered table for current day
3. **✅ Winners Only** - Gallery of profitable trades
4. **❌ Losers Analysis** - Gallery of losing trades for review

### Mobile Workflows
- **3-tap trade entry** - Ticker → Entry → Exit → Done
- **Swipe actions** - Edit/delete trades with gestures
- **Photo integration** - Easy chart screenshot uploads
- **Voice notes** - Quick emotional state capture

## Customization

After building, you can:
- Add more trading setups in the **🎯 Trading Setups** database
- Customize emotion scales in the **🧠 Psychology Tracker**
- Add new tags in the **📈 Trades** database
- Create additional filtered views for specific strategies

## Troubleshooting

### Common Issues
1. **"Unauthorized" error**: Check that you've shared the page with your integration
2. **"Page not found"**: Verify the page ID in your .env file
3. **"Rate limited"**: The script will automatically retry, just wait

### Support
- Check the [Notion API documentation](https://developers.notion.com/)
- Verify your integration has the correct permissions
- Ensure your page ID is the parent page, not a database ID

## Next Steps

1. **Test on mobile** - Open your Notion app and test the journal
2. **Add real trades** - Start logging your actual trades
3. **Customize views** - Adjust filters and sorting for your workflow
4. **Set up analytics** - Use the Performance Metrics database for weekly reviews

Your mobile-first trading journal is now ready to help you improve your trading performance! 📈




