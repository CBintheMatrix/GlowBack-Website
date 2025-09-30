# Counter Setup Guide - Cloudflare Functions

## Problem Solved
The application counter was using `localStorage` which is browser-specific and doesn't persist across different browsers or incognito mode. This caused inconsistent counter values (14 vs 15) for different visitors.

## Solution
Using Cloudflare Functions with KV storage for true cross-visitor persistence.

## Files Changed

1. **`functions/api/counter.js`** - Cloudflare Function for persistent counter storage
2. **`lib/counter-service.ts`** - Updated to use Cloudflare Function API
3. **`app/pilot/page.tsx`** - Updated to handle async counter operations

## Setup Instructions

### Step 1: Create KV Namespace
1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **KV**
2. Click **"Create a namespace"**
3. Name it: `glowback-counter`
4. Copy the **Namespace ID**

### Step 2: Configure Environment Variables
1. Go to your **Cloudflare Pages project** → **Settings** → **Environment Variables**
2. Add new variable:
   - **Variable name:** `GLOWBACK_COUNTER_KV`
   - **Value:** `your-namespace-id` (from Step 1)

### Step 3: Deploy
The `functions/api/counter.js` file will automatically be deployed as a Cloudflare Function when you push to GitHub.

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
