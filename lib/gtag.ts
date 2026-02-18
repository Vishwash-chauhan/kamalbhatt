/**
 * Google Analytics helper
 * - Exposes safe wrappers for pageview and event tracking
 * - Uses NEXT_PUBLIC_GA_ID (baked into client bundle)
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""
export const isGAEnabled = Boolean(GA_ID && process.env.NODE_ENV === "production")

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

/**
 * Send a page_view for SPA route changes.
 * Safe no-op when GA is not available.
 */
export function pageview(path: string) {
  if (!isGAEnabled || typeof window === "undefined" || !window.gtag) return
  window.gtag("event", "page_view", { page_path: path })
}

/**
 * Send a generic event to GA4.
 * eventParams should contain event_category, event_label, value etc.
 */
export function event(
  action: string,
  eventParams?: { event_category?: string; event_label?: string; value?: number; [k: string]: any }
) {
  if (!isGAEnabled || typeof window === "undefined" || !window.gtag) return
  window.gtag("event", action, eventParams)
}

/**
 * Low-level gtag proxy (use sparingly).
 */
export function gtag(...args: any[]) {
  if (!isGAEnabled || typeof window === "undefined" || !window.gtag) return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).gtag(...args)
}
