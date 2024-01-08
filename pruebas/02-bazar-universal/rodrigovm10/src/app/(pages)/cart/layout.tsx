import type { Metadata } from 'next'
import { Header } from '@/client/components/header/header'

export const metadata: Metadata = {
  title: 'Bazar Online',
  description: 'Carrito de compras'
}

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
