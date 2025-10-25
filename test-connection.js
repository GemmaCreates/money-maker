const { Client } = require('@notionhq/client');
require('dotenv').config();

async function testConnection() {
  console.log('🔍 Testing Notion API connection...');
  
  if (!process.env.NOTION_API_KEY) {
    console.error('❌ NOTION_API_KEY not found in .env file');
    process.exit(1);
  }
  
  if (!process.env.NOTION_PAGE_ID) {
    console.error('❌ NOTION_PAGE_ID not found in .env file');
    process.exit(1);
  }

  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  try {
    // Test API key by listing users
    console.log('🔑 Testing API key...');
    const users = await notion.users.list();
    console.log('✅ API key valid');
    
    // Test page access
    console.log('📄 Testing page access...');
    const page = await notion.pages.retrieve({
      page_id: process.env.NOTION_PAGE_ID
    });
    console.log('✅ Page access confirmed');
    console.log(`📝 Page title: ${page.properties.title?.title?.[0]?.text?.content || 'Untitled'}`);
    
    // Test if we can create a child page (check permissions)
    console.log('🔐 Testing write permissions...');
    const testPage = await notion.pages.create({
      parent: { page_id: process.env.NOTION_PAGE_ID },
      properties: {
        title: {
          title: [{ text: { content: '🧪 Connection Test' } }]
        }
      },
      children: [
        {
          type: 'paragraph',
          paragraph: {
            rich_text: [{ text: { content: 'This is a test page. You can delete it.' } }]
          }
        }
      ]
    });
    console.log('✅ Write permissions confirmed');
    console.log(`📄 Test page created: ${testPage.id}`);
    
    console.log('\n🎉 All tests passed! You\'re ready to build your trading journal.');
    console.log('🚀 Run: npm run build');
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    
    if (error.code === 'unauthorized') {
      console.log('\n💡 Fix: Make sure you\'ve shared your Notion page with your integration');
      console.log('   1. Go to your Notion page');
      console.log('   2. Click "Share" → "Invite"');
      console.log('   3. Search for your integration name');
      console.log('   4. Click "Invite"');
    }
    
    if (error.code === 'object_not_found') {
      console.log('\n💡 Fix: Check your NOTION_PAGE_ID in .env file');
      console.log('   The page ID should be the long string from your page URL');
    }
  }
}

testConnection();




