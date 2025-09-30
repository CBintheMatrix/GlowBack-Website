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
   * Get the current counter value
   */
  public async getCount(): Promise<number> {
    if (typeof window === 'undefined') return 14 // Default for SSR
    
    try {
      // Use sessionStorage for persistence across tabs in the same browser session
      const stored = sessionStorage.getItem('glowback_counter')
      const count = stored ? parseInt(stored, 10) : 14
      this.cachedCount = count
      return count
    } catch (error) {
      console.warn('Failed to get counter from sessionStorage:', error)
      return this.cachedCount
    }
  }

  /**
   * Increment the counter and notify all listeners
   */
  public async increment(): Promise<number> {
    if (typeof window === 'undefined') return this.cachedCount
    
    try {
      const newCount = Math.min(20, this.cachedCount + 1)
      this.cachedCount = newCount
      
      // Store in sessionStorage for persistence across tabs
      sessionStorage.setItem('glowback_counter', newCount.toString())
      
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
    } catch (error) {
      console.warn('Failed to increment counter:', error)
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
