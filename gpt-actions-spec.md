# GPT Actions API Specification

## 🎯 **Project**: BudgetMaster GPT Premium Calculators
**Goal**: Provide advanced financial calculations via Actions API for premium users

---

## 📊 **API Endpoints Overview**

### **Base URL**: `https://budgetmaster-api.vercel.app/api`

### **Authentication**: 
- API Key required for premium features
- Rate limiting: 100 requests/hour per user

---

## 🔧 **Endpoint Specifications**

### **1. Debt Payoff Calculator**
```
POST /debt-payoff
```

**Request Body:**
```json
{
  "debts": [
    {
      "name": "Credit Card 1",
      "balance": 5000,
      "interest_rate": 18.99,
      "minimum_payment": 150
    },
    {
      "name": "Student Loan",
      "balance": 25000,
      "interest_rate": 5.5,
      "minimum_payment": 300
    }
  ],
  "method": "snowball", // or "avalanche"
  "extra_payment": 500
}
```

**Response:**
```json
{
  "total_debt": 30000,
  "total_interest": 8500,
  "payoff_time": "24 months",
  "monthly_payment": 950,
  "payment_schedule": [
    {
      "month": 1,
      "payment": 950,
      "principal": 650,
      "interest": 300,
      "remaining_balance": 29350
    }
  ],
  "savings_vs_minimum": 12000,
  "recommendations": [
    "Consider debt consolidation if rates are high",
    "Focus on building emergency fund first"
  ]
}
```

### **2. Savings Goal Calculator**
```
POST /savings-goal
```

**Request Body:**
```json
{
  "goal_amount": 50000,
  "current_savings": 10000,
  "monthly_contribution": 1000,
  "interest_rate": 4.5,
  "timeframe": "36 months"
}
```

**Response:**
```json
{
  "goal_amount": 50000,
  "current_savings": 10000,
  "monthly_contribution": 1000,
  "interest_rate": 4.5,
  "timeframe": "36 months",
  "projected_savings": 52000,
  "time_to_goal": "32 months",
  "total_interest_earned": 2000,
  "monthly_progress": [
    {
      "month": 1,
      "balance": 11037.50,
      "contribution": 1000,
      "interest": 37.50
    }
  ],
  "recommendations": [
    "Increase monthly contribution by $200 to reach goal faster",
    "Consider higher-yield savings account"
  ]
}
```

### **3. Budget Optimizer**
```
POST /budget-optimizer
```

**Request Body:**
```json
{
  "monthly_income": 5000,
  "current_expenses": {
    "housing": 1500,
    "transportation": 400,
    "food": 600,
    "utilities": 200,
    "entertainment": 300,
    "debt_payments": 800,
    "savings": 200
  },
  "goals": [
    {
      "name": "Emergency Fund",
      "target": 15000,
      "priority": "high"
    },
    {
      "name": "Vacation",
      "target": 3000,
      "priority": "medium"
    }
  ]
}
```

**Response:**
```json
{
  "current_budget": {
    "total_expenses": 4000,
    "savings_rate": 20,
    "debt_to_income": 16
  },
  "optimized_budget": {
    "housing": 1500,
    "transportation": 350,
    "food": 500,
    "utilities": 200,
    "entertainment": 200,
    "debt_payments": 800,
    "savings": 450
  },
  "savings_increase": 250,
  "recommendations": [
    "Reduce entertainment budget by $100/month",
    "Optimize food spending with meal planning",
    "Consider carpooling to reduce transportation costs"
  ],
  "goal_timeline": {
    "emergency_fund": "33 months",
    "vacation": "7 months"
  }
}
```

### **4. Progress Tracker**
```
POST /progress-track
```

**Request Body:**
```json
{
  "user_id": "user123",
  "category": "debt_payoff",
  "current_value": 25000,
  "target_value": 0,
  "date": "2024-01-15"
}
```

**Response:**
```json
{
  "user_id": "user123",
  "category": "debt_payoff",
  "current_value": 25000,
  "target_value": 0,
  "progress_percentage": 75,
  "remaining_amount": 7500,
  "estimated_completion": "2024-06-15",
  "trend": "improving",
  "milestones": [
    {
      "name": "50% Debt Free",
      "achieved": true,
      "date": "2023-11-15"
    },
    {
      "name": "Debt Free",
      "achieved": false,
      "target_date": "2024-06-15"
    }
  ]
}
```

---

## 🛠 **Technical Implementation**

### **Backend Stack:**
- **Framework**: Next.js (Vercel)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Rate Limiting**: Vercel Edge Functions
- **Caching**: Vercel Edge Cache

### **Security Measures:**
- API key authentication
- Request validation
- Rate limiting
- CORS configuration
- Input sanitization

### **Error Handling:**
```json
{
  "error": "validation_error",
  "message": "Invalid debt data provided",
  "details": {
    "field": "interest_rate",
    "issue": "Must be between 0 and 100"
  }
}
```

---

## 📈 **Monetization Integration**

### **Premium Features:**
1. **Advanced Calculators** - Complex scenarios
2. **Progress Tracking** - Save user data
3. **Custom Templates** - Industry-specific budgets
4. **Export Functions** - PDF reports, CSV data

### **Pricing Tiers:**
- **Free**: Basic calculations, no data storage
- **Premium ($5/month)**: All features + data persistence
- **Pro ($15/month)**: API access + white-label options

### **Revenue Projections:**
- **Month 1**: 50 premium users = $250/month
- **Month 2**: 150 premium users = $750/month
- **Month 3**: 300 premium users = $1500/month

---

## 🚀 **Development Timeline**

### **Week 1**: Basic Setup
- Set up Next.js project
- Implement basic calculator functions
- Add authentication

### **Week 2**: API Development
- Build all endpoints
- Add validation and error handling
- Implement rate limiting

### **Week 3**: Integration
- Connect to GPT Actions
- Test with real scenarios
- Optimize performance

### **Week 4**: Launch
- Deploy to production
- Monitor usage and errors
- Gather user feedback

---

## 📊 **Success Metrics**

### **Technical Metrics:**
- API response time < 500ms
- 99.9% uptime
- < 1% error rate
- User satisfaction > 4.5/5

### **Business Metrics:**
- 20% free-to-premium conversion
- $5/month average revenue per user
- 50% month-over-month growth
- 1000+ active users by month 3


