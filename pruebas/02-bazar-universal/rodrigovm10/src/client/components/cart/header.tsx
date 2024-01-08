'use client'

import { useCartStore } from '@/client/store/cartStore'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export function Header() {
  const cart = useCartStore(state => state.cart)
  const router = useRouter()

  return (
    <section>
      <h2 className='text-center font-bold text-2xl mb-4 -mt-4'>Carrito de compras</h2>
      <section className='flex justify-between'>
        <p className='font-semibold opacity-85 mb-2'>Productos en el carrito: {cart.length}</p>
        <Button
          variant='link'
          className='opacity-60 -mt-2 ml-4 p-0'
          onClick={() => router.back()}
        >
          Volver a los productos
        </Button>
      </section>
    </section>
  )
}
