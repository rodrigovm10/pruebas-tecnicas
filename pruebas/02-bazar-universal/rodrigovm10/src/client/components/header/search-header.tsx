'use client'

import { searchProduct } from '@/client/libs/actions'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useSearch } from '@client/hooks/useSearch'

export function SearchHeader() {
  const { searchParams, searchUrl, pathname } = useSearch()

  const handleSearch = (term: string) => {
    if (pathname.includes('/items/')) return
    searchUrl(term)
  }

  return (
    <form
      action={searchProduct}
      className='flex w-full max-w-sm items-center space-x-2'
    >
      <Input
        type='text'
        name='product'
        id='product'
        placeholder='Laptops, smarthpones...'
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
      />
      <Button type='submit'>Buscar</Button>
    </form>
  )
}
