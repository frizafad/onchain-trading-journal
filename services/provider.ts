import { BrowserProvider } from "ethers";

export function getBrowserProvider(): BrowserProvider | null {
  if (typeof window === "undefined") return null;
  if (!window.ethereum) return null;

  return new BrowserProvider(window.ethereum);
}