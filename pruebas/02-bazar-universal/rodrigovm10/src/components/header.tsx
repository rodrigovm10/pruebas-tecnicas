import { SearchHeader } from './search-header'

export function Header() {
  return (
    <header className='flex flex-col items-center justify-center gap-y-8 mt-10'>
      <h1 className='text-4xl font-bold'>Bazar Online</h1>
      <SearchHeader />
    </header>
  )
}
