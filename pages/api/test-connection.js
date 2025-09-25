import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('=== TESTING NOTION CONNECTION ===');
    console.log('Database ID:', process.env.NOTION_DATABASE_ID);
    console.log('API Key exists:', !!process.env.NOTION_API_KEY);

    // Test 1: Check if we can access the database
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log('✅ Database found:', database.title);
    console.log('✅ Properties:', Object.keys(database.properties || {}));

    // Test 2: Try to create a simple page
    const testPage = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        'Hotel Name': {
          title: [
            {
              text: {
                content: 'TEST CONNECTION',
              },
            },
          ],
        },
      },
    });

    console.log('✅ Test page created:', testPage.id);

    return res.status(200).json({
      success: true,
      message: 'Connection successful!',
      databaseTitle: database.title,
      properties: Object.keys(database.properties || {}),
      testPageId: testPage.id
    });
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      status: error.status
    });
  }
}
