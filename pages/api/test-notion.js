import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('Testing Notion connection...');
    console.log('API Key:', process.env.NOTION_API_KEY ? 'Present' : 'Missing');
    console.log('Database ID:', process.env.NOTION_DATABASE_ID);

    // Test database retrieval
    const database = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    return res.status(200).json({
      success: true,
      databaseTitle: database.title,
      properties: Object.keys(database.properties),
      message: 'Notion connection successful'
    });
  } catch (error) {
    console.error('Notion test error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      status: error.status
    });
  }
}
