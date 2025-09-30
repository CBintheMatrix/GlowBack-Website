# Counter Setup Guide

## Problem Solved
The application counter was using `localStorage` which is browser-specific and doesn't persist across different browsers or incognito mode. This caused inconsistent counter values (14 vs 15) for different visitors.

## Solution
Created a persistent API endpoint that stores the counter value server-side, ensuring consistency across all visitors.

## Files Changed

1. **`pages/api/counter.ts`** - Simple in-memory API endpoint
2. **`pages/api/counter-kv.ts`** - Production-ready version using Cloudflare KV storage
3. **`lib/counter-service.ts`** - Updated to use API instead of localStorage
4. **`app/pilot/page.tsx`** - Updated to handle async counter operations

## Deployment Options

### Option 1: Simple In-Memory (Current)
- Uses `pages/api/counter.ts`
- Counter resets when Cloudflare function restarts
- Good for testing and low-traffic sites

### Option 2: Persistent with KV Storage (Recommended)
- Uses `pages/api/counter-kv.ts`
- Requires Cloudflare KV setup
- Counter persists across function restarts

## KV Setup Instructions

1. Go to Cloudflare Dashboard → Workers & Pages → KV
2. Create a new KV namespace named `glowback-counter`
3. In your Cloudflare Pages project settings, add the KV binding:
   - Variable name: `GLOWBACK_COUNTER_KV`
   - KV namespace: `glowback-counter`
4. Update `lib/counter-service.ts` to use `/api/counter-kv` endpoint

## Testing

After deployment, test the counter by:
1. Opening the pilot page in a regular browser
2. Opening the same page in incognito mode
3. Submitting an application
4. Verifying both browsers show the same updated count

## Benefits

- ✅ Consistent counter across all visitors
- ✅ Works in incognito mode
- ✅ Real-time updates via BroadcastChannel
- ✅ Fallback handling for API failures
- ✅ Capped at 20 applications maximum
