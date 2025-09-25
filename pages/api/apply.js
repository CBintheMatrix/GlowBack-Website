import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  // Handle GET requests
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true });
  }

  // Only allow POST requests for form submissions
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { hotelName, location, contactName, contactEmail, painPoints, roomCount } = req.body;

    // Validate required fields
    if (!hotelName || !location || !contactName || !contactEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('=== NOTION INTEGRATION DEBUG ===');
    console.log('Database ID:', process.env.NOTION_DATABASE_ID);
    console.log('API Key exists:', !!process.env.NOTION_API_KEY);
    console.log('Form data received:', { hotelName, location, contactName, contactEmail });

    // Create a page with only the basic properties that definitely exist
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        'Hotel Name': {
          title: [
            {
              text: {
                content: hotelName,
              },
            },
          ],
        },
        'Contact Name': {
          rich_text: [
            {
              text: {
                content: contactName,
              },
            },
          ],
        },
        'Email': {
          email: contactEmail,
        },
        'Phone': {
          rich_text: [
            {
              text: {
                content: req.body.phone || '',
              },
            },
          ],
        },
        'City / Country': {
          rich_text: [
            {
              text: {
                content: location,
              },
            },
          ],
        },
        'Hotel Type': {
          rich_text: [
            {
              text: {
                content: req.body.hotelType || '',
              },
            },
          ],
        },
        'AI Interest': {
          rich_text: [
            {
              text: {
                content: req.body.aiInterest || '',
              },
            },
          ],
        },
      },
    });

    console.log('✅ Page created successfully:', response.id);

    return res.status(200).json({ 
      ok: true, 
      message: 'Application submitted successfully',
      pageId: response.id
    });
  } catch (error) {
    console.error('❌ Notion API error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      status: error.status,
      body: error.body
    });

    // Return more specific error information
    return res.status(500).json({ 
      error: 'Failed to submit application',
      details: error.message,
      code: error.code,
      status: error.status
    });
  }
}
