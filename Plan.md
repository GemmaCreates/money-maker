## Barnacle Strategy to $12K/month in ≤90 days

### Who you are and constraints
- **Skills**: AI vibecoding, Shopify stores, stock trading
- **Interests**: cooking, Gospel music, business, investing, sports, personal development
- **Constraints**: ≤10 hours/week, flexibility (wife, mom of 2), Product Manager mindset
- **Budget**: up to $5,000

### Whale ecosystems prioritized (AI-forward, non-competitors to Shopify)
- **Raycast Store (AI Extensions)**: Desktop command platform for devs/knowledge workers; strong indie-friendly distribution.
- **OpenAI GPT Store (GPTs + Actions)**: Distribution inside ChatGPT; Actions connect to your backend. Monetization via revenue program where available, plus your own Stripe for Pro features.

Secondary (optional later): Obsidian Plugins (AI), Poe Bot Store, Hugging Face Spaces.

### API-Light Product Portfolio (Low/Zero External Dependencies)

#### **🎯 PRIMARY BETS (Highest ROI, Lowest API Costs)**

- **#1 Notion Investment Portfolio Tracker + Analysis — TOP PRIORITY**
  - Complete template for tracking stocks/crypto + performance analytics, risk management, dividend tracking
  - User inputs data manually or via CSV imports (no external APIs needed)
  - **API Costs**: $0/mo (zero external dependencies)
  - **Pricing**: $49 one-time + $8/mo for advanced calculation scripts
  - **Goal**: 1,000 template sales + 500 monthly subs = $49K + $4K/mo in 90 days

- **#2 Raycast Personal Finance Dashboard**
  - CSV import from banks/brokers → beautiful charts, budget tracking, expense categorization
  - Local calculation engine, optional AI insights for spending patterns
  - **API Costs**: $10-30/mo (minimal OpenAI for insights)
  - **Pricing**: $8-19/mo
  - **Goal**: 800-1,500 users = $6.4K-$28.5K/mo in 90 days

- **#3 Notion CRM for Solopreneurs + Automation Scripts**
  - Complete CRM template + email sequences, follow-up reminders, pipeline tracking
  - Simple automation scripts that run locally (no external dependencies)
  - **API Costs**: $0/mo (zero external dependencies)
  - **Pricing**: $99 one-time + $15/mo for premium automation scripts
  - **Goal**: 500 template sales + 300 monthly subs = $49.5K + $4.5K/mo in 90 days

#### **🔥 QUICK WINS (Fast to Build, Immediate Revenue)**

- **#4 Raycast Meeting Notes Formatter**
  - Raw meeting notes → structured summaries, action items, follow-ups
  - **API Costs**: $5-15/mo (minimal OpenAI for formatting)
  - **Pricing**: $5-12/mo
  - **Goal**: 1,000+ users = $5K-$12K/mo

- **#5 Raycast File Organizer (AI-powered)**
  - Scans Downloads/Desktop → suggests folder structures, renames files intelligently
  - **API Costs**: $0-10/mo (optional minimal LLM or local processing)
  - **Pricing**: $5-10/mo
  - **Goal**: 800-1,200 users = $4K-$12K/mo

- **#6 Budget Planning GPT (OpenAI Store)**
  - Financial advisor chat for budgets, savings goals, debt payoff (no account connections)
  - **API Costs**: OpenAI usage only (covered by GPT Store)
  - **Pricing**: GPT Store revenue + premium calculators via separate site
  - **Goal**: Top 10 in Finance category, 5K+ weekly users

#### **💰 EXPANSION OPPORTUNITIES (After Achieving Product-Market Fit)**

- **#7 Raycast Expense Tracker + Receipt Parser**
- **#8 Raycast → Notion Bridge Commands**
- **#9 Notion Content Calendar + Social Media Planner**
- **#10 Raycast Daily Standup Generator**

### High-Level Strategy Notes
- Focus on zero/low‑API products for margin and speed.
- Lead with Notion Investment Portfolio; run small Raycast/GPT bets in parallel.
- Build lightweight distribution (listings, demos, case studies) without deep timelines here.

### New Ideas (Backlog)

#### Notion Small Business Tracking Template
- One-liner: Complete Notion workspace to run a small business (CRM, projects, finance) with zero external APIs.
- Core databases: Companies/Clients, Contacts, Deals/Opportunities, Projects, Tasks, Invoices, Expenses, Products/Services, Content/Marketing, SOPs/Assets.
- Relations/Rollups: Company ↔ Contacts/Deals/Projects; Project ↔ Tasks/Expenses/Invoices; roll up pipeline value, AR/AP, project profitability.
- Views/Dashboards: Pipeline by stage, Overdue Tasks, Projects by status, Invoices by status, Expenses by category, Content calendar, Owner dashboard (MRR/ARR, receivables), Sales dashboard (win rate), Ops dashboard (utilization proxy).
- Monetization: Free starter + paid Pro template; optional automations pack; distribute via Gumroad/Notion Marketplace; include onboarding guide.

#### Baseball Roster Walk‑Up Music Organizer
- One-liner: Assign, cue, and play walk‑up song snippets per player with lineup‑aware playlists for game day.
- Core model: Players (name, jersey, position), Songs (title, artist, clean flag, start time, duration), Games/Lineups (date, batting order), Cues/Events (at‑bat, intro, warm‑up).
- MVP features: Per‑player song with start time and duration; auto‑generate playlist by lineup; quick trigger UI with hotkeys (1–9) and next‑batter advance; clean‑only filter; CSV roster import; export playlists to Spotify/Apple; local MP3 fallback.
- Packaging: Simple web UI or CLI; config per league; docs and quickstart; licensing/policy disclaimer.

### Working Tools

- Kanban: VibeKanban — open with `npm run kanban` (launches `https://www.vibekanban.com/`). For local self-host, run `npm run kanban:local` after starting your local server (default `http://localhost:5050`). Evaluate before use; see trust scan note in `README.md`.
