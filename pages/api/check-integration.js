import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  try {
    console.log('=== CHECKING INTEGRATION ===');
    console.log('API Key exists:', !!process.env.NOTION_API_KEY);

    // Try to get user info to verify the integration works
    const user = await notion.users.me();
    
    console.log('Integration user:', user);
    
    return res.status(200).json({
      success: true,
      user: user,
      message: 'Integration is working'
    });
  } catch (error) {
    console.error('Integration check error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Integration check failed'
    });
  }
}
