'use client'
import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview, isGAEnabled } from '../../lib/gtag'

export default function Analytics() {
  const pathname = usePathname()
  const search = useSearchParams()?.toString() ?? ''
  const firstRun = useRef(true)

  useEffect(() => {
    if (!isGAEnabled) return
    // skip initial mount — server-side gtag already sent the first pageview
    if (firstRun.current) { firstRun.current = false; return }
    pageview(pathname + (search ? `?${search}` : ''))
  }, [pathname, search])

  return null
}