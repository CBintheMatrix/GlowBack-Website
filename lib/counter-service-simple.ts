/**
 * Simple counter service using JSONBin.io for persistence
 * This works with static sites and doesn't require server-side setup
 */

const JSONBIN_API_KEY = 'your-jsonbin-api-key' // You'll need to get this from jsonbin.io
const JSONBIN_BIN_ID = 'your-bin-id' // Create a bin and get the ID

export class SimpleCounterService {
  private static instance: SimpleCounterService
  private listeners: Set<(count: number) => void> = new Set()
  private cachedCount: number = 14

  private constructor() {}

  public static getInstance(): SimpleCounterService {
    if (!SimpleCounterService.instance) {
      SimpleCounterService.instance = new SimpleCounterService()
    }
    return SimpleCounterService.instance
  }

  /**
   * Get the current counter value
   */
  public async getCount(): Promise<number> {
    if (typeof window === 'undefined') return 14 // Default for SSR
    
    try {
      // For now, return cached count to avoid external API calls
      // You can implement JSONBin integration here if needed
      return this.cachedCount
    } catch (error) {
      console.warn('Failed to fetch counter:', error)
      return this.cachedCount
    }
  }

  /**
   * Increment the counter
   */
  public async increment(): Promise<number> {
    if (typeof window === 'undefined') return this.cachedCount
    
    try {
      // For now, just increment locally
      // In production, you'd save this to JSONBin
      this.cachedCount = Math.min(20, this.cachedCount + 1)
      
      // Notify listeners
      this.notifyListeners(this.cachedCount)
      
      return this.cachedCount
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
    return () => {
      this.listeners.delete(callback)
    }
  }

  private notifyListeners(count: number): void {
    this.listeners.forEach(listener => {
      try {
        listener(count)
      } catch (error) {
        console.error('Error in counter listener:', error)
      }
    })
  }
}

export const simpleCounterService = SimpleCounterService.getInstance()
