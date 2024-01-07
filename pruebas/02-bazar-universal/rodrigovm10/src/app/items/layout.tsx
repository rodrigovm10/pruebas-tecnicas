import type { Metadata } from 'next'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Bazar Online',
  description: 'Productos del bazar'
}

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-8'>
      <Header />
      {children}
    </div>
  )
}
