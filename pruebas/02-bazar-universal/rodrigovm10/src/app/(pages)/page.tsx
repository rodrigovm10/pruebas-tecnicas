import { Search } from '@/client/components/home/search'

export default function HomePage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen gap-y-8'>
      <h1 className='text-4xl font-bold'>Bazar Online</h1>
      <Search />
    </main>
  )
}
