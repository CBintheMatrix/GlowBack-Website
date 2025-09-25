import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('=== FINDING DATABASE ===');
    console.log('API Key exists:', !!process.env.NOTION_API_KEY);

    // Try to search for databases
    const response = await notion.search({
      query: 'pilot_applications_template',
      filter: {
        property: 'object',
        value: 'database'
      }
    });

    console.log('Search results:', response.results);
    
    if (response.results.length > 0) {
      const database = response.results[0];
      console.log('Found database:', database.id);
      console.log('Database title:', database.title);
      console.log('Database properties:', database.properties);
      
      return res.status(200).json({
        success: true,
        databaseId: database.id,
        title: database.title,
        properties: database.properties,
        message: 'Database found successfully'
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'No databases found with that name'
      });
    }
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to search for database'
    });
  }
}
