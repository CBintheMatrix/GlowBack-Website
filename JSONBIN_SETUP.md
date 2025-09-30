# JSONBin.io Setup for Persistent Counter

## Quick Setup (5 minutes)

### Step 1: Create JSONBin Account
1. Go to [jsonbin.io](https://jsonbin.io)
2. Sign up for free account
3. Create a new bin with this content:
```json
{"count": 14}
```

### Step 2: Get API Key and Bin ID
1. Copy your **Bin ID** (looks like: `676a8b8f5b60727b4c4a1234`)
2. Go to **API Keys** section
3. Copy your **Master Key** (looks like: `$2a$10$...`)

### Step 3: Update Counter Service
Replace the values in `lib/counter-service-persistent.ts`:
- `JSONBIN_BIN_ID` = your bin ID
- `JSONBIN_API_KEY` = your master key

### Step 4: Test
1. Deploy your changes
2. Submit an application
3. Check incognito mode - should show same number!

## Benefits
✅ **True cross-visitor persistence**  
✅ **Works in incognito mode**  
✅ **Works across different browsers**  
✅ **Free service**  
✅ **Real-time updates**  

## Alternative: Use GitHub Gist
If JSONBin doesn't work, we can use GitHub Gist instead (also free).
