'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function useSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const searchUrl = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term.length > 0) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return { searchUrl, searchParams, pathname, replace }
}
