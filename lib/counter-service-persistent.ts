/**
 * Shared counter service for pilot applications
 * Uses JSONBin.io for true cross-visitor persistence
 */

// JSONBin.io configuration - free service for JSON storage
const JSONBIN_API_KEY = '$2a$10$XqK8h4Y2vR9pL3mN6sT7BuQwE5fG8hJ9kL2mP4rS6tU1vW3xY7zA'
const JSONBIN_BIN_ID = '676a8b8f5b60727b4c4a1234'
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`

const CHANNEL_NAME = 'glowback_counter_updates'

export class CounterService {
  private static instance: CounterService
  private channel: BroadcastChannel
  private listeners: Set<(count: number) => void> = new Set()
  private cachedCount: number = 14

  private constructor() {
    // Initialize BroadcastChannel for real-time updates across tabs
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      this.channel = new BroadcastChannel(CHANNEL_NAME)
      this.channel.onmessage = (event) => {
        if (event.data.type === 'COUNTER_UPDATE') {
          this.cachedCount = event.data.count
          this.notifyListeners(event.data.count)
        }
      }
    }
  }

  public static getInstance(): CounterService {
    if (!CounterService.instance) {
      CounterService.instance = new CounterService()
    }
    return CounterService.instance
  }

  /**
   * Get the current counter value from JSONBin
   */
  public async getCount(): Promise<number> {
    if (typeof window === 'undefined') return 14 // Default for SSR
    
    try {
      const response = await fetch(JSONBIN_URL, {
        headers: {
          'X-Master-Key': JSONBIN_API_KEY
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        const count = data.record?.count || 14
        this.cachedCount = count
        return count
      } else {
        console.warn(`JSONBin returned ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.warn('Failed to fetch counter from JSONBin, using cached value:', error)
    }
    
    return this.cachedCount
  }

  /**
   * Increment the counter via JSONBin and notify all listeners
   */
  public async increment(): Promise<number> {
    if (typeof window === 'undefined') return this.cachedCount
    
    try {
      const newCount = Math.min(20, this.cachedCount + 1)
      
      // Update JSONBin
      const response = await fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_API_KEY
        },
        body: JSON.stringify({ count: newCount })
      })
      
      if (response.ok) {
        this.cachedCount = newCount
        
        // Broadcast the update to other tabs
        if (this.channel) {
          this.channel.postMessage({
            type: 'COUNTER_UPDATE',
            count: newCount
          })
        }
        
        // Notify local listeners
        this.notifyListeners(newCount)
        
        return newCount
      } else {
        console.warn(`JSONBin increment failed: ${response.status}`)
        // Fallback: increment locally
        this.cachedCount = newCount
        this.notifyListeners(this.cachedCount)
        return this.cachedCount
      }
    } catch (error) {
      console.warn('Failed to increment counter via JSONBin, incrementing locally:', error)
      // Fallback: increment locally
      this.cachedCount = Math.min(20, this.cachedCount + 1)
      this.notifyListeners(this.cachedCount)
      return this.cachedCount
    }
  }

  /**
   * Subscribe to counter updates
   */
  public subscribe(callback: (count: number) => void): () => void {
    this.listeners.add(callback)
    
    // Return unsubscribe function
    return () => {
      this.listeners.delete(callback)
    }
  }

  /**
   * Notify all listeners of a counter change
   */
  private notifyListeners(count: number): void {
    this.listeners.forEach(listener => {
      try {
        listener(count)
      } catch (error) {
        console.error('Error in counter listener:', error)
      }
    })
  }

  /**
   * Clean up resources
   */
  public destroy(): void {
    if (this.channel) {
      this.channel.close()
    }
    this.listeners.clear()
  }
}

// Export singleton instance
export const counterService = CounterService.getInstance()
