import type { NextApiRequest, NextApiResponse } from 'next'

// Simple in-memory counter (in production, you'd want to use KV storage or a database)
let applicationCount = 14

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

  if (req.method === 'GET') {
    // Return current count
    res.status(200).json({ count: applicationCount })
    return
  }

  if (req.method === 'POST') {
    // Increment counter
    applicationCount = Math.min(20, applicationCount + 1) // Cap at 20
    res.status(200).json({ count: applicationCount })
    return
  }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST', 'OPTIONS'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
