const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

class TradingJournalBuilder {
  constructor() {
    this.parentPageId = process.env.NOTION_PAGE_ID;
    this.databases = {};
  }

  async searchPages(title) {
    const response = await notion.search({
      parent: {
        page_id: this.parentPageId
      }
    });
    
    return response.results.filter(item => 
      item.object === 'page' && 
      item.properties && 
      item.properties.title && 
      item.properties.title.title &&
      item.properties.title.title[0]?.plain_text === title
    );
  }

  async searchDatabases(title) {
    const response = await notion.search({
      parent: {
        page_id: this.parentPageId
      }
    });
    
    return response.results.filter(item => 
      item.object === 'database' && 
      item.title &&
      item.title[0]?.plain_text === title
    );
  }

  async buildCompleteJournal() {
    console.log('🚀 Building Mobile-First Trading Journal...');
    
    try {
      // Step 1: Create main dashboard page
      await this.createDashboardPage();
      
      // Step 2: Create core databases
      await this.createTradesDatabase();
      await this.createSetupsDatabase();
      await this.createPerformanceDatabase();
      await this.createPsychologyDatabase();
      
      // Step 3: Update relations after all databases exist
      await this.updateDatabaseRelations();
      
      // Step 4: Add sample data
      await this.addSampleData();
      
      // Step 5: Create analytics pages
      await this.createAnalyticsPages();
      
      console.log('✅ Trading Journal built successfully!');
      console.log('📱 Your mobile-first trading journal is ready to use!');
      
    } catch (error) {
      console.error('❌ Error building journal:', error);
    }
  }

  async createDashboardPage() {
    console.log('📊 Creating main dashboard...');
    
    // Check if dashboard already exists
    const existingPages = await this.searchPages('📱 Mobile Trading Journal');
    if (existingPages.length > 0) {
      console.log('✅ Dashboard already exists, skipping creation');
      this.dashboardPageId = existingPages[0].id;
      return;
    }
    
    const response = await notion.pages.create({
      parent: { page_id: this.parentPageId },
      properties: {
        title: {
          title: [{ text: { content: '📱 Mobile Trading Journal' } }]
        }
      },
      children: [
        {
          type: 'heading_1',
          heading_1: {
            rich_text: [{ text: { content: '📊 Trading Dashboard' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: '🎯 Welcome to your mobile-first trading journal!' } }
            ],
            icon: { emoji: '📈' },
            color: 'green_background'
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '⚡ Quick Actions' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: '🎯 Your Trading Command Center - Everything you need to track and improve your trading!' } }
            ],
            icon: { emoji: '📈' },
            color: 'green_background'
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '📱 Quick Start Guide' } }]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '📈 Trades - Log your actual trades with P&L tracking' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '🎯 Trading Setups - Document your trading strategies' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '📊 Performance Metrics - Track your overall results' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '🧠 Psychology Tracker - Monitor your emotional state' } }
            ]
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '💡 Pro Tips' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: '📱 Use on mobile for quick trade logging during market hours!' } }
            ],
            icon: { emoji: '📱' },
            color: 'blue_background'
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: '🔗 Link your trades to specific setups to track strategy performance' } }
            ],
            icon: { emoji: '🔗' },
            color: 'purple_background'
          }
        }
      ]
    });

    this.dashboardPageId = response.id;
    console.log('✅ Dashboard created');
  }

  async createTradesDatabase() {
    console.log('📈 Creating Trades database...');
    
    // Check if database already exists
    const existingDatabases = await this.searchDatabases('📈 Trades');
    if (existingDatabases.length > 0) {
      console.log('✅ Trades database already exists, skipping creation');
      this.databases.trades = existingDatabases[0].id;
      return;
    }
    
    const response = await notion.databases.create({
      parent: { page_id: this.parentPageId },
      title: [{ text: { content: '📈 Trades' } }],
      properties: {
        'Trade': {
          title: {}
        },
        'Date': {
          date: {}
        },
        'Ticker': {
          rich_text: {}
        },
        'Direction': {
          select: {
            options: [
              { name: '🟢 Long', color: 'green' },
              { name: '🔴 Short', color: 'red' }
            ]
          }
        },
        'Entry Price': {
          number: { format: 'dollar' }
        },
        'Exit Price': {
          number: { format: 'dollar' }
        },
        'Shares': {
          number: { format: 'number' }
        },
        'P&L': {
          formula: {
            expression: '(prop("Exit Price") - prop("Entry Price")) * prop("Shares")'
          }
        },
        'P&L %': {
          formula: {
            expression: 'round(((prop("Exit Price") - prop("Entry Price")) / prop("Entry Price")) * 100 * 100) / 100'
          }
        },
        'Setup': {
          rich_text: {} // Will be converted to relation after setups database is created
        },
        'Emotion (1-10)': {
          select: {
            options: [
              { name: '😰 1 - Panic', color: 'red' },
              { name: '😟 2 - Very Nervous', color: 'red' },
              { name: '😬 3 - Nervous', color: 'orange' },
              { name: '😐 4 - Slightly Nervous', color: 'orange' },
              { name: '😐 5 - Neutral', color: 'gray' },
              { name: '🙂 6 - Slightly Confident', color: 'yellow' },
              { name: '😊 7 - Confident', color: 'green' },
              { name: '😄 8 - Very Confident', color: 'green' },
              { name: '😎 9 - Extremely Confident', color: 'blue' },
              { name: '🤑 10 - Euphoric', color: 'purple' }
            ]
          }
        },
        'Screenshot': {
          files: {}
        },
        'Notes': {
          rich_text: {}
        },
        'Tags': {
          multi_select: {
            options: [
              { name: 'Day Trade', color: 'red' },
              { name: 'Swing Trade', color: 'blue' },
              { name: 'Options', color: 'purple' },
              { name: 'Earnings Play', color: 'yellow' },
              { name: 'Breakout', color: 'green' },
              { name: 'Gap Fill', color: 'orange' }
            ]
          }
        }
      }
    });

    this.databases.trades = response.id;
    console.log('✅ Trades database created');
    
    // Create mobile-optimized views
    await this.createTradesViews();
  }

  async createTradesViews() {
    console.log('📱 Creating mobile-optimized views...');
    
    // Create comprehensive examples
    const tradeExamples = [
      {
        'Trade': { title: [{ text: { content: '📝 EXAMPLE: AAPL Breakout Trade' } }] },
        'Date': { date: { start: '2024-01-15T14:30:00.000Z' } },
        'Ticker': { rich_text: [{ text: { content: 'AAPL' } }] },
        'Direction': { select: { name: '🟢 Long' } },
        'Entry Price': { number: 175.50 },
        'Exit Price': { number: 178.25 },
        'Shares': { number: 100 },
        'Emotion (1-10)': { select: { name: '😊 7 - Confident' } },
        'Notes': { rich_text: [{ text: { content: 'Clean breakout above $175 resistance with strong volume. Held position for 1.5 hours. Used "Breakout Above Resistance" setup.' } }] },
        'Tags': { multi_select: [{ name: 'Breakout' }, { name: 'Day Trade' }] }
      },
      {
        'Trade': { title: [{ text: { content: '📝 EXAMPLE: TSLA Support Bounce' } }] },
        'Date': { date: { start: '2024-01-16T10:15:00.000Z' } },
        'Ticker': { rich_text: [{ text: { content: 'TSLA' } }] },
        'Direction': { select: { name: '🟢 Long' } },
        'Entry Price': { number: 245.80 },
        'Exit Price': { number: 242.10 },
        'Shares': { number: 50 },
        'Emotion (1-10)': { select: { name: '😬 3 - Nervous' } },
        'Notes': { rich_text: [{ text: { content: 'Support level failed to hold. Quick exit when broke below $243. Lesson: Wait for stronger confirmation.' } }] },
        'Tags': { multi_select: [{ name: 'Day Trade' }] }
      }
    ];

    for (const trade of tradeExamples) {
      await notion.pages.create({
        parent: { database_id: this.databases.trades },
        properties: trade
      });
    }
    
    console.log('✅ Quick entry template created');
    console.log('📝 Views to create manually:');
    console.log('  1. 📱 Mobile Dashboard (Gallery view)');
    console.log('  2. 📊 Today\'s Trades (Table view, filtered by today)');
    console.log('  3. ✅ Winners Only (Gallery view, P&L > 0)');
    console.log('  4. ❌ Losers Only (Gallery view, P&L < 0)');
  }

  async createSetupsDatabase() {
    console.log('🎯 Creating Trading Setups database...');
    
    // Check if database already exists
    const existingDatabases = await this.searchDatabases('🎯 Trading Setups');
    if (existingDatabases.length > 0) {
      console.log('✅ Setups database already exists, skipping creation');
      this.databases.setups = existingDatabases[0].id;
      return;
    }
    
    const response = await notion.databases.create({
      parent: { page_id: this.parentPageId },
      title: [{ text: { content: '🎯 Trading Setups' } }],
      properties: {
        'Setup Name': {
          title: {}
        },
        'Strategy Description': {
          rich_text: {}
        },
        'Entry Criteria': {
          rich_text: {}
        },
        'Exit Criteria': {
          rich_text: {}
        },
        'Risk Management': {
          rich_text: {}
        },
        'Success Rate': {
          number: { format: 'percent' }
        },
        'Total Trades': {
          number: {}
        },
        'Avg Return %': {
          number: { format: 'percent' }
        },
        'Example Chart': {
          files: {}
        }
      }
    });

    this.databases.setups = response.id;
    console.log('✅ Setups database created');
  }

  async createPerformanceDatabase() {
    console.log('📊 Creating Performance Metrics database...');
    
    // Check if database already exists
    const existingDatabases = await this.searchDatabases('📊 Performance Metrics');
    if (existingDatabases.length > 0) {
      console.log('✅ Performance database already exists, skipping creation');
      this.databases.performance = existingDatabases[0].id;
      return;
    }
    
    const response = await notion.databases.create({
      parent: { page_id: this.parentPageId },
      title: [{ text: { content: '📊 Performance Metrics' } }],
      properties: {
        'Period': {
          title: {}
        },
        'Date Range': {
          date: {}
        },
        'Total Trades': {
          number: {}
        },
        'Winning Trades': {
          number: {}
        },
        'Losing Trades': {
          number: {}
        },
        'Win Rate %': {
          formula: {
            expression: 'round((prop("Winning Trades") / prop("Total Trades")) * 100 * 100) / 100'
          }
        },
        'Total P&L': {
          number: { format: 'dollar' }
        },
        'Avg Win': {
          number: { format: 'dollar' }
        },
        'Avg Loss': {
          number: { format: 'dollar' }
        },
        'Profit Factor': {
          formula: {
            expression: 'abs(prop("Avg Win") / prop("Avg Loss"))'
          }
        },
        'Best Trade': {
          number: { format: 'dollar' }
        },
        'Worst Trade': {
          number: { format: 'dollar' }
        }
      }
    });

    this.databases.performance = response.id;
    console.log('✅ Performance database created');
  }

  async createPsychologyDatabase() {
    console.log('🧠 Creating Psychology Tracker database...');
    
    // Check if database already exists
    const existingDatabases = await this.searchDatabases('🧠 Psychology Tracker');
    if (existingDatabases.length > 0) {
      console.log('✅ Psychology database already exists, skipping creation');
      this.databases.psychology = existingDatabases[0].id;
      return;
    }
    
    const response = await notion.databases.create({
      parent: { page_id: this.parentPageId },
      title: [{ text: { content: '🧠 Psychology Tracker' } }],
      properties: {
        'Date': {
          title: {}
        },
        'Pre-Market Confidence': {
          select: {
            options: [
              { name: '1 - Very Low', color: 'red' },
              { name: '2 - Low', color: 'red' },
              { name: '3 - Below Average', color: 'orange' },
              { name: '4 - Slightly Low', color: 'orange' },
              { name: '5 - Average', color: 'gray' },
              { name: '6 - Slightly High', color: 'yellow' },
              { name: '7 - Good', color: 'green' },
              { name: '8 - Very Good', color: 'green' },
              { name: '9 - Excellent', color: 'blue' },
              { name: '10 - Perfect', color: 'purple' }
            ]
          }
        },
        'FOMO Level': {
          select: {
            options: [
              { name: '1 - None', color: 'green' },
              { name: '2 - Very Low', color: 'green' },
              { name: '3 - Low', color: 'yellow' },
              { name: '4 - Slightly Low', color: 'yellow' },
              { name: '5 - Moderate', color: 'orange' },
              { name: '6 - Slightly High', color: 'orange' },
              { name: '7 - High', color: 'red' },
              { name: '8 - Very High', color: 'red' },
              { name: '9 - Extreme', color: 'red' },
              { name: '10 - Overwhelming', color: 'red' }
            ]
          }
        },
        'Discipline Score': {
          select: {
            options: [
              { name: '1 - No Rules Followed', color: 'red' },
              { name: '2 - Very Poor', color: 'red' },
              { name: '3 - Poor', color: 'orange' },
              { name: '4 - Below Average', color: 'orange' },
              { name: '5 - Average', color: 'gray' },
              { name: '6 - Good', color: 'yellow' },
              { name: '7 - Very Good', color: 'green' },
              { name: '8 - Excellent', color: 'green' },
              { name: '9 - Nearly Perfect', color: 'blue' },
              { name: '10 - Perfect Execution', color: 'purple' }
            ]
          }
        },
        'Market Sentiment': {
          select: {
            options: [
              { name: '🐻 Very Bearish', color: 'red' },
              { name: '📉 Bearish', color: 'orange' },
              { name: '😐 Neutral', color: 'gray' },
              { name: '📈 Bullish', color: 'green' },
              { name: '🚀 Very Bullish', color: 'blue' }
            ]
          }
        },
        'Daily Notes': {
          rich_text: {}
        },
        'Biggest Mistake': {
          rich_text: {}
        },
        'Key Lesson': {
          rich_text: {}
        }
      }
    });

    this.databases.psychology = response.id;
    console.log('✅ Psychology database created');
  }

  async updateDatabaseRelations() {
    console.log('🔗 Updating database relations...');
    
    // Update Trades database to link to Setups
    await notion.databases.update({
      database_id: this.databases.trades,
      properties: {
        'Setup': {
          relation: {
            database_id: this.databases.setups,
            single_property: {}
          }
        }
      }
    });
    
    console.log('✅ Database relations updated');
  }

  async addSampleData() {
    console.log('📝 Adding sample trading data...');
    
    // Check if sample data already exists
    const existingTrades = await notion.databases.query({
      database_id: this.databases.trades,
      page_size: 1
    });
    
    if (existingTrades.results.length > 0) {
      console.log('✅ Sample data already exists, skipping creation');
      return;
    }
    
    // Add comprehensive setup examples
    const setupsData = [
      {
        'Setup Name': { title: [{ text: { content: '📝 EXAMPLE: Breakout Above Resistance' } }] },
        'Strategy Description': { rich_text: [{ text: { content: 'Enter when price breaks above key resistance level with volume confirmation. This is a momentum-based strategy that catches strong moves.' } }] },
        'Entry Criteria': { rich_text: [{ text: { content: '• Price closes above resistance level\n• Volume > 1.5x average daily volume\n• No major resistance within 5% above\n• Stock is in an uptrend (20 SMA > 50 SMA)\n• RSI between 50-70 (not overbought)' } }] },
        'Exit Criteria': { rich_text: [{ text: { content: '• Target: 2-3x risk (if risk is $1, target $2-3 profit)\n• Stop Loss: Below the resistance level that was broken\n• Time Stop: Exit if no progress after 2 hours\n• Trailing Stop: Move stop to breakeven after 1x risk achieved' } }] },
        'Risk Management': { rich_text: [{ text: { content: '• Risk 1-2% of portfolio per trade\n• Maximum 3 concurrent positions\n• Avoid trading during major news events\n• Only trade liquid stocks (avg volume > 1M shares)' } }] }
      },
      {
        'Setup Name': { title: [{ text: { content: '📝 EXAMPLE: Support Bounce' } }] },
        'Strategy Description': { rich_text: [{ text: { content: 'Buy when price bounces off established support level. This is a mean reversion strategy that catches oversold bounces.' } }] },
        'Entry Criteria': { rich_text: [{ text: { content: '• Price touches or slightly breaks support level\n• Bullish reversal candle (hammer, doji, or engulfing)\n• RSI oversold (< 30) and starting to recover\n• Volume spike on the bounce\n• Support level has been tested at least 2 times before' } }] },
        'Exit Criteria': { rich_text: [{ text: { content: '• Target: Previous swing high or resistance level\n• Stop Loss: Below the support level (with small buffer)\n• Time Stop: Exit if no bounce within 30 minutes\n• Partial Exit: Take 50% profit at 1x risk, let rest run' } }] },
        'Risk Management': { rich_text: [{ text: { content: '• Risk 1% of portfolio per trade\n• Avoid during strong downtrends\n• Only trade stocks with clear support levels\n• Maximum 2 support bounce trades at once' } }] }
      },
      {
        'Setup Name': { title: [{ text: { content: '📝 EXAMPLE: Earnings Gap Fade' } }] },
        'Strategy Description': { rich_text: [{ text: { content: 'Short stocks that gap up significantly on earnings, expecting a fade. This strategy capitalizes on post-earnings volatility.' } }] },
        'Entry Criteria': { rich_text: [{ text: { content: '• Stock gaps up > 5% on earnings\n• Gap occurs in first 30 minutes of trading\n• Volume is 3x+ average daily volume\n• Stock is overbought (RSI > 70)\n• No major support levels nearby' } }] },
        'Exit Criteria': { rich_text: [{ text: { content: '• Target: Fill the gap (return to pre-earnings price)\n• Stop Loss: Above the gap high + 1%\n• Time Stop: Exit by end of day if no progress\n• Partial Exit: Take 50% profit at 50% of gap fill' } }] },
        'Risk Management': { rich_text: [{ text: { content: '• Risk 0.5% of portfolio per trade (higher risk)\n• Only trade liquid stocks\n• Avoid during strong bull markets\n• Maximum 1 earnings trade at a time' } }] }
      }
    ];

    for (const setup of setupsData) {
      await notion.pages.create({
        parent: { database_id: this.databases.setups },
        properties: setup
      });
    }

    // Add sample trades
    const tradesData = [
      {
        'Trade': { title: [{ text: { content: 'AAPL Long - Breakout Play' } }] },
        'Date': { date: { start: '2024-01-15T14:30:00.000Z' } },
        'Ticker': { rich_text: [{ text: { content: 'AAPL' } }] },
        'Direction': { select: { name: '🟢 Long' } },
        'Entry Price': { number: 175.50 },
        'Exit Price': { number: 178.25 },
        'Shares': { number: 100 },
        'Emotion (1-10)': { select: { name: '😊 7 - Confident' } },
        'Notes': { rich_text: [{ text: { content: 'Clean breakout above $175 resistance with strong volume. Held position for 1.5 hours.' } }] },
        'Tags': { multi_select: [{ name: 'Breakout' }, { name: 'Day Trade' }] }
      },
      {
        'Trade': { title: [{ text: { content: 'TSLA Short - Failed Support' } }] },
        'Date': { date: { start: '2024-01-16T10:15:00.000Z' } },
        'Ticker': { rich_text: [{ text: { content: 'TSLA' } }] },
        'Direction': { select: { name: '🔴 Short' } },
        'Entry Price': { number: 245.80 },
        'Exit Price': { number: 242.10 },
        'Shares': { number: 50 },
        'Emotion (1-10)': { select: { name: '😬 3 - Nervous' } },
        'Notes': { rich_text: [{ text: { content: 'Support level failed to hold. Quick exit when broke below $243.' } }] },
        'Tags': { multi_select: [{ name: 'Day Trade' }] }
      }
    ];

    for (const trade of tradesData) {
      await notion.pages.create({
        parent: { database_id: this.databases.trades },
        properties: trade
      });
    }

    // Add psychology tracking examples
    const psychologyData = [
      {
        'Date': { date: { start: '2024-01-15T09:30:00.000Z' } },
        'Emotional State': { select: { name: '😊 Confident' } },
        'Stress Level (1-10)': { number: 3 },
        'Market Conditions': { select: { name: '📈 Bullish' } },
        'Notes': { rich_text: [{ text: { content: 'Feeling good about today. Market is trending up, following my setups well. No FOMO, sticking to plan.' } }] },
        'Impact on Trading': { select: { name: '✅ Positive' } }
      },
      {
        'Date': { date: { start: '2024-01-16T14:45:00.000Z' } },
        'Emotional State': { select: { name: '😰 Anxious' } },
        'Stress Level (1-10)': { number: 8 },
        'Market Conditions': { select: { name: '📉 Bearish' } },
        'Notes': { rich_text: [{ text: { content: 'Market is choppy, feeling anxious about missing moves. Need to step back and wait for clear setups.' } }] },
        'Impact on Trading': { select: { name: '❌ Negative' } }
      }
    ];

    for (const entry of psychologyData) {
      await notion.pages.create({
        parent: { database_id: this.databases.psychology },
        properties: entry
      });
    }

    console.log('✅ Sample data added');
  }

  async createAnalyticsPages() {
    console.log('📈 Creating analytics pages...');
    
    // Check if analytics page already exists
    const existingPages = await this.searchPages('📈 Performance Analytics');
    if (existingPages.length > 0) {
      console.log('✅ Analytics page already exists, skipping creation');
      return;
    }
    
    // Create Performance Summary page
    await notion.pages.create({
      parent: { page_id: this.parentPageId },
      properties: {
        title: { title: [{ text: { content: '📈 Performance Analytics' } }] }
      },
      children: [
        {
          type: 'heading_1',
          heading_1: {
            rich_text: [{ text: { content: '📊 Trading Performance Overview' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: '🎯 Track your progress and identify patterns to improve your trading edge.' } }
            ],
            icon: { emoji: '📈' },
            color: 'blue_background'
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '📝 How to Use This Page' } }]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '📊 Performance Metrics Database - Add monthly/weekly performance summaries' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '📈 Trades Database - Review individual trades and patterns' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: '🎯 Trading Setups - Analyze which strategies work best' } }
            ]
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '📊 Key Metrics to Track' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: 'Win Rate: Aim for >60% for day trading, >70% for swing trading' } }
            ],
            icon: { emoji: '🎯' },
            color: 'green_background'
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: 'Profit Factor: >1.5 is good, >2.0 is excellent' } }
            ],
            icon: { emoji: '💰' },
            color: 'yellow_background'
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: 'Average Win/Loss Ratio: >1.5x means your winners are bigger than losers' } }
            ],
            icon: { emoji: '⚖️' },
            color: 'blue_background'
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '📱 Mobile Quick Stats' } }]
          }
        },
        {
          type: 'paragraph',
          paragraph: {
            rich_text: [
              { text: { content: 'Use the databases below to view your detailed performance metrics. All views are optimized for mobile viewing.' } }
            ]
          }
        }
      ]
    });

    // Create Psychology Tracker page
    await notion.pages.create({
      parent: { page_id: this.parentPageId },
      properties: {
        title: { title: [{ text: { content: '🧠 Psychology Guide' } }] }
      },
      children: [
        {
          type: 'heading_1',
          heading_1: {
            rich_text: [{ text: { content: '🧠 Psychology Tracker Guide' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: '🎯 Your emotions are your biggest trading enemy. Track them to improve your decision-making.' } }
            ],
            icon: { emoji: '🧠' },
            color: 'purple_background'
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '📝 How to Use This Tracker' } }]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: 'Log your emotional state before each trading session' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: 'Rate your stress level (1-10) throughout the day' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: 'Note how emotions affected your trading decisions' } }
            ]
          }
        },
        {
          type: 'numbered_list_item',
          numbered_list_item: {
            rich_text: [
              { text: { content: 'Review patterns weekly to identify emotional triggers' } }
            ]
          }
        },
        {
          type: 'heading_2',
          heading_2: {
            rich_text: [{ text: { content: '🚨 Red Flags to Watch' } }]
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: 'High stress (7-10): Consider taking a break or reducing position size' } }
            ],
            icon: { emoji: '🚨' },
            color: 'red_background'
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: 'FOMO feelings: Stick to your setups, don\'t chase moves' } }
            ],
            icon: { emoji: '⚡' },
            color: 'orange_background'
          }
        },
        {
          type: 'callout',
          callout: {
            rich_text: [
              { text: { content: 'Overconfidence: Don\'t increase position size, stick to risk management' } }
            ],
            icon: { emoji: '💪' },
            color: 'yellow_background'
          }
        }
      ]
    });

    console.log('✅ Analytics pages created');
  }
}

// Main execution
async function main() {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_PAGE_ID) {
    console.error('❌ Missing required environment variables');
    console.log('📝 Please copy env.example to .env and fill in your Notion API credentials');
    process.exit(1);
  }

  const builder = new TradingJournalBuilder();
  await builder.buildCompleteJournal();
}

// Run the builder
if (require.main === module) {
  main().catch(console.error);
}

module.exports = TradingJournalBuilder;


