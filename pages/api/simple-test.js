import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('=== SIMPLE TEST ===');
    console.log('Database ID:', process.env.NOTION_DATABASE_ID);
    
    // Try to create a page with no properties
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {},
    });

    console.log('✅ SUCCESS! Page created:', response.id);
    
    return res.status(200).json({
      success: true,
      message: 'Page created successfully!',
      pageId: response.id
    });
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      code: error.code
    });
  }
}
