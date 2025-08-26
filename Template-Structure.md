# Notion Investment Portfolio Tracker — Template Structure

## Page Tree
- Home (Dashboard)
  - Portfolio Overview (metrics, charts)
  - Quick Actions (Add Transaction, Add Holding)
- Databases
  - Holdings
  - Transactions
  - Dividends
  - Watchlist
- Reports
  - Allocation by Asset Class
  - Performance (MTD, YTD, 1Y)
  - Dividends (Calendar & Summary)
- Tools (Premium)
  - Rebalancing Helper
  - Position Sizing Calculator
  - Price Updater

## Recommended Views

### Holdings
- Table: All Columns
- Board: By Asset Class
- Table: Underperformers (Unrealized Gain % < 0)
- Table: Overweight vs Target (Actual − Target > 5%)

### Transactions
- Table: All
- Filtered: Buys
- Filtered: Sells
- Filtered: Dividends
- Grouped by: Account

### Dividends
- Calendar: by Date
- Table: Reinvested vs Not
- Table: Upcoming Estimates (Premium)

### Dashboards
- Portfolio Overview
  - KPIs: Portfolio Value, Cost Basis, Unrealized Gain $, Unrealized Gain %
  - Allocation Pie (by Asset Class)
  - Top Movers (manual input or script)
  - Recent Transactions (last 14 days)

## Relations & Rollups
- Transactions → Holdings (Relation on Ticker)
- Dividends → Holdings (Relation on Ticker)
- Holdings → Transactions (Rollups for total buys/sells, latest price)
- Holdings → Dividends (Rollups for trailing 12‑month dividends)

## Filters & Formulas (Notion-ready)
- Unrealized Gain % = if(Cost Basis Total == 0, 0, Unrealized Gain $ / Cost Basis Total)
- Annual Dividend $ = Current Value × Dividend Yield % / 100
- Net Deposits = sum(Deposits) − sum(Withdrawals)

## Usage Notes
- Manual price updates are acceptable for Basic. Premium can use a lightweight script.
- CSV import: map broker exports to `Transactions` headers used in sample CSV.