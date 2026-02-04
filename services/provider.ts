import { BrowserProvider, type Eip1193Provider } from 'ethers'

export function getBrowserProvider() {
  if (typeof window === 'undefined') return null
  if (!window.ethereum) return null

  return new BrowserProvider(window.ethereum as Eip1193Provider)
}
