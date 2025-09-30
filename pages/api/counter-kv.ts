import type { NextApiRequest, NextApiResponse } from 'next'

// This version uses Cloudflare KV for persistent storage
// You'll need to set up a KV namespace in your Cloudflare dashboard

interface CounterData {
  count: number
  lastUpdated: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const COUNTER_KEY = 'glowback_pilot_applications'

  try {
    if (req.method === 'GET') {
      // Get current count from KV storage
      if (process.env.GLOWBACK_COUNTER_KV) {
        const kv = process.env.GLOWBACK_COUNTER_KV as any // Cloudflare KV binding
        const stored = await kv.get(COUNTER_KEY)
        
        if (stored) {
          const data: CounterData = JSON.parse(stored)
          res.status(200).json({ count: data.count })
          return
        }
      }
      
      // Fallback to default
      res.status(200).json({ count: 14 })
      return
    }

    if (req.method === 'POST') {
      // Increment counter in KV storage
      if (process.env.GLOWBACK_COUNTER_KV) {
        const kv = process.env.GLOWBACK_COUNTER_KV as any // Cloudflare KV binding
        const stored = await kv.get(COUNTER_KEY)
        
        let currentCount = 14
        if (stored) {
          const data: CounterData = JSON.parse(stored)
          currentCount = data.count
        }
        
        const newCount = Math.min(20, currentCount + 1) // Cap at 20
        const newData: CounterData = {
          count: newCount,
          lastUpdated: new Date().toISOString()
        }
        
        await kv.put(COUNTER_KEY, JSON.stringify(newData))
        res.status(200).json({ count: newCount })
        return
      }
      
      // Fallback
      res.status(200).json({ count: 15 })
      return
    }

    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST', 'OPTIONS'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    
  } catch (error) {
    console.error('Counter API error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
