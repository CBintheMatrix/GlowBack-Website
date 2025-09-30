/**
 * Shared counter service for pilot applications
 * Uses API endpoint for persistent storage and BroadcastChannel for real-time updates
 */

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://glowback-website.pages.dev' 
  : 'http://localhost:3000'

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
   * Get the current counter value from Cloudflare Function
   */
  public async getCount(): Promise<number> {
    if (typeof window === 'undefined') return 14 // Default for SSR
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/counter`)
      if (response.ok) {
        const data = await response.json()
        this.cachedCount = data.count
        return data.count
      } else {
        console.warn(`API returned ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.warn('Failed to fetch counter from API, using cached value:', error)
    }
    
    return this.cachedCount
  }

  /**
   * Increment the counter via Cloudflare Function and notify all listeners
   */
  public async increment(): Promise<number> {
    if (typeof window === 'undefined') return this.cachedCount
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/counter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (response.ok) {
        const data = await response.json()
        this.cachedCount = data.count
        
        // Broadcast the update to other tabs
        if (this.channel) {
          this.channel.postMessage({
            type: 'COUNTER_UPDATE',
            count: data.count
          })
        }
        
        // Notify local listeners
        this.notifyListeners(data.count)
        
        return data.count
      } else {
        console.warn(`Increment API returned ${response.status}: ${response.statusText}`)
        // Fallback: increment locally if API fails
        this.cachedCount = Math.min(20, this.cachedCount + 1)
        this.notifyListeners(this.cachedCount)
        return this.cachedCount
      }
    } catch (error) {
      console.warn('Failed to increment counter via API, incrementing locally:', error)
      // Fallback: increment locally if API fails
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
