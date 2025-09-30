// Cloudflare Pages Function for counter API
// This will be available at your-domain.com/api/counter

export async function onRequest(context) {
  const { request, env } = context;
  
  // Enable CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const COUNTER_KEY = 'glowback_pilot_applications';

  try {
    if (request.method === 'GET') {
      // Get current count from KV storage or default
      let count = 14;
      
      if (env.GLOWBACK_COUNTER_KV) {
        const stored = await env.GLOWBACK_COUNTER_KV.get(COUNTER_KEY);
        if (stored) {
          const data = JSON.parse(stored);
          count = data.count;
        }
      }
      
      return new Response(JSON.stringify({ count }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'POST') {
      // Increment counter
      let currentCount = 14;
      
      if (env.GLOWBACK_COUNTER_KV) {
        const stored = await env.GLOWBACK_COUNTER_KV.get(COUNTER_KEY);
        if (stored) {
          const data = JSON.parse(stored);
          currentCount = data.count;
        }
        
        const newCount = Math.min(20, currentCount + 1);
        const newData = {
          count: newCount,
          lastUpdated: new Date().toISOString()
        };
        
        await env.GLOWBACK_COUNTER_KV.put(COUNTER_KEY, JSON.stringify(newData));
        currentCount = newCount;
      }
      
      return new Response(JSON.stringify({ count: currentCount }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
    
  } catch (error) {
    console.error('Counter API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}
