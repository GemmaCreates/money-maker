# Notion Investment Portfolio Tracker — Technical Spec (v0)

## Databases

### Holdings
- Ticker (Title)
- Company Name (Text)
- Asset Class (Select: Stock, ETF, Crypto, Cash)
- Shares (Number)
- Average Cost Basis (Number, $)
- Current Price (Number, $)
- Current Value (Formula: Shares × Current Price)
- Cost Basis Total (Formula: Shares × Avg Cost Basis)
- Unrealized Gain ($) (Formula: Current Value − Cost Basis Total)
- Unrealized Gain (%) (Formula)
- Target Allocation (%) (Number)
- Actual Allocation (%) (Rollup from Performance)
- Dividend Yield (%) (Number)
- Annual Dividend ($) (Formula: Current Value × Yield)
- Notes (Text)

### Transactions
- Date (Date)
- Type (Select: Buy, Sell, Dividend, Split, Deposit, Withdrawal)
- Ticker (Relation → Holdings)
- Shares (Number)
- Price ($) (Number)
- Fees ($) (Number)
- Amount ($) (Formula: Shares × Price + Fees)  
  - For dividends, positive amount; for buys, negative cash flow
- Account (Select: Brokerage 1, Brokerage 2, IRA, 401k)
- Notes (Text)

### Dividends
- Date (Date)
- Ticker (Relation → Holdings)
- Amount ($) (Number)
- Reinvested? (Checkbox)
- Notes (Text)

### Performance (Dashboard Inputs)
- Portfolio Value ($) (Rollup from Holdings)
- Cost Basis ($) (Rollup from Holdings)
- Unrealized Gain ($)
- Unrealized Gain (%)
- Daily Change ($)
- Daily Change (%)
- Cash Balance ($) (Number)
- Net Deposits ($) (Formula: sum of deposits − withdrawals)
- Timeframe (Select: Daily, MTD, YTD, 1Y, All)

## Views
- Holdings by Asset Class (Board)
- Allocation Pie (Chart via Notion board summary or embed)
- Transactions: All, Buys, Sells, Dividends (Table filters)
- Dividends Calendar (Calendar by Date)
- Performance Dashboard (Gallery/Board with metrics)

## Formulas (Notion syntax high-level)
- Current Value = prop("Shares") * prop("Current Price")
- Cost Basis Total = prop("Shares") * prop("Average Cost Basis")
- Unrealized Gain ($) = prop("Current Value") - prop("Cost Basis Total")
- Unrealized Gain (%) = if(prop("Cost Basis Total") == 0, 0, prop("Unrealized Gain ($)") / prop("Cost Basis Total"))
- Annual Dividend ($) = prop("Current Value") * prop("Dividend Yield (%)") / 100

## Basic vs Premium Features

### Basic (Template Only)
- Holdings, Transactions, Dividends databases
- Performance dashboard (manual price updates or CSV import)
- Allocation views and simple charts
- Watchlist database (manual entries)

### Premium (with Scripts/Actions)
- CSV import helper for broker exports (normalized to Transactions)
- Price updater (manual trigger via script using free API/CSV)
- Dividend calendar with upcoming estimates
- Rebalancing helper: highlights deviation from target allocations
- Risk management: position sizing calculator and stop-loss tracker

## Sample Data Scenarios
- Conservative: 60/40 portfolio with dividend ETFs
- Aggressive: Tech‑heavy growth stocks + small crypto allocation

## Next Steps
1) Build Notion databases and relations according to this spec
2) Enter 5 sample stocks and 10 transactions to validate formulas
3) Draft screenshots for README/template listing

