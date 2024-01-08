'use client'

import { Button } from '@client/components/ui/button'
import { Input } from '@client/components/ui/input'
import { useSearch } from '@client/hooks/useSearch'
import { searchProduct } from '@/client/libs/actions'

export function Search() {
  const { searchParams, searchUrl } = useSearch()
  const handleSearch = (term: string) => {
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
