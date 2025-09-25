import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('=== DATABASE CHECK ===');
    console.log('Database ID:', process.env.NOTION_DATABASE_ID);
    console.log('API Key exists:', !!process.env.NOTION_API_KEY);

    // Try to get the database
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log('Database title:', database.title);
    console.log('Database properties:', database.properties);
    console.log('Property names:', Object.keys(database.properties || {}));

    return res.status(200).json({
      success: true,
      databaseTitle: database.title,
      properties: database.properties,
      propertyNames: Object.keys(database.properties || {}),
      message: 'Database connection successful'
    });
  } catch (error) {
    console.error('Database check error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      status: error.status,
      message: 'Database connection failed'
    });
  }
}
