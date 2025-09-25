import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('=== FINDING CORRECT DATABASE ===');
    console.log('Current Database ID:', process.env.NOTION_DATABASE_ID);
    console.log('API Key exists:', !!process.env.NOTION_API_KEY);

    // Search for all pages (which includes databases)
    const searchResponse = await notion.search({
      query: 'pilot'
    });

    console.log('Found databases:', searchResponse.results.length);
    
    for (let i = 0; i < searchResponse.results.length; i++) {
      const item = searchResponse.results[i];
      console.log(`Item ${i + 1}:`);
      console.log('- ID:', item.id);
      console.log('- Object:', item.object);
      console.log('- Title:', item.title);
      
      // Only check if it's a database
      if (item.object === 'database') {
        console.log('- This is a DATABASE!');
        // Get properties for this database
        try {
          const dbDetails = await notion.databases.retrieve({
            database_id: item.id,
          });
          console.log('- Properties:', Object.keys(dbDetails.properties || {}));
          console.log('- Property names:', Object.keys(dbDetails.properties || {}));
        } catch (error) {
          console.log('- Error getting properties:', error.message);
        }
      }
      console.log('---');
    }

    return res.status(200).json({
      success: true,
      databases: searchResponse.results.map(db => ({
        id: db.id,
        title: db.title,
        url: db.url
      })),
      message: 'Database search completed'
    });
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to search databases'
    });
  }
}
