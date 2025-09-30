// Test script for Cloudflare Function
// Run after deployment to verify the API works

const PRODUCTION_URL = 'https://glowback-website.pages.dev'

async function testCloudflareFunction() {
  try {
    console.log('🧪 Testing Cloudflare Function API...\n')

    // Test 1: Get initial count
    console.log('1. Getting initial count from Cloudflare Function...')
    const getResponse = await fetch(`${PRODUCTION_URL}/api/counter`)
    
    if (!getResponse.ok) {
      throw new Error(`GET failed: ${getResponse.status} ${getResponse.statusText}`)
    }
    
    const getData = await getResponse.json()
    console.log(`   ✅ Initial count: ${getData.count}`)

    // Test 2: Increment counter
    console.log('\n2. Incrementing counter via Cloudflare Function...')
    const postResponse = await fetch(`${PRODUCTION_URL}/api/counter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!postResponse.ok) {
      throw new Error(`POST failed: ${postResponse.status} ${postResponse.statusText}`)
    }
    
    const postData = await postResponse.json()
    console.log(`   ✅ New count: ${postData.count}`)

    // Test 3: Verify increment persisted
    console.log('\n3. Verifying increment persisted in KV storage...')
    const verifyResponse = await fetch(`${PRODUCTION_URL}/api/counter`)
    const verifyData = await verifyResponse.json()
    console.log(`   ✅ Verified count: ${verifyData.count}`)

    if (postData.count === verifyData.count) {
      console.log('\n🎉 SUCCESS! Cloudflare Function is working correctly!')
      console.log('   - Counter persists across requests')
      console.log('   - KV storage is working')
      console.log('   - API endpoints are accessible')
    } else {
      console.log('\n⚠️  WARNING: Count mismatch detected')
    }

    console.log('\n📝 Next steps:')
    console.log('   - Test in different browsers')
    console.log('   - Test in incognito mode')
    console.log('   - Verify all visitors see the same count')

  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.log('\n🔧 Troubleshooting:')
    console.log('   - Make sure the Cloudflare Function is deployed')
    console.log('   - Check that KV namespace is configured')
    console.log('   - Verify environment variables are set')
    console.log('   - Check Cloudflare dashboard for function logs')
  }
}

testCloudflareFunction()
