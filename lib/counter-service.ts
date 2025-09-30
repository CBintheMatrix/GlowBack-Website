/**
 * Shared counter service for pilot applications
 * Uses localStorage with a timestamp-based approach for better persistence
 */

const COUNTER_KEY = 'glowback_pilot_applications'
const CHANNEL_NAME = 'glowback_counter_updates'

export class CounterService {
  private static instance: CounterService
  private channel: BroadcastChannel
  private listeners: Set<(count: number) => void> = new Set()

  private constructor() {
    // Initialize BroadcastChannel for real-time updates across tabs
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      this.channel = new BroadcastChannel(CHANNEL_NAME)
      this.channel.onmessage = (event) => {
        if (event.data.type === 'COUNTER_UPDATE') {
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
   * Get the current counter value with 90-day persistence
   */
  public getCount(): number {
    if (typeof window === 'undefined') return 14 // Default for SSR
    
    try {
      const stored = localStorage.getItem(COUNTER_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        // Use the stored count if it's recent (within 90 days)
        const now = Date.now()
        const ninetyDaysInMs = 90 * 24 * 60 * 60 * 1000
        if (now - data.timestamp < ninetyDaysInMs) {
          return data.count
        }
      }
    } catch (error) {
      console.warn('Failed to get counter from localStorage:', error)
    }
    
    return 14
  }

  /**
   * Increment the counter and notify all listeners
   */
  public increment(): number {
    if (typeof window === 'undefined') return 14
    
    try {
      const currentCount = this.getCount()
      const newCount = Math.min(20, currentCount + 1) // Cap at 20
      
      // Store with timestamp
      const data = {
        count: newCount,
        timestamp: Date.now()
      }
      localStorage.setItem(COUNTER_KEY, JSON.stringify(data))
      
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
      return this.getCount()
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