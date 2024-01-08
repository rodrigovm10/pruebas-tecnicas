import type { Metadata } from 'next'
import { Header } from '@/client/components/header/header'

export const metadata: Metadata = {
  title: 'Bazar Online',
  description: 'Carrito de compras'
}

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-8 max-w-[400px] w-full mx-auto my-0'>
      <Header />
      {children}
    </div>
  )
}
